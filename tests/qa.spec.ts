import { test, expect } from '@playwright/test';

const routes = ['/', '/web-developer/', '/app-developer/', '/ui-ux-designer/', '/graphic-designer/', '/photographer/', '/legal/'];
const widths = [1920, 1440, 1024, 768, 430, 390, 360];
test.describe.configure({ mode: 'default' });

test('all routes render without browser errors, broken assets, invalid links or viewport overflow', async ({ page }, info) => {
  test.setTimeout(180000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.addInitScript(() => localStorage.setItem('aldtor-preferences', 'rejected'));
  for (const route of routes) {
    await page.setViewportSize({ width: 1440, height: 900 });
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page).toHaveTitle(/ALDTOR/);
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
    for (const width of widths) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : width === 1024 ? 768 : 900 });
      await page.evaluate(async () => { await document.fonts.ready; window.scrollTo(0, document.body.scrollHeight); });
      await page.waitForTimeout(100);
      const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
      expect(overflow.document, `${route} at ${width}px`).toBeLessThanOrEqual(overflow.viewport + 1);
      if (width === 390) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: info.outputPath(`${route.replaceAll('/', '') || 'home'}-${width}.png`), fullPage: false, animations: 'disabled' });
      }
    }
    const broken = await page.locator('img').evaluateAll(images => (images as HTMLImageElement[]).filter(img => !img.complete || !img.naturalWidth).map(img => img.getAttribute('src')));
    expect(broken, route).toEqual([]);
    const badLinks = await page.locator('a').evaluateAll(links => links.filter(a => !a.getAttribute('href') || a.getAttribute('href') === '#').map(a => a.outerHTML));
    expect(badLinks, route).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test('reduced motion and blocked browser storage keep the site usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', {
    configurable: false,
    get() { throw new DOMException('Storage is blocked', 'SecurityError'); },
  }));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Good things happen/ })).toBeVisible();
  await expect(page.getByRole('tablist', { name: 'Creative process' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Switch to dark theme/ })).toBeVisible();
  await page.getByRole('button', { name: /Switch to dark theme/ }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('complementary', { name: 'Site preferences' })).toBeVisible();
});

test('mobile touch card flip and gallery pointer drag preserve usable state', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, baseURL: 'http://localhost:3000' });
  const page = await context.newPage();
  await page.addInitScript(() => localStorage.setItem('aldtor-preferences', 'rejected'));
  await page.goto('/');
  await page.getByRole('button', { name: /My ability card/ }).tap();
  await page.getByRole('button', { name: 'Flip card' }).tap();
  await expect(page.getByRole('button', { name: 'Show front' })).toBeVisible();
  await page.getByRole('button', { name: 'Close dialog' }).tap();
  await page.goto('/photographer/');
  const canvas = page.getByRole('region', { name: /Draggable illustrative gallery/ });
  await canvas.scrollIntoViewIfNeeded();
  const box = (await canvas.boundingBox())!;
  const world = canvas.locator(':scope > div').first();
  const before = await world.evaluate(el => getComputedStyle(el).transform);
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 90, box.y + box.height / 2 + 60, { steps: 8 });
  await page.mouse.up();
  await expect.poll(() => world.evaluate(el => getComputedStyle(el).transform)).not.toBe(before);
  await expect(page.getByRole('dialog', { name: 'Illustrative image study viewer' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Reset view' }).tap();
  await expect.poll(() => world.evaluate(el => getComputedStyle(el).transform)).toBe(before);
  await context.close();
});

test('consent persists, contact validates and produces a real brief, modal restores keyboard focus', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('complementary', { name: 'Site preferences' }).getByRole('button', { name: 'Reject', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('complementary', { name: 'Site preferences' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Start a project brief', exact: true }).click();
  const modal = page.getByRole('dialog', { name: 'Start a conversation' });
  await expect(modal).toBeVisible();
  await modal.getByRole('button', { name: 'Download brief' }).click();
  await expect(modal.getByLabel('Your name')).toBeFocused();
  await expect(modal.getByText('Please enter a valid email address.')).toBeVisible();
  await modal.getByLabel('Your name').fill('QA Example');
  await modal.getByLabel('Email address').fill('qa@example.com');
  await modal.getByLabel('What are we making?').selectOption('Web development');
  await modal.getByLabel('A little about your project').fill('A responsive portfolio website for a creative practice.');
  const downloadEvent = page.waitForEvent('download');
  await modal.getByRole('button', { name: 'Download brief' }).click();
  expect((await downloadEvent).suggestedFilename()).toBe('aldtor-project-brief.txt');
  await expect(modal.getByRole('status')).toContainText('No message has been sent');
  await page.keyboard.press('Escape');
  await expect(modal).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Start a project brief', exact: true })).toBeFocused();
  await page.getByRole('button', { name: 'Cookie preferences' }).click();
  await expect(page.getByRole('dialog', { name: 'Your preferences' })).toContainText('Rejected');
  await page.getByRole('button', { name: 'Accept preferences' }).click();
  expect(await page.evaluate(() => localStorage.getItem('aldtor-preferences'))).toBe('accepted');
});

test('ability card, doors and timeline support keyboard interaction', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('aldtor-preferences', 'rejected'));
  await page.goto('/');
  await page.getByRole('button', { name: /My ability card/ }).click({ force: true });
  await page.getByRole('button', { name: 'Flip card' }).click();
  await expect(page.getByRole('button', { name: 'Show front' })).toBeVisible();
  await page.keyboard.press('Escape');
  const door = page.getByRole('button', { name: 'Open Web development door' });
  await door.click();
  await expect(page.getByRole('button', { name: 'Close Web development door' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('tab').first().focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab').nth(1)).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Give the idea a shape.');
  await page.keyboard.press('End');
  await expect(page.getByRole('button', { name: 'Next process step' })).toBeDisabled();
});

test('service demos and gallery navigation change visible state', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('aldtor-preferences', 'rejected'));
  await page.goto('/web-developer/');
  await page.getByRole('button', { name: 'Approach', exact: true }).click();
  await expect(page.getByRole('heading', { name: /Less noise/ })).toBeVisible();
  await page.getByRole('button', { name: 'Explore the thinking' }).click();
  await expect(page.getByText('Let the work do the talking.')).toBeVisible();
  await page.goto('/app-developer/');
  await page.getByRole('button', { name: /Begin a 1-minute/ }).click();
  await expect(page.getByRole('button', { name: 'Moment complete' })).toBeVisible();
  await page.goto('/ui-ux-designer/');
  await page.getByRole('combobox', { name: 'Chart time period' }).selectOption('Month');
  await expect(page.getByText('Illustrative activity chart · month view')).toBeVisible();
  await page.getByRole('button', { name: 'Projects', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Good work, taking shape.' })).toBeVisible();
  await page.goto('/graphic-designer/');
  const poster = page.getByRole('button', { name: 'Open Form & feeling poster' });
  await poster.click();
  const gallery = page.getByRole('dialog', { name: 'Poster study viewer' });
  await expect(gallery).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(gallery).toContainText('2 / 4');
  await page.keyboard.press('Escape');
  await expect(poster).toBeFocused();
  await page.goto('/photographer/');
  const canvas = page.getByRole('region', { name: /Draggable illustrative gallery/ });
  const world = canvas.locator(':scope > div').first();
  const before = await world.evaluate(el => getComputedStyle(el).transform);
  await canvas.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => world.evaluate(el => getComputedStyle(el).transform)).not.toBe(before);
  await page.getByRole('button', { name: 'Reset view' }).click();
  await expect.poll(() => world.evaluate(el => getComputedStyle(el).transform)).toBe(before);
});

test('mobile navigation routes and Escape dismissal work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => localStorage.setItem('aldtor-preferences', 'rejected'));
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Web developer' }).click();
  await expect(page).toHaveURL(/web-developer/);
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
});

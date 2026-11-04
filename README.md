# ALDTOR — independent creative portfolio

A complete editorial portfolio built with Next.js App Router, React, strict TypeScript, modular CSS and Lucide. The design uses warm stone, charcoal, Onest typography, a personal portrait, and five physical skill doors.

## Run locally

Requires Node.js 20.9 or later. From this folder:

```powershell
npm install
npm run dev
```

Open http://localhost:3000. A production static export can be tested with:

```powershell
npm run build
npm run preview
```

`npm run preview` serves the exported `out` directory. `next start` is not used for this static export.

## Routes

| Route | Experience |
| --- | --- |
| `/` | Portrait hero, rotating roles, five interactive doors, story/process timeline |
| `/home/` | Homepage alias, canonical URL points to `/` |
| `/web-developer/` | Editorial website concept, live preview states, expandable study |
| `/app-developer/` | Interactive phone screens, sample ritual flow |
| `/ui-ux-designer/` | Dashboard preview, navigation and chart controls, design process |
| `/graphic-designer/` | Horizontal poster collection and fullscreen artwork viewer |
| `/photographer/` | Two-dimensional draggable canvas, keyboard/touch interaction and viewer |
| `/legal/` | Privacy, local storage behavior, contact flow and asset credits |

Also includes a custom 404, favicon, Open Graph image, sitemap and robots.

## Edit content

- `src/config/site.ts`: brand, name, email, phone, availability, timezone, location, social URLs and navigation.
- `src/content/portfolio.ts`: hero copy, roles, five disciplines, timeline, concept titles and actual project collection.
- `public/images/`: optimized personal photography and sharing image.
- `src/styles/globals.css`: shared palette, typography, spacing, buttons, header and footer.

Set `NEXT_PUBLIC_CONTACT_EMAIL` to your real address in `.env.local`, or edit `siteConfig.email`. Rebuild after changing build-time environment variables. Set `NEXT_PUBLIC_SITE_URL` when using another domain. Without an email, the contact form validates and saves/copies a brief locally. It never says an email was sent. With an email, it opens a prefilled draft for the visitor to send in their own email application.

`projects` is empty because no completed-project evidence was supplied. Add entries to show verified projects automatically on their discipline page, including images, optional native video, technology labels and real live/prototype URLs. Concepts are explicitly labeled; they are not client claims. To remove concept demos after adding your own work, edit the corresponding page component in `src/components/services/index.tsx`.

Timeline entries currently show the creative process, not employment or education. Replace their period/title/description/detail values with your actual story and update `homeContent.storyIntro`. Optional year is supported in the content type.

## Interactions and accessibility

Native dialogs support Escape, focus containment and return focus. Skill doors support pointer hover, click/tap and direct keyboard-accessible links. Mobile uses horizontal scroll snapping. Timeline uses tabs, arrow keys, Home/End and buttons. Galleries support click, touch, keyboard and next/previous. Ability card tilts and flips by drag or button. The site respects reduced motion; navigation and dialogs use visible focus styles. No analytics or tracking IDs are included.

## Checks

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

Start the local server before browser tests. Tests use installed Microsoft Edge on Windows. Set `PLAYWRIGHT_EXECUTABLE_PATH` to a Chromium-family browser on other systems. Resource-constrained environments should keep one browser/test worker.

See `docs/implementation-plan.md`, `docs/reference-audit.md`, `docs/qa-report.md`, and `docs/asset-notes.md` for decisions, evidence and remaining content needs. Reference inspiration: https://therishithakor.com/. The original owner's identity, photographs and portfolio claims are not reused.

export type SiteNavigationItem = { label: string; href: string; shortLabel?: string };

/** The single place to configure public identity and contact details. */
export const siteConfig = {
  brand: 'ALDTOR',
  name: null as string | null,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aldtor-creative-portfolio.satinhotel1.chatgpt.site',
  description: 'ALDTOR is an independent creative practice exploring web development, apps, interfaces, graphic design and photography.',
  phone: null as string | null,
  location: null as string | null,
  timezone: 'Asia/Kolkata',
  availability: 'Open to thoughtful collaborations',
  socials: [] as { label: string; href: string }[],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Web developer', href: '/web-developer/', shortLabel: 'Web' },
    { label: 'App developer', href: '/app-developer/', shortLabel: 'Apps' },
    { label: 'UI / UX designer', href: '/ui-ux-designer/', shortLabel: 'UI / UX' },
    { label: 'Graphic designer', href: '/graphic-designer/', shortLabel: 'Graphic' },
    { label: 'Photographer', href: '/photographer/', shortLabel: 'Photo' },
  ] satisfies SiteNavigationItem[],
};

import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { ExperienceLayer } from '@/components/interactive/ExperienceLayer';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'ALDTOR — A curious mind. Many creative sides.', template: '%s — ALDTOR' },
  description: siteConfig.description,
  openGraph: { type: 'website', locale: 'en_US', siteName: siteConfig.brand, title: 'ALDTOR — Independent creative practice', description: siteConfig.description, images: [{ url: '/social-card.svg', width: 1200, height: 630, alt: 'ALDTOR — A curious mind. Many creative sides.' }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#e8e4e0' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><ExperienceLayer /></body></html>;
}

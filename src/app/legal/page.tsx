import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import styles from './page.module.css';
export const metadata: Metadata = { title: 'Privacy & credits', description: 'How this ALDTOR portfolio handles local preferences, contact drafts, and visual credits.', alternates: { canonical: '/legal/' } };
export default function LegalPage() {
  return <div className={`container ${styles.page}`}>
    <p className="eyebrow">The small print / Last updated 4 November 2026</p>
    <h1 className="display-title">Privacy<br />& credits.</h1>
    <p className={styles.intro}>A thoughtful experience should be transparent, too. Here’s what happens when you visit.</p>
    <div className={styles.content}>
      <aside><a href="#privacy">01 / Your privacy</a><a href="#preferences">02 / Preferences</a><a href="#contact">03 / Contact drafts</a><a href="#credits">04 / Credits</a></aside>
      <div>
        <section id="privacy"><span className="eyebrow">01 / Your privacy</span><h2>A simple portfolio.</h2><p>This website does not include advertising pixels, analytics scripts, or a visitor database. Viewing a page does not submit the contact form. The hosting provider may process technical request information needed to serve and secure the website.</p><p>This notice describes the implementation currently shipped with the portfolio. If analytics, a form backend, or other services are added, this page should be updated to describe them.</p></section>
        <section id="preferences"><span className="eyebrow">02 / Preferences</span><h2>Your choice stays yours.</h2><p>A small preference value is saved in your browser’s local storage when you accept or reject optional storage. No analytics are connected, and accepting does not turn on tracking. You can revisit your choice using “Cookie preferences” in the footer, or remove saved values by clearing this website’s browser data.</p><p>Essential browser storage may remember the preference itself. Both accepting and rejecting are supported. If storage is unavailable, the site still works.</p></section>
        <section id="contact"><span className="eyebrow">03 / Contact drafts</span><h2>A draft, then a conversation.</h2><p>Details entered in the project brief remain in this page’s memory. When a contact email is configured, the form opens your email application with a draft. You decide whether to send it. The site does not claim the message has been delivered.</p><p>When direct email is unavailable, you can copy or download the brief. Downloading saves a text file to your device; copying places the draft on your clipboard. Neither action sends it to ALDTOR.</p>{siteConfig.email ? <p>Portfolio contact: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p> : <p>A direct contact address has not yet been published.</p>}</section>
        <section id="credits"><span className="eyebrow">04 / Credits</span><h2>Made with intention.</h2><p>Experience and layout inspiration: <a href="https://therishithakor.com/" target="_blank" rel="noopener noreferrer">Rishi Thakor’s portfolio ↗</a>. ALDTOR uses its own supplied identity and photographs. The reference owner’s project imagery, personal biography, and professional history are not reused.</p><p>The hero portrait was prepared from the supplied photograph using AI-assisted background extraction. The original photo remains in the source workspace. Other project and gallery visuals are original illustrative studies, clearly identified as sample work; they do not represent client commissions or completed launches.</p><p>Typography: Onest, licensed under the SIL Open Font License. Icons: Lucide, ISC license. Built with Next.js, React, TypeScript and CSS.</p></section>
      </div>
    </div>
    <Link className="button button-outline" href="/">Back to the portfolio ↗</Link>
  </div>;
}

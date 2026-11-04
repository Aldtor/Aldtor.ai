'use client';

import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-top"><span className="eyebrow">Have something in mind?</span><span className="availability"><span />{siteConfig.availability}</span></div>
      <button className="footer-invitation" onClick={() => window.dispatchEvent(new CustomEvent('aldtor:contact'))}><span>Let’s make<br /><em>something matter.</em></span><span className="footer-arrow"><ArrowUpRight strokeWidth={1.25} aria-hidden="true" /></span></button>
      <div className="footer-details"><Link href="/" className="wordmark">{siteConfig.brand}<span className="wordmark-dot">✳</span></Link><p>Independent thinking.<br />Considered digital experiences.</p><div className="footer-socials">{siteConfig.socials.map(social => <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">{social.label}<ArrowUpRight size={14} /></a>)}</div><button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Back to top <ArrowUp size={16} /></button></div>
      <nav className="footer-navigation" aria-label="Footer navigation">{siteConfig.navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/#story">My story</Link></nav>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand}</span><span className="footer-note">Made with intention.</span><div><Link href="/legal/">Privacy & legal</Link><button onClick={() => window.dispatchEvent(new CustomEvent('aldtor:consent'))}>Cookie preferences</button></div></div>
    </div>
  </footer>;
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Header() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [time, setTime] = useState('');
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('aldtor-theme');
    const isDark = saved === 'dark';
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    setDark(isDark);
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: siteConfig.timezone, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    update(); const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => { dialog.current?.close(); }, [pathname]);
  function closeMenu() { dialog.current?.close(); }
  function contact() { closeMenu(); window.dispatchEvent(new CustomEvent('aldtor:contact')); }
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('aldtor-theme', next ? 'dark' : 'light'); }
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="header-inner container">
        <Link href="/" className="wordmark" aria-label={`${siteConfig.brand} home`}>{siteConfig.brand}<span className="wordmark-dot">✳</span></Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {siteConfig.navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href || pathname + '/' === item.href ? 'page' : undefined}>{item.shortLabel || item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <span className="header-clock" aria-label={`Local time in ${siteConfig.timezone}`} suppressHydrationWarning>{time || '—:—'} <span>LOCAL</span></span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title="Change theme"><span className="theme-cord"/><span className="theme-knob">{dark ? <Sun size={13}/> : <Moon size={13}/>}</span></button>
          <button className="header-contact" onClick={contact}>Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></button>
          <button className="menu-toggle" onClick={() => dialog.current?.showModal()} aria-label="Open navigation"><Menu size={24} /></button>
        </div>
      </div>
    </header>
    <dialog className="mobile-menu" ref={dialog} aria-labelledby="mobile-menu-title" onClick={event => { if (event.target === event.currentTarget) closeMenu(); }}>
      <div className="mobile-menu-top"><span className="wordmark" id="mobile-menu-title">{siteConfig.brand}<span className="wordmark-dot">✳</span></span><button className="icon-button" onClick={closeMenu} aria-label="Close navigation"><X /></button></div>
      <span className="eyebrow mobile-menu-label">Explore the practice</span>
      <nav aria-label="Mobile navigation">{siteConfig.navigation.map((item, index) => <Link onClick={closeMenu} key={item.href} href={item.href}><span className="menu-index">0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" size={22} /></Link>)}</nav>
      <button className="button button-primary mobile-contact" onClick={contact}>Start a conversation <ArrowUpRight size={18} /></button>
    </dialog>
  </>;
}

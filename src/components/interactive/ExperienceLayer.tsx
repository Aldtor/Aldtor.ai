'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, RotateCw, X } from 'lucide-react';
import { ContactForm } from '../contact/ContactForm';
import styles from './ExperienceLayer.module.css';

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    dialog?.showModal();
    return () => { dialog?.close(); previous?.focus(); };
  }, []);
  return <dialog ref={ref} className={styles.modal} aria-label={title} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className={styles.modalTop}><span className="eyebrow">ALDTOR / {title}</span><button autoFocus className={styles.close} onClick={onClose} aria-label="Close dialog"><X size={20} /></button></div>
    {children}
  </dialog>;
}

function AbilityCard() {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const start = useRef<number | null>(null);
  return <>
    <h2 className={styles.title}>A little card.<br /><em>A lot of possibilities.</em></h2>
    <div className={styles.cardStage} onPointerDown={e => { start.current = e.clientX; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { const box = e.currentTarget.getBoundingClientRect(); setTilt({ x: ((e.clientY - box.top) / box.height - .5) * -12, y: ((e.clientX - box.left) / box.width - .5) * 16 }); }} onPointerUp={e => { if (start.current !== null && Math.abs(e.clientX - start.current) > 45) setFlipped(v => !v); start.current = null; setTilt({ x: 0, y: 0 }); }} onPointerCancel={() => { start.current = null; setTilt({ x: 0, y: 0 }); }} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className={styles.card} style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (flipped ? 180 : 0)}deg)` }}>
        <div className={styles.cardFront} aria-hidden={flipped}><span className={styles.cardBrand}>ALDTOR<span>✳</span></span><span className={styles.cardMark}>a.</span><div className={styles.cardBottom}><span>Independent creative<br />Design × development</span><ArrowUpRight size={28} /></div></div>
        <div className={styles.cardBack} aria-hidden={!flipped}><span className="eyebrow">One mind. Many disciplines.</span><div className={styles.disciplines}><span>Web development</span><span>App development</span><span>UI / UX design</span><span>Graphic design</span><span>Photography</span></div><span className={styles.cardBackBrand}>ALDTOR✳</span></div>
      </div>
    </div>
    <div className={styles.cardControls}><span>Move to explore. Drag to turn.</span><button className="button button-outline" onClick={() => setFlipped(v => !v)}><RotateCw size={15} />{flipped ? 'Show front' : 'Flip card'}</button></div>
  </>;
}

export function ExperienceLayer() {
  const [active, setActive] = useState<'contact' | 'ability' | 'consent' | null>(null);
  const [consentPrompt, setConsentPrompt] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    try { const saved = localStorage.getItem('aldtor-preferences'); setChoice(saved); setConsentPrompt(!saved); } catch { setConsentPrompt(true); }
    const contact = () => setActive('contact'); const ability = () => setActive('ability'); const consent = () => setActive('consent');
    window.addEventListener('aldtor:contact', contact); window.addEventListener('aldtor:ability', ability); window.addEventListener('aldtor:consent', consent);
    return () => { window.removeEventListener('aldtor:contact', contact); window.removeEventListener('aldtor:ability', ability); window.removeEventListener('aldtor:consent', consent); };
  }, []);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>('.home-work, .home-story, .home-endnote, .service-section');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);
  const saveChoice = (value: string) => { try { localStorage.setItem('aldtor-preferences', value); } catch { /* The preference still applies for this visit. */ } setChoice(value); setConsentPrompt(false); setActive(null); };
  return <>
    <div key={pathname} className={styles.routeProgress} aria-hidden="true" />
    {consentPrompt && active === null && <aside className={styles.consent} aria-label="Site preferences"><span className="eyebrow">A small note</span><p>No tracking. Just room for your preferences.</p><small>This site uses no analytics or advertising cookies. You can allow or reject optional preference storage.</small><div><button onClick={() => saveChoice('accepted')}>Accept</button><button onClick={() => saveChoice('rejected')}>Reject</button><button onClick={() => setActive('consent')}>Details <ArrowUpRight size={12} /></button></div></aside>}
    {active === 'contact' && <Modal title="Start a conversation" onClose={() => setActive(null)}><ContactForm /></Modal>}
    {active === 'ability' && <Modal title="Ability card" onClose={() => setActive(null)}><AbilityCard /></Modal>}
    {active === 'consent' && <Modal title="Your preferences" onClose={() => setActive(null)}><h2 className={styles.title}>Your visit.<br /><em>Your choice.</em></h2><div className={styles.preferenceText}><p>There are no analytics, advertising cookies, or third-party trackers on this site.</p><p>Optional preference storage is currently unused. Your accept or reject choice is saved locally only so this notice does not keep appearing. You can change it here at any time.</p>{choice && <p>Current choice: <strong>{choice === 'accepted' ? 'Accepted' : 'Rejected'}</strong>.</p>}</div><div className={styles.preferenceButtons}><button className="button button-primary" onClick={() => saveChoice('accepted')}>Accept preferences</button><button className="button button-outline" onClick={() => saveChoice('rejected')}>Reject optional storage</button></div></Modal>}
  </>;
}

'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Copy, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './ContactForm.module.css';

type Fields = { name: string; email: string; phone: string; type: string; description: string };
const initial: Fields = { name: '', email: '', phone: '', type: '', description: '' };
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const email = siteConfig.email;
  const brief = () => `PROJECT BRIEF — ALDTOR\n\nName: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\nPhone: ${fields.phone.trim() || 'Not provided'}\nProject: ${fields.type}\n\n${fields.description.trim()}\n`;
  function validate() {
    const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = 'Please enter a valid email address.';
    if (!fields.type) next.type = 'Please choose a project type.';
    if (fields.description.trim().length < 10) next.description = 'Tell me a little more — at least 10 characters.';
    setErrors(next); setStatus('');
    const first = Object.keys(next)[0];
    if (first) { (form.current?.elements.namedItem(first) as HTMLElement | null)?.focus(); return false; }
    return true;
  }
  function submit(event: FormEvent) {
    event.preventDefault(); if (!validate()) return;
    if (email) { window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Project enquiry: ${fields.type}`)}&body=${encodeURIComponent(brief())}`; setStatus('Draft opened — send it from your email app.'); }
    else { const url = URL.createObjectURL(new Blob([brief()], { type: 'text/plain;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = 'aldtor-project-brief.txt'; document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); setStatus('Your brief is ready to save. No message has been sent.'); }
  }
  async function copy() { if (!validate()) return; try { await navigator.clipboard.writeText(brief()); setStatus('Project brief copied. No message has been sent.'); } catch { setManualCopy(true); setStatus('Select and copy your brief below.'); } }
  const props = (key: keyof Fields) => ({ id: `contact-${key}`, name: key, value: fields[key], onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFields(v => ({ ...v, [key]: event.target.value })), 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `${key}-error` : undefined });
  const error = (key: keyof Fields) => errors[key] && <span className={styles.error} id={`${key}-error`}>{errors[key]}</span>;
  return <><h2 className={styles.title}>Have something<br /><em>in mind?</em></h2><p className={styles.intro}>{email ? 'A few details are all it takes to start a conversation.' : 'Direct email is not available yet. Save your project brief.'}</p><form ref={form} onSubmit={submit} noValidate className={styles.form}><div className={styles.row}><label htmlFor="contact-name">Your name <span>*</span><input {...props('name')} autoComplete="name" placeholder="Alex Morgan" required maxLength={120} />{error('name')}</label><label htmlFor="contact-email">Email address <span>*</span><input {...props('email')} type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} />{error('email')}</label></div><div className={styles.row}><label htmlFor="contact-phone">Phone <span>(optional)</span><input {...props('phone')} type="tel" autoComplete="tel" placeholder="Your contact number" maxLength={40} /></label><label htmlFor="contact-type">What are we making? <span>*</span><select {...props('type')} required><option value="">Select a discipline</option><option>Web development</option><option>App development</option><option>UI / UX design</option><option>Graphic design</option><option>Photography</option><option>Something else</option></select>{error('type')}</label></div><label htmlFor="contact-description">A little about your project <span>*</span><textarea {...props('description')} rows={3} required minLength={10} maxLength={5000} placeholder="The idea, the ambition, the details that matter…" />{error('description')}</label><div className={styles.actions}><button type="submit" className="button button-primary">{email ? <>Open email draft <ArrowUpRight size={17} /></> : <>Download brief <Download size={16} /></>}</button><button type="button" className={styles.copy} onClick={copy}>Copy brief <Copy size={14} /></button></div><p className={styles.status} role="status">{status}</p>{manualCopy && <label>Copy your project brief<textarea readOnly value={brief()} rows={7} onFocus={e => e.currentTarget.select()} /></label>}<p className={styles.privacy}>Your details stay in this browser until you choose to send an email or save your brief.</p></form></>;
}

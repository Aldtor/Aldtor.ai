'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Asterisk, Plus } from 'lucide-react';
import { homeContent, skills } from '@/content/portfolio';
import { siteConfig } from '@/config/site';
import { StoryTimeline } from '../timeline/StoryTimeline';
import styles from './HomePage.module.css';

export function HomePage() {
  const [role, setRole] = useState(0);
  const [opened, setOpened] = useState<string | null>(null);
  const wall = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => setRole(value => (value + 1) % homeContent.roles.length), 3200);
    return () => window.clearInterval(interval);
  }, []);
  const moveWall = (direction: number) => {
    const el = wall.current;
    if (el) el.scrollBy({ left: direction * ((el.children[0]?.getBoundingClientRect().width ?? 222) + 18), behavior: 'smooth' });
  };
  return <>
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.watermark} aria-hidden="true">ALDTOR</div>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <p className={`eyebrow ${styles.eyebrow}`}><span />{homeContent.eyebrow}</p>
          <h1 id="hero-title"><span>{homeContent.greeting}</span>{homeContent.headline}</h1>
          <p className={styles.role}><span className={styles.roleLine} /><span key={role}>{homeContent.roles[role]}</span><Asterisk size={17} strokeWidth={1.3} /></p>
          <p className={styles.intro}>{homeContent.intro}</p>
          <div className={styles.heroActions}><button className="button button-primary" onClick={() => window.dispatchEvent(new Event('aldtor:contact'))}>Hire me <ArrowUpRight size={17} /></button><a href="#work" className={styles.workLink}>See my work <ArrowDown size={15} /></a></div>
        </div>
        <div className={styles.portrait}><Image src="/images/portrait-cutout.webp" alt="ALDTOR" width={1100} height={1400} priority sizes="(max-width: 700px) 100vw, 58vw" /></div>
        <button className={styles.ability} onClick={() => window.dispatchEvent(new Event('aldtor:ability'))}><span className={styles.abilityIcon}><Asterisk size={28} strokeWidth={1.25} /></span><span>Many disciplines.<br /><strong>One considered vision.</strong><span className={styles.abilityLink}>My ability card <ArrowUpRight size={12} /></span></span></button>
      </div>
      <div className={`container ${styles.heroBottom}`}><span><i />{siteConfig.availability}</span><span>Independent creative · Working remotely</span><a href="#work">Scroll to explore <ArrowDown size={12} /></a></div>
    </section>

    <section id="work" className={`container ${styles.work}`} aria-labelledby="work-title">
      <div className={styles.sectionTop}><span className="eyebrow">01 / A multidisciplinary practice</span><span className={styles.smallNote}>Different doors. The same curiosity.</span></div>
      <div className={styles.workHeading}><h2 id="work-title">{homeContent.workTitle}</h2><p>{homeContent.workIntro}</p></div>
      <div className={styles.doorWall} ref={wall}>
        {skills.map((skill, index) => <article key={skill.id} className={`${styles.skill} ${opened === skill.id ? styles.open : ''}`} style={{ '--door-color': skill.color } as CSSProperties}>
          <div className={styles.doorStage}>
            <div className={`${styles.reveal} ${styles[skill.id]}`}><div className={styles.art} aria-hidden="true"><i /><i /><i /><i /><i /><i /></div><Link href={skill.href} className={styles.explore}>Explore {skill.title}<ArrowUpRight size={17} /></Link></div>
            <button className={styles.door} aria-expanded={opened === skill.id} aria-label={`${opened === skill.id ? 'Close' : 'Open'} ${skill.title} door`} onClick={() => setOpened(opened === skill.id ? null : skill.id)}><span className={styles.doorNumber}>0{index + 1}</span><span className={styles.doorWord}>{skill.subtitle}</span><span className={styles.handle} /><span className={styles.doorHint}>Open a possibility <Plus size={12} /></span></button>
          </div>
          <Link className={styles.skillTitle} href={skill.href}><h3>{skill.title}</h3><ArrowUpRight size={16} /></Link>
          <span className={styles.skillSubtitle}>{skill.subtitle}</span>
        </article>)}
      </div>
      <div className={styles.wallFoot}><span>Choose a door. Discover a different side.</span><div><button className="icon-button" aria-label="Previous discipline" onClick={() => moveWall(-1)}><ArrowLeft size={17} /></button><button className="icon-button" aria-label="Next discipline" onClick={() => moveWall(1)}><ArrowRight size={17} /></button></div></div>
    </section>
    <StoryTimeline />
    <section className={`container ${styles.endnote}`}><Asterisk strokeWidth={1} size={34} /><p>Good things happen<br />when perspectives meet.</p><button onClick={() => window.dispatchEvent(new Event('aldtor:contact'))}>Have something in mind? <ArrowUpRight size={18} /></button></section>
  </>;
}

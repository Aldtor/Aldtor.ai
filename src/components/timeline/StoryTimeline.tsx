'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { homeContent, timeline } from '@/content/portfolio';
import styles from './StoryTimeline.module.css';

export function StoryTimeline() {
  const [selected, setSelected] = useState(0);
  const entry = timeline[selected];
  if (!entry) return null;
  return <section id="story" className={styles.story} aria-labelledby="story-title"><div className="container">
    <div className={styles.heading}><div><span className="eyebrow">02 / Behind the work</span><h2 id="story-title">{homeContent.storyTitle}</h2></div><p>{homeContent.storyIntro}</p></div>
    <div className={styles.layout}><div className={styles.photo}><Image src="/images/story.webp" alt="A personal portrait of ALDTOR" width={1080} height={1350} sizes="(max-width: 700px) 90vw, 40vw" /><div><span>THE PERSON BEHIND THE PIXELS</span><ArrowUpRight size={20} /></div></div>
      <div className={styles.journey}><div className={styles.journeyLabel}><span className="eyebrow">A way of working</span><span>0{selected + 1} / 0{timeline.length}</span></div>
        <div className={styles.steps} role="tablist" aria-label="Creative process">{timeline.map((item, index) => <button id={`step-${item.id}`} key={item.id} role="tab" aria-selected={selected === index} aria-controls={`panel-${item.id}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => { let next = selected; if (event.key === 'ArrowRight') next = (selected + 1) % timeline.length; else if (event.key === 'ArrowLeft') next = (selected - 1 + timeline.length) % timeline.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = timeline.length - 1; else return; event.preventDefault(); setSelected(next); document.getElementById(`step-${timeline[next].id}`)?.focus(); }}><span className={styles.dot} /><span>{item.period}</span></button>)}</div>
        <div key={entry.id} id={`panel-${entry.id}`} role="tabpanel" aria-labelledby={`step-${entry.id}`} className={styles.panel}><span className={styles.chapter}>0{selected + 1}</span><h3>{entry.title}</h3><p>{entry.description}</p><p className={styles.detail}>{entry.detail}</p></div>
        <div className={styles.controls}><span>A little curiosity goes a long way.</span><button className="icon-button" disabled={selected === 0} aria-label="Previous process step" onClick={() => setSelected(selected - 1)}><ArrowLeft size={17} /></button><button className="icon-button" disabled={selected === timeline.length - 1} aria-label="Next process step" onClick={() => setSelected(selected + 1)}><ArrowRight size={17} /></button></div>
      </div></div>
  </div></section>;
}

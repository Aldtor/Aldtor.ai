'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects, type PortfolioProject } from '@/content/portfolio';
import s from './projects.module.css';

/** Verified work is rendered directly from the shared content file. */
export function ProjectCollection({ category }: { category: PortfolioProject['category'] }) {
  const entries = projects.filter(project => project.category === category);
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  if (!entries.length) return null;
  const move = (direction: number) => { if (active?.images.length) setImageIndex(index => (index + direction + active.images.length) % active.images.length); };
  const close = () => { dialog.current?.close(); opener.current?.focus(); };
  return <section className={`container ${s.collection}`} aria-label="Selected projects"><span className="eyebrow">Selected projects</span><div className={s.grid}>{entries.map(project => <article key={project.id}><button className={s.project} onClick={event => { opener.current = event.currentTarget; setActive(project); setImageIndex(0); dialog.current?.showModal(); }} aria-label={`View ${project.title} project`}>{project.images[0] ? <Image src={project.images[0].src} alt={project.images[0].alt} width={project.images[0].width} height={project.images[0].height} unoptimized/> : <div className={s.placeholder}>{project.title}</div>}<span><strong>{project.title}</strong><ArrowUpRight/></span></button><p>{project.description}</p><small>{project.year}</small></article>)}</div><dialog ref={dialog} className={s.dialog} aria-label={active?.title || 'Project details'} onClose={() => opener.current?.focus()} onClick={event => { if (event.currentTarget === event.target) close(); }} onKeyDown={event => { if(event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if(event.key === 'ArrowRight') { event.preventDefault(); move(1); } }}><div className={s.top}><h2>{active?.title}</h2><button className="icon-button" onClick={close} aria-label="Close project"><X/></button></div>{active?.images[imageIndex] && <Image className={s.fullImage} src={active.images[imageIndex].src} alt={active.images[imageIndex].alt} width={active.images[imageIndex].width} height={active.images[imageIndex].height} unoptimized/>} {!!active && active.images.length > 1 && <div className={s.imageControls}><button className="icon-button" onClick={() => move(-1)} aria-label="Previous project image"><ChevronLeft/></button><span>{imageIndex + 1} / {active.images.length}</span><button className="icon-button" onClick={() => move(1)} aria-label="Next project image"><ChevronRight/></button></div>}<p>{active?.description}</p>{active?.technologies && <div className={s.tags}>{active.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>}{active?.videoUrl && <video controls preload="metadata" src={active.videoUrl} aria-label={`${active.title} project video`}/>}<div className={s.links}>{active?.liveUrl && <a href={active.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Visit website <ArrowUpRight size={17}/></a>}{active?.prototypeUrl && <a href={active.prototypeUrl} target="_blank" rel="noopener noreferrer" className="button button-outline">Explore prototype <ArrowUpRight size={17}/></a>}</div></dialog></section>;
}

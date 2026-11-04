/** Replace these clearly marked studies with verified projects as they become available. */
export const homeContent = {
  eyebrow: 'Independent creative practice',
  greeting: 'Hi, I’m ALDTOR.',
  headline: 'A curious mind.\nMany creative sides.',
  intro: 'Bringing ideas to life through thoughtful design, purposeful code, and a different way of seeing.',
  roles: ['a developer.', 'a designer.', 'a visual thinker.'],
  workTitle: 'Good things happen\nbehind these doors.',
  workIntro: 'Five disciplines. One curious mind. Pick a door and explore what’s inside.',
  storyTitle: 'A little more\nbehind the work.',
  storyIntro: 'The personal story is still being written. For now, here’s how an idea becomes something you can experience.',
};

export const skills = [
  { id: 'web', title: 'Web development', subtitle: 'Built for the browser', href: '/web-developer/', color: '#22304a' },
  { id: 'app', title: 'App development', subtitle: 'Ideas in your pocket', href: '/app-developer/', color: '#4a3540' },
  { id: 'ux', title: 'UI / UX design', subtitle: 'Clarity in every detail', href: '/ui-ux-designer/', color: '#7a8670' },
  { id: 'graphic', title: 'Graphic design', subtitle: 'A visual point of view', href: '/graphic-designer/', color: '#a4552c' },
  { id: 'photo', title: 'Photography', subtitle: 'A different way of seeing', href: '/photographer/', color: '#c4b0b0' },
];

/** Process milestones, not a claimed employment/education history. Replace with actual dated entries. */
export type TimelineEntry = { id: string; period: string; year?: string; title: string; description: string; detail: string };
export const timeline: TimelineEntry[] = [
  { id: 'discover', period: '01 / THE START', title: 'It begins with curiosity.', description: 'Listen closely. Ask better questions. Find the part of an idea that makes it worth building.', detail: 'Discover · Direction · Possibilities' },
  { id: 'design', period: '02 / THE EXPLORATION', title: 'Give the idea a shape.', description: 'Explore the structure, the feeling, and the small details. Make room for clarity and a little unexpected delight.', detail: 'Sketch · Prototype · Refine' },
  { id: 'build', period: '03 / THE MAKING', title: 'Make it feel right.', description: 'Bring design and code together. Test the experience across screens, then keep refining until the details work as one.', detail: 'Build · Test · Evolve' },
];

export const conceptStudies = {
  web: { title: 'Forma Studio', category: 'Architecture website concept', description: 'An editorial home for considered spaces.' },
  app: { title: 'Daylight', category: 'Wellbeing app concept', description: 'Small rituals, a little more room to breathe.' },
  design: { title: 'Overview', category: 'Workspace dashboard concept', description: 'Making complex work feel clear.' },
  graphic: { title: 'Type in motion', category: 'Original poster studies', description: 'Experiments in form, rhythm and visual identity.' },
  photography: { title: 'Quiet observations', category: 'Illustrative image studies', description: 'An imagined collection of light, landscapes and everyday forms.' },
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: keyof typeof conceptStudies;
  description: string;
  year?: string;
  images: { src: string; alt: string; width: number; height: number }[];
  videoUrl?: string;
  liveUrl?: string;
  prototypeUrl?: string;
  technologies?: string[];
};
/** Add verified work here; never present sample studies as client work. */
export const projects: PortfolioProject[] = [];

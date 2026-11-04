import type { Metadata } from 'next';
import { GraphicPortfolio } from '@/components/services';
export const metadata: Metadata = { title: 'Graphic design', description: 'Type, form, and a visual point of view. An interactive collection of original ALDTOR poster studies.', alternates: { canonical: '/graphic-designer/' } };
export default function Page() { return <GraphicPortfolio />; }

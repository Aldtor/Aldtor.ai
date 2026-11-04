import type { Metadata } from 'next';
import { DesignPortfolio } from '@/components/services';
export const metadata: Metadata = { title: 'UI / UX design', description: 'Clear interfaces and considered user journeys. Explore ALDTOR’s product design process and interface concepts.', alternates: { canonical: '/ui-ux-designer/' } };
export default function Page() { return <DesignPortfolio />; }

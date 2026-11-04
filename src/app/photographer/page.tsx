import type { Metadata } from 'next';
import { PhotographyPortfolio } from '@/components/services';
export const metadata: Metadata = { title: 'Photography', description: 'An immersive gallery canvas prepared for ALDTOR’s photography. Explore illustrative image studies while the photographic collection is curated.', alternates: { canonical: '/photographer/' } };
export default function Page() { return <PhotographyPortfolio />; }

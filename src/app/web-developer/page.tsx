import type { Metadata } from 'next';
import { WebPortfolio } from '@/components/services';
export const metadata: Metadata = { title: 'Web development', description: 'Editorial websites, expressive interactions, and carefully considered code. Explore ALDTOR’s web development concepts.', alternates: { canonical: '/web-developer/' } };
export default function Page() { return <WebPortfolio />; }

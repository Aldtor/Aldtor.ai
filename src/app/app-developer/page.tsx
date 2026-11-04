import type { Metadata } from 'next';
import { AppPortfolio } from '@/components/services';
export const metadata: Metadata = { title: 'App development', description: 'Small screens, thoughtful experiences. Explore ALDTOR’s interactive mobile application concepts.', alternates: { canonical: '/app-developer/' } };
export default function Page() { return <AppPortfolio />; }

import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage';
import { getIndustry } from '@/lib/industries';

const industry = getIndustry('bfsi');

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: 'https://greyquill.io/industries/bfsi' },
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}

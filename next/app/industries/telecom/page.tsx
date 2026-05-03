import type { Metadata } from 'next';
import IndustryPage from '@/components/IndustryPage';
import { getIndustry } from '@/lib/industries';

const industry = getIndustry('telecom');

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  alternates: { canonical: 'https://greyquill.io/industries/telecom' },
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}

import Hero from '@/components/Hero';
import Dilemma from '@/components/Dilemma';
import Method from '@/components/Method';
import Capabilities from '@/components/Capabilities';
import PartnershipStrip from '@/components/PartnershipStrip';
import RoleTargeting from '@/components/RoleTargeting';
import Platform from '@/components/Platform';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Dilemma />
      <Method />
      <Capabilities />
      <PartnershipStrip />
      <RoleTargeting />
      <Platform />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

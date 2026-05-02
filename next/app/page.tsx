import Hero from '@/components/Hero';
import Dilemma from '@/components/Dilemma';
import RoleTargeting from '@/components/RoleTargeting';
import JourneyTiers from '@/components/JourneyTiers';
import Platform from '@/components/Platform';
import Testimonials from '@/components/Testimonials';
import Method from '@/components/Method';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Dilemma />
      <JourneyTiers />
      <Method />
      <RoleTargeting />
      <Platform />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

import Hero from '@/components/Hero';
import Dilemma from '@/components/Dilemma';
import Method from '@/components/Method';
import Capabilities from '@/components/Capabilities';
import Deployment from '@/components/Deployment';
import RoleTargeting from '@/components/RoleTargeting';
import Platform from '@/components/Platform';
import WhyTrustUs from '@/components/WhyTrustUs';
import BriefDownload from '@/components/BriefDownload';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Dilemma />
      <Method />
      <Platform />
      {/* Deployment posture is a CISO/InfoSec primer; that audience
          evaluates on desktop, not on a phone. Hidden below md. */}
      <div className="hidden md:block">
        <Deployment />
      </div>
      <Capabilities />
      <RoleTargeting />
      <WhyTrustUs />
      <BriefDownload />
      <FinalCTA />
    </>
  );
}

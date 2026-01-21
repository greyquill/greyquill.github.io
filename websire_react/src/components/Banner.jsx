import React from 'react';
import bannerImage from '../assets/banner-pic.jpeg';

function Banner() {
  return (
    <section className="py-10 md:py-16" aria-label="Hero banner">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Tagline */}
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-3">
            Software investments that actually deliver
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-tektur text-gray-800 leading-tight mb-6">
            Clarity Before Code.{' '}
            <span className="text-[#0B4F88]">Results You Can Trust.</span>
          </h1>

          {/* Positioning Statement */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            70% of software projects fail due to unclear requirements—not bad coding.
            We guarantee process clarity before writing a single line of code.
          </p>

          {/* Value Proposition */}
          <p className="text-gray-500">
            Through <span className="font-semibold text-gray-700">The Greyquill Method™</span>,
            we eliminate the #1 cause of project failure, ensuring your investment delivers real outcomes.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={bannerImage}
            alt="Team collaborating on digital solutions"
            className="max-w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
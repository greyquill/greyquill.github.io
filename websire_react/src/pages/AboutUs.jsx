import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaLightbulb, FaHandshake, FaCheckCircle, FaAward } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Amarnath",
      role: "Chief Technology Officer",
      expertise: "Enterprise Architecture, Cloud Solutions",
      experience: "15+ years in software architecture"
    },
    {
      name: "Srinivas Reddy",
      role: "Lead Business Analyst",
      expertise: "Process Optimization, Requirements Engineering",
      experience: "10+ years optimizing business workflows"
    },
    {
      name: "Charan Sreedhar",
      role: "Senior Infrastructure Engineer",
      expertise: "Infrastructure, Cloud Solutions",
      experience: "12+ years building scalable applications"
    },
    {
      name: "Anusha K",
      role: "UX/UI Design Lead",
      expertise: "User-Centered Design, Interface Architecture",
      experience: "12+ years creating intuitive interfaces"
    }
  ];

  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Process First Approach",
      description: "We understand and optimize business processes before implementing technology. Technology serves your business goals, not the other way around."
    },
    {
      icon: <FaHandshake />,
      title: "Long-term Partnership",
      description: "We walk alongside our clients throughout their journey, providing ongoing support as business needs evolve."
    },
    {
      icon: <FaCheckCircle />,
      title: "Ownership & Accountability",
      description: "We take full responsibility for the software we deliver, standing behind our work with confidence and dedication."
    },
    {
      icon: <FaAward />,
      title: "Enterprise-grade Excellence",
      description: "We design and build systems that meet rigorous enterprise standards while remaining adaptable and user-friendly."
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>About Us - Greyquill Software | Our Team & Values</title>
        <meta name="description" content="Meet the Greyquill Software team - industry veterans dedicated to transforming business processes through enterprise software solutions." />
        <link rel="canonical" href="https://greyquill.io/about-us" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Who We Are</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">About Greyquill Software</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A team of industry veterans dedicated to transforming business processes through thoughtful, well-crafted enterprise software solutions.
        </p>
      </header>

      {/* Our Story */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h2 className="text-2xl font-tektur text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Greyquill Software was founded by enterprise software veterans who shared a vision: to create business software that actually works the way businesses do.
          </p>
          <p className="text-gray-600 mb-4">
            After years of witnessing companies struggle with rigid, poorly-designed systems that hindered rather than helped their operations, we decided to take a different approach.
          </p>
          <p className="text-gray-600">
            Today, we partner with forward-thinking organizations to design, build, and support software solutions that drive real business value.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Our Guiding Principles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-tektur text-[#0B4F88]">{value.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Our Expert Team</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-xl p-5 flex items-start gap-4"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="w-14 h-14 rounded-full bg-[#0B4F88]/10 flex items-center justify-center text-[#0B4F88] font-bold text-xl flex-shrink-0">
                {member.name.substring(0, 1)}
              </div>
              <div>
                <h3 className="font-tektur text-gray-800">{member.name}</h3>
                <p className="text-[#0B4F88] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
                <p className="text-gray-500 text-xs mt-1">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Our Commitment to You</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          When you partner with Greyquill Software, we don't just deliver code and walk away. We stand behind our solutions with a commitment to excellence and ongoing support.
        </p>
        <p className="text-[#0B4F88] italic mb-6">
          "We take full responsibility for the software we create, ensuring it continues to drive value for your business year after year."
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default AboutUs;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const AboutUs = () => {
  // Team members data
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

  // Core values
  const coreValues = [
    {
      title: "Process First Approach",
      description: "We believe in understanding and optimizing business processes before implementing technology solutions. Our methodology ensures that technology serves your business goals, not the other way around."
    },
    {
      title: "Long-term Partnership",
      description: "We commit to walking alongside our clients throughout their entire journey, providing ongoing support, maintenance, and adaptation as business needs evolve."
    },
    {
      title: "Ownership & Accountability",
      description: "We take full responsibility for the software we deliver, standing behind our work with confidence and dedication to excellence."
    },
    {
      title: "Enterprise-grade Excellence",
      description: "Drawing from decades of combined experience, we design and build systems that meet the rigorous standards of enterprise environments while remaining adaptable and user-friendly."
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
      <Helmet>
        <title>About Us - Greyquill Software | Our Team & Values</title>
        <meta name="description" content="Meet the Greyquill Software team - industry veterans dedicated to transforming business processes through enterprise software solutions. Learn about our process-first approach." />
        <link rel="canonical" href="https://greyquill.io/about-us" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">About Greyquill Software</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          A team of industry veterans and passionate technologists dedicated to transforming business processes through thoughtful, well-crafted enterprise software solutions.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="mb-20" aria-labelledby="story-heading">
        <h2 id="story-heading" className="text-3xl font-tektur text-gray-800 mb-6 text-center">
          Our Story
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg mb-4">
            Greyquill Software was founded by a group of enterprise software veterans who shared a vision: to create business software that actually works the way businesses do.
          </p>
          <p className="text-lg mb-4">
            After years of witnessing companies struggle with rigid, poorly-designed systems that hindered rather than helped their operations, we decided to take a different approach.
          </p>
          <p className="text-lg mb-4">
            We believe that true digital transformation starts with understanding the human processes at the heart of your business. Technology should adapt to your needs, not force you to adapt to its limitations.
          </p>
          <p className="text-lg">
            Today, we partner with forward-thinking organizations to design, build, and support software solutions that drive real business value, increase efficiency, and create better experiences for both employees and customers.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-20" aria-labelledby="values-heading">
        <h2 id="values-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Our Guiding Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <article
              key={index}
              className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-tektur text-blue-700 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20" aria-labelledby="team-heading">
        <h2 id="team-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Our Expert Team
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-4">
                <div
                  className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-blue-600"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold">{member.name.substring(0, 1)}</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-tektur text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-1"><strong>Expertise:</strong> {member.expertise}</p>
                <p className="text-gray-600"><strong>Experience:</strong> {member.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="mb-16" aria-labelledby="commitment-heading">
        <h2 id="commitment-heading" className="text-3xl font-tektur text-gray-800 mb-6 text-center">
          Our Commitment to You
        </h2>

        <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center">
          <p className="text-xl mb-6">
            When you partner with Greyquill Software, we don't just deliver code and walk away. We stand behind our solutions with a commitment to excellence and ongoing support.
          </p>
          <blockquote className="text-xl font-medium text-blue-700 mb-8">
            "We take full responsibility for the software we create, ensuring it continues to drive value for your business year after year."
          </blockquote>
          <BookDiscoveryCallButton />
        </div>
      </section>

      <nav className="text-center mt-12" aria-label="Page navigation">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          Return to Home
        </Link>
      </nav>
    </motion.main>
  );
};

export default AboutUs;

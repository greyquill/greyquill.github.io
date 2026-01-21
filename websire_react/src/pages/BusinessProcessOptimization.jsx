import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const BusinessProcessOptimization = () => {
  return (
    <main className="py-10">
      <Helmet>
        <title>Business Process Optimization - Greyquill Software</title>
        <meta name="description" content="Transform your business with proven process optimization strategies. Streamline workflows, enhance team performance, and drive measurable results with Greyquill Software." />
        <link rel="canonical" href="https://greyquill.io/business-process-optimization" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Services</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          Business Process Optimization
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Unlock your business potential with proven strategies that streamline operations and drive measurable results.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <p className="text-lg text-gray-600 mb-4">
            Have you ever wondered what makes some consulting firms stand out while others struggle to keep up?
            The secret isn't just about having the right tools or processes—it's about how you use them to create
            real value for your clients.
          </p>
          <p className="text-gray-600">
            Let's explore how top-performing businesses are transforming their operations
            and delivering exceptional results through strategic process optimization.
          </p>
        </div>
      </section>

      {/* Core Practices */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaLightbulb />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Building Your Foundation</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Think of your business processes as the foundation of your house. The stronger the foundation,
          the more you can build on top of it. Here's what we've seen work really well for successful firms:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">Project Framework</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Create a clear roadmap for your projects—from the first meeting to final delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Use proven methods like Agile or Scrum to keep your team aligned and moving forward</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Keep everyone on the same page with smart project management tools</span>
              </li>
            </ul>
          </div>

          <div
            className="rounded-xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">Team Optimization</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Get to know your team's strengths and match them to the right projects</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Keep your team engaged by making sure everyone has meaningful work</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Help your team grow by sharing knowledge and skills</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl p-5"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <h3 className="font-tektur text-[#0B4F88] mb-3">Creating Value That Matters</h3>
          <p className="text-gray-600 mb-4">The best firms focus on what really matters to their clients:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2 text-gray-600">
              <FaArrowRight className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Charge based on the value you create, not just the time you spend</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <FaArrowRight className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Package your services in ways that make sense for your clients</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <FaArrowRight className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Build lasting relationships with ongoing support and guidance</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <FaArrowRight className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Start with a discovery session to understand your client's needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Management */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaCogs />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Making Your Processes Work Better</h2>
        </div>

        <p className="text-gray-600 mb-6">
          In terms of management, a good analogy is a well-oiled machine. When everything works together smoothly,
          you get better results with less effort. Here's how we help businesses improve their processes:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-[#0B4F88] font-bold">1.</span>
            <span>Take a close look at how things are working now—what's working well and what's not?</span>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-[#0B4F88] font-bold">2.</span>
            <span>Find the bottlenecks and slow spots that are holding you back</span>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-[#0B4F88] font-bold">3.</span>
            <span>Create a clear plan to make things run more smoothly</span>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <span className="text-[#0B4F88] font-bold">4.</span>
            <span>Keep an eye on how things are going and make improvements along the way</span>
          </div>
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Real Results That Matter</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Get More Done', desc: 'Find ways to work smarter, not harder, and save money in the process' },
            { title: 'Work Faster', desc: 'Speed up your work with better processes and helpful tools' },
            { title: 'Stay on Track', desc: 'Make sure everything you do helps you reach your goals' },
            { title: 'Reduce Risks', desc: 'Spot potential problems before they happen and handle them smoothly' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <h4 className="font-tektur text-[#0B4F88] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Integration */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaChartLine />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Making Technology Work for You</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Technology should make your life easier, not harder. Here's how to use it effectively:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-tektur text-[#0B4F88] mb-4">Smart Automation</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Use tools to handle the boring stuff, so you can focus on what matters</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Give your team tools that help them do their best work</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Use smart tools to give your clients a better experience</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-tektur text-[#0B4F88] mb-4">Data-Driven Decisions</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Use analytics to understand what's happening in your business</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Track progress and adjust as needed</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                <span>Listen to feedback to make your services better</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Relationships */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaUsers />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Building Strong Client Relationships</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Your clients are the heart of your business. Here's how to build lasting relationships:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <FaLightbulb />, title: 'Share Your Knowledge', desc: 'Write helpful articles and guides that show your expertise' },
            { icon: <FaUsers />, title: 'Connect with Your Community', desc: 'Host events and webinars to share what you know' },
            { icon: <FaArrowRight />, title: 'Show Real Value', desc: 'Help clients see how your solutions make a difference' },
            { icon: <FaChartLine />, title: 'Stay Connected', desc: 'Use social media to share insights and stay in touch' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <h4 className="font-tektur text-[#0B4F88] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Growth */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaChartLine />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Staying Ahead of the Game</h2>
        </div>

        <p className="text-gray-600 mb-6">
          The business world is always changing. Here's how to stay ahead:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'Going Green', desc: 'Help clients with sustainability and social responsibility' },
            { title: 'Going Global', desc: 'Work with clients around the world to grow your reach' },
            { title: 'Flexible Working', desc: 'Mix in-person and online services to meet client needs' },
            { title: 'Digital First', desc: 'Use the latest technology to stay competitive' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg"
              style={{ borderLeft: '3px solid #0B4F88' }}
            >
              <div>
                <h4 className="font-tektur text-[#0B4F88] mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h3 className="font-tektur text-[#0B4F88] mb-4">Growing Your Business</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Build systems that help you grow without getting overwhelmed</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Create a clear vision that guides your team's decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Look beyond just money to measure how well you're doing</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span>Focus on what you do best and get help with the rest</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          The path to success isn't about following a rigid formula—it's about finding the right mix of proven strategies that work for you.
          Start with the tools that will give you the biggest impact today, and build from there.
        </p>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          The most successful businesses we work with are the ones that take that first step forward.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default BusinessProcessOptimization;

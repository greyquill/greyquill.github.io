import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight, FaRobot, FaShieldAlt, FaServer } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "eu-ai-act-what-enterprises-need-to-know",
      title: "A Near-Miss with the EU AI Act: Lessons from Our Client Engagement",
      excerpt: "When a client's AI hiring tool nearly violated regulations weeks before deployment, it changed how we approach every AI project. Here's what we learned and what it means for enterprises.",
      author: "Greyquill Team",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "AI Governance",
      icon: <FaShieldAlt />,
      featured: true
    },
    {
      id: 2,
      slug: "on-premise-vs-cloud-ai-making-the-right-choice",
      title: "Why We Recommended $180K in GPU Servers Over Cloud AI",
      excerpt: "A healthcare client's clinical documentation project challenged the assumption that cloud is always the right answer. Here's the analysis that led to an on-premise recommendation—and the results six months later.",
      author: "Greyquill Team",
      date: "January 8, 2026",
      readTime: "10 min read",
      category: "AI Strategy",
      icon: <FaServer />,
      featured: false
    },
    {
      id: 3,
      slug: "building-ai-governance-from-scratch",
      title: "Building AI Governance: What Two Failed Attempts Taught Us",
      excerpt: "Our first governance framework was comprehensive but unused. Our second was lightweight but ineffective. The third attempt found the balance. Here's how it evolved.",
      author: "Greyquill Team",
      date: "December 28, 2025",
      readTime: "12 min read",
      category: "AI Governance",
      icon: <FaRobot />,
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="py-10">
      <Helmet>
        <title>Blog - AI Insights & Enterprise Technology | Greyquill Software</title>
        <meta name="description" content="Real stories and lessons learned from building AI systems for enterprises. No fluff—just honest insights on what works, what doesn't, and what we learned the hard way." />
        <link rel="canonical" href="https://greyquill.io/blog" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">From the Field</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from building AI systems. What worked, what didn't, and what we learned along the way.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="block group"
          >
            <article
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.12)'
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#0B4F88] text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    Featured
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
                    style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}
                  >
                    {featuredPost.icon}
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-tektur text-gray-800 mb-4 group-hover:text-[#0B4F88] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg italic">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-[#0B4F88]" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#0B4F88]" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[#0B4F88]" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-[#0B4F88] font-medium group-hover:gap-3 transition-all">
                    Read the full story
                    <FaArrowRight className="text-sm" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Regular Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6">More Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <article
                className="rounded-xl overflow-hidden h-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                  boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
                }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
                      style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}
                    >
                      {post.icon}
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-tektur text-gray-800 mb-3 group-hover:text-[#0B4F88] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 italic">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaUser />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-[#0B4F88] font-medium group-hover:gap-3 transition-all">
                    Read the full story
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <div className="text-center">
            <h3 className="text-xl font-tektur text-gray-800 mb-2">Get New Stories in Your Inbox</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              We write when we have something worth saying—usually once or twice a month. No filler content.
            </p>
            <form className="flex flex-col md:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="blog-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="blog-email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                required
              />
              <button
                type="submit"
                className="bg-[#0B4F88] text-white px-6 py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>
          </div>
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
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Facing a Similar Challenge?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sometimes reading about someone else's experience helps. Sometimes you need to talk through your own situation.
          Either way, we're here if you want to chat.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default Blog;

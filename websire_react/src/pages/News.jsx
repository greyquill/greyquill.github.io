import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendarAlt, FaNewspaper, FaLightbulb } from 'react-icons/fa';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const News = () => {
  const newsArticles = [
    {
      id: 4,
      title: "Introducing Our Business Process Optimization Framework",
      date: "December 5, 2023",
      category: "Methodology",
      icon: <FaLightbulb className="text-[#0B4F88]" />,
      summary: "Greyquill unveils its comprehensive Business Process Optimization Framework, designed to help organizations identify and eliminate inefficiencies.",
      content: "After years of refinement through client engagements, we're proud to formally introduce our Business Process Optimization Framework. This structured methodology helps organizations systematically identify, analyze, and eliminate inefficiencies in their core business processes.",
      tags: ["Business Process", "Optimization", "Methodology", "Framework"]
    },
    {
      id: 1,
      title: "Greyquill Launches New Cloud Consulting Service",
      date: "March 25, 2024",
      category: "Service Launch",
      icon: <FaNewspaper className="text-[#0B4F88]" />,
      summary: "We're excited to announce the launch of our comprehensive Cloud Consulting service, helping businesses navigate cloud migration and optimization.",
      content: "After months of preparation and building on our distributed systems expertise, we're proud to introduce our comprehensive Cloud Consulting service. This new offering helps businesses at every stage of their cloud journey—from initial strategy and assessment to migration, optimization, and ongoing management.",
      tags: ["Cloud", "Consulting", "AWS", "Azure", "GCP"]
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>News & Updates - Greyquill Software</title>
        <meta name="description" content="Stay current with the latest announcements, achievements, and insights from Greyquill Software." />
        <link rel="canonical" href="https://greyquill.io/news" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Stay Informed</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">News & Updates</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The latest announcements, achievements, and insights from Greyquill Software.
        </p>
      </header>

      {/* News Articles */}
      <section className="mb-12" aria-labelledby="news-heading">
        <h2 id="news-heading" className="text-2xl font-tektur text-gray-800 mb-6">Latest News</h2>

        <div className="space-y-6">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 p-6 flex flex-col items-center justify-center text-center"
                  style={{ background: 'rgba(11, 79, 136, 0.04)' }}
                >
                  <div className="text-3xl mb-2">{article.icon}</div>
                  <div className="text-[#0B4F88] font-tektur mb-2">{article.category}</div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-tektur text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-3">{article.summary}</p>
                  <p className="text-gray-600 text-sm mb-4">{article.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[#0B4F88] text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ background: 'rgba(11, 79, 136, 0.1)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="rounded-xl p-8 mb-12"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4 text-center">Stay Updated</h2>
        <p className="text-center text-gray-600 mb-6">
          Subscribe to receive the latest updates, industry insights, and exclusive content.
        </p>
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
              required
            />
            <button
              type="submit"
              className="bg-[#0B4F88] text-white px-6 py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </section>

      {/* Press Contact */}
      <section className="mb-12 text-center">
        <h3 className="text-xl font-tektur text-[#0B4F88] mb-3">Press Inquiries</h3>
        <p className="text-gray-600 mb-4">
          For media inquiries, interview requests, or additional information, please contact our communications team.
        </p>
        <a
          href="mailto:press@greyquill.com"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black transition-colors"
        >
          Contact Media Relations
        </a>
      </section>

      {/* CTA */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h3 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Business?</h3>
        <p className="text-gray-600 mb-6">
          Schedule a discovery call to discuss how Greyquill can help you achieve your business goals.
        </p>
        <BookDiscoveryCallButton />
      </section>
    </main>
  );
};

export default News;

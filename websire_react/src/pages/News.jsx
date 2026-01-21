import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendarAlt, FaNewspaper, FaLightbulb } from 'react-icons/fa';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const News = () => {
  // News articles data
  const newsArticles = [
    {
      id: 4,
      title: "Introducing Our Business Process Optimization Framework",
      date: "December 5, 2023",
      category: "Methodology",
      icon: <FaLightbulb className="text-blue-500" aria-hidden="true" />,
      summary: "Greyquill unveils its comprehensive Business Process Optimization Framework, designed to help organizations identify and eliminate inefficiencies.",
      content: "After years of refinement through client engagements, we're proud to formally introduce our Business Process Optimization Framework. This structured methodology helps organizations systematically identify, analyze, and eliminate inefficiencies in their core business processes. Unlike approaches that focus solely on technology, our framework examines the intersection of people, processes, and systems to deliver holistic improvements. The framework includes specialized assessment tools, workshop formats, and implementation roadmaps tailored to different industry contexts.",
      tags: ["Business Process", "Optimization", "Methodology", "Framework"]
    },
    {
      id: 1,
      title: "Greyquill Launches New Cloud Consulting Service",
      date: "March 25, 2024",
      category: "Service Launch",
      icon: <FaNewspaper className="text-blue-500" aria-hidden="true" />,
      summary: "We're excited to announce the launch of our comprehensive Cloud Consulting service, helping businesses navigate the complexities of cloud migration and optimization.",
      content: "After months of preparation and building on our distributed systems expertise, we're proud to introduce our comprehensive Cloud Consulting service. This new offering helps businesses at every stage of their cloud journey—from initial strategy and assessment to migration, optimization, and ongoing management. Our team of certified cloud architects brings experience across AWS, Azure, and Google Cloud platforms to deliver tailored solutions that balance performance, cost, and security.",
      tags: ["Cloud", "Consulting", "AWS", "Azure", "GCP"]
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
        <title>News & Updates - Greyquill Software</title>
        <meta name="description" content="Stay current with the latest announcements, achievements, and insights from Greyquill Software. Read about our new services, methodologies, and company updates." />
        <link rel="canonical" href="https://greyquill.io/news" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">News & Updates</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          Stay current with the latest announcements, achievements, and insights from Greyquill Software.
        </p>
      </header>

      {/* Featured News */}
      <section className="mb-16" aria-labelledby="news-heading">
        <h2 id="news-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Latest News
        </h2>

        {newsArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                <div className="text-center">
                  {article.icon}
                  <div className="mt-4 text-blue-700 font-tektur">{article.category}</div>
                  <div className="flex items-center justify-center mt-2 text-gray-500">
                    <FaCalendarAlt className="mr-2" aria-hidden="true" />
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-tektur text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <div className="text-gray-700 mb-5">
                  <p>{article.content}</p>
                </div>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tags">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded" role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Newsletter Subscription */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 shadow-md" aria-labelledby="newsletter-heading">
        <h2 id="newsletter-heading" className="text-2xl font-tektur text-gray-800 mb-4 text-center">Stay Updated</h2>
        <p className="text-center text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates, industry insights, and exclusive content.
        </p>
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="newsletter-email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
      <section className="bg-white p-6 rounded-lg shadow mb-10 text-center" aria-labelledby="press-heading">
        <h3 id="press-heading" className="text-xl font-tektur text-blue-700 mb-3">Press Inquiries</h3>
        <p className="text-gray-600 mb-4">
          For media inquiries, interview requests, or additional information about Greyquill Software,
          please contact our communications team.
        </p>
        <a
          href="mailto:press@greyquill.com"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Contact Media Relations
        </a>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12 mb-8" aria-labelledby="cta-heading">
        <h3 id="cta-heading" className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Business?</h3>
        <p className="text-gray-600 mb-6">
          Schedule a discovery call to discuss how Greyquill can help you optimize your business processes
          and build software solutions that drive real value.
        </p>
        <BookDiscoveryCallButton />
      </section>
    </motion.main>
  );
};

export default News;

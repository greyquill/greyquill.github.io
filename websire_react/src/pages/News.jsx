import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaNewspaper, FaAward, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const News = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  // News articles data
  const newsArticles = [
    {
      id: 4,
      title: "Introducing Our Business Process Optimization Framework",
      date: "December 5, 2023",
      category: "Methodology",
      icon: <FaLightbulb className="text-blue-500" />,
      summary: "Greyquill unveils its comprehensive Business Process Optimization Framework, designed to help organizations identify and eliminate inefficiencies.",
      content: "After years of refinement through client engagements, we're proud to formally introduce our Business Process Optimization Framework. This structured methodology helps organizations systematically identify, analyze, and eliminate inefficiencies in their core business processes. Unlike approaches that focus solely on technology, our framework examines the intersection of people, processes, and systems to deliver holistic improvements. The framework includes specialized assessment tools, workshop formats, and implementation roadmaps tailored to different industry contexts.",
      image: "/images/process-framework.jpg",
      tags: ["Business Process", "Optimization", "Methodology", "Framework"]
    },
    {
      id: 1,
      title: "Greyquill Launches New Cloud Consulting Service",
      date: "March 25, 2024",
      category: "Service Launch",
      icon: <FaNewspaper className="text-blue-500" />,
      summary: "We're excited to announce the launch of our comprehensive Cloud Consulting service, helping businesses navigate the complexities of cloud migration and optimization.",
      content: "After months of preparation and building on our distributed systems expertise, we're proud to introduce our comprehensive Cloud Consulting service. This new offering helps businesses at every stage of their cloud journey—from initial strategy and assessment to migration, optimization, and ongoing management. Our team of certified cloud architects brings experience across AWS, Azure, and Google Cloud platforms to deliver tailored solutions that balance performance, cost, and security.",
      image: "/images/cloud-consulting.jpg",
      tags: ["Cloud", "Consulting", "AWS", "Azure", "GCP"]
    },
    // {
    //   id: 2,
    //   title: "Case Study: Financial Services Modernization Success",
    //   date: "February 18, 2024",
    //   category: "Case Study",
    //   icon: <FaChartLine className="text-blue-500" />,
    //   summary: "Learn how we helped a leading financial services firm modernize their legacy applications, resulting in 40% faster processing times and significant cost savings.",
    //   content: "We recently completed a significant legacy modernization project for a financial services client that had been struggling with systems dating back to the early 2000s. Through our structured approach, we identified critical business processes, preserved valuable business logic, and rebuilt the application using modern microservices architecture. The result was a 40% improvement in transaction processing speed, enhanced security compliance, and estimated operational cost savings of $1.2M annually. The new system allows for rapid feature deployment that previously took months to implement.",
    //   image: "/images/financial-case-study.jpg",
    //   tags: ["Financial Services", "Legacy Modernization", "Microservices", "Case Study"]
    // },
    // {
    //   id: 3,
    //   title: "Greyquill Recognized for Excellence in Software Development",
    //   date: "January 10, 2024",
    //   category: "Award",
    //   icon: <FaAward className="text-blue-500" />,
    //   summary: "Greyquill Software has been named a top custom software development firm in the region, recognized for quality, innovation, and client satisfaction.",
    //   content: "We're honored to announce that Greyquill Software has been recognized as one of the top custom software development companies in the region by TechReview. This recognition highlights our team's commitment to delivering high-quality solutions that solve real business problems. The award particularly noted our process-first approach, emphasis on long-term partnerships, and the measurable business impact achieved for our clients. We're grateful to our amazing clients who participated in the review process and shared their positive experiences working with our team.",
    //   image: "/images/award-recognition.jpg",
    //   tags: ["Award", "Recognition", "Software Development"]
    // },

    // {
    //   id: 5,
    //   title: "Greyquill Expands Team with Key Industry Experts",
    //   date: "November 15, 2023",
    //   category: "Company News",
    //   icon: <FaUsers className="text-blue-500" />,
    //   summary: "We're welcoming several industry veterans to our growing team, adding expertise in healthcare, finance, and manufacturing domains.",
    //   content: "Greyquill Software is expanding its team with the addition of several domain experts from healthcare, financial services, and manufacturing sectors. These strategic hires bring deep industry knowledge that enhances our ability to deliver truly transformative solutions for clients in these verticals. The new team members include former technology leaders from major healthcare networks, financial institutions, and manufacturing enterprises. Their practical experience with industry-specific challenges and regulations will help our clients navigate complex digital transformation journeys with greater confidence and reduced risk.",
    //   image: "/images/team-expansion.jpg",
    //   tags: ["Team", "Growth", "Domain Expertise", "Hiring"]
    // },
  ];

  return (
    <div className="py-10">
      <div className="text-left mb-10 left-0">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">News & Updates</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          Stay current with the latest announcements, achievements, and insights from Greyquill Software.
        </p>
      </motion.div>

      {/* Featured News */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-tektur text-gray-800 mb-8 text-center"
        >
          Latest News
        </motion.h2>

        {newsArticles.map((article, index) => (
          <motion.div
            key={article.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8">
                <div className="text-center">
                  {article.icon}
                  <div className="mt-4 text-blue-700 font-tektur">{article.category}</div>
                  <div className="flex items-center justify-center mt-2 text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-tektur text-gray-800 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <div className="text-gray-700 mb-5">
                  <p>{article.content}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Newsletter Subscription */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 shadow-md"
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4 text-center">Stay Updated</h2>
        <p className="text-center text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates, industry insights, and exclusive content.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </motion.section>

      {/* Press Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-lg shadow mb-10 text-center"
      >
        <h3 className="text-xl font-tektur text-blue-700 mb-3">Press Inquiries</h3>
        <p className="text-gray-600 mb-4">
          For media inquiries, interview requests, or additional information about Greyquill Software,
          please contact our communications team.
        </p>
        <a href="mailto:press@greyquill.com" className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition duration-300">
          Contact Media Relations
        </a>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-12 mb-8"
      >
        <h3 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Business?</h3>
        <p className="text-gray-600 mb-6">
          Schedule a discovery call to discuss how Greyquill can help you optimize your business processes
          and build software solutions that drive real value.
        </p>
        <BookDiscoveryCallButton />
      </motion.div>
    </div>
  );
};

export default News;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setSubscribed(true);
    setEmail('');
  };

  const services = [
    { name: "Enterprise AI Enablement", path: "/enterprise-ai-enablement" },
    { name: "Custom Software Development", path: "/custom-software-development" },
    { name: "Business Process Optimization", path: "/business-process-optimization" },
    { name: "Legacy Application Modernization", path: "/legacy-application-modernization" },
    { name: "Cloud & Distributed Systems", path: "/distributed-systems-cloud-consulting" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Process", path: "/overall-process" },
    { name: "Industries", path: "/industries" },
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" }
  ];

  const legalLinks = [
    { name: "Policies", path: "/policies" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-[#0a1628] text-gray-300 py-12 px-4 mt-8" role="contentinfo">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Company Info & Contact */}
        <div>
          <h3 className="font-tektur text-white text-lg mb-4">Greyquill Software</h3>
          <p className="text-sm mb-4 leading-relaxed text-gray-400">
            Clarity before code. We eliminate the #1 cause of software project failure through The Greyquill Method™.
          </p>
          <address className="not-italic space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#5a9fd4] flex-shrink-0" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#5a9fd4] flex-shrink-0" />
              <a href="tel:+918050522809" className="hover:text-white transition-colors">+91 80 5052 2809</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#5a9fd4] flex-shrink-0" />
              <a href="mailto:hello@greyquill.io" className="hover:text-white transition-colors">hello@greyquill.io</a>
            </div>
          </address>
          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/company/greyquill"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0B4F88] hover:text-white transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/greyquill"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0B4F88] hover:text-white transition-colors"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-tektur text-white text-lg mb-4">Services</h3>
          <nav aria-label="Services navigation">
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-tektur text-white text-lg mb-4">Company</h3>
          <nav aria-label="Company navigation">
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h4 className="font-semibold text-gray-300 text-sm mt-5 mb-2">Legal & Support</h4>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-tektur text-white text-lg mb-4">Stay Updated</h3>
          <p className="text-sm mb-4 text-gray-400">
            Get insights on AI, software strategy, and lessons from real projects. No spam—just value.
          </p>
          {subscribed ? (
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 text-sm text-green-400">
              Thanks for subscribing! We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="footer-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0B4F88] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#0B4F88] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#0d5ea3] transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <FaArrowRight className="text-xs" />
              </button>
            </form>
          )}
          <p className="text-xs text-gray-500 mt-2">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span className="text-gray-400">© {new Date().getFullYear()} Greyquill Software. All rights reserved.</span>
          <p className="text-gray-500">
            Built with <span className="text-[#5a9fd4]">clarity</span> in Bengaluru, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
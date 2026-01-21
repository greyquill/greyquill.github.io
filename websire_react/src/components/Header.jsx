import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CompanyLogo.png';
import { FaChevronDown, FaRobot, FaCogs, FaCode, FaServer, FaCloud, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    {
      title: "Enterprise AI Enablement",
      description: "Safe, compliant AI transformation",
      path: "/enterprise-ai-enablement",
      icon: <FaRobot />
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations with AI",
      path: "/business-process-optimization",
      icon: <FaCogs />
    },
    {
      title: "Custom Software Development",
      description: "Purpose-built solutions",
      path: "/custom-software-development",
      icon: <FaCode />
    },
    {
      title: "Legacy Application Modernization",
      description: "Transform outdated systems",
      path: "/legacy-application-modernization",
      icon: <FaServer />
    },
    {
      title: "Distributed Systems & Cloud",
      description: "Scalable cloud architectures",
      path: "/distributed-systems-cloud-consulting",
      icon: <FaCloud />
    }
  ];

  const industries = [
    { name: "Financial Services", path: "/industries#financial-services" },
    { name: "Healthcare", path: "/industries#healthcare" },
    { name: "Manufacturing", path: "/industries#manufacturing" },
    { name: "Logistics & Supply Chain", path: "/industries#logistics" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="py-4 border-b border-gray-200" role="banner">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Greyquill Software - Home" onClick={closeDropdown}>
            <img src={logo} alt="Greyquill Software" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          ref={dropdownRef}
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('industries')}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeDropdown === 'industries'
                  ? 'text-[#0B4F88] bg-[#0B4F88]/5'
                  : 'text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5'
              }`}
              aria-expanded={activeDropdown === 'industries'}
              aria-haspopup="true"
            >
              Industries
              <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                {industries.map((industry, index) => (
                  <Link
                    key={index}
                    to={industry.path}
                    onClick={closeDropdown}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0B4F88]/5 hover:text-[#0B4F88] transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('services')}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeDropdown === 'services'
                  ? 'text-[#0B4F88] bg-[#0B4F88]/5'
                  : 'text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5'
              }`}
              aria-expanded={activeDropdown === 'services'}
              aria-haspopup="true"
            >
              Services
              <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'services' && (
              <div
                className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={closeDropdown}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-[#0B4F88]/5 transition-colors group"
                  >
                    <span className="text-[#0B4F88] mt-0.5 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-[#0B4F88]">
                        {service.title}
                      </p>
                      <p className="text-xs text-gray-500">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Case Studies */}
          <Link
            to="/case-studies"
            onClick={closeDropdown}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg transition-colors"
          >
            Case Studies
          </Link>

          {/* Blog */}
          <Link
            to="/blog"
            onClick={closeDropdown}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg transition-colors"
          >
            Blog
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 mx-2"></div>

          {/* Customer Login */}
          <Link
            to="/login"
            onClick={closeDropdown}
            className="px-3 py-2 text-sm font-medium text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg transition-colors"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#0B4F88] transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-gray-200" aria-label="Mobile navigation">
          <div className="space-y-1">
            {/* Industries Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('industries-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
              >
                Industries
                <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'industries-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'industries-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      to={industry.path}
                      onClick={closeDropdown}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B4F88] rounded-lg"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('services-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
              >
                Services
                <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeDropdown}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B4F88] rounded-lg"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Case Studies Mobile */}
            <Link
              to="/case-studies"
              onClick={closeDropdown}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
            >
              Case Studies
            </Link>

            {/* Blog Mobile */}
            <Link
              to="/blog"
              onClick={closeDropdown}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
            >
              Blog
            </Link>

            {/* Login Mobile */}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <Link
                to="/login"
                onClick={closeDropdown}
                className="block px-3 py-2 text-sm font-medium text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
              >
                Customer Login
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CompanyLogo.png';
import { FaChevronDown, FaRobot, FaCogs, FaCode, FaServer, FaCloud, FaBars, FaTimes, FaCompass } from 'react-icons/fa';

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    {
      title: "Discovery Workshop",
      description: "Start here—clarity before code",
      path: "/discovery-workshop",
      icon: <FaCompass />,
      featured: true
    },
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
    {
      name: "Healthcare",
      path: "/industries#healthcare",
      hasSubMenu: true,
      products: [
        {
          name: "Umami TLabs",
          url: "https://umami.greyquill.io/",
          description: "AI-powered healthcare management platform for medical practices"
        }
      ]
    },
    { name: "Manufacturing", path: "/industries#manufacturing" },
    { name: "Logistics & Supply Chain", path: "/industries#logistics" }
  ];

  const products = [
    {
      name: "ClarityAI",
      url: "https://clarity.greyquill.io/",
      description: "AI-powered requirements analysis"
    }
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
          {/* Products */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('products')}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeDropdown === 'products'
                  ? 'text-[#0B4F88] bg-[#0B4F88]/5'
                  : 'text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5'
              }`}
              aria-expanded={activeDropdown === 'products'}
              aria-haspopup="true"
            >
              Products
              <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'products' && (
              <div
                className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                {products.map((product, index) => (
                  <a
                    key={index}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDropdown}
                    className="block px-4 py-3 hover:bg-[#0B4F88]/5 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-800 hover:text-[#0B4F88]">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{product.description}</p>
                  </a>
                ))}
              </div>
            )}
          </div>

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
                className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                {industries.map((industry, index) => (
                  <React.Fragment key={index}>
                    {industry.hasSubMenu ? (
                      <div>
                        <Link
                          to={industry.path}
                          onClick={closeDropdown}
                          className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-[#0B4F88]/5 hover:text-[#0B4F88] transition-colors"
                        >
                          {industry.name}
                        </Link>
                        {industry.products && (
                          <div className="pl-4 pr-4 pb-2">
                            {industry.products.map((product, prodIndex) => (
                              <a
                                key={prodIndex}
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeDropdown}
                                className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-[#0B4F88]/5 transition-colors relative mt-3"
                              >
                                <span className="absolute -top-2 right-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full border border-gray-200">
                                  Featured Solution
                                </span>
                                <p className="text-sm font-medium text-gray-800 hover:text-[#0B4F88]">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">{product.description}</p>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={industry.path}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-[#0B4F88]/5 hover:text-[#0B4F88] transition-colors"
                      >
                        {industry.name}
                      </Link>
                    )}
                  </React.Fragment>
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
                  <React.Fragment key={index}>
                    <Link
                      to={service.path}
                      onClick={closeDropdown}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-[#0B4F88]/5 transition-colors group ${
                        service.featured ? 'bg-[#0B4F88]/5' : ''
                      }`}
                    >
                      <span className="text-[#0B4F88] mt-0.5 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>
                      <div>
                        <p className={`text-sm font-medium group-hover:text-[#0B4F88] ${
                          service.featured ? 'text-[#0B4F88]' : 'text-gray-800'
                        }`}>
                          {service.title}
                          {service.featured && (
                            <span className="ml-2 text-xs bg-[#0B4F88] text-white px-1.5 py-0.5 rounded">
                              Start Here
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                    </Link>
                    {service.featured && <div className="border-b border-gray-100 mx-4"></div>}
                  </React.Fragment>
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
            {/* Products Mobile */}
            <div>
              <button
                onClick={() => toggleDropdown('products-mobile')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4F88] hover:bg-[#0B4F88]/5 rounded-lg"
              >
                Products
                <FaChevronDown className={`text-xs transition-transform ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="pl-4 mt-1 space-y-1">
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeDropdown}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B4F88] rounded-lg"
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{product.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

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
                    <React.Fragment key={index}>
                      <Link
                        to={industry.path}
                        onClick={closeDropdown}
                        className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#0B4F88] rounded-lg"
                      >
                        {industry.name}
                      </Link>
                      {industry.hasSubMenu && industry.products && (
                        <div className="pl-3 space-y-1 mt-2">
                          {industry.products.map((product, prodIndex) => (
                            <a
                              key={prodIndex}
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeDropdown}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B4F88] rounded-lg bg-gray-50 relative mt-3"
                            >
                              <span className="absolute -top-2 right-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full border border-gray-200">
                                Featured Solution
                              </span>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{product.description}</div>
                            </a>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
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
                      className={`block px-3 py-2 text-sm rounded-lg ${
                        service.featured
                          ? 'text-[#0B4F88] font-medium bg-[#0B4F88]/5'
                          : 'text-gray-600 hover:text-[#0B4F88]'
                      }`}
                    >
                      {service.title}
                      {service.featured && <span className="text-xs ml-1">(Start Here)</span>}
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

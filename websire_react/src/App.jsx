import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Banner from './components/Banner';
import GreyquillMethod from './components/GreyquillMethod';
import Services from './components/Services';
import Description from './components/Description';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookDiscoveryCallButton from './components/BookDiscoveryCallButton';

// Lazy load pages for code splitting
const DiscoveryProcess = lazy(() => import('./pages/DiscoveryProcess'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Login = lazy(() => import('./pages/Login'));
const LoginAssistance = lazy(() => import('./pages/LoginAssistance'));
const BusinessProcessOptimization = lazy(() => import('./pages/BusinessProcessOptimization'));
const CustomSoftwareDevelopment = lazy(() => import('./pages/CustomSoftwareDevelopment'));
const LegacyApplicationModernization = lazy(() => import('./pages/LegacyApplicationModernization'));
const DistributedSystemsCloudConsulting = lazy(() => import('./pages/DistributedSystemsCloudConsulting'));
const OverallProcess = lazy(() => import('./pages/OverallProcess'));
const Policies = lazy(() => import('./pages/Policies'));
const News = lazy(() => import('./pages/News'));
const Support = lazy(() => import('./pages/Support'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]" role="status" aria-label="Loading page">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B4F88]"></div>
    <span className="sr-only">Loading...</span>
  </div>
);
// Create a ScrollToTop component that will handle scrolling on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Greyquill Software - Clarity Before Code | Enterprise Software That Delivers</title>
        <meta name="description" content="We guarantee process clarity before writing a single line of code. Through The Greyquill Method™, we eliminate the #1 cause of software project failure—unclear requirements." />
        <link rel="canonical" href="https://greyquill.io/" />
      </Helmet>

      {/* Hero Section with Positioning */}
      <Banner />

      {/* Primary CTA */}
      <BookDiscoveryCallButton />

      {/* The Greyquill Method Section with ICP */}
      <GreyquillMethod />

      {/* Secondary CTA */}
      <BookDiscoveryCallButton />

      {/* Services Overview */}
      <section className="py-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">What We Build</p>
          <h2 className="text-3xl font-tektur text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From process optimization to custom development, we transform business challenges into success stories.
          </p>
        </div>
        <Services />
      </section>

      {/* Description and Navigation */}
      <Description />
      <Navigation />

      {/* Final CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Share your business challenges with us. Let's discover if we're the right fit—no pressure, just clarity.
        </p>
        <BookDiscoveryCallButton />
      </section>

      <div className="h-24 bg-gradient-to-b from-white to-[#0B4F88]/10" aria-hidden="true"></div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0B4F88] text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-gray-600" id="main-content">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discovery-process" element={<DiscoveryProcess />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-assistance" element={<LoginAssistance />} />
            <Route path="/business-process-optimization" element={<BusinessProcessOptimization />} />
            <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
            <Route path="/legacy-application-modernization" element={<LegacyApplicationModernization />} />
            <Route path="/distributed-systems-cloud-consulting" element={<DistributedSystemsCloudConsulting />} />
            <Route path="/overall-process" element={<OverallProcess />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/news" element={<News />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
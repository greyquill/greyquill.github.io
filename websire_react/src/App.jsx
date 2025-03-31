import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Description from './components/Description';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BookDiscoveryCallButton from './components/BookDiscoveryCallButton';
import DiscoveryProcess from './pages/DiscoveryProcess';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import LoginAssistance from './pages/LoginAssistance';
import BusinessProcessOptimization from './pages/BusinessProcessOptimization';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
import LegacyApplicationModernization from './pages/LegacyApplicationModernization';
import DistributedSystemsCloudConsulting from './pages/DistributedSystemsCloudConsulting';
import OverallProcess from './pages/OverallProcess';
import Policies from './pages/Policies';
import News from './pages/News';
import Support from './pages/Support';
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
    <>
      <Banner />
      <h2 className="text-3xl font-tektur text-gray-800 text-center mt-8">Welcome to Greyquill Software</h2>
      <p className="text-xl font-titillium text-center mt-4">
        Enterprise software solutions that boost efficiency, transparency, and predictability
      </p>
      <p className="text-xl font-titillium text-center mt-4">
        We increase productivity, lower costs, and improve customer satisfaction by automating business processes
      </p>
      <p className="text-xl font-titillium text-center mt-8">
        Share your business challenges or goals with us, and let our expert team
        transform them into success stories <br/> <Link className="text-blue-500 font-bold hover:underline" to="/overall-process">Learn about our comprehensive approach</Link>
      </p>
      <BookDiscoveryCallButton />
      <Services />

      <Description />
      <Navigation />
      <BookDiscoveryCallButton />
      <div className="h-48 bg-blue-50 mt-8"></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="container mx-auto px-4 md:px-0 max-w-3xl text-gray-600">
        <Header />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
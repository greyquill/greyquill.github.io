import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Description from './components/Description';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto px-4 md:px-0 max-w-3xl text-gray-600">
      <Header />
      <Banner />
      <h2 className="text-3xl font-tektur text-gray-800 text-center mt-8">Welcome to Greyquill Software</h2>
      <p className="text-xl font-titillium text-center mt-4">
      Enterprise software solutions that boost efficiency, transparency, and predictability
      </p>
      <Services />
      <p className="text-xl font-titillium text-center mt-8">
        Share your business challenges or goals with us, and let our expert team
        transform them into success stories
      </p>
      <div className="text-center mt-6">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
          Book a free discovery session with Us
        </button>
      </div>
      <Description />
      <Navigation />
      <div className="h-48 bg-blue-50 mt-8"></div>
      <Footer />
    </div>
  );
}

export default App;
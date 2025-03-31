import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceLink = ({ title, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer text-center w-full">
      <button className="w-full flex items-center justify-between" onClick={handleClick}>
        <span className="text-gray-800 font-semibold">{title}</span>
        <span className="bg-gray-200 p-2 rounded-lg ml-2">
          <FaArrowRight className="text-gray-600" style={{ width: '.6em', height: '1em' }} />
        </span>
      </button>
    </div>
  );
};

function Services() {
  const services = [
    { title: "Business Process Optimization", path: "/business-process-optimization" },
    { title: "Custom Software Development", path: "/custom-software-development" },
    { title: "Legacy Applications Modernization", path: "/legacy-application-modernization" },
    { title: "Distributed Systems & Cloud Consulting", path: "/distributed-systems-cloud-consulting" }
  ];

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-tektur text-gray-800 text-center mt-15">Our Services</h1>
      <p className="text-gray-600 text-center mb-8">
        Click on a service to learn more
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceLink key={index} title={service.title} path={service.path} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg">
          <span className="text-gray-800 text-xl font-titillium">
            We prioritize <b>clarity in our implementation</b> and emphasize <b>thorough documentation</b> and <b>quality assurance</b>.
          </span>
          <div className="mt-8">
            <div className="flex justify-around">
              <div className="text-center">
                <i className="fas fa-globe w-8 h-8"></i>
                <p>Web</p>
              </div>
              <div className="text-center">
                <i className="fas fa-mobile-alt w-8 h-8"></i>
                <p>Mobile</p>
              </div>
              <div className="text-center">
                <i className="fab fa-apple w-8 h-8"></i>
                <p>Apple</p>
              </div>
              <div className="text-center">
                <i className="fab fa-android w-8 h-8"></i>
                <p>Android</p>
              </div>
              <div className="text-center">
                <i className="fas fa-desktop w-8 h-8"></i>
                <p>Desktop</p>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Services;
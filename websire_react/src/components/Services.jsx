import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <button className="text-gray-800 font-semibold" onClick={handleClick}>
        {title}
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
      <p className="text-xl font-bold font-titillium text-center m-4">
        A peek at our services
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
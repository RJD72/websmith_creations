import React from "react";
import ServiceCard from "./ServiceCard";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPencilRuler,
  FaSearch,
} from "react-icons/fa";

const ServicesContainer = () => {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Responsive websites built with modern technologies like React, HTML/CSS, and Tailwind CSS.",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using React Native, Expo, and NativeWind.",
      icon: FaMobileAlt,
    },
    {
      title: "Website Maintenance & Hosting",
      description:
        "Reliable hosting, updates, security enhancements, and regular backups for your website.",
      icon: FaServer,
    },
    {
      title: "UI/UX Optimization",
      description:
        "Improve user experience with thoughtful design, usability enhancements, and accessibility.",
      icon: FaPencilRuler,
    },
    {
      title: "SEO Strategies",
      description:
        "Optimize your website content for search engines, improving visibility and attracting visitors.",
      icon: FaSearch,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Services Offered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesContainer;

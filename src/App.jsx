import { useEffect } from "react";
import { useActiveSection } from "./hooks/useActiveSection";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import InfiniteMovingCardsComponent from "./components/InfiniteMovingCardsComponents";
import ServicesContainer from "./components/ServiceContainer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  const section = useActiveSection([
    "hero",
    "services",
    "about",
    "skills",
    "projects",
    "testimonials",
    "contact",
  ]);

  const titles = {
    hero: "WebSmith Creations | Affordable Web Development",
    services: "Services | WebSmith Creations",
    about: "About Rob Deer | WebSmith Creations",
    skills: "Skills & Tech Stack | WebSmith Creations",
    projects: "Portfolio Projects | WebSmith Creations",
    testimonials: "Client Testimonials | WebSmith Creations",
    contact: "Contact Rob Deer | WebSmith Creations",
  };

  const descriptions = {
    hero: "Affordable and custom websites built by Rob Deer. Helping small businesses launch SEO-optimized, mobile-ready digital solutions.",
    services:
      "Explore web development, SEO, mobile app creation, and maintenance services tailored for small businesses.",
    about:
      "Learn about Rob Deer — a self-taught web and mobile developer based in Ontario, passionate about solving real-world problems with code.",
    skills:
      "Discover the tech stack behind WebSmith Creations: React, Node.js, MongoDB, Firebase, and more.",
    projects:
      "Browse WebSmith Creations' portfolio including Huron BJJ, Timeless Rustic Acres, and a full-stack blog app.",
    testimonials:
      "See what clients are saying about Rob Deer and WebSmith Creations' quality work and collaborative approach.",
    contact:
      "Reach out to Rob Deer for affordable web development or mobile apps. Let’s build something together.",
  };

  useEffect(() => {
    document.title = titles[section] || "Websmith Creations";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptions[section] || "");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptions[section] || "";
      document.head.appendChild(meta);
    }
  }, [section]);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ServicesContainer /> <About />
        <Skills />
        <Projects />
        <InfiniteMovingCardsComponent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import { Helmet } from "react-helmet";
import useActiveSection from "./hooks/useActiveSection";

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

  return (
    <div>
      <Helmet>
        <title>{titles[section] || "WebSmith Creations"}</title>
      </Helmet>
      <Header />
      <main>
        <Hero />

        <ServicesContainer />
        <About />
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

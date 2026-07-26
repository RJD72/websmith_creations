import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ServicesContainer from "./components/ServiceContainer";
import Process from "./components/Process";
import InfiniteMovingCardsComponent from "./components/InfiniteMovingCardsComponents";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SiteLayout from "./components/SiteLayout";

const App = () => (
  <SiteLayout>
    <Hero />
    <Projects />
    <ServicesContainer />
    <Process />
    <InfiniteMovingCardsComponent />
    <About />
    <Skills />
    <Contact />
  </SiteLayout>
);

export default App;

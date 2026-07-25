import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ServicesContainer from "./components/ServiceContainer";
import Process from "./components/Process";
import InfiniteMovingCardsComponent from "./components/InfiniteMovingCardsComponents";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
    <Header />
    <main id="main-content">
      <Hero />
      <Projects />
      <ServicesContainer />
      <Process />
      <InfiniteMovingCardsComponent />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;

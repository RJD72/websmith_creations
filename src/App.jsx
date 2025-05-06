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
  return (
    <div>
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

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TimelineComponent from "./components/TimelineComponent";
import InfiniteMovingCardsComponent from "./components/InfiniteMovingCardsComponents";
import ServicesContainer from "./components/ServiceContainer";
import Contact from "./components/Contact";
import ExpandableCard from "./components/ExpandableCard";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <ExpandableCard />
      <TimelineComponent />
      <InfiniteMovingCardsComponent />
      <ServicesContainer />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;

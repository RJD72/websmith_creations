import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TabsComponent from "./components/TabsComponent";
import TimelineComponent from "./components/TimelineComponent";
import InfiniteMovingCardsComponent from "./components/InfiniteMovingCardsComponents";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <TabsComponent />
      <TimelineComponent />
      <InfiniteMovingCardsComponent />
      <Footer />
    </div>
  );
};
export default App;

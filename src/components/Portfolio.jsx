import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

export const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Work />
      <Contactme />
      <Footer /> */}
    </div>
  );
};

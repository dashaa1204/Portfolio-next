import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <div className="w-[375px] flex flex-col items-start sm:w-[1440px]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

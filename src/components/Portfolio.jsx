import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Work } from "./Work";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { MenuBurger } from "./MenuBurger";

export const Portfolio = () => {
  return (
    <div className="flex w-[375px] flex-col items-start sm:w-[1140px] relative">
      <Header />
      <MenuBurger />
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

import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Qoute from "./_components/Qoute";
import Work from "./_components/Work";

export default function Home() {
  return <>
    <Hero />
    <Projects />
    <Experience />
    <About />
    <Work />
    <Contact />
    <Qoute />
    <Footer />
  </>
}
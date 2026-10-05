import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Qoute from "./_components/Qoute";
import WorkTogether from "./_components/WorkTogether";

export default function Home() {
  return <>
    <Hero />
    <Projects />
    <Experience />
    <WorkTogether />
    <Contact />
    <Qoute />
  </>
}
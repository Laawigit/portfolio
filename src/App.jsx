import { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Tools } from "./components/Tools";
import { ParticlesBackground } from "./components/ParticlesBackground";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="w-screen max-w-[1528px] ">
      <ParticlesBackground />
      <Navbar
        scrollHandlers={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <Hero
        scrollHandlers={{
          contact: () => scrollToSection(contactRef),
        }}
        ref={homeRef}
      />
      <Tools />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;

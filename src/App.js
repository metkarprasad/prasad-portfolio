import { useEffect, useRef, useState } from "react";
import Navbar from "./Componants/Navbar";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Home from "./Pages/Home.js";
import Projects from "./Pages/Projects.js";
import Skills from "./Pages/Skills.js";
import ChatPopup from "./Componants/ChatPopup";
import CodingProfiles from "./Pages/CodingProfile.js";

function App() {
  const sections = ["home", "about", "projects", "code", "skills", "contact"];
  const sectionRefs = useRef([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sections.length;
        sectionRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 2000); // 3 seconds

    return () => clearInterval(interval);
  }, [autoScroll]);

  // Handle navbar click (stop auto scroll)
  const handleNavClick = (id) => {
    setAutoScroll(false);
    setShowNavbar(true);
    const section = sectionRefs.current[sections.indexOf(id)];
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Stop auto-scroll on manual scrolling
  useEffect(() => {
    const handleUserScroll = () => {
      if (autoScroll) {
        setAutoScroll(false);
        setShowNavbar(true);
      }
    };
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [autoScroll]);

  return (
    <div>
      {showNavbar && <Navbar onNavClick={handleNavClick} />} {/* Show navbar only after auto-scroll stops */}

      <section id="home" ref={(el) => (sectionRefs.current[0] = el)}>
        <Home />
      </section>

      <section id="about" ref={(el) => (sectionRefs.current[1] = el)}>
        <About />
      </section>

      <section id="projects" ref={(el) => (sectionRefs.current[2] = el)}>
        <Projects />
      </section>

      <section id="code" ref={(el) => (sectionRefs.current[3] = el)}>
        <CodingProfiles />
      </section>

      <section id="skills" ref={(el) => (sectionRefs.current[4] = el)}>
        <Skills />
      </section>

      <section id="contact" ref={(el) => (sectionRefs.current[5] = el)}>
        <Contact />
      </section>

      {/* Floating Chat Popup */}
      <ChatPopup />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero has its own load animation, so it is not wrapped. */}
        <Hero />

        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}

export default App;
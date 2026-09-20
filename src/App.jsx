import { useEffect } from 'react';

import { ParticlesWrapper } from './library/particles';
import { initSmoothScroll } from './library/SmoothScroll';
import { initDragScroll } from './library/useSmoothDragScroll';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    const removeDragEvents = initDragScroll(lenis);

    return () => {
      lenis.destroy();
      removeDragEvents();
    };
  }, []);

  return (
    <ParticlesWrapper>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <Toast />
    </ParticlesWrapper>
  );
}
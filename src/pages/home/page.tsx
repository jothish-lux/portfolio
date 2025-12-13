import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in-section', {
        scrollTrigger: {
          trigger: '.fade-in-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, mainRef);

    // Optimize ScrollTrigger performance
    ScrollTrigger.config({
      limitCallbacks: true,
      syncInterval: 150,
    });

    return () => ctx.revert();
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      <Navigation />
      <div ref={mainRef} className="bg-dark text-white">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

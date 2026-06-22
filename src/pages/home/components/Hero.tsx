import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter');
      gsap.from(letters, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 2,
      });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark z-10 pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-[#FF6B35] border border-[#FF6B35]/30">
            Available for Opportunities
          </span>
        </motion.div>

        <div ref={textRef} className="mb-8">
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl mb-4 will-change-transform portrait:text-5xl">
            {'JO'.split('').map((letter, index) => (
              <span key={index} className="letter inline-block">
                {letter}
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-white/80 font-display portrait:text-lg">
              Financial Head <span className="text-[#FF6B35]">&</span> Designer
            </p>
            <p className="text-lg md:text-xl text-white/60 portrait:text-base">
              Creative Developer based in Warsaw, Poland
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="flex flex-wrap items-center justify-center gap-4 portrait:flex-col portrait:gap-3"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full font-medium hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all hover:scale-105 cursor-pointer whitespace-nowrap portrait:w-full portrait:max-w-xs portrait:py-3 portrait:text-sm"
          >
            Let's Work Together
          </button>
          <a
            href="mailto:myselfjyothish@gmail.com"
            className="px-8 py-4 border-2 border-white/20 rounded-full font-medium hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap portrait:w-full portrait:max-w-xs portrait:py-3 portrait:text-sm"
          >
            myselfjyothish@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-16 flex items-center justify-center gap-6 portrait:mt-8 portrait:gap-4"
        >
          <a
            href="tel:+48789795508"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6B35] transition-all cursor-pointer portrait:w-10 portrait:h-10"
            title="Phone"
          >
            <i className="ri-phone-line text-xl portrait:text-lg"></i>
          </a>
          <a
            href="mailto:myselfjyothish@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6B35] transition-all cursor-pointer portrait:w-10 portrait:h-10"
            title="Email"
          >
            <i className="ri-mail-line text-xl portrait:text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jyothishkumar-aruparathara-suresh-330aaa394/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6B35] transition-all cursor-pointer portrait:w-10 portrait:h-10"
            title="LinkedIn"
          >
            <i className="ri-linkedin-fill text-xl portrait:text-lg"></i>
          </a>
          <a
            href="https://github.com/jothish-lux"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6B35] transition-all cursor-pointer portrait:w-10 portrait:h-10"
            title="GitHub"
          >
            <i className="ri-github-fill text-xl portrait:text-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/j0thish/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF6B35] transition-all cursor-pointer portrait:w-10 portrait:h-10"
            title="Instagram"
          >
            <i className="ri-instagram-fill text-xl portrait:text-lg"></i>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 portrait:bottom-4"
      >
        <i className="ri-arrow-down-line text-2xl text-white/50 portrait:text-xl"></i>
      </motion.div>
    </section>
  );
}

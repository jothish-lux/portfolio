import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const sections = navItems.map((item) => document.getElementById(item.id));
          const scrollPosition = window.scrollY + 200;

          sections.forEach((section, index) => {
            if (section) {
              const top = section.offsetTop;
              const bottom = top + section.offsetHeight;
              if (scrollPosition >= top && scrollPosition < bottom) {
                setActiveSection(navItems[index].id);
              }
            }
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="https://static.readdy.ai/image/e388132ef9f5fd635098124b371fd5db/c7d77f36202b3256f14092111c74bb58.png"
              alt="JO"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FF6B35]/50 group-hover:ring-[#FF6B35] transition-all"
            />
            <span className="font-display font-bold text-lg hidden sm:block">JO</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative cursor-pointer whitespace-nowrap ${
                  activeSection === item.id ? 'text-[#FF6B35]' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B35]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <a
            href="mailto:myselfjyothish@gmail.com"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-mail-line"></i>
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

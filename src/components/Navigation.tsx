import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONSOLE', href: '#terminal' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when the section is in the main viewing area
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
      />

      <motion.nav
        initial={{ y: -100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-2 sm:top-4 left-1/2 z-40 w-[95%] max-w-6xl"
      >
        <div
          className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4"
          style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="flex justify-between items-center">
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              whileHover={{ scale: 1.05 }}
            >
              HARSH.RAJ
            </motion.div>

            <div className="hidden lg:flex space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-xs lg:text-sm font-semibold transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-gray-300'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600"
                      style={{ boxShadow: '0 0 10px rgba(192, 192, 192, 0.5)' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              className="lg:hidden text-gray-300 p-2 -mr-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-30 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
          <motion.div className="absolute right-0 top-0 h-full w-[75vw] max-w-[300px] bg-[#1a1a1a] border-l border-gray-700 p-6 sm:p-8 flex flex-col">
            {/* Close button at top of drawer */}
            <div className="flex justify-end mb-4 mt-2">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>
            <div className="flex flex-col space-y-1 flex-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-base font-semibold transition-colors py-3 px-2 rounded-lg ${
                    activeSection === link.href.substring(1)
                      ? 'text-white bg-white/5'
                      : 'text-gray-400 hover:text-white active:bg-white/5'
                  }`}
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

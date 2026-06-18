import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { RotatingLogo } from '../3d/RotatingLogo';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen min-h-[100dvh] flex flex-col overflow-hidden pt-24 md:pt-32 lg:pt-40">
      <div className="absolute inset-0 pointer-events-none hidden md:block opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <RotatingLogo />
        </Canvas>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 relative pb-8 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-6 md:mb-8 flex justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-600" style={{ boxShadow: '0 0 30px rgba(192, 192, 192, 0.3)' }}>
                <img
                  src="/about-me-2.png"
                  alt="Harsh Raj"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 md:mb-6 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent leading-none"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              HARSH
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400 mb-6 md:mb-8 leading-tight tracking-wider"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              RAJ
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-14 leading-relaxed px-2 sm:px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting digital experiences where innovation meets elegance
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.3)] rounded-xl text-gray-300 font-semibold transition-all text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(192, 192, 192, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW WORK
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.3)] rounded-xl text-gray-300 font-semibold transition-all text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(192, 192, 192, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT ME
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center w-full pb-8 md:pb-12 z-10 relative">
        <motion.button
          onClick={scrollToNext}
          className="text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </div>
    </section>
  );
};

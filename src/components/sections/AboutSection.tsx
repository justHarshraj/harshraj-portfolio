import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export const AboutSection = () => {
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col pt-24 md:pt-32 pb-16 relative"
      style={{ background: 'linear-gradient(180deg, rgba(7,7,9,0.3) 0%, rgba(20,20,25,0.4) 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              ABOUT ME
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              I'm a passionate web developer who thrives on creating visually bold, interactive, and technically robust digital experiences.I enjoy turning ideas into real-world applications using modern technologies My expertise lies in blending cutting-edge technology with elegant design principles.
            </p>

            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Beyond coding, I serve as a Google Student Ambassador, helping students learn, connect, and grow within the tech community. I'm constantly exploring new technologies, building innovative projects, and striving to create solutions that solve real-world problems.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  20+
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">PROJECTS</div>
              </motion.div>

              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  4Y+
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">EXPERIENCE</div>
              </motion.div>

              <motion.div
                className="backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl px-3 py-3 md:px-6 md:py-4 text-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  100%
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">DEDICATION</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-8 md:mt-0 w-full">
            <motion.div
              className="relative w-full max-w-lg aspect-[16/9] rounded-xl md:rounded-2xl border border-[rgba(192,192,192,0.2)] overflow-hidden bg-[rgba(26,26,26,0.7)] backdrop-blur-md cursor-pointer"
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 35px rgba(192, 192, 192, 0.3)',
                borderColor: 'rgba(192, 192, 192, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/about-me-1.jpg"
                alt="Harsh Raj - Google Student Ambassador Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <div className="text-gray-300 text-xs md:text-sm font-semibold tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  GOOGLE STUDENT AMBASSADOR EVENT
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

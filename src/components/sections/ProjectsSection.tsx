import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Code, Globe, BarChart3, ExternalLink, CheckSquare, Cpu, X } from 'lucide-react';

const projects = [
  {
    title: 'GitCV',
    description: 'Implements a resume template engine with GitHub OAuth authentication and clean layouts to generate professional developer CVs directly from your GitHub profile.',
    icon: Code,
    tags: ['React', 'TypeScript', 'GitHub API', 'TailwindCSS'],
    gradient: 'from-gray-700 to-gray-900',
    liveLink: 'https://gitcv-rouge.vercel.app',
    githubLink: 'https://github.com/justHarshraj/gitcv',
  },
  {
    title: 'Project Hyperlink',
    description: 'A Chrome extension that provides unlimited shortcuts and a clean developer workspace for managing your frequently visited links.',
    icon: Globe,
    tags: ['Chrome Extension', 'JavaScript', 'HTML5', 'CSS3'],
    gradient: 'from-gray-600 to-gray-800',
    liveLink: '/hyperlink-preview.png',
    githubLink: 'https://github.com/justHarshraj/project-hyperlink',
    isImageModal: true,
  },
  {
    title: 'TaskMaster Pro',
    description: 'A premium, high-performance, framework-free task management application built using clean, semantic HTML5, modern vanilla CSS, and standard native JavaScript DOM APIs.',
    icon: CheckSquare,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
    gradient: 'from-gray-700 to-gray-900',
    liveLink: 'https://justharshraj.github.io/TASKMASTER-PRO/',
    githubLink: 'https://github.com/justHarshraj/TASKMASTER-PRO',
  },
  {
    title: 'Project Umbrella',
    description: 'The Green AI Router & Prompt Minifier. Intercepts AI queries, minifies them, and dynamically routes them to the server grid running on the cleanest renewable energy.',
    icon: Cpu,
    tags: ['Green AI', 'Chrome Extension', 'Node.js', 'API Routing'],
    gradient: 'from-gray-600 to-gray-800',
    liveLink: 'https://github.com/justHarshraj/project-umbrella',
    githubLink: 'https://github.com/justHarshraj/project-umbrella',
  },
  {
    title: 'TCS Traffic Congestion System',
    description: 'An AI-powered computer vision traffic congestion detection and analysis system built using YOLOv8, Yolov8n.pt, location intelligence services, and email alerts.',
    icon: BarChart3,
    tags: ['YOLOv8', 'Python', 'Computer Vision', 'Email Alerts'],
    gradient: 'from-gray-700 to-gray-900',
    liveLink: '/traffic-preview.jpg',
    githubLink: 'https://github.com/justHarshraj/TCS_Traffic_Congestion_System',
    isImageModal: true,
  },
  {
    title: 'Core Inventory System',
    description: 'A robust and scalable Inventory and Warehouse Management System designed for efficiency. Streamlines stock tracking, warehouse operations, and product management.',
    icon: BarChart3,
    tags: ['Python', 'React', 'Stock Tracking', 'Warehouse Management'],
    gradient: 'from-gray-600 to-gray-800',
    liveLink: 'https://github.com/justHarshraj/core-inventory-hackathon',
    githubLink: 'https://github.com/justHarshraj/core-inventory-hackathon',
  },
];

export const ProjectsSection = () => {
  const [ref, isInView] = useInView();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col pt-24 md:pt-32 pb-16 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px]"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full transition-transform duration-700 preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="absolute inset-0 backdrop-blur-md bg-[rgba(26,26,26,0.7)] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-xl p-4 md:p-6 backface-hidden cursor-pointer"
                    style={{
                      backfaceVisibility: 'hidden',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div
                      className={`mb-3 md:mb-4 h-24 sm:h-32 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-6 gap-1 p-4">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-full aspect-square bg-gray-400 rounded" />
                          ))}
                        </div>
                      </div>
                      <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 z-10" />
                    </div>

                    <h3
                      className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs backdrop-blur-md bg-[rgba(26,26,26,0.5)] border border-[rgba(192,192,192,0.2)] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 backdrop-blur-md bg-[rgba(26,26,26,0.9)] border border-[rgba(192,192,192,0.3)] rounded-lg md:rounded-xl p-4 md:p-6 backface-hidden cursor-pointer"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      boxShadow: '0 0 40px rgba(192, 192, 192, 0.3)',
                    }}
                    onClick={() => toggleFlip(index)}
                  >
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">{project.description}</p>

                    <div className="space-y-2 md:space-y-3">
                      {project.isImageModal ? (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(project.liveLink);
                          }}
                          className="w-full backdrop-blur-md bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.3)] rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-300 font-semibold flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          VIEW PROJECT
                        </motion.button>
                      ) : (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full backdrop-blur-md bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.3)] rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-300 font-semibold flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          VIEW PROJECT
                        </motion.a>
                      )}

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full backdrop-blur-md bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.3)] rounded-lg px-3 py-2 md:px-4 md:py-3 text-gray-300 font-semibold flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code className="w-4 h-4" />
                        VIEW CODE
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#1a1a1a] border border-[rgba(192,192,192,0.2)] rounded-lg md:rounded-2xl overflow-hidden p-1 sm:p-2"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 border border-[rgba(192,192,192,0.2)] text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedImage}
                  alt="Project Preview"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

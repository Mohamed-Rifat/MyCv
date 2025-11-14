import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiVuedotjs, SiBootstrap } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Love Acts Platform",
      description: "A beautiful social platform for sharing acts of love and kindness. Features modern design, interactive elements, and smooth animations to create an engaging user experience.",
      image: "/LoveActs.png", 
      technologies: ["React", "Tailwind CSS", "JavaScript", "CSS3", "TypeScript"],
      category: "frontend",
      liveDemo: "https://loveacts.vercel.app",
      featured: true,
    },
     {
      id: 2,
      title: "Basem Raafat Portfolio",
      description: "Professional portfolio website showcasing creative work with modern design, smooth animations, and excellent performance. Built with cutting-edge frontend technologies.",
      image: "/Beso.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveDemo: "https://basem-raafat.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Fresh Cart E-Commerce",
      description: "A modern e-commerce platform built with Vue.js featuring product catalog, shopping cart, user authentication, and responsive design. Implements modern UI/UX principles for optimal shopping experience.",
      image: "/FreshCart.png",
      technologies: ["React", "Next.js", "JavaScript", "CSS3", "HTML5", "Framer Motion"],
      category: "frontend",
      liveDemo: "https://fresh-cart-store-app.vercel.app",
      featured: true,
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'React': <FaReact className="text-blue-400" />,
      'Vue.js': <SiVuedotjs className="text-green-500" />,
      'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-500" />,
      'JavaScript': <FaReact className="text-yellow-400" />,
      'CSS3': <SiTailwindcss className="text-blue-500" />,
      'HTML5': <FaReact className="text-orange-500" />,
      'Redux': <SiRedux className="text-purple-500" />,
      'Bootstrap': <SiBootstrap className="text-purple-600" />
    };
    return icons[tech] || <FaReact className="text-gray-400" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my latest frontend projects, built with modern technologies 
            and focusing on user experience, performance, and clean code.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = 'relative h-64 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 rounded-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="shadow-2xl overflow-hidden mb-16 "
        >
          <div className="p-12 text-black dark:text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to See More Code?</h2>
                  <p className=" text-lg md:text-xl mb-6 leading-relaxed">
                    Explore my GitHub profile for more projects, open-source contributions, 
                    and the latest code I'm working on. Let's connect and build something amazing together!
                  </p>
                  <a
                    href="https://github.com/Mohamed-Rifat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg transform"
                  >
                    <FaGithub className="mr-3 text-2xl" />
                    Visit My GitHub
                  </a>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0] 
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-slate-300 dark:bg-white/20 p-8 rounded-2xl backdrop-blur-sm"
                  >
                    <FaGithub className="w-20 h-20" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
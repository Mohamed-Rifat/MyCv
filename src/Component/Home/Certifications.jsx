import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaDownload, FaAward, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import Certificate1 from './../../assets/IT Certificate.jpg';
import Certificate2 from './../../assets/Wep Certificate.bmp';
import Certificate3 from './../../assets/Route Certificate.jpg';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "IT Technical Support",
      issuer: "Arab Academy",
      description: "IT Technical Support Specialist with hands-on experience in diagnosing and resolving hardware, software, and network issues. Gained comprehensive knowledge in system administration and technical troubleshooting.",
      image: Certificate1,
      verifyLink: "#",
      date: "2023",
      skills: ["Technical Support", "Troubleshooting", "System Administration", "Network Fundamentals"]
    },
    {
      id: 2,
      title: "Web Development Nano",
      issuer: "Udacity",
      description: "Comprehensive frontend development program covering HTML5, CSS3, JavaScript ES6+, and modern frameworks. Built multiple real-world projects demonstrating proficiency in responsive design and web standards.",
      image: Certificate2,
      verifyLink: "#",
      date: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Standards"]
    },
    {
      id: 3,
      title: "Front-End Developer (React)",
      issuer: "Route Academy",
      description: "Advanced React development program focusing on modern JavaScript concepts, component-based architecture, state management, and performance optimization. Completed complex projects using React ecosystem.",
      image: Certificate3,
      verifyLink: "#",
      date: "2024",
      skills: ["React", "JavaScript ES6+", "State Management", "Component Architecture", "Performance", "Responsive Design"]
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

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
            Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Professional certifications that validate my technical skills and commitment to continuous learning
            in the ever-evolving field of web development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}

              className="group relative"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm overflow-hidden transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <div
                  className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = 'relative h-64 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden';
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(cert);
                      }}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      title="View Certificate"
                    >
                      <FaExternalLinkAlt />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <FaAward className="text-2xl text-white" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <FaUniversity className="text-sm" />
                      <span className="font-semibold">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1 line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => openModal(cert)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      View Certificate
                    </button>

                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white dark:bg-gray-800 rounded-md max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 mt-1">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-auto max-h-[60vh]">
                <div className="flex justify-center mb-6">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaAward className="text-blue-500" />
                    <span className="text-sm">Professional Certification</span>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Certifications;
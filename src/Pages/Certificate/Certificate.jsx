import React, { useState } from 'react';
import { FaCertificate, FaUniversity, FaReact, FaCodeBranch, FaTimes } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Certificate1 from './../../assets/IT Certificate.jpg';
import Certificate2 from './../../assets/Wep Certificate.bmp';
import Certificate3 from './../../assets/Route Certificate.jpg';
Modal.setAppElement('#root');

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState(null);

  const openModal = (certId) => {
    setCurrentCertificate(certId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCertificate(null);
  };

  const getCertificateImage = (certId) => {
    switch(certId) {
      case 1: return Certificate3;
      case 2: return Certificate2;
      case 3: return Certificate1;
      default: return null;
    }
  };

  const certifications = [
    {
      id: 1,
      title: "Front-End Web Development Diploma",
      issuer: "Route Academy",
      year: "2021",
      skills: [
        { name: "React", icon: <FaReact className="inline mr-1" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="inline mr-1" /> },
        { name: "TypeScript", icon: <SiTypescript className="inline mr-1" /> },
        { name: "HTML5/CSS3", icon: <FaCodeBranch className="inline mr-1" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="inline mr-1" /> }
      ],
      icon: <FaReact className="text-2xl" />,
      color: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
      highlight: true,
      hasCertificate: true
    },
    {
      id: 2,
      title: "Web Development Challenger Track",
      issuer: "UDACITY & ITIDA",
      year: "2020",
      skills: [
        { name: "Web Fundamentals", icon: <FaCodeBranch className="inline mr-1" /> },
        { name: "Front-End Basics", icon: <SiJavascript className="inline mr-1" /> },
        { name: "Programming Concepts" }
      ],
      icon: <FaCodeBranch className="text-2xl" />,
      color: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
      hasCertificate: true
    },
    {
      id: 3,
      title: "IT Technical Support",
      issuer: "Arab Academy for Science & Maritime Transport",
      year: "2019",
      skills: [
        { name: "Technical Support" },
        { name: "IT Troubleshooting" },
        { name: "System Maintenance" }
      ],
      icon: <FaCertificate className="text-2xl" />,
      color: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
      hasCertificate: true
    },
    {
      id: 4,
      title: "Bachelor's in MIS",
      issuer: "High Institute of Computer & Information Systems",
      year: "2020",
      skills: [
        { name: "Database Management" },
        { name: "Business Analysis" },
        { name: "Information Systems" }
      ],
      icon: <FaUniversity className="text-2xl" />,
      color: "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400",
      honors: "Very good with Honors",
      hasCertificate: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional credentials and academic achievements that showcase my expertise
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={item}
              whileHover={{ y: -5 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                cert.highlight 
                  ? "border-blue-200 dark:border-blue-700 ring-1 ring-blue-100 dark:ring-blue-900/30" 
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${cert.color} p-3 rounded-lg flex-shrink-0 mt-1`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1 leading-tight">{cert.title}</h2>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-x-2">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                    {cert.honors && (
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full mt-2">
                        {cert.honors}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                    Skills Acquired
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 rounded-md text-xs flex items-center ${
                          skill.icon ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 
                          'bg-gray-50 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {skill.icon && skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {cert.highlight && (
                <div className="bg-blue-50 dark:bg-blue-900/10 px-4 py-2 border-t border-blue-100 dark:border-blue-800">
                  <div className="text-blue-600 dark:text-blue-300 text-xs font-medium flex items-center">
                    <SiNextdotjs className="mr-1.5" /> Includes modern React ecosystem training
                  </div>
                </div>
              )}

              <div className="bg-gray-50 dark:bg-gray-700/30 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                {cert.hasCertificate ? (
                  <button 
                    onClick={() => openModal(cert.id)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center group"
                  >
                    View Certificate
                    <svg 
                      className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400">Certificate available upon request</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate View"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <div className="p-4">
              {currentCertificate && (
                <img 
                  src={getCertificateImage(currentCertificate)} 
                  alt="Certificate"
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                />
              )}
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-3">Front-End Specialization</h2>
                  <p className="text-blue-100 dark:text-blue-200 mb-4 text-sm">
                    Focused on mastering the React ecosystem and modern front-end development practices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <FaReact className="mr-2 text-blue-200 flex-shrink-0" />
                      <span>Advanced React patterns (Hooks, Context, Custom Hooks)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <SiTypescript className="mr-2 text-blue-200 flex-shrink-0" />
                      <span>TypeScript for type-safe React applications</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <SiNextdotjs className="mr-2 text-blue-200 flex-shrink-0" />
                      <span>Next.js for server-side rendering and static generation</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white/20 p-4 rounded-full">
                    <FaReact className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal-content {
          position: relative;
          outline: none;
          max-width: 90%;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        @media (max-width: 768px) {
          .modal-content {
            max-width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificates;
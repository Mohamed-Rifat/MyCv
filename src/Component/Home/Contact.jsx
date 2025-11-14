import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      name: 'WhatsApp',
      description: 'Direct messaging for quick communication',
      icon: <FaWhatsapp className="w-5 h-5" />,
      link: 'https://wa.me/201148036811',
      value: '+20 114 803 6811',
      color: 'green',
      buttonText: 'Message Now'
    },
    {
      name: 'Phone',
      description: 'Call me for direct conversation',
      icon: <FaPhone className="w-5 h-5" />,
      link: 'tel:+201222800121',
      value: '+20 122 280 0121',
      color: 'blue',
      buttonText: 'Call Now'
    },
    {
      name: 'LinkedIn',
      description: 'Connect with me professionally',
      icon: <FaLinkedin className="w-5 h-5" />,
      link: 'https://www.linkedin.com/in/mohamedrifat97/',
      value: 'mohamedrifat97',
      color: 'blue',
      buttonText: 'View Profile'
    },
    {
      name: 'GitHub',
      description: 'Explore my open-source contributions',
      icon: <FaGithub className="w-5 h-5" />,
      link: 'https://github.com/Mohamed-Rifat',
      value: 'Mohamed-Rifat',
      color: 'gray',
      buttonText: 'View Profile'
    },
    {
      name: 'Email',
      description: 'Send me a detailed message',
      icon: <FaEnvelope className="w-5 h-5" />,
      link: 'mailto:mohamedrefaat@gmail.com',
      value: 'mohamedrefaat@gmail.com',
      color: 'red',
      buttonText: 'Send Email'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="w-4 h-4" />,
      label: 'Primary Phone',
      value: '+20 114 803 6811',
      link: 'tel:+201148036811'
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      label: 'Secondary Phone',
      value: '+20 122 280 0121',
      link: 'tel:+201222800121'
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: 'Email',
      value: 'mohamedrefaat@gmail.com',
      link: 'mailto:mohamedrefaat@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      label: 'Location',
      value: 'Cairo, Egypt',
      link: '#'
    },
    {
      icon: <FaClock className="w-4 h-4" />,
      label: 'Response Time',
      value: 'Within 1 hour',
      link: '#'
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      green: {
        bg: 'bg-green-500',
        lightBg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-300',
        border: 'border-green-200 dark:border-green-800',
        hover: 'hover:bg-green-500 hover:text-white'
      },
      blue: {
        bg: 'bg-blue-600',
        lightBg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
        hover: 'hover:bg-blue-600 hover:text-white'
      },
      gray: {
        bg: 'bg-gray-700',
        lightBg: 'bg-gray-50 dark:bg-gray-800/20',
        text: 'text-gray-600 dark:text-gray-300',
        border: 'border-gray-200 dark:border-gray-700',
        hover: 'hover:bg-gray-700 hover:text-white'
      },
      red: {
        bg: 'bg-red-500',
        lightBg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-300',
        border: 'border-red-200 dark:border-red-800',
        hover: 'hover:bg-red-500 hover:text-white'
      }
    };
    return classes[color] || classes.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          >
            Connect With Me
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {contactMethods.map((method, index) => {
              const colorClasses = getColorClasses(method.color);

              return (
                <motion.div
                  key={method.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border ${colorClasses.border} h-full flex flex-col`}>
                    <div className="flex flex-col items-center text-center mb-3 md:mb-4">
                      <div className={`${colorClasses.bg} p-2 md:p-3 rounded-lg md:rounded-xl text-white group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-3`}>
                        {method.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                        {method.name}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 text-center mb-3 flex-1">
                      {method.description}
                    </p>

                    <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 text-center mb-3 md:mb-4">
                      {method.value}
                    </p>

                    <div className="mt-auto">
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 ${colorClasses.lightBg} ${colorClasses.text} rounded-lg font-semibold hover:shadow-md transition-all duration-300 hover:scale-105 ${colorClasses.hover} text-xs md:text-sm`}
                      >
                        <span>{method.buttonText}</span>
                        <FaPaperPlane className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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

export default Contact;
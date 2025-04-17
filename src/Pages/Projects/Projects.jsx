import React from 'react';
import { FaGithub, FaMobileAlt, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website with React, Node.js, and MongoDB. Includes product listings, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API"],
      githubLink: "https://github.com/Mohamed-Rifat/ecommerce-platform",
      demoLink: "https://ecommerce-demo.mohamedrifat.com",
      type: "full-stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application for task management with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "Firebase", "Material UI", "React DnD"],
      githubLink: "https://github.com/Mohamed-Rifat/task-manager",
      demoLink: "https://task-manager.mohamedrifat.com",
      type: "frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps and location-based services.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubLink: "https://github.com/Mohamed-Rifat/weather-dashboard",
      demoLink: "https://weather.mohamedrifat.com",
      type: "frontend",
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support and SEO optimization.",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS", "Markdown"],
      githubLink: "https://github.com/Mohamed-Rifat/blog-cms",
      demoLink: "https://blog-cms.mohamedrifat.com",
      type: "full-stack",
    },
    {
      id: 5,
      title: "Portfolio Template",
      description: "Modern responsive portfolio template for developers with dark mode support.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "React Icons"],
      githubLink: "https://github.com/Mohamed-Rifat/portfolio-template",
      demoLink: "https://portfolio-template.mohamedrifat.com",
      type: "frontend",
    },
    {
      id: 6,
      title: "API Service Dashboard",
      description: "Monitoring dashboard for RESTful API services with analytics and logging.",
      technologies: ["React", "Express.js", "MongoDB", "Chart.js"],
      githubLink: "https://github.com/Mohamed-Rifat/api-dashboard",
      demoLink: "https://api-dashboard.mohamedrifat.com",
      type: "full-stack",
    }
  ];

  const projectTypeIcon = {
    'frontend': <FaMobileAlt className="text-blue-500" />,
    'full-stack': <FaServer className="text-green-500" />,
  };

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
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my professional web development projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              Projects Coming Soon!
            </h2>
            <p className="text-blue-600 dark:text-blue-300 mb-4">
              I'm currently preparing my best projects to showcase here. Please check back soon to see my work.
            </p>
            <div className="animate-pulse text-blue-500 dark:text-blue-400 text-sm">
              Under Development • Coming Soon • Under Development
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-10 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">Explore More on GitHub</h2>
                  <p className="text-gray-300 mb-6">
                    Check out my GitHub profile for more projects, contributions, and open-source work.
                  </p>
                  <a
                    href="https://github.com/Mohamed-Rifat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="mr-2 text-xl" />
                    Visit My GitHub
                  </a>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white/10 p-6 rounded-full">
                    <FaGithub className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
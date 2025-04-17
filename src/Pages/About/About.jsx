import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaReact, FaCodeBranch, FaPalette } from 'react-icons/fa';
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slat-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Mohamed Refaat</h1>
          <p className="text-xl md:text-2xl font-light mb-8">Junior Front-End Developer | React Ecosystem</p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Hire Me
            </Link>
            <Link to="/projects" className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Specializations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I specialize in building modern, responsive web applications with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">React Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert in building complex applications with React, React Hooks, Context API, and Redux. Passionate about component-based architecture.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">UI/UX Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Skilled in transforming designs into pixel-perfect, responsive interfaces using Tailwind CSS, Bootstrap, and custom CSS solutions.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focused on delivering blazing-fast web experiences through code splitting, lazy loading, and efficient state management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              My toolkit for creating exceptional web experiences
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 mr-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FaReact className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              <ul className="space-y-3">
                {['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Context API'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 mr-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <FaCodeBranch className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Build Tools</h3>
              </div>
              <ul className="space-y-3">
                {['Vite', 'Webpack', 'npm/yarn/pnpm', 'Git', 'GitHub', 'ESLint', 'Prettier'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                <div className="p-2 mr-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <FaPalette className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">UI/UX</h3>
              </div>
              <ul className="space-y-3">
                {['Responsive Design', 'Web Accessibility', 'Figma', 'User-Centered Design', 'Cross-Browser Compatibility', 'Performance Optimization'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My path to becoming a Front-End Development expert
            </p>
          </div>

          <div className="relative">
            <div className="border-l-2 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2 md:left-6 md:transform-none"></div>
            <div className="space-y-8">
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
                    <p className="text-gray-500 dark:text-gray-400">2016 - 2020</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">High Institute of Computer and Information Systems</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Bachelor's in Management Information Systems</p>
                      <p className="text-gray-500 dark:text-gray-400">Very good with Honors</p>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 md:left-6 md:transform-none"></div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Front-End Training</h3>
                    <p className="text-gray-500 dark:text-gray-400">2020 - 2021</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Route Academy & Udacity</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Front-End Web Development Diploma</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map(tech => (
                          <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 md:left-6 md:transform-none"></div>
              </div>
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Professional Experience</h3>
                    <p className="text-gray-500 dark:text-gray-400">2017 - Present</p>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Financial Accountant & Customer Service</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Developed transferable skills in problem-solving, attention to detail, and client relations</p>
                      <p className="text-gray-500 dark:text-gray-400">Now transitioning full-time to Front-End Development</p>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 md:left-6 md:transform-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work or full-time positions. Let's discuss how I can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="mailto:Mohamed.rifat100@gmail.com" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Email Me
            </Link>
            <Link to="tel:+201148036811" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Call Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
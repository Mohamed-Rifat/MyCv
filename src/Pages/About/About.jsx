import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaCodeBranch, FaPalette, FaEnvelope, FaPhone } from 'react-icons/fa';
import profile from './../../assets/ME.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-24 bg-white text-black dark:bg-gradient-to-r from-slate-800 to-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-slate-300 dark:bg-white/10 flex items-center justify-center">
              <img
                src={profile}
                alt="Mohamed Refaat Working"
                className={`w-full h-full object-cover transition-all duration-700 rounded-full`}
                style={{
                  filter: 'brightness(1.05) contrast(1.1)'
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohamed Refaat</h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-600 dark:text-gray-200">Junior Front-End Developer | React Ecosystem</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border dark:border-white dark:text-white rounded-lg font-medium transition-colors hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Specializations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building modern, responsive web applications with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <FaReact className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">React Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building complex applications with React, Hooks, Context API, and component-based architecture.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <FaPalette className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">UI/UX Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transforming designs into responsive interfaces using Tailwind CSS and custom CSS solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <FaCodeBranch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering fast web experiences through code optimization and efficient state management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My toolkit for creating exceptional web experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <FaReact className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Context API'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <FaCodeBranch className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Build Tools</h3>
              </div>
              <ul className="space-y-2">
                {['Vite', 'npm/yarn/pnpm', 'Git', 'GitHub'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <FaPalette className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">UI/UX</h3>
              </div>
              <ul className="space-y-2">
                {['Responsive Design', 'Web Accessibility', 'User-Centered Design', 'Cross-Browser Compatibility', 'Performance Optimization'].map(skill => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My path to becoming a Front-End Developer
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">2016 - 2020</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">High Institute of Computer and Information Systems</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Bachelor's in Management Information Systems</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Very good with Honors</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Front-End Training</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">2020 - 2021 & 2024 - 2025</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Udacity & Route Academy</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">Front-End Web Development Diploma</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Professional Experience</h3>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">2017 - Present</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Financial Accountant & Customer Service</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Developed transferable skills in problem-solving, attention to detail, and client relations
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Now transitioning full-time to Front-End Development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            I'm currently available for freelance work or full-time positions. Let's discuss how I can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:Mohamed.rifat100@gmail.com"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              <FaEnvelope className="mr-2" />
              Email Me
            </a>
            <a
              href="tel:+201148036811"
              className="flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium transition-colors hover:bg-white/10"
            >
              <FaPhone className="mr-2" />
              Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import profile from './../../assets/profile.jpg'
import Certificate1 from './../../assets/IT Certificate.jpg'
import Certificate2 from './../../assets/Wep Certificate.bmp'
import Certificate3 from './../../assets/Route Certificate.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "IT Technical Support",
      issuer: "Arab Academy ",
      description: "IT Technical Support Specialist with hands-on experience in diagnosing and resolving hardware, software, and network issues",
      image: Certificate1,
      verifyLink: "#"
    },
    {
      id: 2,
      title: "Web Development",
      issuer: "Udacity",
      description: "Comprehensive frontend development program covering HTML, CSS, JavaScript, and modern frameworks.",
      image: Certificate2,
      verifyLink: "#"
    },
    {
      id: 3,
      title: "Front-End Developer (React)",
      issuer: "Route",
      description: "Mastered advanced JavaScript concepts including ES6+, async programming, and design patterns.",
      image: Certificate3,
      verifyLink: "#"
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="space-y-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-20">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="text-center px-4 max-w-4xl relative z-10" data-aos="fade-up">
          <div className="mb-6" data-aos="fade-up" data-aos-delay="50">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 dark:border-blue-400 mx-auto overflow-hidden shadow-lg">
              <img src={profile} alt="Mohamed Refaat" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            <span className="block">Hello, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Mohamed Refaat
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="100">
              Junior <span className="font-semibold text-blue-600 dark:text-blue-400">Front-End Engineer</span> specializing in React Ecosystem
            </p>

            <div className="flex justify-center space-x-3 flex-wrap" data-aos="fade-up" data-aos-delay="150">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                React.js
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Next.js
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
            >
              Contact Me
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
            <div className="inline-flex animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto py-20 px-4">
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Front-End Developer of experience specializing in React ecosystem.
            Passionate about creating responsive, accessible, and high-performance web applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16" data-aos="fade-up">
          <div
            className="w-full md:w-1/2 relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative group">
              <img
                src={profile}
                alt="Mohamed Refaat Working"
                className="w-full rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20 dark:brightness-90 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -z-10 w-full h-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 top-4 left-4 group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'JavaScript', 'HTML5', 'CSS3'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-md border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 100)}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Professional Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Junior Front-End Developer
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Education & Certifications</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bachelor's Degree in Computer Science <br />
                    Front-End Development React in Route <br />
                    IT Technical Support in Arab Academy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Technical Skills</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    React.js, Next.js, TypeScript, Redux, Context API<br />
                    Tailwind CSS, SASS, Bootstrap<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400 relative inline-block">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my professional work that showcases my front-end development skills and experience
          </p>
        </div>
          <div className="max-w-7xl mx-auto pt-8">
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

        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-1 inline-flex items-center gap-2"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section id="certifications" className="w-full max-w-6xl mx-auto py-20 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my skills and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={cert.id * 100}
              >
                <div
                  className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4 cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                  <button
                    onClick={() => openModal(cert)}
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedCert?.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-6">
                    {selectedCert?.issuer}
                  </p>
                  <div className="flex justify-center">
                    <img
                      src={selectedCert?.image}
                      alt={`${selectedCert?.title} Certificate`}
                      className="max-w-full max-h-[70vh] object-contain"
                    />
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400 relative inline-block">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-white dark:from-green-900/30 dark:to-gray-800 p-0.5 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center justify-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-green-500/10 dark:bg-green-700/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative bg-green-500 dark:bg-green-600 p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Direct messaging for quick communication</p>
              <a href="https://wa.me/201148036811" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-2 bg-green-500/10 dark:bg-green-700/20 text-green-600 dark:text-green-300 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2">
                Message Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-800 p-0.5 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center justify-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-700/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative bg-blue-600 dark:bg-blue-700 p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Connect with me professionally</p>
              <a
                href="https://www.linkedin.com/in/mohamedrifat97/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-blue-500/10 dark:bg-blue-700/20 text-blue-600 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                View Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/30 dark:to-gray-800 p-0.5 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center justify-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gray-500/10 dark:bg-gray-700/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative bg-gray-800 dark:bg-gray-700 p-4 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Explore my open-source contributions</p>
              <a href="https://github.com/Mohamed-Rifat" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-2 bg-gray-500/10 dark:bg-gray-700/20 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all flex items-center justify-center gap-2">
                View Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
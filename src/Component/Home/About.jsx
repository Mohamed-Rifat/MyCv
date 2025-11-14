import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import profile from './../../assets/ME.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const renderAnimatedText = (text, delay = 0) => (
    <span className="block overflow-hidden">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: `${delay + index * 30}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-bl from-indigo-100 via-blue-50 to-white dark:from-indigo-900 dark:via-gray-800 dark:to-gray-900 px-4 pt-2 pb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-10">
        {renderAnimatedText("About Me", 0)}
      </h2>
      <div className="absolute inset-0 opacity-15 dark:opacity-25">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div
              ref={imageContainerRef}
              className="relative w-80 h-80 transition-all duration-700 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full overflow-hidden backface-hidden"
                style={{
                  transform: 'rotateY(0deg)',
                  boxShadow: `
                    0 20px 40px rgba(59, 130, 246, 0.3),
                    0 10px 20px rgba(168, 85, 247, 0.3),
                    inset 0 0 40px rgba(255, 255, 255, 0.1)
                  `,
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <img
                  src={profile}
                  alt="Mohamed Refaat Working"
                  className={`w-full h-full object-cover transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                  style={{
                    filter: 'brightness(1.05) contrast(1.1)'
                  }}
                />
                
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, transparent 60%, rgba(255,255,255,0.3) 100%)'
                  }}
                ></div>

                <div className="absolute -inset-2 rounded-full border-2 border-blue-300/30 animate-ping-slow"></div>
                <div className="absolute -inset-4 rounded-full border border-purple-300/20"></div>
               
              </div>

              <div 
                className="absolute inset-0 overflow-hidden backface-hidden p-8 flex flex-col justify-center items-center text-center"
                style={{
                  transform: 'rotateY(180deg)',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(168, 85, 247, 0.9) 100%)',
                  boxShadow: `
                    0 20px 40px rgba(59, 130, 246, 0.4),
                    0 10px 20px rgba(168, 85, 247, 0.4)
                  `,
                  border: '2px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  Mohamed Refaat
                </h3>
                <p className="text-lg text-white/90 italic mb-4">
                  Front-End Developer
                </p>
                <p className="text-white/80 text-sm mt-4">
                  Let's build something amazing together!
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-40 blur-md animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-40 blur-md animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-indigo-400 rounded-full opacity-50 blur-sm animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="mt-8 text-center md:text-left md:hidden">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mohamed Refaat
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-4">
              Front-End Developer
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            Front-End Developer of experience specializing in React ecosystem. Passionate about creating responsive, accessible, and high-performance web applications.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Professional Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">Junior Front-End Developer</p>
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
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/About"
              className="px-6 py-3 text-gray-800 dark:text-gray-200 font-medium transition-all flex items-center gap-2"
            >
              More Information
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.1); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* تأثيرات الـ flip */
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        /* تأثيرات إضافية للدائرة */
        .group:hover .rounded-full {
          transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </section>
  );
};

export default About;
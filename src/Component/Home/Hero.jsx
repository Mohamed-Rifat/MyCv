import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import standMan from "./../../assets/animations/standMan.json";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [text1Visible, setText1Visible] = useState(false);
    const [text2Visible, setText2Visible] = useState(false);
    const [nameVisible, setNameVisible] = useState(false);
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const manVectorRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
        const timer1 = setTimeout(() => setText1Visible(true), 300);
        const timer2 = setTimeout(() => setText2Visible(true), 800);
        const timer3 = setTimeout(() => {
            setNameVisible(true);
        }, 1200);

        const manTimer = setTimeout(() => {
            if (manVectorRef.current) {
                manVectorRef.current.style.transform = 'translateY(0)';
                manVectorRef.current.style.opacity = '1';
            }
        }, 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(manTimer);
        };
    }, []);

    const handleDownloadCV = () => {
        const cvUrl = '/Mohamed Refaat CV.pdf'; 
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Mohamed-Refaat-CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const renderAnimatedText = (text, isVisible, delay = 0) => {
        return (
            <span className="block overflow-hidden">
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`inline-block transition-all duration-300 ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-3 opacity-0'
                            }`}
                        style={{
                            transitionDelay: isVisible ? `${delay + index * 30}ms` : '0ms'
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>
        );
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 relative overflow-hidden"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-30 dark:opacity-20"
                style={{ mixBlendMode: 'multiply' }}
            />

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

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                        <div
                            ref={manVectorRef}
                            className="relative transition-all duration-1000 ease-out flex justify-center"
                            style={{
                                transform: "translateY(-30px)",
                                opacity: 0,
                            }}
                        >
                            <div className="rounded-full overflow-hidden w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
                                    <Lottie
                                        animationData={standMan}
                                        loop={true}
                                        className="w-full h-full scale-125"
                                        style={{
                                            transform: "translateX(35px) translateY(-35px) scale(1.8)"
                                        }}
                                    />
                                </div>
                                <div className="absolute -z-10 inset-0 border-4 border-blue-300/30 rounded-full animate-ping-slow"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5 text-center lg:text-left mt-4 lg:mt-0">
                        <div className="mb-6 lg:mb-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 leading-tight">
                                <div className="mb-2 lg:mb-4">
                                    <div className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-1">
                                        {renderAnimatedText("Hello, I'm", text1Visible, 100)}
                                    </div>
                                </div>
                                <div className="text-blue-600 dark:text-blue-400 font-bold">
                                    {renderAnimatedText("Mohamed Refaat", nameVisible, 300)}
                                </div>
                            </h1>
                        </div>

                        <div className="mb-8 lg:mb-10 transform transition-all duration-1000 delay-800" style={{
                            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                            opacity: isVisible ? 1 : 0
                        }}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 lg:mb-6 max-w-2xl leading-relaxed">
                                Junior <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Front-End Engineer</span> specializing in React Ecosystem
                            </p>

                            <div className="flex flex-wrap gap-2 sm:gap-3 max-w-2xl justify-center lg:justify-start">
                                {['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Redux', 'GraphQL'].map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                                        style={{
                                            animationDelay: `${1000 + index * 80}ms`,
                                            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
                                            opacity: isVisible ? 1 : 0,
                                            transition: `all 0.4s ease ${1000 + index * 80}ms`
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-1000" style={{
                            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                            opacity: isVisible ? 1 : 0
                        }}>
                            <Link
                                to="/projects"
                                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <span className="relative z-10 flex items-center">
                                    View My Work
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>

                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4  border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold bg-transparent hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 overflow-hidden text-sm sm:text-base"
                            >
                                <span className="relative z-10 flex items-center">
                                    Contact Me
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </Link>

                            <button
                                onClick={handleDownloadCV}
                                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-semibold bg-transparent hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 overflow-hidden text-sm sm:text-base"
                            >
                                <span className="relative z-10 flex items-center">
                                    Download CV
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-y-[-2px] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 lg:mt-16 transform transition-all duration-1000 delay-1200 text-center" style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                    opacity: isVisible ? 1 : 0
                }}>
                    <div className="inline-flex flex-col items-center text-gray-400 dark:text-gray-500">
                        <span className="text-xs sm:text-sm mb-2 font-medium">Scroll Down</span>
                        <div className="animate-bounce">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7-7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 1; }
          75%, 100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }

        @media (max-width: 640px) {
          .hero-content {
            padding-top: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
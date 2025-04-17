import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto pt-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Let's get in touch! I'm always open to discussing new projects or opportunities.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Phone</h3>
                                <a href="tel:+201148036811" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    +20 114 803 6811
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">WhatsApp</h3>
                                <a href="https://wa.me/201148036811" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Email</h3>
                                <a href="mailto:Mohamed.rifat100@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Mohamed.rifat100@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Location</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Alexandria, Sidi Bishr, Egypt
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">Connect with me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Mohamed-Rifat" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="GitHub">
                                <FaGithub className="text-gray-700 dark:text-gray-300 text-xl" />
                            </a>
                            <a href="https://linkedin.com/in/Mohamed-refaat" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                            </a>
                            <a href="https://wa.me/201148036811" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="WhatsApp">
                                <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Availability</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        I'm currently available for freelance work or full-time positions. Feel free to contact me for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        <li>Front-End Development projects (React, JavaScript, TypeScript)</li>
                        <li>Web application development</li>
                        <li>Technical consulting</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
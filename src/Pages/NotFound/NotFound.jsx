import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            >
                <div className="p-8 text-center">
                    <div className="relative">
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 10, -5, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            }}
                            className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4"
                        >
                            404
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute -top-2 -right-4"
                        >
                            <svg
                                className="w-16 h-16 text-red-500 dark:text-red-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Link
                            to="/"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Return Home
                        </Link>
                    </motion.div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Need help?{' '}
                        <Link
                            to="/contact"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Contact us
                        </Link>
                    </p>
                </div>
            </motion.div>
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-900 opacity-30"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-200 dark:bg-purple-900 opacity-30"
            />
            <motion.div
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-2/3 right-1/3 w-10 h-10 rounded-full bg-green-200 dark:bg-green-900 opacity-30"
            />
        </div>
    );
};

export default NotFoundPage;
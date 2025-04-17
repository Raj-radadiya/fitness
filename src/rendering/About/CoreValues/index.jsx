import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CoreValues = () => {
    return (
        <section className="relative bg-black min-h-screen py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-[120px] font-black leading-tight tracking-tighter mb-6">
                        <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Transform
                        </span>
                        <br />
                        <span className="inline-block text-white">
                            Your Future
                        </span>
                    </h1>
                    <p className="text-2xl md:text-4xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        Join the revolution of fitness enthusiasts who are changing their lives every day
                    </p>
                </motion.div>

                {/* Feature Text Blocks */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="group"
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 hover:bg-white/10 transition-all duration-500">
                            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                01. Results
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Experience transformative results with our scientifically-backed training methods and expert guidance.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group"
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 hover:bg-white/10 transition-all duration-500">
                            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                02. Community
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Join a supportive community of like-minded individuals pursuing excellence together.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Highlight Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="relative inline-block">
                        <Sparkles className="absolute -top-8 -right-8 w-16 h-16 text-yellow-500 animate-pulse" />
                        <h3 className="text-8xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                            Start Today
                        </h3>
                    </div>
                    <p className="mt-6 text-2xl text-gray-400 max-w-2xl mx-auto">
                        Your journey to greatness begins with a single step
                    </p>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-8 mt-20">
                    {['5000+', '95%', '24/7'].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h4 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                {stat}
                            </h4>
                            <p className="text-gray-400 text-xl">
                                {index === 0 ? 'Active Members' : index === 1 ? 'Success Rate' : 'Support'}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;

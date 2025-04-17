import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, Award, Target, Heart } from 'lucide-react';

const GymStory = () => {
    const milestones = [
        { year: '2018', title: 'Foundation', description: 'Started as a small garage gym' },
        { year: '2019', title: 'Expansion', description: 'Opened our first professional facility' },
        { year: '2020', title: 'Innovation', description: 'Launched virtual training programs' },
        { year: '2023', title: 'Growth', description: 'Expanded to multiple locations' },
    ];

    const achievements = [
        { icon: <Users className="w-8 h-8" />, count: '5000+', label: 'Active Members' },
        { icon: <Award className="w-8 h-8" />, count: '50+', label: 'Expert Trainers' },
        { icon: <Clock className="w-8 h-8" />, count: '24/7', label: 'Access' },
        { icon: <Target className="w-8 h-8" />, count: '95%', label: 'Success Rate' },
    ];

    return (
        <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-32 px-6 overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 relative"
                >
                    <div className="inline-block">
                        <Sparkles className="w-8 h-8 text-purple-400 absolute -top-4 -left-4 animate-pulse" />
                        <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6">
                            Our Legacy
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building strength, transforming lives, and creating a community of warriors
                    </p>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="grid md:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                                    <p className="text-gray-400">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                            <Heart className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">Our Passion</h3>
                            <p className="text-gray-300 leading-relaxed">
                                At Beast Gym, we believe in the transformative power of fitness. Our journey began
                                with a vision to create more than just a gym – we wanted to build a sanctuary where
                                determination meets results, and where every drop of sweat brings you closer to your goals.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <div className="text-purple-400 mb-2">{achievement.icon}</div>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        {achievement.count}
                                    </div>
                                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1000&q=80"
                                alt="Beast Gym Journey"
                                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                        <p className="text-xl font-semibold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                            "Transform your body, elevate your mind, embrace the beast within" 💪
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GymStory;

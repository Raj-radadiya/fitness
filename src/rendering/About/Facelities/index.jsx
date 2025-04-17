import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Flame, Timer, Sparkles, Zap, Heart, Trophy, Star, Waves, Shield, Crown } from 'lucide-react';

const FacilityHighlights = () => {
    const features = [
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: "Premium Equipment",
            description: "State-of-the-art machines for maximum results",
            gradient: "from-purple-600 to-pink-600",
            delay: 0.1,
            glowColor: "group-hover:shadow-purple-500/50"
        },
        {
            icon: <Crown className="w-8 h-8" />,
            title: "VIP Training",
            description: "Exclusive personal training sessions",
            gradient: "from-amber-600 to-orange-600",
            delay: 0.2,
            glowColor: "group-hover:shadow-amber-500/50"
        },
        {
            icon: <Flame className="w-8 h-8" />,
            title: "HIIT Studio",
            description: "High-intensity interval training zones",
            gradient: "from-red-600 to-orange-600",
            delay: 0.3,
            glowColor: "group-hover:shadow-red-500/50"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Safe Environment",
            description: "24/7 secured and sanitized facility",
            gradient: "from-emerald-600 to-teal-600",
            delay: 0.4,
            glowColor: "group-hover:shadow-emerald-500/50"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Cardio Zone",
            description: "Latest cardio equipment for endurance",
            gradient: "from-pink-600 to-rose-600",
            delay: 0.5,
            glowColor: "group-hover:shadow-pink-500/50"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Luxury Spa",
            description: "Premium relaxation & recovery area",
            gradient: "from-blue-600 to-cyan-600",
            delay: 0.6,
            glowColor: "group-hover:shadow-blue-500/50"
        },
        {
            icon: <Waves className="w-8 h-8" />,
            title: "Swimming Pool",
            description: "Olympic-size heated pool facility",
            gradient: "from-cyan-600 to-teal-600",
            delay: 0.7,
            glowColor: "group-hover:shadow-cyan-500/50"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Power Zone",
            description: "Specialized powerlifting equipment",
            gradient: "from-yellow-600 to-orange-600",
            delay: 0.8,
            glowColor: "group-hover:shadow-yellow-500/50"
        }
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Animated Meteor Effect */}
            <div className="absolute inset-0">
                <div className="absolute w-[2px] h-[32px] left-[50%] top-0 rotate-[35deg] animate-meteor bg-gradient-to-b from-purple-500 to-transparent"></div>
                <div className="absolute w-[2px] h-[32px] left-[70%] top-0 rotate-[35deg] animate-meteor delay-300 bg-gradient-to-b from-blue-500 to-transparent"></div>
                <div className="absolute w-[2px] h-[32px] left-[30%] top-0 rotate-[35deg] animate-meteor delay-700 bg-gradient-to-b from-pink-500 to-transparent"></div>
            </div>

            {/* Dynamic Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px] animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <Sparkles className="w-12 h-12 text-purple-500 animate-pulse" />
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                        World-Class Facilities
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Experience fitness excellence with our premium equipment and luxury amenities
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group"
                        >
                            <div className={`relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl ${feature.glowColor}`}>
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                {/* Animated Icon */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>

                                {/* Enhanced Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilityHighlights;

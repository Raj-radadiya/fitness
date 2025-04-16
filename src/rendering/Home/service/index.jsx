import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Heart, Flame, Medal, Apple } from 'lucide-react';

const services = [
    {
        icon: <Dumbbell size={32} />,
        title: "Personal Training",
        description: "Get personalized workout plans and one-on-one guidance from expert trainers",
        gradient: "from-blue-600 to-indigo-600",
        shadowColor: "shadow-blue-500/30",
        bgGlow: "bg-blue-600/10"
    },
    {
        icon: <Users size={32} />,
        title: "Group Classes",
        description: "Join high-energy group sessions with motivating instructors and like-minded people",
        gradient: "from-purple-600 to-pink-600",
        shadowColor: "shadow-purple-500/30",
        bgGlow: "bg-purple-600/10"
    },
    {
        icon: <Heart size={32} />,
        title: "Cardio Zone",
        description: "Access premium cardio equipment and guided cardio training programs",
        gradient: "from-red-600 to-orange-600",
        shadowColor: "shadow-red-500/30",
        bgGlow: "bg-red-600/10"
    },
    {
        icon: <Flame size={32} />,
        title: "HIIT Training",
        description: "Intense interval training sessions for maximum fat burn and fitness gains",
        gradient: "from-amber-500 to-orange-600",
        shadowColor: "shadow-amber-500/30",
        bgGlow: "bg-amber-500/10"
    },
    {
        icon: <Medal size={32} />,
        title: "Elite Training",
        description: "Advanced programs designed for athletes and serious fitness enthusiasts",
        gradient: "from-emerald-600 to-teal-600",
        shadowColor: "shadow-emerald-500/30",
        bgGlow: "bg-emerald-600/10"
    },
    {
        icon: <Apple size={32} />,
        title: "Nutrition Plans",
        description: "Custom meal plans and nutrition coaching to complement your fitness journey",
        gradient: "from-green-600 to-cyan-600",
        shadowColor: "shadow-green-500/30",
        bgGlow: "bg-green-600/10"
    }
];

const ServicesSection = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
                {/* Animated Glow Effects */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-6 tracking-tight">
                        Elite Services
                    </h2>
                    <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Experience premium fitness services tailored to transform your body and elevate your performance
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Card */}
                            <div className={`relative h-[400px] rounded-2xl p-8 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 ${service.shadowColor} hover:shadow-2xl`}>
                                {/* Background Effects */}
                                <div className={`absolute inset-0 ${service.bgGlow} opacity-50`}></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                <div className="absolute inset-[1px] rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                                            <div className="text-white">{service.icon}</div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    {/* Button */}
                                    <div className="mt-auto">
                                        <button className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-lg relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg`}>
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <span className="relative">Get Started →</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

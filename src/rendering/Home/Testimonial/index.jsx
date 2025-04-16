import React from 'react';
import { motion } from 'framer-motion';
// import { cn } from "@/lib/utils";
// Double the testimonials array for smooth infinite scroll
const testimonials = [
    {
        name: 'Ravi Deshmukh',
        role: 'Member since 2022',
        quote: 'This gym completely changed my lifestyle! Trainers are so motivating and the environment is top-class.',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Sneha Joshi',
        role: 'Yoga Enthusiast',
        quote: 'I love the group sessions! Every class is energizing and the facility is super clean and well-equipped.',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Amit Verma',
        role: 'Corporate Professional',
        quote: 'Flexible timings and amazing trainers helped me stay fit even with a busy schedule.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Priya Sharma',
        role: 'Fitness Enthusiast',
        quote: 'The personal attention and custom workout plans have helped me achieve my fitness goals.',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Rahul Kapoor',
        role: 'Athlete',
        quote: 'Best gym equipment and professional trainers. Highly recommended for serious fitness goals.',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Anjali Patel',
        role: 'Wellness Coach',
        quote: 'The holistic approach to fitness and wellness here is exactly what I was looking for.',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    }
];

// Duplicate testimonials for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialSection = () => {
    return (
        <section className="relative py-32 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
            </div>
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-20 px-4"
                >
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                        Success Stories
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real transformations, real results - hear from our dedicated members
                    </p>
                </motion.div>

                {/* Infinite Scroll Container */}
                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            x: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedTestimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[400px] group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl 
                                         border border-gray-700/50 rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(167,139,250,0.1)]
                                         transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-3xl 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full 
                                                          animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                src={t.img}
                                                alt={t.name}
                                                className="relative w-16 h-16 rounded-full object-cover border-2 border-purple-500/50
                                                         group-hover:border-purple-400 transition-colors duration-300"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-white group-hover:text-purple-200 
                                                         transition-colors duration-300">{t.name}</h4>
                                            <span className="text-sm text-gray-400 group-hover:text-gray-300 
                                                           transition-colors duration-300">{t.role}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 italic text-lg leading-relaxed 
                                              group-hover:text-white transition-colors duration-300">"{t.quote}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

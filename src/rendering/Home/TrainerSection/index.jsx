import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Calendar, Star, Award, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const trainers = [
    {
        name: 'Arjun Patel',
        role: 'Strength & Conditioning',
        img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww',
        experience: '8+ Years',
        rating: 4.9,
        reviews: 120,
        availability: 'Mon-Sat',
        phone: '+91 98765 43210',
        specialties: ['Weight Training', 'CrossFit', 'Diet Plans'],
        pricing: {
            oneSession: '₹1,500',
            fiveSessions: '₹7,000',
            tenSessions: '₹13,000'
        },
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Meera Shah',
        role: 'Yoga Expert',
        img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80',
        experience: '10+ Years',
        rating: 4.8,
        reviews: 150,
        availability: 'Mon-Sun',
        phone: '+91 98765 43211',
        specialties: ['Hatha Yoga', 'Meditation', 'Breathing'],
        pricing: {
            oneSession: '₹1,200',
            fiveSessions: '₹5,500',
            tenSessions: '₹10,000'
        },
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Rahul Desai',
        role: 'Fitness Coach',
        img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
        experience: '6+ Years',
        rating: 4.7,
        reviews: 90,
        availability: 'Tue-Sun',
        phone: '+91 98765 43212',
        specialties: ['HIIT', 'Boxing', 'Core'],
        pricing: {
            oneSession: '₹1,300',
            fiveSessions: '₹6,000',
            tenSessions: '₹11,000'
        },
        social: {
            instagram: '#',
            twitter: '#',
            linkedin: '#'
        }
    }
];

const TrainerSection = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    return (
        <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                        Elite Training Team
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transform your fitness journey with our expert trainers who bring years of experience and dedication
                    </p>
                </motion.div>

                {/* Trainers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(167,139,250,0.3)] transition-all duration-300">
                                {/* Trainer Image with Overlay */}
                                <div className="relative h-80">
                                    <img
                                        src={trainer.img}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    
                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-white font-semibold">{trainer.rating}</span>
                                            <span className="text-gray-300 text-sm">({trainer.reviews})</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trainer Info */}
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                                        <p className="text-purple-400 font-medium">{trainer.role}</p>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <Award className="w-6 h-6 text-purple-400 mb-2" />
                                            <p className="text-gray-400 text-sm">Experience</p>
                                            <p className="text-white font-semibold">{trainer.experience}</p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <Calendar className="w-6 h-6 text-blue-400 mb-2" />
                                            <p className="text-gray-400 text-sm">Available</p>
                                            <p className="text-white font-semibold">{trainer.availability}</p>
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="mb-8">
                                        <h4 className="text-gray-400 mb-3">Specializations</h4>
                                        <div className="space-y-2">
                                            {trainer.specialties.map((specialty) => (
                                                <div key={specialty} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                    <span className="text-gray-300">{specialty}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 mb-8">
                                        <h4 className="text-gray-400 mb-4">Training Packages</h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300">Single Session</span>
                                                <span className="text-white font-bold">{trainer.pricing.oneSession}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300">5 Sessions Pack</span>
                                                <span className="text-white font-bold">{trainer.pricing.fiveSessions}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300">10 Sessions Pack</span>
                                                <span className="text-white font-bold">{trainer.pricing.tenSessions}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-4">
                                        <button 
                                            onClick={() => setSelectedTrainer(trainer)}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all duration-300"
                                        >
                                            Book Trial Session
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        
                                        {/* Quick Contact */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Phone className="w-5 h-5" />
                                                <span>{trainer.phone}</span>
                                            </div>
                                            <div className="flex gap-4">
                                                {Object.entries(trainer.social).map(([platform, link]) => (
                                                    <a 
                                                        key={platform}
                                                        href={link}
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                                                        {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                                                        {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
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

export default TrainerSection;

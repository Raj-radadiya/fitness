import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, AtSign } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full filter blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-full filter blur-[150px] animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <div className="inline-block">
                        <span className="inline-block text-white text-sm font-semibold px-3 py-1 bg-white/10 rounded-full mb-4">
                            📍 Contact Us
                        </span>
                    </div>
                    <h2 className="text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Take the first step towards your fitness goals. We're here to help you transform your life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Enhanced Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-10"
                    >
                        {/* Styled Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <MapPin className="w-6 h-6" />,
                                    title: "Visit Us",
                                    content: "123 Fitness Street, Mumbai, Maharashtra 400001",
                                    gradient: "from-purple-500 to-pink-500"
                                },
                                {
                                    icon: <Phone className="w-6 h-6" />,
                                    title: "Call Us",
                                    content: "+91 98765 43210",
                                    gradient: "from-blue-500 to-cyan-500"
                                },
                                {
                                    icon: <Mail className="w-6 h-6" />,
                                    title: "Email Us",
                                    content: "info@powerfit.com",
                                    gradient: "from-orange-500 to-red-500"
                                },
                                {
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Working Hours",
                                    content: "Mon-Sat: 5:00 AM - 11:00 PM",
                                    gradient: "from-green-500 to-emerald-500"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    className={`relative group rounded-2xl p-6 bg-gray-900/50 backdrop-blur-xl border border-gray-800 overflow-hidden`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} p-[1px] mb-4`}>
                                        <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center text-white">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Enhanced Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Send className="w-6 h-6 text-purple-500" />
                                Send us a Message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <AtSign className="h-5 w-5 text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                ></textarea>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"></div>
                        <div className="absolute inset-[1px] bg-gray-900 rounded-2xl"></div>
                        <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden border border-gray-800">
                            <iframe
                                title="Gym Location"
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989268!2d72.74109977869434!3d19.082197839334186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f189b7a6d%3A0x6b4a437f1579f8c0!2sGym!5e0!3m2!1sen!2sin!4v1710000000000"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

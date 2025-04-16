import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const fadeInUp = {
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
                    {/* Brand Section */}
                    <motion.div {...fadeInUp} className="space-y-6">
                        <div className="flex items-center gap-3">
                            <FaDumbbell className="text-3xl text-purple-500" />
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                Beast Gym
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Transform your body, elevate your mind. Join the ultimate fitness experience with state-of-the-art equipment and expert guidance.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<FaFacebookF />} />
                            <SocialLink href="#" icon={<FaInstagram />} />
                            <SocialLink href="#" icon={<FaTwitter />} />
                            <SocialLink href="#" icon={<FaYoutube />} />
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div {...fadeInUp} className="space-y-6">
                        <h4 className="text-xl font-semibold">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#" text="Home" />
                            <FooterLink href="#" text="About Us" />
                            <FooterLink href="#" text="Classes" />
                            <FooterLink href="#" text="Schedule" />
                            <FooterLink href="#" text="Pricing" />
                            <FooterLink href="#" text="Contact" />
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div {...fadeInUp} className="space-y-6">
                        <h4 className="text-xl font-semibold">Our Services</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#" text="Personal Training" />
                            <FooterLink href="#" text="Group Classes" />
                            <FooterLink href="#" text="Nutrition Planning" />
                            <FooterLink href="#" text="Fitness Assessment" />
                            <FooterLink href="#" text="Weight Loss Programs" />
                            <FooterLink href="#" text="Strength Training" />
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div {...fadeInUp} className="space-y-6">
                        <h4 className="text-xl font-semibold">Contact Us</h4>
                        <div className="space-y-4">
                            <ContactInfo
                                icon={<FaMapMarkerAlt />}
                                text="123 Fitness Street, Mumbai, India"
                            />
                            <ContactInfo
                                icon={<FaPhone />}
                                text="+91 98765 43210"
                            />
                            <ContactInfo
                                icon={<FaEnvelope />}
                                text="info@beastgym.com"
                            />
                        </div>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                            Join Now
                        </button>
                    </motion.div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    {...fadeInUp}
                    className="border-y border-gray-800 py-12 mb-12"
                >
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h5 className="text-2xl font-bold">Subscribe to Our Newsletter</h5>
                        <p className="text-gray-400">Get the latest updates on fitness tips, special offers, and gym news.</p>
                        <form className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    {...fadeInUp}
                    className="text-center text-gray-500 text-sm"
                >
                    <p>© {new Date().getFullYear()} Beast Gym. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

// Helper Components
const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, text }) => (
    <li>
        <a
            href={href}
            className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
        >
            {text}
        </a>
    </li>
);

const ContactInfo = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-gray-400">
        <span className="text-purple-500">{icon}</span>
        <span>{text}</span>
    </div>
);

export default Footer;

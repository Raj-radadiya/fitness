import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1950&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative z-10 max-w-3xl text-center text-white bg-black/40 backdrop-blur-xl rounded-3xl px-8 py-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                    💥 Unleash Your Inner Beast
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Join the ultimate fitness journey with our expert coaches, modern equipment, and electrifying energy.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:scale-105 transition-transform px-8 py-3 rounded-full font-bold shadow-xl">
                        Join Now
                    </button>
                    <button className="border border-white/40 hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-300">
                        Book Free Trial
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md">
                        View Plans
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;

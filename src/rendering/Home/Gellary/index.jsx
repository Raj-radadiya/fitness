import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        title: "Strength Training",
        category: "Workout",
        description: "Professional strength training equipment for maximum results"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        title: "Cardio Zone",
        category: "Equipment",
        description: "State-of-the-art cardio machines for heart-healthy workouts"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2",
        title: "Yoga Studio",
        category: "Wellness",
        description: "Peaceful yoga space for mind-body balance"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
        title: "Personal Training",
        category: "Training",
        description: "One-on-one training sessions with expert trainers"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1591258370814-01609b341790",
        title: "CrossFit Area",
        category: "Workout",
        description: "Fully equipped CrossFit zone for intense workouts"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df",
        title: "Recovery Zone",
        category: "Wellness",
        description: "Modern recovery and relaxation facilities"
    }
];

const GallerySection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                        Our Facility
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Step into a world of premium fitness equipment and modern amenities
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <a href={image.url} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="relative h-[400px] rounded-xl overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                                opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 
                                                flex flex-col justify-end">
                                        {/* Category Tag */}
                                        <div className="bg-white/20 backdrop-blur-sm w-fit px-4 py-1 rounded-full mb-4">
                                            <span className="text-sm font-medium text-white">{image.category}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm">{image.description}</p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;

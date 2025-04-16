import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Basic',
        price: '₹999',
        duration: 'per month',
        features: [
            'Access to Gym Equipment',
            'Locker Facility',
            '1 Personal Training Session',
            'Basic Fitness Assessment',
            'Access to Mobile App'
        ],
        buttonText: 'Start Basic Plan',
        highlighted: false,
        gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        name: 'Standard',
        price: '₹1499',
        duration: 'per month',
        features: [
            'All Basic Features',
            'Unlimited Group Classes',
            'Personalized Diet Plan',
            'Weekly Progress Tracking',
            'Priority Booking'
        ],
        buttonText: 'Start Standard Plan',
        highlighted: true,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        name: 'Premium',
        price: '₹1999',
        duration: 'per month',
        features: [
            'All Standard Features',
            'Unlimited PT Sessions',
            'Steam & Sauna Access',
            '24/7 Trainer Support',
            'Nutrition Consultation'
        ],
        buttonText: 'Start Premium Plan',
        highlighted: false,
        gradient: 'from-amber-500/20 to-orange-500/20'
    }
];

export default function PricingSection() {
    return (
        <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-purple-700/20 to-pink-700/20"></div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        Choose Your Path to
                    </h2>
                    <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-5xl">
                        Fitness Excellence
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Transform your life with our carefully crafted membership plans
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 grid max-w-lg gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative rounded-3xl p-px overflow-hidden ${plan.highlighted ? 'bg-gradient-to-b from-purple-500 to-pink-500' : 'bg-white/10'
                                }`}
                        >
                            <div className={`relative rounded-3xl p-8 h-full ${plan.highlighted
                                ? 'bg-gray-900/90 backdrop-blur-xl'
                                : 'bg-gray-900/50 backdrop-blur-sm'
                                }`}>
                                {plan.highlighted && (
                                    <div className="absolute top-4 right-4">
                                        <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-200'
                                        }`}>
                                        {plan.name}
                                    </h3>
                                    <div className="mt-4 flex items-baseline">
                                        <p className={`text-5xl font-bold tracking-tight ${plan.highlighted ? 'text-white' : 'text-gray-200'
                                            }`}>
                                            {plan.price}
                                        </p>
                                        <p className="ml-2 text-gray-400">
                                            {plan.duration}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className={`h-5 w-5 ${plan.highlighted ? 'text-purple-400' : 'text-blue-400'
                                                }`} />
                                            <span className="text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${plan.highlighted
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
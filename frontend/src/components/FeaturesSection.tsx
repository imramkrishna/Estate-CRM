'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
    Zap,
    Shield,
    BarChart3,
    MessageSquare,
    Calendar,
    Globe
} from 'lucide-react';

const FeaturesSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const features = [
        {
            icon: Zap,
            title: 'Lead Management',
            description: 'Comprehensive lead tracking, scoring, and automated assignment to maximize conversion rates.',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Property Management',
            description: 'Complete property portfolio management with advanced listing and inventory control.',
            color: 'from-green-400 to-blue-500'
        },
        {
            icon: BarChart3,
            title: 'Advanced Analytics',
            description: 'Deep insights and reporting with predictive analytics to optimize your sales performance.',
            color: 'from-blue-400 to-purple-500'
        },
        {
            icon: MessageSquare,
            title: 'Communication Hub',
            description: 'Integrated SMS, email, and call management with automated follow-up sequences.',
            color: 'from-pink-400 to-red-500'
        },
        {
            icon: Calendar,
            title: 'Smart Scheduling',
            description: 'AI-powered appointment booking with integrated calendar and attendance tracking.',
            color: 'from-indigo-400 to-purple-500'
        },
        {
            icon: Globe,
            title: 'Mobile CRM App',
            description: 'Full-featured mobile application for real estate professionals on the go.',
            color: 'from-teal-400 to-blue-500'
        },
        {
            icon: Zap,
            title: 'Automated Workflows',
            description: 'Streamline your processes with intelligent automation and lead nurturing.',
            color: 'from-purple-400 to-pink-500'
        },
        {
            icon: Shield,
            title: 'Security & Compliance',
            description: 'Enterprise-grade security with data encryption and compliance management.',
            color: 'from-red-400 to-orange-500'
        },
        {
            icon: BarChart3,
            title: 'Property Microsites',
            description: 'Create stunning property microsites with virtual tours and lead capture forms.',
            color: 'from-cyan-400 to-blue-500'
        }
    ]; return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6"
                    >
                        <span className="text-blue-400 font-medium">Powerful Features</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Everything You Need to{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Succeed
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Our comprehensive suite of tools is designed to streamline your workflow
                        and maximize your real estate business potential.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 * index }}
                            className="group relative"
                        >
                            <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-1 mb-6`}
                                >
                                    <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
                                >
                                    {feature.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="text-gray-400 leading-relaxed"
                                >
                                    {feature.description}
                                </motion.p>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Explore All Features
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;

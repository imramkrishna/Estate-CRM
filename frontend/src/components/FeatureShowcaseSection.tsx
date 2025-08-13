'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lightbulb, Users, Home, UserCheck, Target, BarChart3 } from 'lucide-react';

const FeatureShowcaseSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const features = [
        {
            icon: Lightbulb,
            title: 'Enhanced/Centralized Lead Management',
            description: 'Capture, track, and convert leads seamlessly from multiple sources, including website inquiries, social media, and property portals. Streamline lead distribution and assignment to ensure timely follow-up and maximize conversion rates.'
        },
        {
            icon: Users,
            title: 'Optimize Client Relationship Management',
            description: 'Centralize client information and communication history for personalized engagement and superior customer service. Segment clients based on their status to tailor marketing and communication efforts.'
        },
        {
            icon: Home,
            title: 'Streamline Property Management',
            description: 'Our real-estate CRM software allows you to manage property listings, availability status, and showings with ease. Automate tasks such as appointment scheduling, document management, and contract tracking to streamline the transaction process.'
        },
        {
            icon: UserCheck,
            title: 'Effective Team Management',
            description: 'Coordinate team activities, assign tasks, and track performance to ensure efficient collaboration. Monitor agent productivity and provide real-time insights to optimize team performance.'
        },
        {
            icon: Target,
            title: 'Goal Setting & Tracking',
            description: 'Set clear objectives and track progress with comprehensive analytics. Monitor key performance indicators and adjust strategies to achieve better results and business growth.'
        },
        {
            icon: BarChart3,
            title: 'Performance Analytics',
            description: 'Gain deep insights into your business performance with advanced analytics and reporting. Track conversion rates, revenue trends, and team productivity to make data-driven decisions.'
        }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Here's How Leadrat Can Help you convert
                        <br />
                        <span className="text-white">'Prospects Into Paying Clients'</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50 hover:border-teal-500/30 h-full">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500/10 transition-colors duration-300">
                                    <feature.icon className="w-8 h-8 text-white group-hover:text-teal-400 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcaseSection;

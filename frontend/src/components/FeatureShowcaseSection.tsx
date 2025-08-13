'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lightbulb, Users, Home, UserCheck, Target, BarChart3 } from 'lucide-react';

const FeatureShowcaseSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const features = [
        {
            icon: Lightbulb,
            title: 'Enhanced Lead Management',
            description: 'Capture, track, and convert leads seamlessly from multiple sources, including website inquiries, social media, and property portals. Streamline lead distribution and assignment to ensure timely follow-up and maximize conversion rates.',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: Users,
            title: 'Client Relationship Management',
            description: 'Centralize client information and communication history for personalized engagement and superior customer service. Segment clients based on their status to tailor marketing and communication efforts.',
            color: 'from-blue-400 to-purple-500'
        },
        {
            icon: Home,
            title: 'Property Management',
            description: 'Our real-estate CRM software allows you to manage property listings, availability status, and showings with ease. Automate tasks such as appointment scheduling, document management, and contract tracking.',
            color: 'from-green-400 to-teal-500'
        },
        {
            icon: UserCheck,
            title: 'Team Management',
            description: 'Coordinate team activities, assign tasks, and track performance to ensure efficient collaboration. Monitor agent productivity and provide real-time insights to optimize team performance.',
            color: 'from-purple-400 to-pink-500'
        },
        {
            icon: Target,
            title: 'Goal Setting & Tracking',
            description: 'Set clear objectives and track progress with comprehensive analytics. Monitor key performance indicators and adjust strategies to achieve better results and business growth.',
            color: 'from-red-400 to-orange-500'
        },
        {
            icon: BarChart3,
            title: 'Performance Analytics',
            description: 'Gain deep insights into your business performance with advanced analytics and reporting. Track conversion rates, revenue trends, and team productivity to make data-driven decisions.',
            color: 'from-indigo-400 to-blue-500'
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full px-6 py-2 mb-6"
                    >
                        <span className="text-teal-400 font-medium">Core Features</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Transform Your Real Estate Business
                        <br />
                        <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            Convert Prospects Into Paying Clients
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Our comprehensive suite of tools streamlines your workflow and maximizes your business potential
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-teal-500/30 flex flex-col">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-1 mb-6 flex-shrink-0`}
                                >
                                    <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        className="text-lg lg:text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300"
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                        className="text-gray-400 text-sm lg:text-base leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcaseSection;

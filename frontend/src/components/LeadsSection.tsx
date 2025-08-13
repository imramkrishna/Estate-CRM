'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Smartphone, Users, TrendingUp, MessageCircle } from 'lucide-react';

const LeadsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const features = [
        {
            icon: Users,
            title: 'Lead Capture',
            description: 'Automatically capture leads from all channels'
        },
        {
            icon: MessageCircle,
            title: 'Auto Follow-up',
            description: 'Smart automated follow-up sequences'
        },
        {
            icon: TrendingUp,
            title: 'Analytics',
            description: 'Real-time performance insights'
        }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-block bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
                            >
                                Lead Management
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl md:text-4xl font-bold text-white mb-6"
                            >
                                Capture & Convert Leads
                                <span className="block text-blue-400">On the Go</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-xl text-gray-300 mb-8"
                            >
                                Never miss an opportunity with our mobile-first lead management system.
                                Capture, nurture, and convert leads from anywhere, anytime.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105"
                        >
                            Start Managing Leads
                        </motion.button>
                    </motion.div>

                    {/* Mobile App Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative max-w-sm mx-auto">
                            {/* Phone Frame */}
                            <div className="relative bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                                <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden">
                                    {/* Notch */}
                                    <div className="h-6 bg-gray-900 flex items-center justify-center">
                                        <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
                                    </div>

                                    {/* Screen Content */}
                                    <div className="px-6 py-4 space-y-4">
                                        {/* Header */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white font-semibold">Recent Leads</h3>
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">12</span>
                                            </div>
                                        </div>

                                        {/* Lead Cards */}
                                        {[
                                            { name: 'Sarah Johnson', property: 'Downtown Condo', status: 'Hot' },
                                            { name: 'Mike Chen', property: 'Suburban House', status: 'Warm' },
                                            { name: 'Lisa Brown', property: 'Luxury Villa', status: 'Cold' },
                                        ].map((lead, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                                className="bg-gray-800 rounded-lg p-4"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-white font-medium">{lead.name}</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs ${lead.status === 'Hot' ? 'bg-red-500/20 text-red-400' :
                                                        lead.status === 'Warm' ? 'bg-yellow-500/20 text-yellow-400' :
                                                            'bg-gray-500/20 text-gray-400'
                                                        }`}>
                                                        {lead.status}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-sm">{lead.property}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-8 -right-8 w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center"
                            >
                                <Smartphone className="w-8 h-8 text-teal-400" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -left-8 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center"
                            >
                                <TrendingUp className="w-6 h-6 text-emerald-400" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadsSection;

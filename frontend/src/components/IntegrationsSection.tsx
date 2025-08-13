'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Building, Globe, Mail, Phone, FileText, MapPin, Camera } from 'lucide-react';

const IntegrationsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const integrations = [
        { name: 'Gmail', icon: Mail, position: { top: '15%', left: '15%' } },
        { name: 'Google Ads', icon: Globe, position: { top: '20%', right: '25%' } },
        { name: 'Just Lead', icon: Zap, position: { top: '10%', right: '10%' } },
        { name: '99acres', icon: Building, position: { left: '10%', top: '45%' } },
        { name: 'Facebook', icon: Camera, position: { right: '20%', top: '40%' } },
        { name: 'OLX', icon: MapPin, position: { top: '55%', left: '50%' } },
        { name: 'QuikrHomes', icon: FileText, position: { bottom: '35%', left: '20%' } },
        { name: 'Housing', icon: Phone, position: { bottom: '25%', right: '35%' } },
        { name: 'Website', icon: Globe, position: { bottom: '45%', left: '15%' } },
        { name: 'Magicbricks', icon: Building, position: { bottom: '30%', right: '15%' } }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="relative lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 lg:space-y-8 mb-12 lg:mb-0"
                    >
                        <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-8">
                            <Zap className="w-8 h-8 text-teal-400" />
                        </div>

                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                            >
                                Instant Integration With
                                <span className="block text-white">3rd party platforms</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-gray-400 text-lg mb-2 font-medium"
                            >
                                So That You Don't Miss Even a Single Lead
                            </motion.p>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-gray-400 text-base leading-relaxed"
                        >
                            Leadrat allows you to seamlessly integrate with 3rd party platforms and import all
                            of the lead data at one place. Say goodbye to manual work and adopt Leadrat
                            automation to propel significantly better lead conversions
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                        >
                            Book A Demo
                        </motion.button>
                    </motion.div>

                    {/* Integration Network Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-64 sm:h-80 lg:h-[500px]"
                    >
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
                            {/* Network Lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />

                                {/* Connected lines */}
                                {integrations.map((_, index) => (
                                    <motion.line
                                        key={index}
                                        x1="50%"
                                        y1="50%"
                                        x2={integrations[index].position.left ? integrations[index].position.left : `${100 - parseInt(integrations[index].position.right || '0')}%`}
                                        y2={integrations[index].position.top ? integrations[index].position.top : `${100 - parseInt(integrations[index].position.bottom || '0')}%`}
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        opacity="0.3"
                                        initial={{ pathLength: 0 }}
                                        animate={isVisible ? { pathLength: 1 } : {}}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    />
                                ))}
                            </svg>

                            {/* Integration Icons */}
                            {integrations.map((integration, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="absolute"
                                    style={integration.position}
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                        <integration.icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap">
                                        {integration.name}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Central Leadrat Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="w-20 h-20 bg-teal-500 rounded-2xl shadow-xl flex items-center justify-center">
                                    <div className="text-white font-bold text-lg">🏠</div>
                                </div>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">
                                    leadrat
                                </div>
                            </motion.div>

                            {/* Floating Animation Dots */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                                    style={{
                                        left: `${20 + (i * 10)}%`,
                                        top: `${30 + (i * 5)}%`,
                                    }}
                                    animate={{
                                        y: [-10, 10, -10],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationsSection;

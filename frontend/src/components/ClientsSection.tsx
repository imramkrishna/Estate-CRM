'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ClientsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const clients = [
        { name: 'Coldwell Banker', logo: 'CB' },
        { name: 'RE/MAX', logo: 'RM' },
        { name: 'Keller Williams', logo: 'KW' },
        { name: 'Century 21', logo: 'C21' },
        { name: 'Berkshire Hathaway', logo: 'BH' },
        { name: 'Sotheby\'s', logo: 'SI' }
    ];

    const stats = [
        { value: '10,000+', label: 'Active Users' },
        { value: '500+', label: 'Companies' },
        { value: '50+', label: 'Countries' },
        { value: '99.9%', label: 'Uptime' }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
                        <span className="text-teal-400 font-medium">Trusted Worldwide</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join thousands of real estate professionals who trust our platform
                    </p>
                </motion.div>

                {/* Client Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/50 border border-gray-700 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-gray-700/50 group-hover:border-teal-500/30 transition-all duration-300">
                                <span className="text-gray-400 group-hover:text-teal-400 font-bold text-lg md:text-xl transition-colors duration-300">
                                    {client.logo}
                                </span>
                            </div>
                            <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-center font-medium text-sm md:text-base">
                                {client.name}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-teal-500/30">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;

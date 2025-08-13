'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ClientsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const clients = [
        'Coldwell Banker',
        'RE/MAX',
        'Keller Williams',
        'Century 21',
        'Berkshire Hathaway',
        'Sotheby\'s'
    ];

    return (
        <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-gray-400 text-lg">Trusted by leading real estate companies</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="flex items-center justify-center"
                        >
                            <div className="text-gray-400 hover:text-white transition-colors duration-300 text-center font-medium">
                                {client}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;

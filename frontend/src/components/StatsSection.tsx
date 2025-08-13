'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const StatsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.3);

    const stats = [
        {
            value: 25000,
            suffix: '+',
            label: 'Properties Listed',
            description: 'Across 50+ cities'
        },
        {
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            description: 'Based on 5K+ reviews'
        },
        {
            value: 150,
            suffix: '%',
            label: 'Revenue Growth',
            description: 'Year over year'
        },
        {
            value: 500,
            suffix: '+',
            label: 'Agents Active',
            description: 'Nationwide network'
        },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join thousands of real estate professionals who have transformed their business with our platform
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            {...stat}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ value, suffix, label, description, index, isVisible }: {
    value: number;
    suffix: string;
    label: string;
    description: string;
    index: number;
    isVisible: boolean;
}) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / 2000, 1);

            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setAnimatedValue(Math.floor(easeOutCubic * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [value, isVisible]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="text-center group"
        >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30">
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2"
                >
                    {animatedValue.toLocaleString()}{suffix}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{label}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </motion.div>
    );
};

export default StatsSection;

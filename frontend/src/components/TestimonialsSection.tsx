'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Top Real Estate Agent',
            company: 'Century 21 Elite',
            image: 'SC',
            rating: 5,
            quote: 'This CRM transformed my business. I increased my lead conversion rate by 150% and closed 40% more deals last quarter. The automation features save me hours every day.',
            stats: { deals: '156 deals', revenue: '$12.3M' }
        },
        {
            name: 'Michael Rodriguez',
            role: 'Broker Owner',
            company: 'Rodriguez Realty Group',
            image: 'MR',
            rating: 5,
            quote: 'Managing 25 agents was chaos before this system. Now everything is organized, leads are distributed automatically, and our team productivity has skyrocketed.',
            stats: { agents: '25 agents', growth: '200% growth' }
        },
        {
            name: 'Jennifer Thompson',
            role: 'Investment Specialist',
            company: 'Thompson Properties',
            image: 'JT',
            rating: 5,
            quote: 'The analytics and reporting features give me insights I never had before. I can predict market trends and make data-driven decisions that consistently outperform the competition.',
            stats: { portfolio: '$50M portfolio', roi: '35% ROI' }
        }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        Success Stories
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Trusted by Top Real Estate
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Professionals Worldwide
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join thousands of successful real estate professionals who have transformed
                        their business with our comprehensive CRM platform.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 h-full">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-blue-400" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Stats */}
                                <div className="flex items-center justify-between mb-6 p-4 bg-gray-700/30 rounded-lg">
                                    <div className="text-center">
                                        <div className="text-blue-400 font-semibold text-sm">
                                            {Object.values(testimonial.stats)[0]}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            {Object.keys(testimonial.stats)[0]}
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-600"></div>
                                    <div className="text-center">
                                        <div className="text-purple-400 font-semibold text-sm">
                                            {Object.values(testimonial.stats)[1]}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            {Object.keys(testimonial.stats)[1]}
                                        </div>
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        <p className="text-blue-400 text-sm font-medium">{testimonial.company}</p>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700/50">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Join These Success Stories?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Start your free trial today and see why top real estate professionals
                            choose our CRM to grow their business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
                                Start Free Trial
                            </button>
                            <button className="border border-gray-600 hover:border-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-blue-500/10">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

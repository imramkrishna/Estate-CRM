'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PricingSection from '@/components/PricingSection';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Shield, Award } from 'lucide-react';

export default function PricingPage() {
    const faqs = [
        {
            question: "Can I change my plan anytime?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            question: "Is there a free trial?",
            answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to get started."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
        },
        {
            question: "Do you offer discounts for annual plans?",
            answer: "Yes, you can save up to 20% by choosing annual billing instead of monthly."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We provide 24/7 email support for all plans, with phone support available for Business and Enterprise customers."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts."
        }
    ];

    const features = [
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level encryption and SOC 2 compliance"
        },
        {
            icon: Award,
            title: "99.9% Uptime SLA",
            description: "Guaranteed reliability with 24/7 monitoring"
        },
        {
            icon: HelpCircle,
            title: "Expert Support",
            description: "Real estate CRM specialists available 24/7"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
            <ParticleBackground />
            <Header />

            <main className="pt-16">
                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full px-6 py-2 mb-8">
                                <span className="text-teal-400 font-medium">Flexible Pricing</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Choose the Perfect Plan
                                <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    for Your Business
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                Start free and scale as you grow. All plans include our core features
                                with no setup fees or hidden costs.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Section */}
                <PricingSection />

                {/* Why Choose Us Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Estate CRM?</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We're committed to providing the best value and experience for real estate professionals.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <feature.icon className="w-8 h-8 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-300">
                                Got questions? We've got answers. If you can't find what you're looking for,
                                feel free to contact our support team.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
                                >
                                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                                        <HelpCircle className="w-5 h-5 text-teal-400 mr-2" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed pl-7">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join thousands of real estate professionals who have chosen Estate CRM
                                to grow their business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                    Start Free Trial
                                </button>
                                <button className="border border-gray-600 hover:border-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-teal-500/10">
                                    Contact Sales
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

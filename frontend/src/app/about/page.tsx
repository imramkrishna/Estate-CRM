'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { value: '10,000+', label: 'Happy Customers' },
        { value: '500+', label: 'Companies Served' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Support' }
    ];

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'SJ',
            bio: 'Former VP of Sales at a leading real estate firm with 15+ years of industry experience.'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: 'MC',
            bio: 'Ex-Google engineer with expertise in scalable systems and AI-driven solutions.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Product',
            image: 'ER',
            bio: 'Product strategist with a passion for creating user-centric real estate solutions.'
        },
        {
            name: 'David Kim',
            role: 'Head of Customer Success',
            image: 'DK',
            bio: 'Real estate veteran focused on helping agents maximize their potential.'
        }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Everything we do is centered around our customers\' success and satisfaction.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We constantly push boundaries to deliver cutting-edge solutions.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We believe in the power of teamwork and building strong partnerships.'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from code to customer service.'
        },
        {
            icon: Globe,
            title: 'Global Impact',
            description: 'Our mission is to transform real estate businesses worldwide.'
        },
        {
            icon: Target,
            title: 'Results Driven',
            description: 'We focus on delivering measurable results and ROI for our clients.'
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
                                <span className="text-teal-400 font-medium">About Estate CRM</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Revolutionizing Real Estate
                                <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    One Deal at a Time
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                We're on a mission to empower real estate professionals with the tools they need
                                to succeed in today's competitive market.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        Founded in 2020 by a team of real estate veterans and tech innovators,
                                        Estate CRM was born out of frustration with existing solutions that
                                        didn't truly understand the real estate industry.
                                    </p>
                                    <p>
                                        We spent countless hours talking to agents, brokers, and property managers
                                        to understand their pain points. What we discovered was a need for a
                                        comprehensive, user-friendly platform that could adapt to the unique
                                        workflows of real estate professionals.
                                    </p>
                                    <p>
                                        Today, Estate CRM powers thousands of real estate businesses worldwide,
                                        helping them close more deals, build stronger relationships, and grow
                                        their revenue.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm border border-teal-500/20">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                                            <span className="text-gray-300">2020 - Company Founded</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                                            <span className="text-gray-300">2021 - First 1,000 Users</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                                            <span className="text-gray-300">2022 - Series A Funding</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                                            <span className="text-gray-300">2023 - Global Expansion</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                                            <span className="text-gray-300">2024 - 10,000+ Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                These core values guide everything we do and shape how we build products and serve our customers.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                                        <value.icon className="w-8 h-8 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                The passionate people behind Estate CRM who are dedicated to your success.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 text-center"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                        {member.image}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className="text-teal-400 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
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
                                Ready to Transform Your Real Estate Business?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join thousands of successful real estate professionals who trust Estate CRM.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                    Start Free Trial
                                </button>
                                <button className="border border-gray-600 hover:border-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-teal-500/10">
                                    Schedule Demo
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

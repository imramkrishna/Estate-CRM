'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: '#', name: 'Facebook' },
        { icon: Twitter, href: '#', name: 'Twitter' },
        { icon: Linkedin, href: '#', name: 'LinkedIn' },
        { icon: Instagram, href: '#', name: 'Instagram' },
        { icon: Youtube, href: '#', name: 'YouTube' }
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-xl">🏠</span>
                                </div>
                                <span className="text-2xl font-bold text-white">RealEstate CRM</span>
                                <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded-full ml-2">Efficiency Zaruri Hai</span>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-4">Find Us Here</h3>

                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5 text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Our Presence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:text-right"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Our Presence</h3>
                            <div className="space-y-2">
                                <div className="flex items-center lg:justify-end">
                                    <span className="text-2xl mr-2">🇮🇳</span>
                                    <span className="text-white">India</span>
                                </div>
                                <div className="flex items-center lg:justify-end">
                                    <span className="text-2xl mr-2">🇦🇪</span>
                                    <span className="text-white">Dubai</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="py-6 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                        <p className="mb-4 md:mb-0">
                            Powered by RealEstate CRM | All Rights Reserved © 2025 | Estate Solutions Private Limited
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors duration-200">
                                Terms of Services
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

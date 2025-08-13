'use client';

import { motion } from 'framer-motion';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    const footerSections = [
        {
            title: 'Product',
            links: [
                'Features',
                'Integrations',
                'Pricing',
                'Mobile App',
                'API',
                'Security'
            ]
        },
        {
            title: 'Solutions',
            links: [
                'Real Estate Agents',
                'Brokerages',
                'Property Managers',
                'Developers',
                'Investment Firms',
                'Team Collaboration'
            ]
        },
        {
            title: 'Resources',
            links: [
                'Help Center',
                'Documentation',
                'Webinars',
                'Blog',
                'Case Studies',
                'Templates'
            ]
        },
        {
            title: 'Company',
            links: [
                'About Us',
                'Careers',
                'Contact',
                'Partners',
                'Press',
                'Legal'
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', name: 'Facebook' },
        { icon: Twitter, href: '#', name: 'Twitter' },
        { icon: Linkedin, href: '#', name: 'LinkedIn' },
        { icon: Instagram, href: '#', name: 'Instagram' }
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="md:col-span-2 lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                                        <Building className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xl lg:text-2xl font-bold text-white">Estate CRM</span>
                                </div>

                                <p className="text-gray-400 text-base lg:text-lg mb-6 lg:mb-8 max-w-md leading-relaxed">
                                    The most comprehensive CRM platform designed specifically for real estate professionals.
                                    Grow your business, manage leads, and close more deals.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                                    <div className="flex items-center text-gray-400">
                                        <Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-teal-400 flex-shrink-0" />
                                        <span className="text-sm lg:text-base">contact@estate-crm.com</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-teal-400 flex-shrink-0" />
                                        <span className="text-sm lg:text-base">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-start text-gray-400">
                                        <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-teal-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm lg:text-base">123 Business Ave, San Francisco, CA 94107</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex space-x-3 lg:space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 hover:text-white" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Footer Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:col-span-2 lg:col-span-3">
                            {footerSections.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                                    >
                                        <h3 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">{section.title}</h3>
                                        <ul className="space-y-3 lg:space-y-4">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href="#"
                                                        className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm lg:text-base"
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="py-8 border-t border-gray-800"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="mb-6 lg:mb-0">
                            <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>
                            <p className="text-gray-400">Get the latest real estate CRM tips and industry insights.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-teal-500 focus:outline-none min-w-0 flex-1 lg:w-80"
                            />
                            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="py-6 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 RealEstate CRM. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

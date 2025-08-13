'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    onOpenContactModal?: (title?: string) => void;
}

const Header = ({ onOpenContactModal }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Channel Partner', href: '/channel-partner' },
        { name: 'Career', href: '/careers' },
        { name: 'Contact us', href: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-sm border-b border-gray-800' : 'bg-gray-950/80'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center space-x-3"
                    >
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm md:text-xl">🏠</span>
                            </div>
                            <span className="text-lg md:text-2xl font-bold text-white">RealEstate CRM</span>
                            <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded-full hidden sm:inline">BETA</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-lg transition-colors duration-200 ${isActive
                                            ? 'text-white font-semibold'
                                            : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="hidden md:flex items-center space-x-4"
                    >
                        <button
                            onClick={() => onOpenContactModal?.('Get Quote')}
                            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            Get Quote
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-900 rounded-lg mt-2 p-4 border border-gray-800"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navigationItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`transition-colors duration-200 text-left ${isActive
                                            ? 'text-white font-semibold'
                                            : 'text-gray-300 hover:text-white'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-gray-700 flex flex-col space-y-2">
                                <button
                                    onClick={() => {
                                        onOpenContactModal?.('Get Quote');
                                        setIsMenuOpen(false);
                                    }}
                                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;

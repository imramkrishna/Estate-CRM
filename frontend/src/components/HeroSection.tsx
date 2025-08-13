'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />

            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Notification Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full px-6 py-2 mb-8"
                >
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">New: Advanced Analytics Dashboard</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8"
                >
                    Revolutionary Real Estate{' '}
                    <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                        CRM Platform
                    </span>
                    <br />
                    <span className="text-teal-400">Built for Success</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4"
                >
                    Transform your real estate business with our comprehensive CRM solution.
                    Manage leads, close deals faster, and scale your operations with cutting-edge automation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4"
                >
                    <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group">
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 flex items-center justify-center space-x-2 group">
                        <Play className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Book Demo</span>
                    </button>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Dashboard Container with Purple Gradient Background */}
                    <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-900 rounded-3xl p-2 shadow-2xl overflow-hidden">
                        {/* Left Gradient Overlay */}
                        <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-purple-500 to-transparent rounded-l-3xl z-10 flex items-center justify-center">
                            <div className="text-white text-center p-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    Free Admin
                                    <br />
                                    Dashboard Template
                                </h2>
                            </div>
                        </div>

                        {/* Main Dashboard Interface */}
                        <div className="relative bg-slate-900 rounded-2xl min-h-[400px] lg:min-h-[500px] flex z-20">
                            {/* Sidebar */}
                            <div className="w-64 bg-slate-800 border-r border-slate-700 p-4 hidden lg:block">
                                {/* Logo */}
                                <div className="flex items-center space-x-2 mb-8">
                                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-sm">🔷</span>
                                    </div>
                                    <span className="text-white font-semibold">Dashdark X</span>
                                </div>

                                {/* Search */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Search for..."
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400"
                                    />
                                </div>

                                {/* Navigation */}
                                <nav className="space-y-2">
                                    <div className="text-purple-400 font-medium text-sm mb-4">🏠 Dashboard</div>

                                    <div className="space-y-1 text-sm">
                                        <div className="text-gray-400">All pages</div>
                                        <div className="text-purple-400 bg-purple-900/50 px-3 py-2 rounded-lg">Reports</div>
                                        <div className="text-gray-400 px-3 py-1">Products</div>
                                        <div className="text-gray-400 px-3 py-1">Task</div>
                                    </div>

                                    <div className="mt-6 space-y-2 text-sm">
                                        <div className="text-gray-400">⭐ Features</div>
                                        <div className="text-gray-400">👥 Users</div>
                                        <div className="text-gray-400">💰 Pricing</div>
                                        <div className="text-gray-400">🔗 Integrations</div>
                                        <div className="text-gray-400">⚙️ Settings</div>
                                    </div>

                                    {/* User Profile */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                                            <div className="text-sm">
                                                <div className="text-white font-medium">John Carter</div>
                                                <div className="text-gray-400">Account settings</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-6 overflow-hidden">
                                {/* Top Bar */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h1 className="text-2xl font-bold text-white mb-1">Welcome back, John</h1>
                                        <p className="text-gray-400">Measure your advertising ROI and report website traffic.</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button className="text-gray-400 text-sm">Export data ⬇</button>
                                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">Create report</button>
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white">🔔</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-400 text-sm">📄 Pageviews</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">50.8K</div>
                                        <div className="text-green-400 text-xs">+55.9%</div>
                                    </div>

                                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-400 text-sm">👥 Monthly users</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">23.6K</div>
                                        <div className="text-red-400 text-xs">-15.3%</div>
                                    </div>

                                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-400 text-sm">🆕 New sign ups</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">756</div>
                                        <div className="text-green-400 text-xs">+15.3%</div>
                                    </div>

                                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-400 text-sm">⭐ Subscriptions</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">2.3K</div>
                                        <div className="text-green-400 text-xs">+11.3%</div>
                                    </div>
                                </div>

                                {/* Charts Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Revenue Chart */}
                                    <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-white font-semibold">Total revenue</h3>
                                                <div className="text-2xl font-bold text-white">$240.8K</div>
                                                <div className="text-green-400 text-sm">+5.65%</div>
                                            </div>
                                            <div className="text-xs text-gray-400">Jan 2024 - Dec 2024</div>
                                        </div>

                                        {/* Curved Chart Visualization */}
                                        <div className="h-40 relative">
                                            <svg className="w-full h-full" viewBox="0 0 400 160">
                                                <defs>
                                                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                                                    </linearGradient>
                                                </defs>

                                                {/* Area under curve */}
                                                <path
                                                    d="M 20 140 Q 100 80 180 100 T 380 60 L 380 140 Z"
                                                    fill="url(#purpleGradient)"
                                                />

                                                {/* Main curve line */}
                                                <path
                                                    d="M 20 140 Q 100 80 180 100 T 380 60"
                                                    stroke="#8b5cf6"
                                                    strokeWidth="3"
                                                    fill="none"
                                                />

                                                {/* Data points */}
                                                <circle cx="180" cy="100" r="4" fill="#8b5cf6" />
                                                <circle cx="320" cy="75" r="4" fill="#8b5cf6" />
                                            </svg>

                                            {/* Data label */}
                                            <div className="absolute top-16 right-20 bg-slate-700 px-2 py-1 rounded text-xs text-white">
                                                $125.2K
                                                <div className="text-green-400">+3.6%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Side Stats */}
                                    <div className="space-y-6">
                                        {/* Total Profit */}
                                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                            <div className="text-gray-400 text-sm mb-2">💹 Total profit</div>
                                            <div className="text-2xl font-bold text-white">$144.6K</div>
                                            <div className="text-green-400 text-xs">+3.69%</div>

                                            {/* Mini bar chart */}
                                            <div className="flex items-end space-x-1 h-16 mt-4">
                                                {[40, 65, 45, 80, 35, 70, 55, 85, 45, 75, 40, 90].map((height, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-purple-500 rounded-t"
                                                        style={{ height: `${height}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Total Sessions */}
                                        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                                            <div className="text-gray-400 text-sm mb-2">📊 Total sessions</div>
                                            <div className="text-2xl font-bold text-white">400</div>
                                            <div className="text-green-400 text-xs">+3.5%</div>

                                            {/* Mini line chart */}
                                            <div className="h-16 mt-4">
                                                <svg className="w-full h-full" viewBox="0 0 120 60">
                                                    <path
                                                        d="M 10 50 Q 30 30 50 40 T 110 20"
                                                        stroke="#8b5cf6"
                                                        strokeWidth="2"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

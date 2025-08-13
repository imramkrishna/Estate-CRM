'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Handshake, TrendingUp, Users, Globe, Award, Shield, Target, DollarSign } from 'lucide-react';

export default function ChannelPartnerPage() {
    const benefits = [
        {
            icon: DollarSign,
            title: 'Attractive Revenue Share',
            description: 'Earn up to 30% recurring commission on all deals you bring to us.'
        },
        {
            icon: Users,
            title: 'Dedicated Support',
            description: 'Get a dedicated partner manager and priority technical support.'
        },
        {
            icon: Award,
            title: 'Co-Marketing Opportunities',
            description: 'Joint marketing campaigns and co-branded materials to boost your reach.'
        },
        {
            icon: Target,
            title: 'Sales Enablement',
            description: 'Comprehensive training, sales tools, and resources to help you succeed.'
        },
        {
            icon: Globe,
            title: 'Market Expansion',
            description: 'Access to new markets and customer segments through our platform.'
        },
        {
            icon: Shield,
            title: 'Partner Protection',
            description: 'Deal registration and territory protection to secure your investments.'
        }
    ];

    const partnerTypes = [
        {
            title: 'Reseller Partner',
            description: 'Sell Estate CRM directly to your clients and earn recurring commissions.',
            commission: '20-25%',
            features: [
                'Standard commission rates',
                'Basic sales training',
                'Marketing material access',
                'Email support',
                'Quarterly reviews'
            ]
        },
        {
            title: 'Premium Partner',
            description: 'Advanced partnership with higher commissions and exclusive benefits.',
            commission: '25-30%',
            features: [
                'Higher commission rates',
                'Advanced sales training',
                'Co-marketing opportunities',
                'Dedicated partner manager',
                'Monthly strategy sessions',
                'Priority support'
            ],
            popular: true
        },
        {
            title: 'Strategic Partner',
            description: 'Deep integration partnership with custom solutions and joint go-to-market.',
            commission: 'Custom',
            features: [
                'Custom commission structure',
                'White-label solutions',
                'Technical integration support',
                'Joint product development',
                'Executive relationship management',
                'Custom SLAs'
            ]
        }
    ];

    const requirements = [
        'Proven track record in real estate or SaaS sales',
        'Existing customer base or network in real estate',
        'Commitment to minimum annual revenue targets',
        'Dedicated sales and support resources',
        'Marketing and lead generation capabilities',
        'Technical expertise for solution demonstrations'
    ];

    const process = [
        {
            step: '1',
            title: 'Application',
            description: 'Submit your partnership application with business details and references.'
        },
        {
            step: '2',
            title: 'Evaluation',
            description: 'Our team reviews your application and conducts a partnership assessment.'
        },
        {
            step: '3',
            title: 'Agreement',
            description: 'Sign the partnership agreement and complete onboarding documentation.'
        },
        {
            step: '4',
            title: 'Training',
            description: 'Complete our comprehensive partner training program and certification.'
        },
        {
            step: '5',
            title: 'Launch',
            description: 'Begin selling with full access to resources, tools, and support.'
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
                                <span className="text-teal-400 font-medium">Partnership Program</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Grow Your Business with
                                <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    Estate CRM Partnership
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                                Join our global partner network and unlock new revenue opportunities
                                while helping real estate professionals succeed.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                    Become a Partner
                                </button>
                                <button className="border border-gray-600 hover:border-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-teal-500/10">
                                    Download Partner Kit
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Benefits</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Join our partner program and enjoy exclusive benefits designed to help you succeed.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                                        <benefit.icon className="w-8 h-8 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Types Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Tiers</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Choose the partnership level that best fits your business goals and capabilities.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {partnerTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${type.popular ? 'border-teal-500/50 scale-105' : 'border-gray-700/50 hover:border-teal-500/30'
                                        }`}
                                >
                                    {type.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                                        <p className="text-gray-400 mb-4">{type.description}</p>
                                        <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                            {type.commission}
                                        </div>
                                        <p className="text-gray-400 text-sm">Commission Rate</p>
                                    </div>

                                    <div className="space-y-3">
                                        {type.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-3">
                                                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${type.popular
                                            ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700'
                                            : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-teal-500'
                                        }`}>
                                        Apply Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Requirements Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Requirements</h2>
                            <p className="text-xl text-gray-300">
                                To ensure mutual success, we look for partners who meet these criteria.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {requirements.map((requirement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4"
                                >
                                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">{requirement}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Process</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Follow these simple steps to become an Estate CRM partner and start earning.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-5 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
                                Ready to Partner with Us?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join our growing network of successful partners and start earning today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                    Apply Now
                                </button>
                                <button className="border border-gray-600 hover:border-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-teal-500/10">
                                    Schedule Call
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

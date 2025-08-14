'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import ContactModal from '@/components/ContactModal';
import ChatWidget from '@/components/ChatWidget';
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Zap, Users } from 'lucide-react';

export default function ContactPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('Contact Us');

    const openContactModal = (title: string = 'Contact Us') => {
        setModalTitle(title);
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };
    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Get help from our support team',
            contact: 'support@estatecrm.com',
            availability: '24/7 response within 2 hours'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our team',
            contact: '+1 (555) 123-4567',
            availability: 'Mon-Fri 9AM-6PM PST'
        },
        {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Instant support via chat',
            contact: 'Available on our platform',
            availability: 'Mon-Fri 9AM-6PM PST'
        },
        {
            icon: MapPin,
            title: 'Office Visit',
            description: 'Schedule an in-person meeting',
            contact: '123 Business Ave, San Francisco',
            availability: 'By appointment only'
        }
    ];

    const offices = [
        {
            city: 'San Francisco',
            address: '123 Business Avenue, Suite 500',
            zipCode: 'San Francisco, CA 94105',
            phone: '+1 (555) 123-4567',
            email: 'sf@estatecrm.com',
            hours: 'Mon-Fri 9:00 AM - 6:00 PM PST'
        },
        {
            city: 'New York',
            address: '456 Park Avenue, Floor 15',
            zipCode: 'New York, NY 10016',
            phone: '+1 (555) 234-5678',
            email: 'ny@estatecrm.com',
            hours: 'Mon-Fri 9:00 AM - 6:00 PM EST'
        },
        {
            city: 'Austin',
            address: '789 Tech Boulevard, Building C',
            zipCode: 'Austin, TX 78701',
            phone: '+1 (555) 345-6789',
            email: 'austin@estatecrm.com',
            hours: 'Mon-Fri 9:00 AM - 6:00 PM CST'
        }
    ];

    const supportCategories = [
        {
            icon: Headphones,
            title: 'Technical Support',
            description: 'Platform issues, integrations, and technical questions'
        },
        {
            icon: Users,
            title: 'Account Management',
            description: 'Billing, subscriptions, and account settings'
        },
        {
            icon: Zap,
            title: 'Sales Inquiry',
            description: 'Product demos, pricing, and partnership opportunities'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
            <ParticleBackground />
            <Header onOpenContactModal={openContactModal} />

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
                                <span className="text-teal-400 font-medium">Get in Touch</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                We're Here to
                                <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    Help You Succeed
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                Have questions? Need support? Want to see a demo? Our team is ready to help you
                                get the most out of Estate CRM.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Methods Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can We Help?</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Choose the contact method that works best for you. We're committed to providing
                                fast, helpful support.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 text-center group cursor-pointer"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-200">
                                        <method.icon className="w-8 h-8 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{method.description}</p>
                                    <p className="text-teal-400 font-semibold mb-2">{method.contact}</p>
                                    <p className="text-xs text-gray-500">{method.availability}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
                                <p className="text-xl text-gray-300 mb-8">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200"
                                            placeholder="Your Company Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">How can we help?</label>
                                        <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200">
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Sales Question</option>
                                            <option>Partnership Opportunity</option>
                                            <option>Feature Request</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200 resize-none"
                                            placeholder="Tell us more about how we can help you..."
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Support Categories */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold mb-8">What type of support do you need?</h3>

                                <div className="space-y-6 mb-12">
                                    {supportCategories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <category.icon className="w-6 h-6 text-teal-400" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold mb-2">{category.title}</h4>
                                                    <p className="text-gray-400 text-sm">{category.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-2xl p-8 border border-teal-500/20">
                                    <h4 className="text-xl font-bold mb-4">Need Immediate Help?</h4>
                                    <p className="text-gray-300 mb-6">
                                        For urgent issues, our live chat is the fastest way to get support.
                                        Our team typically responds within minutes during business hours.
                                    </p>
                                    <button
                                        onClick={() => openContactModal('Live Chat Support')}
                                        className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                                    >
                                        Start Live Chat
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Office Locations Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Offices</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Visit us at one of our office locations or schedule a virtual meeting with our team.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-teal-400">{office.city}</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-gray-300">{office.address}</p>
                                                <p className="text-gray-400 text-sm">{office.zipCode}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            <p className="text-gray-300">{office.phone}</p>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            <p className="text-gray-300">{office.email}</p>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            <p className="text-gray-300 text-sm">{office.hours}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => openContactModal('Get Directions')}
                                        className="w-full mt-6 border border-gray-600 hover:border-teal-500 text-white py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-teal-500/10"
                                    >
                                        Get Directions
                                    </button>
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
                                Can't find what you're looking for? Check out our most common questions.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "What's your average response time?",
                                    answer: "We typically respond to support requests within 2 hours during business hours, and within 24 hours for all other inquiries."
                                },
                                {
                                    question: "Do you offer phone support?",
                                    answer: "Yes! We provide phone support Monday through Friday, 9 AM to 6 PM PST. Premium customers have access to priority phone support."
                                },
                                {
                                    question: "Can I schedule a demo?",
                                    answer: "Absolutely! You can request a personalized demo through our contact form or by calling our sales team directly."
                                },
                                {
                                    question: "Do you have documentation?",
                                    answer: "Yes, we have comprehensive documentation, video tutorials, and a knowledge base available 24/7 on our help center."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                                >
                                    <h3 className="text-lg font-bold mb-3 text-teal-400">{faq.question}</h3>
                                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-300 mb-6">Still have questions?</p>
                            <button
                                onClick={() => openContactModal('Help Center Support')}
                                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                            >
                                Browse Help Center
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
            <ChatWidget />

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
                title={modalTitle}
            />
        </div>
    );
}

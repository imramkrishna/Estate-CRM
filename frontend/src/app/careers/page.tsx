'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { MapPin, Clock, DollarSign, Users, Coffee, Heart, Zap, Award } from 'lucide-react';

export default function CareersPage() {
    const jobOpenings = [
        {
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'San Francisco, CA / Remote',
            type: 'Full-time',
            salary: '$120k - $160k',
            description: 'Build beautiful, responsive user interfaces for our real estate CRM platform.',
            requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX design skills']
        },
        {
            title: 'Product Marketing Manager',
            department: 'Marketing',
            location: 'New York, NY / Remote',
            type: 'Full-time',
            salary: '$100k - $130k',
            description: 'Drive product marketing strategy and go-to-market initiatives.',
            requirements: ['B2B SaaS experience', 'Content creation skills', 'Analytics proficiency']
        },
        {
            title: 'Customer Success Manager',
            department: 'Customer Success',
            location: 'Austin, TX / Remote',
            type: 'Full-time',
            salary: '$80k - $110k',
            description: 'Help our customers achieve success with Estate CRM platform.',
            requirements: ['Customer-facing experience', 'Real estate knowledge', 'Strong communication']
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Seattle, WA / Remote',
            type: 'Full-time',
            salary: '$130k - $170k',
            description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
            requirements: ['AWS/GCP experience', 'Kubernetes knowledge', 'CI/CD expertise']
        },
        {
            title: 'Sales Development Representative',
            department: 'Sales',
            location: 'Miami, FL / Remote',
            type: 'Full-time',
            salary: '$60k - $80k + Commission',
            description: 'Generate qualified leads and build relationships with potential customers.',
            requirements: ['Sales experience', 'CRM knowledge', 'Real estate interest']
        },
        {
            title: 'UX/UI Designer',
            department: 'Design',
            location: 'Los Angeles, CA / Remote',
            type: 'Full-time',
            salary: '$90k - $120k',
            description: 'Design intuitive and beautiful user experiences for our platform.',
            requirements: ['Design portfolio', 'Figma proficiency', 'User research experience']
        }
    ];

    const benefits = [
        {
            icon: Heart,
            title: 'Health & Wellness',
            description: 'Comprehensive health, dental, and vision insurance for you and your family.'
        },
        {
            icon: Coffee,
            title: 'Remote-First Culture',
            description: 'Work from anywhere with flexible hours and a $2000 home office setup budget.'
        },
        {
            icon: Zap,
            title: 'Learning & Development',
            description: '$3000 annual learning budget for courses, conferences, and certifications.'
        },
        {
            icon: Award,
            title: 'Equity & Bonuses',
            description: 'Competitive equity packages and performance-based bonuses.'
        },
        {
            icon: Users,
            title: 'Team Retreats',
            description: 'Annual company retreats and quarterly team building events.'
        },
        {
            icon: DollarSign,
            title: 'Competitive Salary',
            description: 'Market-competitive salaries with regular reviews and increases.'
        }
    ];

    const values = [
        {
            title: 'Innovation First',
            description: 'We encourage creative thinking and aren\'t afraid to try new approaches.'
        },
        {
            title: 'Customer Obsession',
            description: 'Everything we do is focused on delivering value to our customers.'
        },
        {
            title: 'Transparency',
            description: 'We believe in open communication and sharing information across the team.'
        },
        {
            title: 'Growth Mindset',
            description: 'We embrace challenges and see failures as opportunities to learn.'
        }
    ];

    const perks = [
        'Unlimited PTO policy',
        'Top-tier MacBook Pro',
        '401(k) with company matching',
        'Monthly wellness stipend',
        'Free gym membership',
        'Catered lunch (office days)',
        'Stock option plan',
        'Parental leave benefits'
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
                                <span className="text-teal-400 font-medium">Join Our Team</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Build the Future of
                                <span className="block bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                                    Real Estate Technology
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                Join a passionate team of innovators working to transform how real estate
                                professionals manage their business and relationships.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Culture & Values Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture & Values</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We're building more than just software – we're creating a culture where
                                everyone can do their best work and grow their career.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 text-center"
                                >
                                    <h3 className="text-lg font-bold mb-3 text-teal-400">{value.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits & Perks</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We believe in taking care of our team with comprehensive benefits and perks
                                that support both your career and personal life.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                        {/* Additional Perks */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-2xl p-8 border border-teal-500/20"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center">And Much More...</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {perks.map((perk, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                        <span className="text-gray-300">{perk}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Job Openings Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Openings</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Explore our current job opportunities and find the perfect role to advance your career.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {jobOpenings.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                            <p className="text-teal-400 font-medium">{job.department}</p>
                                        </div>
                                        <div className="text-right text-sm text-gray-400">
                                            <div className="flex items-center mb-1">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center">
                                                <DollarSign className="w-4 h-4 mr-1" />
                                                {job.salary}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                                        <div className="space-y-1">
                                            {job.requirements.map((req, reqIndex) => (
                                                <div key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                                                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                                    <span>{req}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                        Apply Now
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Don't See the Right Role?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                We're always looking for talented individuals to join our team.
                                Send us your resume and we'll keep you in mind for future opportunities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                                    Send Resume
                                </button>
                                <button className="border border-gray-600 hover:border-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-teal-500/10">
                                    Learn More About Us
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

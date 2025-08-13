'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const pricingPlans = [
        {
            name: "Starter",
            price: "Free",
            period: "",
            description: "Perfect for individual agents getting started",
            popular: false,
            features: [
                "Lead Management",
                "Property Management",
                "Property Microsite",
                "Bulk Upload",
                "User/Team Management",
                "Attendance",
                "Call Detection",
                "Mobile App",
                "Lead Sources Integrations",
                "Automatic Lead Assignment",
                "Follow-ups",
                "Lead History",
                "Upload Site Visit/Booking Forms",
                "24/7 Customer Support"
            ]
        },
        {
            name: "Professional",
            price: "$29",
            period: "/month",
            description: "Ideal for growing real estate teams",
            popular: false,
            features: [
                "Everything in Starter",
                "Advanced Lead Scoring",
                "Custom Property Fields",
                "Advanced Reporting",
                "Email Marketing",
                "SMS Integration",
                "Calendar Integration",
                "Advanced Analytics",
                "Custom Workflows",
                "Priority Support",
                "API Access",
                "White Label Options",
                "Advanced User Permissions",
                "Backup & Export"
            ]
        },
        {
            name: "Business",
            price: "$79",
            period: "/month",
            description: "For established real estate businesses",
            popular: true,
            features: [
                "Everything in Professional",
                "Advanced AI Insights",
                "Predictive Analytics",
                "Advanced Automation",
                "Custom Integrations",
                "Dedicated Account Manager",
                "Advanced Security",
                "Custom Branding",
                "Advanced Training",
                "SLA Guarantee",
                "Advanced API Limits",
                "Custom Reports",
                "Multi-language Support",
                "Enterprise Integrations"
            ]
        },
        {
            name: "Enterprise",
            price: "$199",
            period: "/month",
            description: "For large real estate organizations",
            popular: false,
            features: [
                "Everything in Business",
                "Unlimited Users",
                "Advanced Data Analytics",
                "Custom Development",
                "On-premise Deployment",
                "24/7 Dedicated Support",
                "Advanced Security Audit",
                "Custom Training Program",
                "Advanced SLA",
                "Custom Integrations",
                "Advanced Backup Solutions",
                "Compliance Management",
                "Advanced Reporting Suite",
                "Priority Feature Requests"
            ]
        },
        {
            name: "Channel Partner",
            price: "Custom",
            period: "",
            description: "Special pricing for channel partners",
            popular: false,
            features: [
                "White Label Solution",
                "Partner Portal Access",
                "Co-marketing Opportunities",
                "Technical Training",
                "Sales Support",
                "Custom Pricing Tiers",
                "Dedicated Partner Manager",
                "Marketing Materials",
                "Lead Sharing Program",
                "Revenue Sharing Model",
                "Priority Integration Support",
                "Custom Onboarding",
                "Partner Certification",
                "Quarterly Business Reviews"
            ]
        }
    ];

    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full px-6 py-2 mb-6"
                    >
                        <span className="text-teal-400 font-medium">Flexible Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Choose the Perfect Plan for{' '}
                        <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            Your Business
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Start free and scale as you grow. All plans include our core features
                        with no setup fees or hidden costs.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 * index }}
                            className={`relative group h-fit ${plan.popular ? 'lg:scale-105' : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border transition-all duration-300 flex flex-col ${plan.popular
                                ? 'border-teal-500/50 shadow-2xl shadow-teal-500/20'
                                : 'border-gray-700/50 hover:border-teal-500/30'
                                } hover:bg-gray-800/70`}>

                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="mb-3">
                                        <span className="text-3xl lg:text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.period && <span className="text-gray-400 text-lg">{plan.period}</span>}
                                    </div>
                                    <p className="text-gray-400 text-sm lg:text-base">{plan.description}</p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {plan.features.slice(0, 10).map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm lg:text-base">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.features.length > 10 && (
                                        <div className="text-teal-400 text-sm lg:text-base font-medium">
                                            +{plan.features.length - 10} more features
                                        </div>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <button className={`w-full py-3 lg:py-4 px-6 rounded-lg font-semibold text-center transition-all duration-200 transform hover:scale-105 ${plan.popular
                                    ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg'
                                    : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600 hover:border-teal-500'
                                    }`}>
                                    {plan.price === 'Free' ? 'Get Started Free' :
                                        plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">
                        All plans include our core CRM features with no setup fees.
                        30-day money-back guarantee on paid plans.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>No Setup Fees</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-teal-400" />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-teal-400" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-teal-400" />
                            <span>Data Security</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;

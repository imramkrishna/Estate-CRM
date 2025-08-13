'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import LeadsSection from '@/components/LeadsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            <ParticleBackground />
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <ClientsSection />
                <LeadsSection />
                <FeaturesSection />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
}

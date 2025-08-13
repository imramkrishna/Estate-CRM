'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import LeadsSection from '@/components/LeadsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FeatureShowcaseSection from '@/components/FeatureShowcaseSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ParticleBackground from '@/components/ParticleBackground';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ClientsSection />
        <LeadsSection />
        <FeatureShowcaseSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

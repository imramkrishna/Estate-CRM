'use client';

import { useState } from 'react';
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
import ContactModal from '@/components/ContactModal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
  useSmoothScroll();

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Contact Us');

  const openContactModal = (title: string = 'Contact Us') => {
    setModalTitle(title);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <Header onOpenContactModal={openContactModal} />
      <main>
        <HeroSection onOpenContactModal={openContactModal} />
        <StatsSection />
        <ClientsSection />
        <LeadsSection />
        <FeatureShowcaseSection />
        <IntegrationsSection onOpenContactModal={openContactModal} />
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

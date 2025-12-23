"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoCarousel } from "@/components/logo-carousel";
import { DataStats } from "@/components/data-stats";
// import { DiscoveryBridge } from "@/components/discovery-bridge";
import { DiscoverySectionV3 } from "@/components/discovery-section-v3";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { ProposalForm } from "@/components/proposal-form";
import { useProposalModal } from "@/lib/proposal-modal-context";

export default function Home() {
  const { isOpen, closeModal } = useProposalModal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <DataStats />
        {/* <DiscoveryBridge /> */}
        <DiscoverySectionV3 />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ProposalForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

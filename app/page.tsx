"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LogoCarousel } from "@/components/logo-carousel";
import { DataStats } from "@/components/data-stats";
// import { DiscoveryBridge } from "@/components/discovery-bridge";
import { DiscoverySectionV3 } from "@/components/discovery-section-v3";
import { FeaturesSection } from "@/components/features-section";
import { useProposalModal } from "@/lib/proposal-modal-context";

// Lazy load below-fold components
const HowItWorks = dynamic(() => import("@/components/how-it-works").then(mod => mod.HowItWorks));
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FAQSection));
const FinalCTA = dynamic(() => import("@/components/final-cta").then(mod => mod.FinalCTA));
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer));
const ProposalForm = dynamic(() => import("@/components/proposal-form").then(mod => mod.ProposalForm), { ssr: false });

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

"use client";

import  PartnerLogos  from "@/components/section/home-page/partner-logos";
import { FeaturesSection } from "@/components/section/home-page/features-sec";
import { SolutionSection } from "@/components/section/home-page/solution-section";
import { AnimatedHero } from "@/components/section/home-page/hero";
import { OurServices } from "@/components/section/home-page/our-services";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      <PartnerLogos />

      {/* Platform Features Section */}
      <FeaturesSection />

      <OurServices />

      {/* Our Solution Section */}
      <SolutionSection />
    </main>
  );
}

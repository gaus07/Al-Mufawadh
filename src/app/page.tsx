"use client";

import { PartnerLogos } from "@/components/partner-logos";
import { FeaturesSection } from "@/components/section/home-page/features-sec";
import { SolutionSection } from "@/components/section/home-page/solution-section";
import { AnimatedHero } from "@/components/section/home-page/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      <PartnerLogos />

      {/* Platform Features Section */}
      <FeaturesSection />

      {/* Our Solution Section */}
      <SolutionSection />
    </main>
  );
}

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/section/navbar";
import { PartnerLogos } from "@/components/partner-logos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FeaturesSection } from "@/components/section/home-page/features-sec";
import { SolutionSection } from "@/components/section/home-page/solution-section";
import { FooterSection } from "@/components/section/footer";
import { AnimatedHero } from "@/components/section/home-page/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <AnimatedHero />

      <PartnerLogos />

      {/* Platform Features Section */}
      <FeaturesSection />

      {/* Our Solution Section */}
      <SolutionSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}

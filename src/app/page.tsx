import Image from "next/image";
import { ArrowRight, List, Lock, Settings, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/section/navbar";
// import { BadgePill } from "@/components/ui/badge-pill"
import { PartnerLogos } from "@/components/partner-logos";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FeaturesSection } from "@/components/section/home-page/features-sec";
import { SolutionSection } from "@/components/section/home-page/solution-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        {/* Decorative background elements */}
        <div className="absolute right-0 top-0 h-[600px] w-[800px] bg-gradient-to-bl from-muted/40 to-transparent"></div>

        <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-16 lg:py-32 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <Badge
                asChild
                className="text-linkrow-badge-text bg-linkrow-badge-bg"
              >
                <Link href="#">
                  {" "}
                  <span className="text-linkrow-primary-text">250+</span>Trusted
                  Partners
                </Link>
              </Badge>

              <h1 className="mb-6 text-5xl font-light leading-tight tracking-tight text-foreground lg:text-6xl">
                Recruitment process <br className="hidden lg:block" />
                with{" "}
                <span className="text-linkrow-primary-text font-medium">
                  smart solutions.
                </span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-linkrow-badge-text">
                Linkrow is your trusted partner in recruitment, offering
                personalized HR solutions that connect top talent with the right
                opportunities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-linkrow-primary-text px-8 text-linkrow-secondary-bg"
                >
                  Free consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-border bg-linkrow-badge-bg px-8 text-linkrow-primary-text"
                >
                  Explore our services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Specialist Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[580px]">
                {/* Container for layered cards */}
                <div className="relative flex items-center">
                  {/* Background card - Dark teal with stats (Left side) */}
                  <div className="relative z-0 h-[340px] w-full max-w-[420px] rounded-[28px] bg-primary p-8 text-primary-foreground shadow-xl lg:h-[360px] lg:p-10">
                    <h2 className="text-2xl font-medium leading-[1.1] tracking-tight lg:text-3xl">
                      Successfully connected over{" "}
                      <span className="text-[#b4d96f]">1,000 businesses</span>{" "}
                      with top talent.
                    </h2>
                    <p className="mt-auto pt-24 text-sm leading-relaxed text-primary-foreground/90 lg:pt-28 lg:text-base">
                      Reducing hiring time by 30% and improving team efficiency
                      across industries.
                    </p>
                  </div>

                  {/* Foreground card - Specialist photo (Right side, overlapping) */}
                  <div className="absolute right-0 top-1/2 z-10 w-[280px] -translate-y-1/2 overflow-hidden rounded-[28px] bg-muted shadow-2xl lg:w-[320px]">
                    {/* Top badge */}
                    <div className="absolute left-5 top-5 z-20 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground shadow-lg lg:text-sm">
                      Top rated specialist
                    </div>

                    {/* Specialist image */}
                    <div className="relative h-[400px] w-full lg:h-[440px]">
                      <Image
                        src="/professional-woman-talent-acquisition-specialist-b.jpg"
                        alt="Sarah Mitchell - Talent Acquisition Specialist"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur-sm shadow-lg">
                      <h3 className="text-lg font-semibold text-foreground lg:text-xl">
                        Sarah Mitchell
                      </h3>
                      <p className="text-xs text-muted-foreground lg:text-sm">
                        Talent Acquisition Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />

      {/* Platform Features Section */}
      <FeaturesSection />

      {/* Our Solution Section */}
      <SolutionSection />
    </main>
  );
}

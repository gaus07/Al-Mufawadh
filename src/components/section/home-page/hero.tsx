"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MiddleEastMap from "@/components/ui/MiddleEastMap";
import {
  heroBadgeVariants,
  heroHeadlineVariants,
  heroSubtextVariants,
  heroCtaContainerVariants,
  heroCtaItemVariants,
} from "@/lib/animation";

export function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="h-full w-full">
          <MiddleEastMap />
        </div>
      </div>
      {/* <BackgroundRippleEffect /> */}
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 h-[600px] w-[800px] bg-gradient-to-bl from-muted/40 to-transparent"></div>

      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              variants={heroBadgeVariants}
              initial="hidden"
              animate="visible"
            >
              <Badge
                asChild
                className="px-3 py-1 text-sm rounded-2xl font-medium text-linkrow-badge-text bg-linkrow-badge-bg"
              >
                <Link href="#">
                  {" "}
                  <span className="text-linkrow-primary-text">250+</span>trusted
                  partners
                </Link>
              </Badge>
            </motion.div>

            {/* Headline - slides from left */}
            <motion.h1
              className="mb-6 text-5xl font-light leading-tight tracking-tight text-foreground lg:text-6xl"
              variants={heroHeadlineVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-linkrow-primary-text">
                Recruitment process <br className="hidden lg:block" />
                with{" "}
              </span>{" "}
              <span className="text-linkrow-primary-text font-medium">
                smart solutions.
              </span>
            </motion.h1>

            {/* Subtext - fades up */}
            <motion.p
              className="mb-8 max-w-lg text-lg leading-relaxed text-linkrow-badge-text"
              variants={heroSubtextVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: "transform, opacity" }}
            >
              <span className="text-linkrow-primary-text font-medium">
                Al Mufawadh Offers Incredible Placement Service Globally,{" "}
              </span>
              Approved by Government Of India, Ministry Of Labour. Strongly
              believe in a new beginning, fresh thinking, innovative ideas and
              value added services.
            </motion.p>

            {/* CTAs - staggered fade up */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={heroCtaContainerVariants}
              initial="hidden"
              animate="visible"
              // whileHover={{scale: 1.05, y: -2}}
              // whileTap={{scale: 0.9, y: 1}}
              // transition={}
            >
              <motion.div
                variants={heroCtaItemVariants}
                style={{ willChange: "transform, opacity" }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-linkrow-primary-text px-8 text-linkrow-secondary-bg transition-transform duration-300 hover:scale-105 hover:bg-linkrow-primary-text"
                >
                  Free consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                variants={heroCtaItemVariants}
                style={{ willChange: "transform, opacity" }}
              >
                <Button
                  size="lg"
                  // variant="outline"
                  className="rounded-full border-2 border-border bg-linkrow-badge-bg px-8 text-linkrow-primary-text transition-transform duration-300 hover:scale-105 hover:bg-linkrow-badge-bg"
                >
                  Explore our services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Specialist Card */}
          {/* <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              <div className="relative flex items-center">
                <motion.div
                  className="relative z-3 h-[340px] w-full max-w-[420px] rounded-[28px] bg-primary p-8 text-primary-foreground shadow-xl lg:h-[360px] lg:p-10"
                  variants={backgroundCardVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ willChange: "transform, opacity" }}
                >
                  <h2 className="text-2xl font-medium leading-[1.1] tracking-tight lg:text-3xl">
                    Successfully connected over <span className="text-[#b4d96f]">1,000 businesses</span> with top
                    talent.
                  </h2>

                  <p className="mt-auto pt-24 text-sm leading-relaxed text-primary-foreground/90 lg:pt-28 lg:text-base">
                    Reducing hiring time by 30% and improving team efficiency across industries.
                  </p>
                </motion.div>

                <motion.div
                  className="absolute right-0 top-1/2 z-10 w-[280px] -translate-y-1/2 cursor-pointer overflow-hidden rounded-[28px] bg-muted shadow-2xl lg:w-[320px]"
                  variants={specialistCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: HERO_ANIMATION.hover.scale,
                    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
                    transition: { duration: HERO_ANIMATION.hover.duration },
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                
                  <motion.div
                    className="absolute left-5 top-5 z-20 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground shadow-lg lg:text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: HERO_ANIMATION.specialistCard.delay + 0.3,
                      duration: 0.4,
                      ease: HERO_ANIMATION.easing,
                    }}
                  >
                    Top rated specialist
                  </motion.div>

                
                  <div className="relative h-[400px] w-full lg:h-[440px]">
                    <Image
                      src="/specialist_image.png"
                      alt="Sarah Mitchell - Talent Acquisition Specialist"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                
                  <motion.div
                    className="absolute bottom-6 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: HERO_ANIMATION.specialistCard.delay + 0.4,
                      duration: 0.5,
                      ease: HERO_ANIMATION.easing,
                    }}
                  >
                    <h3 className="text-xl font-semibold text-foreground lg:text-xl">Sarah Mitchell</h3>
                    <p className="text-sm text-muted-foreground lg:text-sm">Talent Acquisition Specialist</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

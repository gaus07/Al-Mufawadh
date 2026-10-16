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
import { homeContent } from "@/data/home";
import { HeroSearch } from "./hero-search";

export function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 blur-[2.5px] transition-opacity duration-500 max-sm:opacity-25">
        <div className="h-full w-full">
          <MiddleEastMap />
        </div>
      </div>
      {/* <BackgroundRippleEffect /> */}
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 h-[600px] w-[800px] bg-gradient-to-bl from-muted/40 to-transparent"></div>

      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-16 lg:py-32 xl:px-20">
        {/* <div className="grid gap-12 lg:grid-cols-2 lg:gap-0"> */}
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
                  <span className="text-linkrow-primary-text">
                    {homeContent.hero.partnerCount}
                  </span>{" "}
                  trusted partners
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
              Al Mufawadh Offers Incredible Placement Service Globally,{" "}
              <span className="text-linkrow-primary-text font-medium">
                Approved by Government Of India, Ministry Of Labour.
              </span>
            </motion.p>

            <div className="">
              <HeroSearch />
            </div>

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
        </div>
      {/* </div> */}
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Building2,
  ConciergeBell,
  Droplets,
  Factory,
  Grid2X2,
  GraduationCap,
  HeartPulse,
  Laptop,
  MoveUpRight,
  Settings2,
  Truck,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { industries, type IndustryIcon } from "@/data/industries";
import { EASING, TIMING, VIEWPORT } from "@/lib/animations/config";

const industryIcons: Record<IndustryIcon, LucideIcon> = {
  building: Building2,
  engineering: Settings2,
  oil: Droplets,
  hospitality: ConciergeBell,
  healthcare: HeartPulse,
  transport: Truck,
  technology: Laptop,
  education: GraduationCap,
  manufacturing: Factory,
  more: Grid2X2,
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TIMING.stagger,
    },
  },
};

const industryItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.fast,
      ease: EASING.smooth,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.standard,
      ease: EASING.smooth,
    },
  },
};

export function IndustriesSection() {
  return (
    <section
      className="bg-white px-5 py-12 text-linkrow-primary-text sm:px-8 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        {/* Compact section heading */}
        <motion.div
          className="mb-7 text-center sm:mb-9"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={headingVariants}
        >
          <h2
            id="industries-heading"
            className="text-[28px] font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-[38px]"
          >
            Industries We Serve
          </h2>
        </motion.div>

        {/* Divider-based industry grid */}
        <motion.div
          className="flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={gridVariants}
        >
          {industries.map((industry) => {
            const Icon = industryIcons[industry.icon];

            return (
              <motion.div
                key={industry.title}
                variants={industryItemVariants}
                className={[
                  "flex min-h-[76px] min-w-0 items-center gap-3.5",
                  "w-full sm:w-1/2 xl:w-1/5",
                  "px-4 py-4 sm:min-h-[82px] sm:px-5 sm:py-5 xl:min-h-[88px]",
                  "border-b border-border/80",
                ].join(" ")}
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#edf6e9] text-linkrow-primary-text sm:size-11"
                  aria-hidden="true"
                >
                  <Icon
                    className="size-[21px] sm:size-[22px]"
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="min-w-0 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-linkrow-primary-text sm:text-base">
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-7 flex justify-center sm:mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={headingVariants}
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-linkrow-primary-text px-6 text-sm font-semibold text-white transition-colors hover:bg-linkrow-primary-dark sm:px-7 sm:text-base"
          >
            <Link href="/services">
              Explore All Industries
              <MoveUpRight
                className="ml-2 size-4 text-linkrow-accent-green"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

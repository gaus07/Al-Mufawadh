"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/data/home";
import {
  featureBadgeVariants,
  featureHeadingVariants,
  featureParagraphVariants,
  featureButtonVariants,
  featureLeftCardVariants,
} from "@/lib/animation";
import type { CSSProperties } from "react";

const cardSurfaceMask: CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.92) 65%, rgba(0,0,0,0.58) 82%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.92) 65%, rgba(0,0,0,0.58) 82%, transparent 100%)",
};

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Existing background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/second.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Wider container to match the reference proportions */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10 xl:px-3">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16">
          {/* <motion.div
            className="mx-auto mb-9 flex size-[68px] items-center justify-center rounded-[18px] bg-linkrow-secondary-bg shadow-[0_12px_24px_rgba(10,13,18,0.12)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureBadgeVariants}
          > */}
          {/* <svg viewBox="0 0 28 28" className="size-8" aria-hidden="true">
              <path
                d="M27.5 1H20.5V7.5H14V14H7.5V20.5H1V27.5H7.5V21H14V14.5H20.5V21H27.5V14V7V1Z"
                fill="none"
                stroke="#AEDA94"
                strokeWidth="1.6"
              />
            </svg> */}
          {/* </motion.div> */}

          <motion.h2
            className="mx-auto max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-linkrow-primary-text sm:text-5xl lg:text-[56px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureHeadingVariants}
          >
            Platform designed to simplify and enhance the hiring process.
          </motion.h2>

          <motion.p
            className="mx-auto mt-7 max-w-3xl text-base leading-7 text-linkrow-badge-text sm:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureParagraphVariants}
          >
            With personalized solutions tailored to your business needs, we
            connect you with the best talent quickly and efficiently, helping
            you build stronger, more effective teams.
          </motion.p>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureButtonVariants}
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-linkrow-primary-text px-9 text-base font-semibold text-linkrow-secondary-bg transition-transform duration-300 hover:scale-[1.02] hover:bg-linkrow-primary-text"
            >
              <Link href="/about">
                About Al Mufawadh
                <svg
                  viewBox="0 0 12 12"
                  className="ml-2 size-3"
                  aria-hidden="true"
                >
                  <path
                    d="M12 12V9 6 3L9 3V6H6V3H3V0H0V3H3V6H6V9H3V12H6H9H12Z"
                    fill="#AEDA94"
                  />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {homeContent.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={featureLeftCardVariants}
              className="group relative isolate min-h-[330px] sm:min-h-[340px]"
            >
              {/* Card surface: border, background and shadow fade at the bottom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[22px] border border-black/[0.06] bg-white shadow-[0_14px_32px_rgba(10,13,18,0.08)] transition-shadow duration-300 group-hover:shadow-[0_18px_38px_rgba(10,13,18,0.12)]"
                style={cardSurfaceMask}
              />

              {/* Content remains sharp while the card surface fades */}
              <div className="relative z-10 flex min-h-[330px] flex-col p-6 sm:min-h-[340px]">
                {/* Icon */}
                <div className="mb-11 flex size-[54px] shrink-0 items-center justify-center rounded-[14px] border border-linkrow-badge-bg bg-linkrow-primary-text shadow-sm">
                  <Image src={feature.icon} alt="" width={24} height={24} />
                </div>

                {/* Title */}
                <h3 className="text-[23px] font-medium leading-tight tracking-[-0.03em] text-linkrow-primary-text">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-6 text-linkrow-badge-text">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

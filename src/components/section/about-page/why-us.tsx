"use client";

import { motion } from "framer-motion";
import { EASING } from "@/lib/animation-config";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

const reasonsCards = [
  {
    icon: <Image src="/icons/home_feature_frame-1.svg" alt="Tailored Solutions" width={24} height={24} />,
    title: "Proven expertise",
    description:
      "With years of experience in the industry, we bring a wealth of knowledge and a track record of delivering exceptional results.",
  },
  {
    icon: <Image src="/icons/home_feature_frame-3.svg" alt="Tailored Solutions" width={24} height={24} />,
    title: "Tailored solutions",
    description:
      "We don't believe in one-size-fits-all approaches. Every strategy we create is designed specifically for you, ensuring maximum impact.",
  },
  {
    icon: <Image src="/icons/home_feature_frame-4.svg" alt="Tailored Solutions" width={24} height={24} />,
    title: "Innovative thinking",
    description:
      "By staying ahead of industry trends and embracing innovations, we deliver solutions that set you apart from the competition.",
  },
  {
    icon: <Image src="/icons/home_feature_frame-2.svg" alt="Tailored Solutions" width={24} height={24} />,
    title: "Measurable results",
    description:
      "Our focus is not just on promises but on outcomes. We ensure every project we undertake delivers tangible, measurable success.",
  },
];

export function WhyChooseUsSection() {
  return (
    <>
    <section className="py-20 bg-[#f7f7f7]">    
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASING.smooth }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Badge asChild className="px-3 py-1 text-sm rounded-2xl font-medium bg-linkrow-badge-bg">
            <Link href="#">
              <span className="text-linkrow-badge-text">Your success is our priority</span>
            </Link>
          </Badge>

          <h2 className="text-4xl sm:text-4xl md:text-5xl font-medium text-linkrow-primary-text my-6">
            Why choose us
          </h2>

          <p className="text-base md:text-lg text-linkrow-badge-text max-w-2xl mx-auto">
            When it comes to finding the right partner, you deserve a team that understands your goals and delivers
            beyond expectations.
          </p>
        </motion.div>

        {/* Grid: 3 columns on md+, define explicit row spans for the big image + right card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {/* 1. Top left card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-linkrow-primary-text rounded-lg flex items-center justify-center text-xl mb-4">
              {reasonsCards[0].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-linkrow-primary-text mb-2">{reasonsCards[0].title}</h3>
            <p className="text-sm text-linkrow-badge-text leading-relaxed flex-1">{reasonsCards[0].description}</p>
          </motion.article>

          {/* 2. Top middle card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-linkrow-primary-text rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[1].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-linkrow-primary-text mb-2">{reasonsCards[1].title}</h3>
            <p className="text-sm text-linkrow-badge-text leading-relaxed flex-1">{reasonsCards[1].description}</p>
          </motion.article>

          {/* 3. Right column - large team image spanning 2 rows */}
          <motion.div
            className="md:row-span-1 rounded-xl overflow-hidden shadow-md relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            {/* Use Next/Image in production; unsplash shown for quick mock */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop&q=80"
              alt="Professional team"
              className="w-full h-full object-cover aspect-[4/2]"
              style={{ minHeight: 240 }}
            />
          </motion.div>

          {/* 4. Bottom left - supporting image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-md relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=600&fit=crop&q=80"
              alt="Team member"
              className="w-full h-full object-cover aspect-[4/2]"
              style={{ minHeight: 240 }}
            />
          </motion.div>

          {/* 5. Bottom middle card */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-linkrow-primary-text rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[2].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-linkrow-primary-text mb-2">{reasonsCards[2].title}</h3>
            <p className="text-sm text-linkrow-badge-text leading-relaxed flex-1">{reasonsCards[2].description}</p>
          </motion.article>

          {/* 6. Bottom right card that visually anchors the right column */}
          <motion.article
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm min-h-[180px] md:row-span-1 flex flex-col justify-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASING.smooth }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-linkrow-primary-text rounded-lg flex items-center justify-center text-xl text-white mb-4">
              {reasonsCards[3].icon}
            </div>
            <h3 className="text-lg md:text-xl font-medium text-linkrow-primary-text mb-2">{reasonsCards[3].title}</h3>
            <p className="text-sm text-linkrow-badge-text leading-relaxed">{reasonsCards[3].description}</p>        
          </motion.article>
        </div>
      </div>
    </section>

    <section className="w-full bg-linkrow-primary-text py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
        {/* ↓ added items-stretch and a capped height on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch lg:h-[480px]">
          {/* Left Column: Features & CTA */}
          <motion.div
            className="text-linkrow-secondary-bg space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASING.smooth }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-4xl lg:text-5xl font-medium leading-tight">
              Platform that matches businesses with <span className="text-linkrow-badge2-text">top-tier talent.</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-linkrow-badge2-text text-xl mt-0.5"><Image src="/icons/right-icon.svg" alt="Logo" width={34} height={34} /></span>
                <p className="text-linkrow-secondary-bg text-lg">Comprehensive range of services</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-linkrow-badge2-text text-xl mt-0.5"><Image src="/icons/right-icon.svg" alt="Logo" width={34} height={34} /></span>
                <p className="text-linkrow-secondary-bg text-lg">Solutions tailored to your needs</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-linkrow-badge2-text text-xl mt-0.5"><Image src="/icons/right-icon.svg" alt="Logo" width={34} height={34} /></span>
                <p className="text-linkrow-secondary-bg text-lg">Excellence in every detail</p>
              </div>
            </div>

            <motion.button
              className="px-8 py-3 rounded-full border-2 bg-linkrow-badge-bg text-linkrow-primary-text font-medium hover:bg-linkrow-badge-bg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore our services
            </motion.button>
          </motion.div>

          {/* Center Column: Office Photo */}
          {/* -> changed heights so the image fills the section height and is responsive */}
          <motion.div
            className="lg:col-span-1 h-56 sm:h-72 md:h-80 lg:h-full overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASING.smooth }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/why-us.webp"
              alt="Office workspace with team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Stats */}
          <motion.div
            className="text-linkrow-secondary-bg space-y-8 lg:space-y-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASING.smooth }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <p className="text-xl lg:text-2xl font-medium mb-4">Our expertise in numbers</p>
              <p className="text-linkrow-secondary-bg text-base lg:text-lg leading-relaxed">
                See the measurable impact of our dedication and excellence across key areas of service
              </p>
            </div>

            {/* Stat 1 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-linkrow-secondary-bg text-lg font-medium">Successful projects delivered</span>
                <span className="text-linkrow-badge2-text text-2xl font-bold">90</span>
              </div>
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linkrow-badge2-text"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.3, ease: EASING.smooth }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-linkrow-secondary-bg text-lg font-medium">Team efficiency score</span>
                <span className="text-linkrow-badge2-text text-2xl font-bold">80</span>
              </div>
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linkrow-badge2-text"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.4, ease: EASING.smooth }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-linkrow-secondary-bg text-lg font-medium">Client satisfaction</span>
                <span className="text-linkrow-badge2-text text-2xl font-bold">98</span>
              </div>
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linkrow-badge2-text"
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1, delay: 0.5, ease: EASING.smooth }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

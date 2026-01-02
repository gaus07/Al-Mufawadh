"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { EASING } from "@/lib/animation-config"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth, delay: 0.15 },
  },
}

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth, delay: 0.35 },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth, delay: 0.5 },
  },
}

const decorationVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASING.smooth },
  },
}

const leftCardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
}

const rightCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
}

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-linkrow-section-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
        <div className="mb-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={badgeVariants}
          >
            <Badge className="px-3 py-1 text-sm rounded-2xl font-medium text-linkrow-primary-text bg-linkrow-badge-bg">About Us</Badge>
          </motion.div>

          <motion.h2
            className="mx-auto mb-6 max-w-4xl text-4xl text-linkrow-primary-text font-medium leading-tight tracking-tight lg:text-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            Platform designed to simplify hiring and deliver better hires.
          </motion.h2>

          <motion.p
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-linkrow-badge-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={paragraphVariants}
          >
            With personalized solutions tailored to your needs, we connect you with the best businesses quickly and
            efficiently, helping you build stronger, more effective person.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={buttonVariants}
          >
            <Button size="lg" className="rounded-full bg-linkrow-primary-text px-8 text-linkrow-secondary-bg transition-transform duration-300 hover:scale-105 hover:bg-linkrow-primary-text">
              <Link href="/about">
              About Al Mufawadh
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Features Grid with Center Decoration */}
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={decorationVariants}
          >
            <div className="relative flex items-center justify-center" style={{ width: 650, height: 650 }}>
              {/* rectangle-1 */}
              <div
                style={{
                  position: "absolute",
                  width: "618px",
                  height: "618px",
                  borderRadius: "180px",
                  border: "3px solid var(--stroke)",
                  opacity: 0.2,
                  boxShadow:
                    "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                  background: "transparent",
                }}
              />
              {/* rectangle-2 */}
              <div
                style={{
                  position: "absolute",
                  width: "498px",
                  height: "498px",
                  borderRadius: "140px",
                  border: "3px solid var(--stroke)",
                  opacity: 0.4,
                  boxShadow:
                    "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                  background: "transparent",
                }}
              />
              {/* rectangle-3 */}
              <div
                style={{
                  position: "absolute",
                  width: "372px",
                  height: "372px",
                  borderRadius: "111px",
                  border: "3px solid var(--stroke)",
                  opacity: 0.6,
                  boxShadow:
                    "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                  background: "transparent",
                }}
              />
              {/* rectangle-4 */}
              <div
                style={{
                  position: "absolute",
                  width: "268px",
                  height: "268px",
                  borderRadius: "52px",
                  border: "3px solid var(--stroke)",
                  opacity: 0.8,
                  boxShadow: "0 24px 48px -12px #0a0d1214, 0 12px 28px -8px #0a0d1214, 0 6px 8px -4px #0a0d1214",
                  background: "transparent",
                }}
              />
              {/* rectangle-5 */}
              <div
                style={{
                  position: "absolute",
                  width: "176px",
                  height: "176px",
                  borderRadius: "52px",
                  border: "3px solid var(--stroke)",
                  background: "white",
                  opacity: 1,
                  boxShadow: "0 24px 48px -12px #0a0d1214, 0 12px 28px -8px #0a0d1208, 0 6px 8px -4px #0a0d120a",
                }}
              />
              {/* central icon */}
              <div style={{ position: "relative", zIndex: 30 }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="56" width="32" height="32" rx="6" fill="#164e4e" />
                  <rect x="34" y="34" width="32" height="32" rx="6" fill="#1d5c5c" />
                  <rect x="56" y="12" width="32" height="32" rx="6" fill="#2a7070" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 grid place-items-center grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Top Left - Tailored Solutions */}
            <motion.div
              className="w-full sm:w-80 h-60 rounded-2xl bg-linkrow-secondary-bg p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
              variants={leftCardVariants}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linkrow-primary-text">
                <Image 
                                  src="/icons/home_feature_frame-1.svg"
                                  alt="Tailored Solutions"
                                  width={24}
                                  height={24}
                                  />
              </div>
              <h3 className="mb-2.5 text-xl font-semibold text-linkrow-primary-text">Tailored Solutions</h3>
              <p className="leading-relaxed text-linkrow-badge-text">
                Custom recruitment strategies designed for your unique business needs.
              </p>
            </motion.div>

            {/* Top Right - Access to Top Talent */}
            <motion.div
              className="w-full sm:w-80 h-60 rounded-2xl bg-linkrow-secondary-bg p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
              variants={rightCardVariants}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linkrow-primary-text">
                <Image 
                                  src="/icons/home_feature_frame-2.svg"
                                  alt="Access to Top Talent"
                                  width={24}
                                  height={24}
                                  />
              </div>
              <h3 className="mb-2.5 text-xl font-semibold text-linkrow-primary-text">Access to Top Talent</h3>
              <p className="leading-relaxed text-linkrow-badge-text">
                Connect with highly qualified candidates across industries.
              </p>
            </motion.div>

            {/* Bottom Left - Faster Hiring */}
            <motion.div
              className="w-full sm:w-80 h-60 rounded-2xl bg-linkrow-secondary-bg p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
              variants={leftCardVariants}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linkrow-primary-text">
                <Image 
                                  src="/icons/home_feature_frame-3.svg"
                                  alt="Faster Hiring"
                                  width={24}
                                  height={24}
                                  />
              </div>
              <h3 className="mb-2.5 text-xl font-semibold text-linkrow-primary-text">Our Network</h3>
              <p className="leading-relaxed text-linkrow-badge-text">
                Headquartered in Mumbai with on-ground offices across India and the Middle East.
              </p>
            </motion.div>

            {/* Bottom Right - Effortless Integration */}
            <motion.div
              className="w-full sm:w-80 h-60 rounded-2xl bg-linkrow-secondary-bg p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
              variants={rightCardVariants}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linkrow-primary-text">
                <Image 
                                  src="/icons/home_feature_frame-4.svg"
                                  alt="Effortless Integration"
                                  width={24}
                                  height={24}
                                  />
              </div>
              <h3 className="mb-2.5 text-xl font-semibold text-linkrow-primary-text">Quality Assurance</h3>
              <p className="leading-relaxed text-linkrow-badge-text">
                Compliance-first hiring and strict verification at every step.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

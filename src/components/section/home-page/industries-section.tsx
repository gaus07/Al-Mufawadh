"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { industries, type IndustryIcon } from "@/data/industries"
import { EASING, TIMING, VIEWPORT } from "@/lib/animations/config"

const industryIcons: Record<IndustryIcon, typeof Building2> = {
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
}

export function IndustriesSection() {
  return (
    <section className="bg-white px-6 py-16 text-linkrow-primary-text sm:px-10 sm:py-20 lg:px-16 lg:py-24" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: TIMING.standard, ease: EASING.smooth }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#edf6e9] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-linkrow-primary-text sm:text-sm">
            <Building2 className="size-5 text-linkrow-primary-text" aria-hidden="true" />
            Industries we serve
          </span>
          <h2 id="industries-heading" className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-[52px]">
            Powering businesses across <span className="text-linkrow-accent-green">diverse industries.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            We provide skilled professionals for a wide range of industries, helping businesses build stronger, more capable teams.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={{ visible: { transition: { staggerChildren: TIMING.stagger } } }}
        >
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry.icon]
            return (
              <motion.article
                key={industry.title}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: TIMING.fast, ease: EASING.smooth } } }}
                className={`px-5 py-6 first:pt-0 sm:px-6 lg:min-h-[196px] lg:py-6 ${index >= 5 ? "border-t border-border" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-border" : ""} ${index % 5 !== 0 ? "lg:border-l lg:border-border" : ""}`}
              >
                <div className="flex size-16 items-center justify-center rounded-2xl bg-[#edf6e9] text-linkrow-primary-text">
                  <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.02em] sm:text-xl">{industry.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-5 text-muted-foreground sm:text-base">{industry.description}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: TIMING.standard, delay: 0.15, ease: EASING.smooth }}
        >
          <Button asChild size="lg" className="h-14 rounded-full bg-linkrow-primary-text px-8 text-base font-semibold text-white hover:bg-linkrow-primary-dark">
            <Link href="/services">
              Explore All Industries
              <MoveUpRight data-icon="inline-end" className="text-linkrow-accent-green" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

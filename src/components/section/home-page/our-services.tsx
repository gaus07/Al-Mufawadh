"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { servicesContent } from "@/data/services"
import { EASING, TIMING, VIEWPORT } from "@/lib/animations/config"

export function OurServices() {
  const [activeId, setActiveId] = useState(servicesContent[0].id)
  const activeService = servicesContent.find((service) => service.id === activeId) ?? servicesContent[0]

  return (
    <section className="bg-linkrow-primary-text py-16 text-white sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16 lg:px-16 xl:px-20">
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: TIMING.standard, ease: EASING.smooth }}>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-linkrow-secondary-bg">Our services</span>
            <h2 id="services-heading" className="mt-8 max-w-xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[52px]">
              Recruitment solutions that connect businesses with <span className="text-linkrow-badge-bg">top-tier talent.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              We help employers source, screen and mobilize suitable candidates through tailored recruitment strategies and end-to-end manpower support.
            </p>
            <Button asChild size="lg" className="mt-9 h-16 rounded-full bg-white px-8 text-base font-semibold text-linkrow-primary-text hover:bg-white/90">
              <Link href="/services">
                Explore our services
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="min-w-0">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Our services">
            {servicesContent.map((service) => {
              const isActive = service.id === activeService.id
              return (
                <button
                  key={service.id}
                  id={`${service.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${service.id}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
                    event.preventDefault()
                    const index = servicesContent.findIndex((item) => item.id === service.id)
                    const nextIndex = event.key === "ArrowRight" ? (index + 1) % servicesContent.length : (index - 1 + servicesContent.length) % servicesContent.length
                    setActiveId(servicesContent[nextIndex].id)
                    document.getElementById(`${servicesContent[nextIndex].id}-tab`)?.focus()
                  }}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-medium transition-colors sm:text-base ${isActive ? "bg-white text-linkrow-primary-text" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  {service.label}
                </button>
              )
            })}
          </div>

          <motion.div key={activeService.id} id={`${activeService.id}-panel`} role="tabpanel" aria-labelledby={`${activeService.id}-tab`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: TIMING.fast, ease: EASING.smooth }} className="grid min-h-[430px] overflow-hidden rounded-[22px] border border-white/20 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_260px]">
            <div className="flex flex-col p-7 sm:p-10">
              <div>
                <h3 className="max-w-xl text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-4xl">{activeService.heading}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{activeService.description}</p>
              </div>
              <ul className="mt-7 grid gap-4" aria-label="Service benefits">
                {activeService.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-base font-medium sm:text-lg">
                    <Check className="size-5 shrink-0 text-linkrow-badge-bg" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href={activeService.href} className="mt-auto inline-flex w-fit items-center border-b border-white pb-1 pt-8 text-base font-medium transition-colors hover:border-linkrow-badge-bg hover:text-linkrow-badge-bg">Details</Link>
            </div>
            <div className="relative min-h-64 md:min-h-full">
              <Image src={activeService.image} alt={activeService.imageAlt} fill sizes="(max-width: 768px) 100vw, 260px" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

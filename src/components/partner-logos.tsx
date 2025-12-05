"use client"

import { motion } from "framer-motion"
import { HERO_ANIMATION } from "@/lib/animation-config"

const LOGO_ANIMATION = {
  duration: 0.7,
  stagger: 0.08,
  delay: 0.1, // Start after hero animations complete
  initialScale: 1.4,
  finalScale: 1,
}

export function PartnerLogos() {
  const logos = [
    { id: 1, name: "Logoipsum 1" },
    { id: 2, name: "Logoipsum 2" },
    { id: 3, name: "Logoipsum 3" },
    { id: 4, name: "Logoipsum 4" },
    { id: 5, name: "Logoipsum 5" },
    { id: 6, name: "Logoipsum 6" },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: LOGO_ANIMATION.stagger,
        delayChildren: LOGO_ANIMATION.delay,
      },
    },
  }

  const logoVariants = {
    hidden: {
      scale: LOGO_ANIMATION.initialScale,
      opacity: 0,
    },
    visible: {
      scale: LOGO_ANIMATION.finalScale,
      opacity: 1,
      transition: {
        duration: LOGO_ANIMATION.duration,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  return (
    <section className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
        <motion.div
          className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo) => (
            <motion.div key={logo.id} className="flex items-center justify-center" variants={logoVariants}>
              <div className="text-center text-lg font-medium text-muted-foreground/60">Logoipsum</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion, TargetAndTransition } from "framer-motion"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { HERO_ANIMATION } from "@/lib/animation-config"
import Link from "next/link"

export function AnimatedHero() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // If user prefers reduced motion, use instant animations
  const getAnimation = (animation: TargetAndTransition): TargetAndTransition => (prefersReducedMotion ? { opacity: 1 } : animation)

  // Left content variants
  const headlineVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: HERO_ANIMATION.headline.duration,
        delay: HERO_ANIMATION.headline.delay,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: HERO_ANIMATION.subtext.duration,
        delay: HERO_ANIMATION.subtext.delay,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  const ctaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: HERO_ANIMATION.cta.delay,
        staggerChildren: HERO_ANIMATION.cta.stagger,
      },
    },
  }

  const ctaItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: HERO_ANIMATION.cta.duration,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  // Right content variants
  const backgroundCardVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: HERO_ANIMATION.backgroundCard.duration,
        delay: HERO_ANIMATION.backgroundCard.delay,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  const specialistCardVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: HERO_ANIMATION.specialistCard.duration,
        delay: HERO_ANIMATION.specialistCard.delay,
        ease: HERO_ANIMATION.easing,
      },
    },
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 h-[600px] w-[800px] bg-gradient-to-bl from-muted/40 to-transparent"></div>

      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={getAnimation({ opacity: 0, x: -40 })}
              animate={getAnimation({ opacity: 1, x: 0 })}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: HERO_ANIMATION.easing,
              }}
            >
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
            </motion.div>

            {/* Headline - slides from left */}
            <motion.h1
              className="mb-6 text-5xl font-light leading-tight tracking-tight text-foreground lg:text-6xl"
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: "transform, opacity" }}
            >
              Recruitment process <br className="hidden lg:block" />
              with <span className="text-linkrow-primary-text font-medium">smart solutions.</span>
            </motion.h1>

            {/* Subtext - fades up */}
            <motion.p
              className="mb-8 max-w-lg text-lg leading-relaxed text-linkrow-badge-text"
              variants={subtextVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: "transform, opacity" }}
            >
              Linkrow is your trusted partner in recruitment, offering personalized HR solutions that connect top talent
              with the right opportunities.
            </motion.p>

            {/* CTAs - staggered fade up */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={ctaContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={ctaItemVariants} style={{ willChange: "transform, opacity" }}>
                <Button
                  size="lg"
                  className="rounded-full bg-linkrow-primary-text px-8 text-linkrow-secondary-bg transition-transform duration-300 hover:scale-105 hover:bg-linkrow-primary-text"
                >
                  Free consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div variants={ctaItemVariants} style={{ willChange: "transform, opacity" }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-border bg-linkrow-badge-bg px-8 text-linkrow-primary-text transition-transform duration-300 hover:bg-linkrow-badge-bg"
                >
                  Explore our services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Specialist Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              {/* Container for layered cards */}
              <div className="relative flex items-center">
                {/* Background card - Dark teal with stats (slides in from right, slightly earlier) */}
                <motion.div
                  className="relative z-0 h-[340px] w-full max-w-[420px] rounded-[28px] bg-primary p-8 text-primary-foreground shadow-xl lg:h-[360px] lg:p-10"
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

                {/* Foreground card - Specialist photo (slides from right with scale, slightly later for parallax) */}
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
                  {/* Top badge */}
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
          </div>
        </div>
      </div>
    </section>
  )
}

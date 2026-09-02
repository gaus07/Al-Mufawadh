"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion";
import { EASING } from "@/lib/animation-config"
import {aboutFadeInUp, aboutContainerVariants} from "@/lib/animation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TeamSection } from "@/components/section/about-page/team-section"
import { WhyChooseUsSection } from "@/components/section/about-page/why-us"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function CompanyPage() {
  const awardsRef = useRef(null)
  const awardsInView = useInView(awardsRef, { once: true, margin: "-100px" })

  return (
    <main>
      {/* Who We Are Section */}
      <section className="min-h-[45vh] flex items-center justify-center bg-[#f7f7f7] py-20">
        <BackgroundRippleEffect />
        <motion.div
          className="mx-auto max-w-[1400px] px-8 text-center lg:px-16 xl:px-20"
          variants={aboutContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={aboutFadeInUp}>
            <Badge
                asChild
                className="px-3 py-1 text-sm rounded-2xl font-medium bg-linkrow-badge-bg"
              >
                <Link href="#">
                  {" "}
                  <span className="text-linkrow-badge-text"> About us </span>
                </Link>
              </Badge>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl font-400 text-linkrow-primary-text my-6" variants={aboutFadeInUp}>
            Who we are
          </motion.h1>

          <motion.p className="text-lg text-linkrow-badge-text max-w-2xl mx-auto" variants={aboutFadeInUp}>
            Building stronger teams and empowering businesses through tailored recruitment solutions and expert talent
            acquisition
          </motion.p>
        </motion.div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-20 bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={awardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: EASING.smooth }}
            >
              <Badge
                asChild
                className="px-3 py-1 text-sm rounded-2xl font-medium bg-linkrow-badge-bg"
              >
                <Link href="#">
                  {" "}
                  <span className="text-linkrow-primary-text"> Awards </span>
                </Link>
              </Badge>

              <h2 className="text-4xl md:text-5xl font-medium text-linkrow-primary-text">
                Recognized excellence in recruitment services
              </h2>

              <p className="text-linkrow-badge-text text-base leading-relaxed">
                Our dedication to connecting businesses with top talent has earned us industry recognition. Explore the
                awards that showcase our commitment to quality and innovation.
              </p>

              <Button className="bg-linkrow-primary-text hover:bg-linkrow-primary-text text-linkrow-secondary-bg rounded-full px-8 py-6 text-base font-medium inline-flex items-center gap-2">
                Discover our awards
                {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 8v8m4-4H8" />
                </svg> */}
              </Button>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASING.smooth }}
                >
                  <div className="text-8xl font-medium text-linkrow-primary-text">25+</div>
                  <p className="text-linkrow-badge-text text-sm mt-2">prestigious awards received</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: EASING.smooth
                   }}
                >
                  <div className="text-8xl font-medium text-linkrow-primary-text">10+</div>
                  <p className="text-linkrow-badge-text text-sm mt-2">years of proven success</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Content - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={awardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: EASING.smooth }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/image-awards.webp"
                  alt="Team working in modern office"
                  className="w-full max-h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <TeamSection />
      
      {/* Why choose us Section */}
      <WhyChooseUsSection />
    </main>
  )
}

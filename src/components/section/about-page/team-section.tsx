"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { EASING } from "@/lib/animation-config"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

function TeamMember({
  name,
  role,
  image,
}: {
  name: string
  role: string
  image: string
}) {
  return (
    <motion.div
      className="space-y-4 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASING.smooth }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </motion.div>

      <div className="space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-linkrow-primary-text">{name}</h3>
        <p className="text-sm md:text-base text-linkrow-badge-text">{role}</p>
        <div className="h-1 w-16 bg-linkrow-primary-text"></div>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <section className="py-20 bg-linkrow-secondary-bg">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING.smooth }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Badge
                asChild
                className="px-3 py-1 text-sm rounded-2xl font-medium bg-linkrow-badge-bg"
              >
                <Link href="#">
                  {" "}
                  <span className="text-linkrow-primary-text"> Team </span>
                </Link>
              </Badge>

            <h2 className="text-4xl md:text-5xl font-medium text-linkrow-primary-text my-6">
              <span className="block">Meet the experts behind</span>
              <span className="block">your recruitment success</span>
            </h2>

            <motion.button className="bg-linkrow-primary-text hover:bg-linkrow-primary-text text-linkrow-secondary-bg rounded-full px-8 py-4 text-base font-medium inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View all team
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeWidth="2" d="M12 8v8m4-4H8" />
              </svg> */}
            </motion.button>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Team Member 1 */}
            <TeamMember
              name="Ethan Miller"
              role="Planning Specialist"
              image="/team-member.png"
            />

            {/* Team Member 2 */}
            <TeamMember
              name="Olivia Carter"
              role="Head of Recruitment"
              image="/team-member.png"
            />

            {/* Team Member 3 */}
            <TeamMember
              name="Sarah Mitchell"
              role="Talent Acquisition Specialist"
              image="/team-member.png"
            />

            {/* Team Member 4 */}
            <TeamMember
              name="David Brown"
              role="HR Integration Expert"
              image="/team-member.png"
            />
          </motion.div>
        </div>
      </section>
  )
}

import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/data/home";
import {
  processCtaBlock,
  processCtaButton,
  processCtaHeading,
  processCtaImage,
  processHeaderBadge,
  processHeaderHeading,
  processHeaderParagraph,
  processStep,
  processStepBadge,
  processStepContent,
  processStepLine,
  processStepsContainer,
} from "@/lib/animations/variants";
import { VIEWPORT } from "@/lib/animations/config";

export function SolutionSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="overflow-hidden text-white"
        style={{ backgroundColor: "var(--linkrow-primary-text)" }}
      >
        <div className="relative">
          <div className="relative mx-auto max-w-[1400px] px-8 py-14 md:px-12 lg:px-16 lg:py-20">
            <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={processHeaderBadge}>
              <Badge
                asChild
                className="mb-6 rounded-2xl bg-linkrow-badge2-bg px-3 py-1 text-sm font-medium text-linkrow-badge2-text"
              >
                <Link href="#">How it works</Link>
              </Badge>
            </motion.div>

            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={processHeaderHeading}
              className="mb-4 font-medium leading-tight tracking-tight text-linkrow-secondary-bg"
            >
              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                Efficient process that matches <br /> talent with opportunity.
              </span>
            </motion.h3>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={processHeaderParagraph}
              className="mb-12 max-w-3xl text-base text-linkrow-secondary-bg md:text-lg"
            >
              We work with employers to define requirements and with candidates to
              prepare, screen and mobilize — delivering the right hire and the
              right job.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={processStepsContainer}
              className="grid gap-10 md:grid-cols-3"
            >
              {homeContent.process.map((step) => (
                <motion.div key={step.number} variants={processStep} className="relative">
                  <motion.div
                    variants={processStepBadge}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linkrow-secondary-bg font-semibold text-linkrow-primary-text shadow-sm"
                  >
                    {step.number}
                  </motion.div>

                  <motion.div
                    variants={processStepLine}
                    className="mt-6 h-px w-full origin-left rounded-full bg-gradient-to-r from-linkrow-badge2-text to-white/10"
                  />

                  <motion.div variants={processStepContent}>
                    <h4 className="mt-6 text-xl font-semibold text-linkrow-secondary-bg md:text-2xl">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-linkrow-secondary-bg">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={processCtaBlock}
          className="mx-auto max-w-[1400px] px-8 pb-8 md:px-12 lg:px-16 lg:pb-12"
        >
          <div className="relative overflow-hidden rounded-[24px]">
            <motion.div
              variants={processCtaHeading}
              className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]"
            >
              <motion.div variants={processCtaImage} className="absolute inset-0">
                <Image
                  src="/sample.png"
                  alt="Get started with Al Mufawadh today"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </motion.div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-1 py-40 text-center lg:px-6 lg:py-90">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={processCtaHeading}
                className="text-2xl font-medium leading-tight text-linkrow-secondary-bg sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <span className="block">Get started with Al Mufawadh today and</span>
                <span className="block">discover a smarter, faster way to get hired.</span>
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={processCtaButton}
              >
                <Button
                  size="lg"
                  className="mt-6 rounded-full bg-linkrow-secondary-bg px-6 py-6 text-base font-medium text-linkrow-primary-text hover:bg-linkrow-secondary-bg sm:px-8"
                >
                  Find your talent
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

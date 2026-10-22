import type { Variants } from "framer-motion"
import { EASING, PROCESS_ANIMATION, TIMING, VIEWPORT } from "./config"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: TIMING.standard, ease: EASING.smooth } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: TIMING.standard, ease: EASING.smooth } },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASING.smooth } },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASING.smooth } },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: TIMING.stagger, delayChildren: 0.1 } },
}

export const processHeaderBadge: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...PROCESS_ANIMATION.header.badge, ease: PROCESS_ANIMATION.easing },
  },
}

export const processHeaderHeading: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...PROCESS_ANIMATION.header.heading, ease: PROCESS_ANIMATION.easing },
  },
}

export const processHeaderParagraph: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...PROCESS_ANIMATION.header.paragraph, ease: PROCESS_ANIMATION.easing },
  },
}

export const processStepsContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: PROCESS_ANIMATION.steps.stagger },
  },
}

export const processStep: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
}

export const processStepBadge: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: PROCESS_ANIMATION.steps.badge.duration, ease: PROCESS_ANIMATION.easing },
  },
}

export const processStepLine: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transformOrigin: "left",
    transition: { duration: PROCESS_ANIMATION.steps.line.duration, ease: PROCESS_ANIMATION.easing, delay: 0.08 },
  },
}

export const processStepContent: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: PROCESS_ANIMATION.steps.content.duration, ease: PROCESS_ANIMATION.easing, delay: 0.14 },
  },
}

export const processCtaBlock: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: PROCESS_ANIMATION.cta.block.duration, ease: PROCESS_ANIMATION.easing },
  },
}

export const processCtaImage: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: PROCESS_ANIMATION.cta.image.duration, ease: PROCESS_ANIMATION.easing },
  },
}

export const processCtaHeading: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...PROCESS_ANIMATION.cta.heading, ease: PROCESS_ANIMATION.easing },
  },
}

export const processCtaButton: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...PROCESS_ANIMATION.cta.button, ease: PROCESS_ANIMATION.easing },
  },
}

export { VIEWPORT }

import type { Variants } from "framer-motion";
import { EASING, HERO_ANIMATION } from "./animation-config";

// Hero Section Animation Variants
export const heroHeadlineVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: HERO_ANIMATION.headline.duration,
      delay: HERO_ANIMATION.headline.delay,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroSubtextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: HERO_ANIMATION.subtext.duration,
      delay: HERO_ANIMATION.subtext.delay,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroCtaContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: HERO_ANIMATION.cta.delay,
      staggerChildren: HERO_ANIMATION.cta.stagger,
    },
  },
};

export const heroCtaItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: HERO_ANIMATION.cta.duration,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroBackgroundCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: HERO_ANIMATION.backgroundCard.duration,
      delay: HERO_ANIMATION.backgroundCard.delay,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroSpecialistCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.96,
  },
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
};

export const heroBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroSpecialistBadgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: HERO_ANIMATION.easing,
    },
  },
};

export const heroSpecialistInfoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: HERO_ANIMATION.easing,
    },
  },
};

// Features Section Animation Variants
export const featureBadgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
};

export const featureHeadingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth, delay: 0.15 },
  },
};

export const featureParagraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth, delay: 0.35 },
  },
};

export const featureButtonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth, delay: 0.5 },
  },
};

export const featureDecorationVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASING.smooth },
  },
};

export const featureLeftCardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
};

export const featureRightCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
};

// Solution Section Animation Variants
export const solutionBadgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
};

export const solutionHeadingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth, delay: 0.15 },
  },
};

export const solutionParagraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth, delay: 0.35 },
  },
};

// Team Section Animation Variants
export const teamContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// About Section Animation Variants
export const aboutFadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

export const aboutContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
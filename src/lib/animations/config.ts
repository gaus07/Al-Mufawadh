export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as const,
} as const

export const TIMING = {
  fast: 0.3,
  standard: 0.6,
  slow: 0.9,
  stagger: 0.12,
} as const

export const VIEWPORT = {
  once: true,
  amount: 0.3,
} as const

export const PROCESS_ANIMATION = {
  easing: EASING.smooth,
  header: {
    badge: { duration: TIMING.fast, delay: 0 },
    heading: { duration: TIMING.standard, delay: 0.08 },
    paragraph: { duration: TIMING.standard, delay: 0.18 },
  },
  steps: {
    stagger: 0.1,
    badge: { duration: TIMING.fast },
    line: { duration: TIMING.standard },
    content: { duration: TIMING.standard },
  },
  cta: {
    block: { duration: TIMING.slow },
    image: { duration: TIMING.slow },
    heading: { duration: TIMING.standard, delay: 0.12 },
    button: { duration: TIMING.fast, delay: 0.22 },
  },
} as const

export const HERO_ANIMATION = {
  easing: EASING.smooth,
  headline: { duration: 0.8, delay: 0.1 },
  subtext: { duration: 0.6, delay: 0.3 },
  cta: { duration: 0.5, stagger: 0.12, delay: 0.5 },
  backgroundCard: { duration: 0.9, delay: 0.2 },
  specialistCard: { duration: 0.85, delay: 0.35 },
  hover: { scale: 1.02, duration: 0.3 },
} as const

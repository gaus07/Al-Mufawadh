// Timing constants for hero entrance animations - easy to tweak
export const HERO_ANIMATION = {
  // Easing - smooth ease-out curve
  easing: [0.22, 1, 0.36, 1] as const,

  // Left content timing
  headline: {
    duration: 0.8,
    delay: 0.1,
  },
  subtext: {
    duration: 0.6,
    delay: 0.3,
  },
  cta: {
    duration: 0.5,
    stagger: 0.12,
    delay: 0.5,
  },

  // Right content timing
  backgroundCard: {
    duration: 0.9,
    delay: 0.2,
  },
  specialistCard: {
    duration: 0.85,
    delay: 0.35,
  },

  // Hover effects
  hover: {
    scale: 1.02,
    duration: 0.3,
  },
} as const

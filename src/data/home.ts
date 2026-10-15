export interface HomeFeature {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export const homeContent = {
  hero: {
    partnerCount: "250+",
    headline: "Recruitment process with smart solutions.",
    description: "Al Mufawadh Offers Incredible Placement Service Globally, Approved by Government Of India, Ministry Of Labour. Strongly believe in a new beginning, fresh thinking, innovative ideas and value added services.",
  },
  features: [
    { title: "Tailored Solutions", description: "Custom recruitment strategies designed for your unique business needs.", icon: "/icons/home_feature_frame-1.svg" },
    { title: "Access to Top Talent", description: "Connect with highly qualified candidates across industries.", icon: "/icons/home_feature_frame-2.svg" },
    { title: "Our Network", description: "Headquartered in Mumbai with on-ground offices across India and the Middle East.", icon: "/icons/home_feature_frame-3.svg" },
    { title: "Quality Assurance", description: "Compliance-first hiring and strict verification at every step.", icon: "/icons/home_feature_frame-4.svg" },
  ] satisfies HomeFeature[],
  process: [
    { number: 1, title: "Understand Your Needs", description: "We work closely with you to define role profiles, timelines and compliance requirements so search focuses on the right skills and culture fit." },
    { number: 2, title: "Recruitment Strategy", description: "We design a tailored sourcing plan — database search, active headhunting and targeted advertising — to attract qualified candidates fast." },
    { number: 3, title: "Seamless Hiring & Mobilization", description: "From interviews and final selection to medicals, visa processing and flight coordination, we handle the end-to-end process for reliable, on-time mobilization." },
  ] satisfies ProcessStep[],
}

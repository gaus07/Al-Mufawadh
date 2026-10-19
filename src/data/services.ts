export interface ServiceItem {
  id: string
  label: string
  heading: string
  description: string
  benefits: string[]
  href: string
  image: string
  imageAlt: string
}

export const servicesContent: ServiceItem[] = [
  {
    id: "custom-recruitment",
    label: "Custom Recruitment Strategies",
    heading: "Every workforce has unique recruitment needs.",
    description: "We work closely with your team to understand role specifications, required skills, workplace expectations and hiring timelines, then tailor our recruitment approach to your requirements.",
    benefits: ["Role-specific candidate selection", "Industry and workplace suitability", "Structured hiring coordination"],
    href: "/services",
    image: "/specialist_image.png",
    imageAlt: "Professional candidate in a modern workplace",
  },
  {
    id: "candidate-sourcing",
    label: "Candidate Sourcing & Screening",
    heading: "Find suitable candidates through focused sourcing.",
    description: "We use relevant candidate databases, recruitment networks, advertising and direct outreach to identify, evaluate and shortlist candidates against your requirements.",
    benefits: ["Targeted candidate sourcing", "Preliminary interviews and screening", "Shortlisted candidates for client review"],
    href: "/services",
    image: "/team-member.png",
    imageAlt: "Recruitment team member reviewing candidate information",
  },
  {
    id: "visa-mobilization",
    label: "Visa & Mobilization Support",
    heading: "Coordinate the journey from selection to mobilization.",
    description: "We assist with recruitment-related documentation, medical processing, visa procedures, travel arrangements and pre-departure briefings in accordance with applicable requirements.",
    benefits: ["Documentation coordination", "Medical and visa process assistance", "Travel and mobilization support"],
    href: "/services",
    image: "/why-us.webp",
    imageAlt: "Professional team collaborating on workforce planning",
  },
]

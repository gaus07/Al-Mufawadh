export type IndustryIcon =
  | "building"
  | "engineering"
  | "oil"
  | "hospitality"
  | "healthcare"
  | "transport"
  | "technology"
  | "education"
  | "manufacturing"
  | "more"

export interface Industry {
  title: string
  description: string
  icon: IndustryIcon
}

export const industries: Industry[] = [
  { title: "Construction", description: "Skilled workforce for infrastructure and development projects.", icon: "building" },
  { title: "Engineering", description: "Technical talent for complex and specialized projects.", icon: "engineering" },
  { title: "Oil & Gas", description: "Experienced professionals for the energy sector.", icon: "oil" },
  { title: "Hospitality", description: "Qualified staff for hotels, resorts and tourism services.", icon: "hospitality" },
  { title: "Healthcare", description: "Compassionate and skilled professionals for better care.", icon: "healthcare" },
  { title: "Transport & Logistics", description: "Reliable talent to keep your operations moving forward.", icon: "transport" },
  { title: "ICT & Technology", description: "IT professionals for digital transformation and innovation.", icon: "technology" },
  { title: "Education", description: "Dedicated educators and support staff for brighter futures.", icon: "education" },
  { title: "Manufacturing", description: "Skilled workforce for efficient and sustainable operations.", icon: "manufacturing" },
  { title: "And More", description: "We support additional industries with tailored recruitment solutions.", icon: "more" },
]

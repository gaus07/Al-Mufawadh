export interface NavigationItem {
  label: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Jobs", href: "/jobs" },
]

export const contactHref = "/contact"

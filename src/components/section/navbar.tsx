import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-linkrow-secondary-bg backdrop-blur supports-[backdrop-filter]:bg-linkrow-secondary-bg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linkrow-primary-text">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7z"
                fill="currentColor"
                className="text-primary-foreground"
              />
            </svg>
          </div>
          <span className="text-xl font-semibold text-linkrow-primary-text">Al Mufawadh</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-linkrow-badge-text hover:text-linkrow-primary-text"
          >
            Demos
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-linkrow-badge-text hover:text-linkrow-primary-text"
          >
            Company
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-sm font-medium text-linkrow-badge-text hover:text-linkrow-primary-text">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-linkrow-badge-text hover:text-linkrow-primary-text">
            Blog
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-linkrow-badge-text hover:text-linkrow-primary-text"
          >
            All pages
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>

        {/* Contact Button */}
        <Button className="rounded-full bg-linkrow-primary-text px-6 text-linkrow-secondary-bg">
          Contact us
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </nav>
    </header>
  )
}

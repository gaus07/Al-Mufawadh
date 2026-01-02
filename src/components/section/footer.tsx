import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function FooterSection() {
  return (
    <footer className=""
    style={{ backgroundColor: "var(--linkrow-section-bg)" }}>
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1400px] px-8 py-16 lg:px-16 xl:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center">
                <Image src="/logo2.png" alt="Logo" width={34} height={34} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-linkrow-primary-text">Al Mufawadh</h3>
                <p className="text-sm font-medium text-linkrow-primary-text">Placement Service</p>
              </div>
            </div>

            <p className="mb-6 text-base text-linkrow-badge-text">Stay in the loop and sign up for the Wardiere newsletter:</p>

            {/* Email Input */}
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border-2 border-linkrow-primary-text bg-transparent py-3 pl-6 pr-14 text-sm text-linkrow-badge-text placeholder:text-linkrow-badge-text focus:outline-none focus:ring-2 focus:ring-[#1F514C]/20"
              />
              <button className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-linkrow-primary-text text-linkrow-section-bg transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Latest Jobs */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-linkrow-primary-text">Latest Jobs</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Semi Skilled
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Foreman & Labour
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Electrical Supervisors
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-linkrow-primary-text">Documentation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-linkrow-primary-text">Contact Us</h4>
            <address className="not-italic text-base leading-relaxed text-linkrow-badge-text">
              Al Mufawadh Placements and services, 691, Irani Bldg, Entire First Floor, 2<sup>nd</sup> Cross Lane Near
              Byculla Railway Station, N.M Joshi Marg, Byculla (West), Mum - 400027, Maharashtra, INDIA
              Tel - 999999999999999
              <br />
              Email - almufawadh.com
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e5e5e5]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-8 py-6 sm:flex-row lg:px-16 xl:px-20">
          <p className="text-sm text-linkrow-badge-text">© Wardiere Inc. All Rights Reserved 2023</p>
          <Link href="#" className="text-sm text-linkrow-badge-text transition-colors hover:text-linkrow-primary-text">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

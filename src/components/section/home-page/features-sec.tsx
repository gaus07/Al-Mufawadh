import { ArrowRight, ShieldCheck, List, Lock, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "../../ui/badge"
import Link from "next/link"

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-linkrow-section-bg py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <div className="mb-16 text-center">
            {/* <BadgePill className="mb-6 inline-flex">About us</BadgePill> */}
            <Badge
              asChild
              className="text-linkrow-badge-text bg-linkrow-badge-bg"
            >
              <Link href="#">About Us</Link>
            </Badge>
            <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl">
              Platform designed to simplify{" "}
              <span className="text-primary">
                and enhance the hiring process.
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              With personalized solutions tailored to your business needs, we
              connect you with the best talent quickly and efficiently, helping
              you build stronger, more effective teams.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              About Linkrow
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Features Grid with Center Decoration */}
          <div className="relative mx-auto max-w-5xl">
            {/* Center Decorative Element */}
            {/* Concentric rectangles (exact sizes & shadows from your CSS) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="relative flex items-center justify-center"
                style={{ width: 650, height: 650 }}
              >
                {/* rectangle-1 (largest) */}
                <div
                  style={{
                    position: "absolute",
                    width: "618px",
                    height: "618px",
                    borderRadius: "180px",
                    border: "3px solid var(--stroke)",
                    opacity: 0.2,
                    boxShadow:
                      "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                    background: "transparent",
                  }}
                />

                {/* rectangle-2 */}
                <div
                  style={{
                    position: "absolute",
                    width: "498px",
                    height: "498px",
                    borderRadius: "140px",
                    border: "3px solid var(--stroke)",
                    opacity: 0.4,
                    boxShadow:
                      "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                    background: "transparent",
                  }}
                />

                {/* rectangle-3 */}
                <div
                  style={{
                    position: "absolute",
                    width: "372px",
                    height: "372px",
                    borderRadius: "111px",
                    border: "3px solid var(--stroke)",
                    opacity: 0.6,
                    boxShadow:
                      "0 24px 48px -12px rgba(10,13,18,0.22), 0 12px 28px -8px rgba(10,13,18,0.12), 0 6px 8px -4px rgba(10,13,18,0.08)",
                    background: "transparent",
                  }}
                />

                {/* rectangle-4 */}
                <div
                  style={{
                    position: "absolute",
                    width: "268px",
                    height: "268px",
                    borderRadius: "52px",
                    border: "3px solid var(--stroke)",
                    opacity: 0.8,
                    boxShadow:
                      "0 24px 48px -12px #0a0d1214, 0 12px 28px -8px #0a0d1214, 0 6px 8px -4px #0a0d1214",
                    background: "transparent",
                  }}
                />

                {/* rectangle-5 (inner white square) */}
                <div
                  style={{
                    position: "absolute",
                    width: "176px",
                    height: "176px",
                    borderRadius: "52px",
                    border: "3px solid var(--stroke)",
                    background: "white",
                    opacity: 1,
                    boxShadow:
                      "0 24px 48px -12px #0a0d1214, 0 12px 28px -8px #0a0d1208, 0 6px 8px -4px #0a0d120a",
                  }}
                />

                {/* central icon on top */}
                <div style={{ position: "relative", zIndex: 30 }}>
                  {/* keep your SVG or replace with <Image> */}
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="12"
                      y="56"
                      width="32"
                      height="32"
                      rx="6"
                      fill="#164e4e"
                    />
                    <rect
                      x="34"
                      y="34"
                      width="32"
                      height="32"
                      rx="6"
                      fill="#1d5c5c"
                    />
                    <rect
                      x="56"
                      y="12"
                      width="32"
                      height="32"
                      rx="6"
                      fill="#2a7070"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 place-items-center">
              {/* Top Left - Tailored Solutions */}
              <div
                className="feature-card-animate-left w-full sm:w-80 h-60 rounded-2xl bg-white p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
                style={{ animation: "fadeInLeft 0.8s ease-out forwards", opacity: 0 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold text-foreground">Tailored Solutions</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Custom recruitment strategies designed for your unique business needs.
                </p>
              </div>

              {/* Top Right - Access to Top Talent */}
              <div
                className="feature-card-animate-right w-full sm:w-80 h-60 rounded-2xl bg-white p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
                style={{ animation: "fadeInRight 0.8s ease-out forwards", animationDelay: "0.2s", opacity: 0 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <List className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold text-foreground">Access to Top Talent</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Connect with highly qualified candidates across industries.
                </p>
              </div>

              {/* Bottom Left - Faster Hiring */}
              <div
                className="feature-card-animate-left w-full sm:w-80 h-60 rounded-2xl bg-white p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
                style={{ animation: "fadeInLeft 0.8s ease-out forwards", animationDelay: "0.4s", opacity: 0 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Lock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold text-foreground">Faster Hiring</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Streamlined processes that cut hiring time by 30% for faster results.
                </p>
              </div>

              {/* Bottom Right - Effortless Integration */}
              <div
                className="feature-card-animate-right w-full sm:w-80 h-60 rounded-2xl bg-white p-4 shadow-lg transition-all duration-700 hover:shadow-xl lg:p-6"
                style={{ animation: "fadeInRight 0.8s ease-out forwards", animationDelay: "0.6s", opacity: 0 }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Settings className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2.5 text-xl font-semibold text-foreground">Effortless Integration</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Seamlessly integrate our platform with your existing HR tools for a hiring experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

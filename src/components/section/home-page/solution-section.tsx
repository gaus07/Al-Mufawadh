import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function SolutionSection() {
  return (
    <section className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left: Copy */}
          <div>
            <Badge asChild className="mb-6 text-linkrow-badge-text bg-linkrow-badge-bg">
              <Link href="#">Our Solution</Link>
            </Badge>

            {/* Headline */}
            <h2 className="mb-6 font-medium leading-tight tracking-tight text-[var(--linkrow-primary-text)]">
              <span className="block text-4xl sm:text-4xl lg:text-5xl">AlMufawadh Offers Incredible Placement Service Globally</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We understand that finding the right people is key to your success, which is why our platform offers
              personalized recruitment strategies tailored to your unique needs.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-[var(--linkrow-primary-dark)] px-8 text-primary-foreground hover:bg-[color-mix(in_oklab,var(--linkrow-primary-dark),white_8%)]"
            >
              Our services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right: Layered specialist visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              {/* Container for layered cards */}
              <div className="relative flex items-center">
                {/* Background card - Dark teal with stats (Left side) */}
                <div className="relative z-0 h-[340px] w-full max-w-[420px] rounded-[28px] bg-primary p-8 text-primary-foreground shadow-xl lg:h-[360px] lg:p-10">
                  <h2 className="text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
                    Successfully connected over <span className="text-[#b4d96f]">1,000 businesses</span>
                    with top talent.
                  </h2>
                  <p className="mt-auto pt-24 text-sm leading-relaxed text-primary-foreground/90 lg:pt-28 lg:text-base">
                    Reducing hiring time by 30% and improving team efficiency across industries.
                  </p>
                </div>

                {/* Foreground card - Specialist photo (Right side, overlapping) */}
                <div className="absolute right-0 top-1/2 z-10 w-[280px] -translate-y-1/2 overflow-hidden rounded-[28px] bg-muted shadow-2xl lg:w-[320px]">
                  {/* Top badge */}
                  <div className="absolute left-5 top-5 z-20 rounded-full bg-white px-4 py-2 text-xs font-medium text-foreground shadow-lg lg:text-sm">
                    Top rated specialist
                  </div>

                  {/* Specialist image */}
                  <div className="relative h-[400px] w-full lg:h-[440px]">
                    <Image
                      src="/professional-woman-talent-acquisition-specialist-b.jpg"
                      alt="Sarah Mitchell - Talent Acquisition Specialist"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-6 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur-sm shadow-lg">
                    <h3 className="text-lg font-semibold text-foreground lg:text-xl">
                      Sarah Mitchell
                    </h3>
                    <p className="text-xs text-muted-foreground lg:text-sm">
                      Talent Acquisition Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI strip - All in one line */}
        <div className="mt-16 border-t border-border pt-10 lg:mt-18 lg:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 lg:justify-between lg:gap-x-8 xl:gap-x-12">
            {[
              { value: "30%", label: "Faster" },
              { value: "1,500+", label: "Businesses" },
              { value: "85%", label: "Improvement" },
              { value: "90%", label: "Retention" },
              { value: "99%", label: "Savings" },
              { value: "100%", label: "Satisfaction" },
              { value: "70%", label: "Efficiency" },
              { value: "80%", label: "Reduction" },
            ].map((kpi) => (
              <div key={kpi.label} className="flex flex-col items-center">
                <span className="text-2xl font-semibold text-[var(--linkrow-primary-text)] lg:text-4xl">
                  {kpi.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground lg:text-sm">
                  {kpi.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section
      className="mt-24 overflow-hidden text-white"
      style={{ backgroundColor: "var(--linkrow-primary-text)" }}
    >
      {/* How It Works Content */}
      <div className="relative">
        <div className="relative mx-auto max-w-[1400px] px-8 py-14 md:px-12 lg:px-16 lg:py-20">
          <Badge asChild className="mb-6 text-linkrow-badge-text bg-linkrow-badge-bg">
            <Link href="#">How it works</Link>
          </Badge>

          <h3 className="mb-4 font-medium leading-tight tracking-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">Efficient process to connect</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl">businesses with the best talent.</span>
          </h3>

          <p className="mb-12 max-w-3xl text-base text-white/85 md:text-lg">
            We work closely with you to understand your business, culture, and specific hiring requirements. Using
            this insight, we craft a personalized recruitment strategy designed to attract the best talent.
          </p>

          {/* Steps */}
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Understand Your Needs",
                desc: "We begin by working closely with you to understand your business, culture, and specific hiring requirements.",
              },
              {
                n: 2,
                title: "Recruitment Strategy",
                desc: "Based on your unique needs, we craft a personalized recruitment strategy designed to attract the best talent.",
              },
              {
                n: 3,
                title: "Seamless Hiring Process",
                desc: "Using our platform's advanced tools, we match you with top candidates and integrate the process with your HR systems.",
              },
            ].map((s) => (
              <div key={s.n} className="relative">
                {/* Number badge */}
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[var(--linkrow-primary-dark,#1F514C)] font-semibold shadow-sm">
                  {s.n}
                </div>

                {/* Accent divider line */}
                <div className="mt-6 h-px w-full rounded-full bg-gradient-to-r from-[var(--linkrow-third-primary,#AEDA94)] to-white/10" />

                <h4 className="mt-6 text-xl font-semibold md:text-2xl">{s.title}</h4>
                <p className="mt-3 text-white/85">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Image Section with proper container */}
      <div className="mx-auto max-w-[1400px] px-8 pb-8 md:px-12 lg:px-16 lg:pb-12">
        <div className="relative overflow-hidden rounded-[24px]">
          {/* Background image */}
          <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/sample.png"
              alt="Get started with Linkrow today"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block">Get started with Linkrow today and</span>
              <span className="block">discover a smarter, faster way to hire.</span>
            </h3>

            <Button
              size="lg"
              className="mt-6 rounded-full bg-white px-6 py-6 text-base font-medium text-[var(--linkrow-primary-dark,#1F514C)] hover:bg-white/95 sm:px-8"
            >
              Find your talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    </section>
    
  )
}

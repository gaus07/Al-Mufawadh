import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function SolutionSection() {
  return (
      <section
      className="overflow-hidden text-white"
      style={{ backgroundColor: "var(--linkrow-primary-text)" }}
    >
      {/* How It Works Content */}
      <div className="relative">
        <div className="relative mx-auto max-w-[1400px] px-8 py-14 md:px-12 lg:px-16 lg:py-20">
          <Badge asChild className="px-3 py-1 text-sm rounded-2xl font-medium mb-6 text-linkrow-badge2-text bg-linkrow-badge2-bg">
            <Link href="#">How it works</Link>
          </Badge>

          <h3 className="mb-4 font-medium leading-tight tracking-tight text-linkrow-secondary-bg">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">Efficient process that matches talent with opportunity.</span>
            {/* <span className="block text-3xl sm:text-4xl lg:text-5xl">businesses with the best talent.</span> */}
          </h3>

          <p className="mb-12 max-w-3xl text-base text-linkrow-secondary-bg md:text-lg">
            We work with employers to define requirements and with candidates to prepare, screen and mobilize — delivering the right hire and the right job.
          </p>

          {/* Steps */}
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Understand Your Needs",
                desc: "We work closely with you to define role profiles, timelines and compliance requirements so search focuses on the right skills and culture fit.",
              },
              {
                n: 2,
                title: "Recruitment Strategy",
                desc: "We design a tailored sourcing plan — database search, active headhunting and targeted advertising — to attract qualified candidates fast.",
              },
              {
                n: 3,
                title: "Seamless Hiring & Mobilization",
                desc: "From interviews and final selection to medicals, visa processing and flight coordination, we handle the end-to-end process for reliable, on-time mobilization.",
              },
            ].map((s) => (
              <div key={s.n} className="relative">
                {/* Number badge */}
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linkrow-secondary-bg text-linkrow-primary-text font-semibold shadow-sm">
                  {s.n}
                </div>

                {/* Accent divider line */}
                <div className="mt-6 h-px w-full rounded-full bg-gradient-to-r from-linkrow-badge2-text to-white/10" />

                <h4 className="mt-6 text-xl font-semibold md:text-2xl text-linkrow-secondary-bg">{s.title}</h4>
                <p className="mt-3 text-linkrow-secondary-bg">{s.desc}</p>
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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-1 lg:px-6 py-40 lg:py-90 text-center">
            <h3 className="text-2xl font-medium leading-tight text-linkrow-secondary-bg sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block">Get started with Al Mufawadh today and</span>
              <span className="block">discover a smarter, faster way to get hired.</span>
            </h3>

            <Button
              size="lg"
              className="mt-6 rounded-full bg-linkrow-secondary-bg px-6 py-6 text-base font-medium text-linkrow-primary-text hover:bg-linkrow-secondary-bg sm:px-8">
              Find your talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { servicesContent } from "@/data/services";
import { EASING, TIMING, VIEWPORT } from "@/lib/animations/config";

export function OurServices() {
  const [activeId, setActiveId] = useState(() => servicesContent[0]?.id ?? "");

  const activeService =
    servicesContent.find((service) => service.id === activeId) ??
    servicesContent[0];

  if (!activeService) {
    return null;
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    const lastIndex = servicesContent.length - 1;
    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();

    const nextService = servicesContent[nextIndex];

    if (!nextService) return;

    setActiveId(nextService.id);
    document.getElementById(`${nextService.id}-tab`)?.focus();
  }

  return (
    <section
      className="bg-linkrow-primary-text py-10 text-white sm:py-12 xl:py-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 sm:px-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.9fr)] xl:gap-24 xl:px-4">
        {/* Left: Introduction and CTA */}
        <div className="flex min-w-0 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: TIMING.standard,
              ease: EASING.smooth,
            }}
          >
            <span className="inline-flex w-fit rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-linkrow-secondary-bg">
              Our services
            </span>

            <h2
              id="services-heading"
              className="mt-6 max-w-[440px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[44px] xl:text-[48px]"
            >
              Recruitment that connects businesses with{" "}
              <span className="text-linkrow-badge-bg">top-tier talent.</span>
            </h2>

            <p className="mt-5 max-w-[430px] text-[15px] leading-6 text-white/80 sm:text-base sm:leading-[1.65]">
              We help employers source, screen and mobilize suitable candidates
              through tailored recruitment strategies and end-to-end manpower
              support.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-7 h-14 w-fit rounded-full bg-white px-7 text-[15px] font-semibold text-linkrow-primary-text transition-colors hover:bg-white/90"
            >
              <Link href="/services">
                Our services
                <ArrowUpRight
                  className="ml-2 size-4 text-linkrow-primary-text"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Service tabs and content */}
        <div className="min-w-0">
          <div
            className="mb-4 flex flex-col gap-2 xl:mb-4 xl:flex-row"
            role="tablist"
            aria-label="Our services"
          >
            {servicesContent.map((service, index) => {
              const isActive = service.id === activeService.id;

              return (
                <button
                  key={service.id}
                  id={`${service.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${service.id}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={[
                    "flex min-h-10 w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-sm font-medium leading-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linkrow-badge-bg focus-visible:ring-offset-2 focus-visible:ring-offset-linkrow-primary-text xl:min-w-0 xl:flex-1 xl:whitespace-nowrap xl:px-3 xl:text-[14px] 2xl:px-4 2xl:text-[15px]",
                    isActive
                      ? "bg-white text-linkrow-primary-text"
                      : "bg-white/10 text-white hover:bg-white/[0.16]",
                  ].join(" ")}
                >
                  {service.label}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeService.id}
            id={`${activeService.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeService.id}-tab`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: TIMING.fast,
              ease: EASING.smooth,
            }}
            className="grid min-h-[360px] grid-cols-1 overflow-hidden rounded-[20px] border border-white/20 bg-white/[0.09] shadow-[0_12px_28px_rgba(0,0,0,0.08)] xl:min-h-[380px] xl:grid-cols-[minmax(0,1fr)_250px]"
          >
            {/* Service information */}
            <div className="flex min-w-0 flex-col p-6 sm:p-8">
              <div>
                <h3 className="max-w-[510px] text-[27px] font-medium leading-[1.12] tracking-[-0.035em] sm:text-[30px] 2xl:text-[32px]">
                  {activeService.heading}
                </h3>

                <p className="mt-4 max-w-[510px] text-[15px] leading-6 text-white/85 sm:text-base">
                  {activeService.description}
                </p>
              </div>

              <ul className="mt-5 grid gap-3.5" aria-label="Service benefits">
                {activeService.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-[15px] font-medium leading-6 sm:text-base"
                  >
                    <Check
                      className="mt-0.5 size-[18px] shrink-0 text-linkrow-badge-bg"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={activeService.href}
                className="mt-auto inline-flex w-fit items-center border-b border-white/80 pb-0.5 pt-5 text-[15px] font-medium transition-colors hover:border-linkrow-badge-bg hover:text-linkrow-badge-bg"
              >
                Details
              </Link>
            </div>

            {/* Service image */}
            <div className="relative min-h-[210px] overflow-hidden border-t border-white/10 sm:min-h-[240px] xl:min-h-[380px] xl:border-l xl:border-t-0 xl:border-white/10">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 1279px) 100vw, 250px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

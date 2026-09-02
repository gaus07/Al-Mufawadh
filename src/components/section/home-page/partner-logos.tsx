"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

const companies = [
  {
    logo: "/partners/partner-1.png",
  },
  {
    logo: "/partners/partner-2.png",
  },
  {
    logo: "/partners/partner-3.png",
  },
  {
    logo: "/partners/partner-4.png",
  },
  {
    logo: "/partners/partner-5.png",
  },
  {
    logo: "/partners/partner-6.png",
  },
  {
    logo: "/partners/partner-7.png",
  },
  {
    logo: "/partners/partner-8.png",
  },
  {
    logo: "/partners/partner-9.png",
  },
  {
    logo: "/partners/partner-10.png",
  },
  {
    logo: "/partners/partner-11.png",
  },
  {
    logo: "/partners/partner-12.png",
  },
]

export default function PartnerLogos() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      // Clone each item to create seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      )
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "60s")
    }
  }

  return (
    <div className="border-t border-border relative w-full overflow-hidden bg-background py-1.5">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 mx-auto max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        )}
      >
        <div
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
            start && "animate-scroll",
            "hover:[animation-play-state:paused]"
          )}
        >
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`logo`}
                className="h-20 w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 30s)
            var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </div>
  )
}
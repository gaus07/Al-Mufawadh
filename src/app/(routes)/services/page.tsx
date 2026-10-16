"use client"

import MiddleEastMap from "@/components/ui/MiddleEastMap"
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Services Page</h1>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/second.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linkrow-secondary-bg/82" />
      </div>
    </div>
  );
}
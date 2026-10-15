"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSubtextVariants } from "@/lib/animation";

type SearchTab = "jobs" | "services" | "employers";

type HeroSearchValues = {
  location: string;
  date: string;
  people: string;
};

export type HeroSearchProps = {
  onSubmit?: (values: HeroSearchValues) => void;
};

const tabs: Array<{ id: SearchTab; label: string }> = [
  { id: "jobs", label: "Jobs" },
  { id: "services", label: "Services" },
  { id: "employers", label: "Employers" },
];

export function HeroSearch({ onSubmit }: HeroSearchProps) {
  const [activeTab, setActiveTab] = useState<SearchTab>("jobs");
  const [values, setValues] = useState<HeroSearchValues>({
    location: "",
    date: "",
    people: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function updateValue(field: keyof HeroSearchValues, value: string) {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.location.trim()) {
      setSubmitted(true);
      return;
    }

    onSubmit?.(values);
  }

  return (
    <motion.div
      className="relative z-10 mt-12 w-full rounded-2xl border border-border/70 bg-background p-1 shadow-xl shadow-foreground/10 sm:mt-16"
      variants={heroSubtextVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-fit items-end gap-1 rounded-t-xl bg-background px-1 pt-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
            className={`rounded-t-lg px-4 py-2 text-sm font-medium transition-colors sm:px-6 ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-xl bg-background px-5 py-5 sm:px-7 sm:py-6 lg:grid-cols-[1.25fr_1.25fr_1.25fr_1.15fr] lg:items-end lg:gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="hero-search-location" className="text-sm font-medium text-foreground">
            Location
          </label>
          <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-background px-4 shadow-sm focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
            <MapPin aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <input
              id="hero-search-location"
              name="location"
              value={values.location}
              onChange={(event) => updateValue("location", event.target.value)}
              placeholder="Country or city"
              aria-invalid={submitted && !values.location.trim()}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          {submitted && !values.location.trim() ? (
            <p className="text-xs text-destructive" role="alert">
              Enter a location to search.
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="hero-search-date" className="text-sm font-medium text-foreground">
            Availability
          </label>
          <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-background px-4 shadow-sm focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
            <CalendarDays aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <input
              id="hero-search-date"
              name="date"
              type="date"
              value={values.date}
              onChange={(event) => updateValue("date", event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="hero-search-people" className="text-sm font-medium text-foreground">
            Workforce needed
          </label>
          <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-background px-4 shadow-sm focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
            <Users aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <input
              id="hero-search-people"
              name="people"
              value={values.people}
              onChange={(event) => updateValue("people", event.target.value)}
              placeholder="Number of people"
              inputMode="numeric"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <Button type="submit" size="lg" className="h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90">
          Search now
          <Search data-icon="inline-end" />
        </Button>
      </form>
    </motion.div>
  );
}

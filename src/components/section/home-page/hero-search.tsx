"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, ChevronDown, MapPin, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchTabs = ["Jobs", "Services", "Partners"] as const;
type SearchTab = (typeof searchTabs)[number];

type HeroSearchValues = {
  location: string;
  date: string;
  person: string;
};

type HeroSearchProps = {
  onSubmit?: (values: HeroSearchValues & { tab: SearchTab }) => void;
};

export function HeroSearch({ onSubmit }: HeroSearchProps) {
  const [activeTab, setActiveTab] = useState<SearchTab>("Jobs");
  const [values, setValues] = useState<HeroSearchValues>({
    location: "",
    date: "",
    person: "",
  });
  const [error, setError] = useState("");

  function updateValue(field: keyof HeroSearchValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.location.trim()) {
      setError("Enter a location to search.");
      return;
    }

    setError("");
    onSubmit?.({ ...values, tab: activeTab });
  }

  return (
    <div className="relative z-10 w-full rounded-[22px] bg-background/95 shadow-[0_18px_50px_-28px_hsl(var(--foreground)/0.45)] ring-1 ring-border/70 backdrop-blur-sm">
      <div className="flex items-end gap-1 border-b border-border/70 px-3 pt-2 sm:px-5">
        {searchTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`rounded-t-xl px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
              activeTab === tab
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/70"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.15fr_1fr_1fr_auto] lg:items-end lg:gap-5 lg:p-7">
        <Field label="Location" htmlFor="hero-location" icon={<MapPin aria-hidden="true" />}>
          <input
            id="hero-location"
            value={values.location}
            onChange={(event) => updateValue("location", event.target.value)}
            placeholder="City or country"
            className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
        </Field>
        <Field label="Availability" htmlFor="hero-date" icon={<CalendarDays aria-hidden="true" />}>
          <input
            id="hero-date"
            type="date"
            value={values.date}
            onChange={(event) => updateValue("date", event.target.value)}
            className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          />
        </Field>
        <Field label="Candidates" htmlFor="hero-person" icon={<Users aria-hidden="true" />} trailing={<ChevronDown aria-hidden="true" />}>
          <select
            id="hero-person"
            value={values.person}
            onChange={(event) => updateValue("person", event.target.value)}
            className="w-full appearance-none bg-transparent text-base text-foreground outline-none"
          >
            <option value="">Candidate type</option>
            <option value="skilled">Skilled professionals</option>
            <option value="technical">Technical workers</option>
            <option value="support">Support staff</option>
          </select>
        </Field>
        <Button type="submit" size="lg" className="h-[50px] rounded-xl bg-foreground px-7 text-background hover:bg-foreground/90">
          <Search data-icon="inline-start" />
          Search now
        </Button>
        {error ? <p role="alert" className="text-sm text-destructive lg:col-span-full">{error}</p> : null}
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
  children: React.ReactNode;
};

function Field({ label, htmlFor, icon, trailing, children }: FieldProps) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex h-[50px] items-center gap-3 rounded-xl border border-border bg-background px-3.5 shadow-sm focus-within:ring-2 focus-within:ring-ring/30">
        <span className="shrink-0 text-muted-foreground [&_svg]:size-5">{icon}</span>
        {children}
        {trailing ? <span className="shrink-0 text-muted-foreground [&_svg]:size-5">{trailing}</span> : null}
      </div>
    </div>
  );
}

export type { HeroSearchProps, HeroSearchValues, SearchTab };

"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CalendarDays, ChevronDown, MapPin, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export type HeroSearchValues = {
  location: string;
  date: string;
  person: string;
};

export type HeroSearchProps = {
  onSubmit?: (values: HeroSearchValues) => void;
};

export function HeroSearch({ onSubmit }: HeroSearchProps) {
  const [values, setValues] = useState<HeroSearchValues>({
    location: "",
    date: "",
    person: "",
  });
  const [error, setError] = useState("");

  function updateValue(field: keyof HeroSearchValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.location.trim()) {
      setError("Enter a location to search.");
      return;
    }

    setError("");
    onSubmit?.(values);
  }

  return (
    <div className="relative z-10 -ml-3 w-[calc(100%_+_0.75rem)] rounded-[18px] shadow-[0_18px_50px_-28px_hsl(var(--foreground)/0.45)] ring-1 ring-border/70 sm:-ml-4 sm:w-[calc(100%_+_1rem)] lg:-ml-5 lg:w-[calc(80%_+_1.25rem)]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-[1.15fr_1fr_1fr_auto] lg:items-end lg:gap-4 lg:p-5"
      >
        <Field
          label="Location"
          htmlFor="hero-location"
          icon={<MapPin aria-hidden="true" />}
        >
          <input
            id="hero-location"
            value={values.location}
            onChange={(event) => updateValue("location", event.target.value)}
            placeholder="City or country"
            autoComplete="off"
            className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </Field>

        <Field
          label="Availability"
          htmlFor="hero-date"
          icon={<CalendarDays aria-hidden="true" />}
        >
          <input
            id="hero-date"
            type="date"
            value={values.date}
            onChange={(event) => updateValue("date", event.target.value)}
            className="w-full min-w-0 bg-transparent text-sm text-foreground outline-none"
          />
        </Field>

        <Field
          label="Candidates"
          htmlFor="hero-person"
          icon={<Users aria-hidden="true" />}
          trailing={<ChevronDown aria-hidden="true" />}
        >
          <select
            id="hero-person"
            value={values.person}
            onChange={(event) => updateValue("person", event.target.value)}
            className="w-full min-w-0 appearance-none bg-transparent text-sm text-foreground outline-none"
          >
            <option value="">Candidate type</option>
            <option value="skilled">Skilled professionals</option>
            <option value="technical">Technical workers</option>
            <option value="support">Support staff</option>
          </select>
        </Field>

        <Button
          type="submit"
          size="lg"
          className="h-[42px] w-full rounded-xl bg-foreground px-5 text-sm text-background hover:bg-foreground/90 lg:w-auto"
        >
          <Search className="mr-2 h-4 w-4" />
          Search jobs
        </Button>

        {error && (
          <p
            role="alert"
            className="text-sm text-destructive sm:col-span-2 lg:col-span-full"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  icon: ReactNode;
  trailing?: ReactNode;
  children: ReactNode;
};

function Field({ label, htmlFor, icon, trailing, children }: FieldProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="flex h-[42px] min-w-0 items-center gap-2.5 rounded-lg border border-border bg-background px-3 shadow-sm transition-colors focus-within:ring-2 focus-within:ring-ring/30">
        <span className="shrink-0 text-muted-foreground [&_svg]:size-[18px]">
          {icon}
        </span>

        {children}

        {trailing && (
          <span className="shrink-0 text-muted-foreground [&_svg]:size-4">
            {trailing}
          </span>
        )}
      </div>
    </div>
  );
}

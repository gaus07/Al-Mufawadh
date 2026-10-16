"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="hero-date"
                type="button"
                variant="ghost"
                className="h-auto min-w-0 flex-1 justify-start p-0 text-left text-sm font-normal text-foreground hover:bg-transparent data-[empty=true]:text-muted-foreground"
                data-empty={!values.date}
              >
                {values.date ? formatDate(values.date) : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={parseDate(values.date)}
                onSelect={(date) => {
                  if (date) updateValue("date", serializeDate(date));
                }}
                disabled={{ before: startOfToday() }}
              />
            </PopoverContent>
          </Popover>
        </Field>

        <Field label="Candidates" htmlFor="hero-person" icon={<Users aria-hidden="true" />}>
          <Select
            value={values.person}
            onValueChange={(value) => updateValue("person", value)}
          >
            <SelectTrigger
              id="hero-person"
              aria-label="Candidate type"
              className="h-auto min-w-0 flex-1 border-0 bg-transparent p-0 text-sm shadow-none focus:ring-0"
            >
              <SelectValue placeholder="Candidate type" />
            </SelectTrigger>
            <SelectContent position="popper" align="start" className="min-w-[var(--radix-select-trigger-width)]">
              <SelectItem value="skilled">Skilled professionals</SelectItem>
              <SelectItem value="technical">Technical workers</SelectItem>
              <SelectItem value="support">Support staff</SelectItem>
            </SelectContent>
          </Select>
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

function parseDate(value: string) {
  if (!value) return undefined;

  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function serializeDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value: string) {
  const date = parseDate(value);
  return date?.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
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

"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { MapPin, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";

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
        {/* Location */}
        <Field>
          <FieldLabel
            htmlFor="name"
            className="text-md font-medium text-foreground"
          >
            Location
          </FieldLabel>
          <div className="flex h-[42px] min-w-0 items-center gap-2.5 rounded-lg border border-border bg-background px-3 shadow-sm transition-colors focus-within:ring-2 focus-within:ring-ring/30">
            <MapPin
              aria-hidden="true"
              className="size-[18px] shrink-0 text-muted-foreground"
            />

            <input
              id="hero-location"
              value={values.location}
              onChange={(event) => updateValue("location", event.target.value)}
              placeholder="City or country"
              autoComplete="off"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "hero-search-error" : undefined}
              className="h-full w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </Field>

        {/* Candidates: entire field is the SelectTrigger */}
        <Field>
          <FieldLabel
            htmlFor="name"
            className="text-md font-medium text-foreground"
          >
            Job Type
          </FieldLabel>
          <Select
            value={values.person}
            onValueChange={(value) => updateValue("person", value)}
          >
            <SelectTrigger
              id="hero-person"
              aria-label="Candidate type"
              className="h-[42px] w-full min-w-0 gap-2.5 rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-ring/30"
            >
              <Users
                aria-hidden="true"
                className="size-[18px] shrink-0 text-muted-foreground"
              />

              <SelectValue
                placeholder="Candidate type"
                className="min-w-0 flex-1 text-left"
              />
            </SelectTrigger>

            <SelectContent
              position="popper"
              align="start"
              className="w-[var(--radix-select-trigger-width)] min-w-0"
            >
              <SelectItem value="skilled">Skilled professionals</SelectItem>
              <SelectItem value="technical">Technical workers</SelectItem>
              <SelectItem value="support">Support staff</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="h-[42px] w-full rounded-xl bg-foreground px-5 text-sm text-background hover:bg-foreground/90 lg:w-auto"
        >
          <Search aria-hidden="true" className="mr-2 size-4" />
          Search jobs
        </Button>

        {error && (
          <p
            id="hero-search-error"
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

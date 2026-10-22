"use client";

import { useState, type FormEvent } from "react";
import { Check, ChevronsUpDown, MapPin, Search, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);

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
          <div className="flex h-[42px] min-w-0 items-center gap-2.5 rounded-lg border border-border bg-background px-3 transition-colors focus-within:ring-2 focus-within:ring-ring/30">
            <MapPin
              aria-hidden="true"
              className="size-[18px] shrink-0 text-muted-foreground"
            />

            <Input
              id="hero-location"
              value={values.location}
              onChange={(event) => updateValue("location", event.target.value)}
              placeholder="City or country"
              autoComplete="off"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "hero-search-error" : undefined}
              className="h-full min-w-0 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0"
            />
          </div>
        </Field>

        {/* Job type searchable combobox */}
        <Field>
          <FieldLabel
            htmlFor="hero-person"
            className="text-md font-medium text-foreground"
          >
            Job Type
          </FieldLabel>
          <Popover open={isJobTypeOpen} onOpenChange={setIsJobTypeOpen}>
            <PopoverTrigger asChild>
              <Button
                id="hero-person"
                type="button"
                variant="outline"
                role="combobox"
                aria-label="Job type"
                className="h-[42px] w-full min-w-0 justify-start gap-2.5 rounded-lg border-border bg-background px-3 text-sm font-normal text-foreground hover:bg-background focus:ring-2 focus:ring-ring/30"
              >
                <Users
                  aria-hidden="true"
                  className="size-[18px] shrink-0 text-muted-foreground"
                />
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate text-left",
                    !values.person && "text-muted-foreground",
                  )}
                >
                  {values.person === "skilled"
                    ? "Skilled professionals"
                    : values.person === "technical"
                      ? "Technical workers"
                      : values.person === "support"
                        ? "Support staff"
                        : "Select job type"}
                </span>
                <ChevronsUpDown
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[var(--radix-popover-trigger-width)] min-w-[220px] p-0"
            >
              <Command>
                <CommandInput placeholder="Search job type..." />
                <CommandList>
                  <CommandEmpty>No job types found.</CommandEmpty>
                  <CommandGroup>
                    {[
                      ["skilled", "Skilled professionals"],
                      ["technical", "Technical workers"],
                      ["support", "Support staff"],
                    ].map(([value, label]) => (
                      <CommandItem
                        key={value}
                        value={label}
                        onSelect={() => {
                          updateValue("person", value);
                          setIsJobTypeOpen(false);
                        }}
                      >
                        <Check
                          aria-hidden="true"
                          className={cn(
                            "size-4",
                            values.person === value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </Field>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="h-[42px] w-full rounded-xl bg-linkrow-primary-text px-5 text-sm text-background hover:bg-foreground/90 lg:w-auto"
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

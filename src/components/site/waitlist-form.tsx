"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  source?: string;
  className?: string;
  compact?: boolean;
  fullWidth?: boolean;
  tone?: "light" | "dark";
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm({
  source = "site",
  className,
  compact = false,
  fullWidth = false,
  tone = "light",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ready" | "invalid">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = email.trim();
    if (!EMAIL_PATTERN.test(normalized)) {
      setStatus("invalid");
      return;
    }

    const subject = encodeURIComponent(`Finch waitlist request (${source})`);
    const body = encodeURIComponent(
      `Email: ${normalized}\nSource: ${source}\n\nI want early access to Finch.`
    );

    setStatus("ready");
    window.location.href = `mailto:${brand.primaryEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center",
        fullWidth && "w-full sm:flex-wrap",
        className
      )}
    >
      <label className="sr-only" htmlFor={`waitlist-email-${source}`}>
        Email address
      </label>
      <input
        id={`waitlist-email-${source}`}
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status !== "idle") {
            setStatus("idle");
          }
        }}
        placeholder="name@school.edu"
        className={cn(
          "min-h-12 w-full rounded-md px-5 text-sm outline-none transition",
          tone === "dark"
            ? "border border-white/14 bg-white/10 text-white shadow-[0_14px_38px_rgba(0,0,0,0.16)] placeholder:text-white/45 focus:border-white/28 focus:bg-white/14 focus:shadow-[0_18px_42px_rgba(0,0,0,0.22)]"
            : "border border-[#24364C]/15 bg-white/80 text-[#24364C] shadow-[0_14px_38px_rgba(36,54,76,0.08)] placeholder:text-[#24364C]/42 focus:border-[#D43C33]/50 focus:bg-white focus:shadow-[0_18px_42px_rgba(212,60,51,0.18)] dark:border-white/10 dark:bg-[#182536]/82 dark:text-[#fff7ef] dark:shadow-[0_18px_42px_rgba(0,0,0,0.24)] dark:placeholder:text-[#fff7ef]/42 dark:focus:border-[#E09643]/52 dark:focus:bg-[#1c2b3f] dark:focus:shadow-[0_18px_42px_rgba(224,150,67,0.16)]",
          compact ? "sm:max-w-xs" : fullWidth ? "sm:max-w-none sm:flex-1" : "sm:max-w-sm"
        )}
      />
      <Button
        type="submit"
        variant="landingPrimary"
        className={cn("min-h-12 rounded-md px-6", fullWidth && "sm:min-w-[11rem]")}
      >
        Join waitlist
      </Button>
      <p
        className={cn(
          "text-xs sm:ml-2",
          fullWidth && "w-full sm:ml-0 sm:pt-1",
          status === "invalid"
            ? "text-[#D43C33]"
            : tone === "dark"
            ? "text-white/70"
            : "text-[#24364C]/70 dark:text-[#fff7ef]/70"
        )}
      >
        {status === "invalid"
          ? "Enter a valid email address."
          : status === "ready"
          ? "Your email app is opening."
          : "Requests route directly to the Finch team."}
      </p>
    </form>
  );
}

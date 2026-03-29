"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { reportClientError } from "@/lib/client-error-reporting";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportClientError({
      message: error.message || "Route error",
      name: error.name || "Error",
      stack: error.stack || null,
      source: error.digest ? `digest:${error.digest}` : "app/error",
      level: "error",
    });
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 items-center px-4 py-16">
      <section className="w-full rounded-[10px] border border-[#24364C]/10 bg-white/80 p-8 shadow-[0_24px_70px_rgba(36,54,76,0.08)]">
        <h1 className="text-2xl font-semibold text-[#24364C]">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#24364C]/70">
          Finch could not load this page right now. Try again or return to the
          home page.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => reset()} className="rounded-md">
            Try again
          </Button>
          <Button variant="outline" asChild className="rounded-md">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

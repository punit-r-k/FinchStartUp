"use client";

import { useEffect } from "react";

import { reportClientError } from "@/lib/client-error-reporting";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportClientError({
      message: error.message || "Global app error",
      name: error.name || "Error",
      stack: error.stack || null,
      source: error.digest ? `digest:${error.digest}` : "app/global-error",
      level: "error",
    });
  }, [error]);

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-background text-foreground">
        <main className="mx-auto flex min-h-dvh w-full max-w-3xl items-center px-4 py-16">
          <section className="w-full rounded-[10px] border border-[#24364C]/10 bg-white/80 p-8 shadow-[0_24px_70px_rgba(36,54,76,0.08)]">
            <h1 className="text-2xl font-semibold text-[#24364C]">
              Application error
            </h1>
            <p className="mt-2 text-sm text-[#24364C]/70">
              A critical error occurred while rendering the Finch site.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-6 rounded-md border border-[#24364C]/12 px-4 py-2 text-sm font-medium text-[#24364C] hover:bg-[#24364C]/5"
            >
              Reload page
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}

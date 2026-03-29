import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <Card className="rounded-[10px] border-[#24364C]/10 bg-white/80 shadow-[0_24px_70px_rgba(36,54,76,0.08)]">
        <CardContent className="p-8">
          <h1 className="text-3xl font-semibold text-[#24364C]">Page not found</h1>
          <p className="mt-3 text-sm leading-6 text-[#24364C]/70">
            Finch could not find the page you requested. The public site may
            have been simplified as part of the rebrand.
          </p>
          <div className="mt-6">
            <Button asChild variant="landingPrimary" className="rounded-md">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

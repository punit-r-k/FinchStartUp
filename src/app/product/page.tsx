import type { Metadata } from "next";
import Image from "next/image";

import { MarketingPage, PageSection } from "@/components/site/marketing-page";
import WaitlistForm from "@/components/site/waitlist-form";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";

export const metadata: Metadata = {
  title: "Product",
  description:
    "See how Finch helps students move from repetitive applications to a smarter interview-focused workflow.",
};

const FLOW = [
  "Sign up and connect LinkedIn.",
  "Finch generates a richer candidate profile using AI analysis.",
  "Users browse opportunities on ATS platforms like Greenhouse, Lever, and Workday.",
  "The Finch extension detects the application flow.",
  "Finch prepares tailored resume and cover letter content.",
  "The extension autofills repetitive steps and stops at the final review page.",
  "The user reviews, edits, and submits with confidence.",
] as const;

const BENEFITS = [
  "Less time spent on repetitive forms",
  "More tailored application materials",
  "Stronger ATS alignment",
  "Better visibility with decision-makers",
  "A recruiting workflow that feels strategic instead of chaotic",
] as const;

export default function ProductPage() {
  return (
    <MarketingPage
      kicker="Product"
      title="Designed around stronger interview odds, not bigger application counts."
      subtitle="Finch is an intentional internship platform for students who want a cleaner process, better-fit roles, and less wasted effort."
      actions={[
        { label: "Back home", href: "/", variant: "default" },
        { label: "About Finch", href: "/about", variant: "outline" },
      ]}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fff9f5_100%)]"
    >
      <PageSection title="How Finch works">
        <ol className="grid gap-4 md:grid-cols-2">
          {FLOW.map((step, index) => (
            <li
              key={step}
              className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm leading-7 text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D43C33]">
                Step {index + 1}
              </span>
              <p className="mt-3">{step}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection title="What users get back">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[10px] border border-[#24364C]/10 bg-white/70 p-4 shadow-[0_22px_60px_rgba(36,54,76,0.08)]">
            <div className="relative aspect-[1.08] overflow-hidden rounded-[8px]">
              <Image
                src="/finch/product-3.png"
                alt="Finch interface preview"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4">
            {BENEFITS.map((benefit) => (
              <article
                key={benefit}
                className="rounded-[10px] border border-[#24364C]/10 bg-white/82 p-5 text-sm leading-7 text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)]"
              >
                {benefit}
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection title="Product principles">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Intentional over volume",
              body: "Finch rejects the idea that students should compensate for weak workflows by applying everywhere.",
            },
            {
              title: "Speed with control",
              body: "The system saves time, but it does not take students out of the decision process before submission.",
            },
            {
              title: "Outcome-driven UX",
              body: "Every major workflow centers on precision, fit, and interview probability rather than vanity metrics.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[10px] border border-[#24364C]/10 bg-[#24364C] p-6 text-white shadow-[0_22px_60px_rgba(36,54,76,0.14)]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/76">{item.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="pricing"
        title="Pricing preview"
        subtitle="A reusable pricing component integrated into the current product surface."
      >
        <PricingWithChart />
      </PageSection>

      <PageSection title="Interested in early access?">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/82 p-8 shadow-[0_24px_70px_rgba(36,54,76,0.08)]">
          <p className="max-w-2xl text-sm leading-7 text-[#24364C]/72">
            Finch is structured for student onboarding today and university
            partnerships later. Join the waitlist to talk through product
            access, demos, or partnership interest.
          </p>
          <div className="mt-6">
            <WaitlistForm source="product-page" />
          </div>
        </div>
      </PageSection>
    </MarketingPage>
  );
}

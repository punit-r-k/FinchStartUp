import type { Metadata } from "next";
import Image from "next/image";

import { MarketingPage, PageSection } from "@/components/site/marketing-page";
import WaitlistForm from "@/components/site/waitlist-form";

export const metadata: Metadata = {
  title: "Product",
  description:
    "See how Finch helps students move from repetitive applications to a smarter interview-focused workflow.",
};

const WORKFLOW_STEPS = [
  {
    title: "Start from one search prompt",
    body: "Paste a LinkedIn search URL or role keywords into Finch, choose how many jobs to run, and launch the workflow.",
  },
  {
    title: "Track generation in one place",
    body: "Your dashboard keeps generation status, completed applications, and recruiting history in a single clean thread.",
  },
  {
    title: "Review and apply from cards",
    body: "Every generated application includes ATS score, resume, cover letter, and direct apply link in one review surface.",
  },
] as const;

const FEATURES = [
  {
    eyebrow: "AI resume builder",
    title: "Craft a tailored resume for every role",
    body: "Generate role-specific resume versions, improve ATS alignment, and close keyword gaps before you submit.",
    image: "/finch/product-1.png",
  },
  {
    eyebrow: "Job matches",
    title: "Get matched to relevant jobs, personalized to you",
    body: "Set your preferences once and discover high-fit opportunities instead of searching endlessly across job boards.",
    image: "/finch/product-2.png",
  },
  {
    eyebrow: "Autofill applications",
    title: "Autofill repetitive job application questions",
    body: "Install the Finch browser extension and finish repetitive forms in seconds with profile-aware answers.",
    image: "/finch/product-3.png",
  },
] as const;

export default function ProductPage() {
  return (
    <MarketingPage
      kicker="Product"
      title="Apply smarter. Land roles with confidence."
      subtitle="Finch helps students move from search to submit with stronger materials, better-fit job matching, and a simpler workflow across the ATS tools they already face."
      actions={[
        { label: "Back home", href: "/", variant: "default" },
        { label: "About Finch", href: "/about", variant: "outline" },
      ]}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fff9f5_100%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_52%,#1b2b3f_100%)]"
    >
      <PageSection title="How Finch works">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ol className="grid gap-4">
            {WORKFLOW_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm leading-7 text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D43C33]">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[#24364C] dark:text-[#fff7ef]">
                  {step.title}
                </h3>
                <p className="mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="overflow-hidden rounded-[10px] border border-[#24364C]/10 bg-white/70 p-4 shadow-[0_22px_60px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/76 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
            <div className="relative aspect-[1.08] overflow-hidden rounded-[8px]">
              <Image
                src="/finch/product-5.png"
                alt="Finch workflow preview"
                fill
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        title="Feature showcase"
        subtitle="The content below reflects the core Finch flows without copying the reference layouts directly."
      >
        <div className="space-y-6">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className="grid gap-6 rounded-[10px] border border-[#24364C]/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="inline-flex items-center rounded-md border border-[#D43C33]/14 bg-[#fff6f1] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D43C33] dark:border-[#E09643]/16 dark:bg-[#233247] dark:text-[#E09643]">
                  {feature.eyebrow}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
                  {feature.body}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <div className="overflow-hidden rounded-[10px] border border-[#24364C]/10 bg-[#f3ede5] p-3 dark:border-white/10 dark:bg-[#152234]">
                  <div className="relative aspect-[1.32] overflow-hidden rounded-[8px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 56vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="pricing"
        title="Pricing"
        subtitle="Plan details and billing are still being finalized."
      >
        <div className="mx-auto max-w-2xl rounded-[10px] border border-[#24364C]/10 bg-white/82 p-8 text-center shadow-[0_24px_70px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D43C33]">
            Coming soon
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef]">
            Pricing is WIP
          </h3>
          <p className="mt-4 text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
            We are finalizing plan details and billing. Launch details are
            still coming together, and Finch remains free while early access is
            rolling out.
          </p>
          <div className="mt-6 rounded-[8px] border border-[#24364C]/10 bg-[#f8f2ea] px-4 py-3 text-sm text-[#24364C]/72 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/72">
            Pricing details coming soon.
          </div>
        </div>
      </PageSection>

      <PageSection title="Interested in early access?">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/82 p-8 shadow-[0_24px_70px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
          <p className="max-w-2xl text-sm leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
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

import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

import ShareSiteButton from "@/components/site/share-site-button";
import WaitlistForm from "@/components/site/waitlist-form";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: brand.name,
  description: brand.blurb,
};

const STATS = [
  {
    value: "50-200",
    label: "applications students often send in one recruiting cycle",
  },
  {
    value: "< 60s",
    label: "from repetitive application work to tailored autofill",
  },
  {
    value: "3 ATS",
    label: "Greenhouse, Lever, and Workday workflows supported",
  },
  {
    value: "Final review",
    label: "users stay in control before anything gets submitted",
  },
] as const;

const WORKFLOW_STEPS = [
  {
    title: "Start from one search prompt",
    description:
      "Paste a LinkedIn search URL or role keywords into Finch, choose how many jobs to run, and launch a cleaner search workflow.",
  },
  {
    title: "Track generation in one place",
    description:
      "Your dashboard keeps generation status, completed applications, and history inside a single thread instead of scattered tabs.",
  },
  {
    title: "Review and apply from cards",
    description:
      "Each generated application includes ATS score, resume, cover letter, and direct apply link in one clean review surface.",
  },
] as const;

const FEATURE_SHOWCASE = [
  {
    eyebrow: "AI resume builder",
    title: "Craft a tailored resume for every role",
    body: "Generate role-specific resume versions, improve ATS alignment, and close keyword gaps before you submit.",
    ctaLabel: "Explore the product",
    ctaHref: "/product",
    ctaKind: "link",
  },
  {
    eyebrow: "Job matches",
    title: "Get matched to relevant jobs, personalized to you",
    body: "Set your preferences once and discover higher-fit opportunities instead of searching endlessly across job boards.",
    ctaLabel: "Get launch updates",
    ctaHref: `mailto:${brand.primaryEmail}?subject=Finch%20launch%20updates`,
    ctaKind: "anchor",
  },
  {
    eyebrow: "Autofill applications",
    title: "Autofill repetitive job application questions",
    body: "Install the Finch browser extension and finish repetitive forms in seconds with profile-aware answers.",
    ctaLabel: "Request extension access",
    ctaHref: `mailto:${brand.primaryEmail}?subject=Finch%20Chrome%20extension%20access`,
    ctaKind: "anchor",
  },
] as const;

const FAQ = [
  {
    question: "Is Finch an auto-apply spam engine?",
    answer:
      "No. Finch is designed to help students apply with more strategy and less wasted effort. It stops at the final review page so the user stays in control.",
  },
  {
    question: "Who is Finch built for?",
    answer:
      "Finch is focused on undergraduate students, especially engineering, computer science, and quantitatively oriented majors navigating competitive internship pipelines.",
  },
  {
    question: "What makes Finch different from mass-apply tools?",
    answer:
      "The product is optimized around interview probability, stronger materials, and better-fit roles instead of maximizing raw submission count.",
  },
  {
    question: "What does the product actually help with?",
    answer:
      "Finch helps students target better roles, tailor their materials, autofill repetitive fields across major ATS flows, and keep the process fast without losing quality.",
  },
  {
    question: "How can I get access?",
    answer:
      "Join the waitlist and the Finch team will follow up directly as new product access opens.",
  },
] as const;

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f2ec_0%,#f6efe8_48%,#fff9f5_100%)] text-[#24364C] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_46%,#1b2b3f_100%)] dark:text-[#fff7ef]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,150,67,0.28),transparent_24%),radial-gradient(circle_at_top_right,rgba(212,60,51,0.16),transparent_22%),radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.36),transparent_28%),radial-gradient(circle_at_bottom,rgba(36,54,76,0.07),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(224,150,67,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(212,60,51,0.14),transparent_22%),radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_bottom,rgba(224,150,67,0.08),transparent_32%)]" />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-18 pt-28 sm:px-6 sm:pt-32 lg:pb-22 lg:pt-36">
          <div className="relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-6xl lg:text-7xl">
                <span className="font-display block leading-[0.95]">Apply Smarter.</span>
                <span className="font-display mt-2 block bg-[linear-gradient(135deg,#24364C_0%,#D43C33_48%,#E09643_100%)] bg-clip-text text-transparent">
                  Land Roles With Confidence.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#24364C]/76 dark:text-[#fff7ef]/76 sm:text-xl">
                Finch helps students move from search to submit with ATS-ready
                resumes, better-fit job matching, and a cleaner workflow across
                the internship tools they already face.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="landingPrimary" size="lg" className="rounded-md px-7">
                  <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
                    Join waitlist
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md px-7">
                  <Link href="/product">
                    Explore the product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-5xl rounded-[12px] border border-white/70 bg-white/72 p-6 shadow-[0_28px_90px_rgba(36,54,76,0.1)] backdrop-blur dark:border-white/10 dark:bg-[#182536]/72 dark:shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-7">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "ATS-ready materials without the usual rewrite loop.",
                  "Cleaner job matching built around better-fit roles.",
                  "Final-review control before anything gets submitted.",
                ].map((line) => (
                  <article
                    key={line}
                    className="rounded-[10px] border border-[#24364C]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,241,233,0.9))] p-5 text-left shadow-[0_18px_48px_rgba(36,54,76,0.06)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(30,45,65,0.96),rgba(22,35,51,0.92))] dark:shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
                  >
                    <p className="text-sm leading-7 text-[#24364C]/76 dark:text-[#fff7ef]/74">
                      {line}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-6xl rounded-[12px] border border-white/70 bg-white/72 p-4 shadow-[0_28px_90px_rgba(36,54,76,0.1)] backdrop-blur dark:border-white/10 dark:bg-[#182536]/72 dark:shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-4">
                {STATS.map((stat) => (
                  <article
                    key={stat.value}
                    className="rounded-[10px] border border-[#24364C]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,241,233,0.9))] p-6 text-left shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(30,45,65,0.96),rgba(22,35,51,0.92))] dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
                  >
                    <p className="font-display text-3xl text-[#24364C] dark:text-[#fff7ef]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#24364C]/70 dark:text-[#fff7ef]/70">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-18 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
            How it works
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl">
            A cleaner workflow from search to apply.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
            Finch keeps the workflow simple: find stronger roles, generate the
            right materials, and review each application before anything gets
            submitted.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {WORKFLOW_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[10px] border border-white/70 bg-white/74 p-6 shadow-[0_22px_60px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D43C33]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#24364C] dark:text-[#fff7ef]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#24364C]/72 dark:text-[#fff7ef]/72">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
            Feature showcase
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl">
            Everything you need to land your next role.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
            Finch brings the strongest parts of the workflow together so
            students can search, tailor, and apply without building a mess of
            disconnected tools.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {FEATURE_SHOWCASE.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[12px] border border-white/70 bg-white/76 p-6 shadow-[0_22px_60px_rgba(36,54,76,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)] lg:p-7"
            >
              <span className="inline-flex items-center rounded-md border border-[#D43C33]/14 bg-[#fff6f1] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D43C33] dark:border-[#E09643]/16 dark:bg-[#233247] dark:text-[#E09643]">
                {feature.eyebrow}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-[2rem]">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
                {feature.body}
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="rounded-md">
                  {feature.ctaKind === "link" ? (
                    <Link href={feature.ctaHref}>{feature.ctaLabel}</Link>
                  ) : (
                    <a href={feature.ctaHref}>{feature.ctaLabel}</a>
                  )}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="rounded-[12px] border border-white/70 bg-white/78 p-8 text-center shadow-[0_24px_70px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-10">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
            Pricing
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl">
            Pricing is WIP.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
            We are finalizing plan details and billing. For now, Finch is free
            while early access opens in stages.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/product#pricing">See pricing status</Link>
            </Button>
            <Button asChild variant="landingPrimary" className="rounded-md">
              <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
                Request early access
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl">
            Questions students ask before they commit to a new workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/72">
            Finch is positioned as a smarter recruiting system, not another tool
            that tells students to do more work.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {FAQ.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-[10px] border border-white/70 bg-white/78 px-5 shadow-[0_16px_44px_rgba(36,54,76,0.07)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_16px_44px_rgba(0,0,0,0.24)]"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-[#24364C] hover:no-underline dark:text-[#fff7ef]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-[#24364C]/72 dark:text-[#fff7ef]/72">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="waitlist" className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[12px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,245,236,0.94))] p-8 shadow-[0_30px_90px_rgba(36,54,76,0.12)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(24,37,54,0.96),rgba(18,29,43,0.98))] dark:shadow-[0_30px_90px_rgba(0,0,0,0.32)] lg:p-12 xl:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
              <div className="max-w-5xl">
                <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
                  Get early access
                </span>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl xl:text-6xl">
                  Stop guessing and start applying with strategy.
                </h2>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-[#24364C]/74 dark:text-[#fff7ef]/74">
                  Join the Finch waitlist and talk directly with the founding
                  team about early access, product demos, or university
                  partnership conversations.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" className="rounded-md">
                    <a href={`mailto:${brand.primaryEmail}?subject=Finch%20launch%20updates`}>
                      Get launch updates
                    </a>
                  </Button>
                  <ShareSiteButton className="rounded-md" />
                </div>
              </div>
              <div className="rounded-[10px] border border-white/80 bg-white/78 p-6 shadow-[0_20px_54px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_20px_54px_rgba(0,0,0,0.24)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#24364C]/54 dark:text-[#fff7ef]/54">
                  Join the waitlist
                </p>
                <div className="mt-5">
                  <WaitlistForm source="home-cta" fullWidth className="w-full" />
                </div>
                <p className="mt-5 text-sm leading-6 text-[#24364C]/66 dark:text-[#fff7ef]/66">
                  Early access requests route directly to the Finch team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

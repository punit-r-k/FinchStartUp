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
import HeroDotAnimation from "@/components/site/hero-dot-animation";
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
    label: "applications many students send per cycle",
  },
  {
    value: "< 60s",
    label: "to tailored autofill",
  },
  {
    value: "3 ATS",
    label: "Greenhouse, Lever, Workday",
  },
  {
    value: "Final review",
    label: "you stay in control before submit",
  },
] as const;

const WORKFLOW_STEPS = [
  {
    title: "Start from one search prompt",
    description:
      "Paste a LinkedIn search URL or keywords and launch.",
  },
  {
    title: "Track generation in one place",
    description:
      "Keep status, history, and outputs in one thread.",
  },
  {
    title: "Review and apply from cards",
    description:
      "See ATS score, resume, cover letter, and apply link together.",
  },
] as const;

const FEATURE_SHOWCASE = [
  {
    eyebrow: "AI resume builder",
    title: "Craft a tailored resume for every role",
    body: "Generate role-specific resumes with better ATS alignment.",
    ctaLabel: "Explore the product",
    ctaHref: "/product",
    ctaKind: "link",
  },
  {
    eyebrow: "Job matches",
    title: "Get matched to relevant jobs, personalized to you",
    body: "Find better-fit roles without endless searching.",
    ctaLabel: "Get launch updates",
    ctaHref: `mailto:${brand.primaryEmail}?subject=Finch%20launch%20updates`,
    ctaKind: "anchor",
  },
  {
    eyebrow: "Autofill applications",
    title: "Autofill repetitive job application questions",
    body: "Finish repetitive forms fast with profile-aware answers.",
    ctaLabel: "Request extension access",
    ctaHref: `mailto:${brand.primaryEmail}?subject=Finch%20Chrome%20extension%20access`,
    ctaKind: "anchor",
  },
] as const;

const FAQ = [
  {
    question: "Is Finch an auto-apply spam engine?",
    answer:
      "No. Finch stops at final review so you stay in control.",
  },
  {
    question: "Who is Finch built for?",
    answer:
      "College students navigating competitive internship recruiting.",
  },
  {
    question: "What makes Finch different from mass-apply tools?",
    answer:
      "It is built for better-fit roles and stronger materials, not volume.",
  },
  {
    question: "What does the product actually help with?",
    answer:
      "Matching, tailoring, autofill, and faster review.",
  },
  {
    question: "How can I get access?",
    answer:
      "Join the waitlist.",
  },
] as const;

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f2ec_0%,#f6efe8_48%,#fff9f5_100%)] text-[#24364C] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_46%,#1b2b3f_100%)] dark:text-[#fff7ef]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,154,62,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(232,64,28,0.16),transparent_22%),radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.36),transparent_28%),radial-gradient(circle_at_bottom,rgba(36,54,76,0.07),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(240,154,62,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(232,64,28,0.14),transparent_22%),radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_bottom,rgba(240,154,62,0.06),transparent_32%)]" />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-18 pt-28 sm:px-6 sm:pt-32 lg:pb-22 lg:pt-36">
          <div className="relative z-10">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-6xl lg:text-7xl">
                <span className="font-display block leading-[0.95]">Apply Smarter.</span>
                <span className="font-display mt-2 block bg-[linear-gradient(135deg,#E8401C_0%,#EC6431_56%,#F09A3E_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(135deg,#F06B4A_0%,#F28A43_54%,#F5B15A_100%)] [text-shadow:0_2px_18px_rgba(36,54,76,0.08)] dark:[text-shadow:0_8px_28px_rgba(0,0,0,0.28)]">
                  Land Roles With Confidence.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#24364C]/76 dark:text-[#fff7ef]/86 sm:text-xl">
                ATS-ready resumes, better-fit roles, and a faster path from
                search to submit.
              </p>
              <HeroDotAnimation className="mx-auto mt-1 w-full max-w-[340px] sm:max-w-[400px]" />
              <div className="mt-1 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

            <div className="mx-auto mt-10 max-w-6xl rounded-[12px] border border-white/70 bg-white/72 p-4 shadow-[0_28px_90px_rgba(36,54,76,0.1)] backdrop-blur dark:border-white/10 dark:bg-[#182536]/72 dark:shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-4">
                {STATS.map((stat) => (
                  <article
                    key={stat.value}
                    className="rounded-[10px] border border-[#24364C]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,241,233,0.9))] p-6 text-left shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(30,45,65,0.96),rgba(22,35,51,0.92))] dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
                  >
                    <p className="font-display text-3xl text-[#24364C] dark:text-[#fff7ef]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#24364C]/70 dark:text-[#fff7ef]/82">
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
          <p className="mt-4 text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/84">
            Find roles, generate materials, review, apply.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {WORKFLOW_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[10px] border border-white/70 bg-white/74 p-6 shadow-[0_22px_60px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2D8214] dark:text-[#58CC02]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#24364C] dark:text-[#fff7ef]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#24364C]/72 dark:text-[#fff7ef]/84">
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
          <p className="mt-4 text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/84">
            Search, tailor, and apply in one cleaner flow.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {FEATURE_SHOWCASE.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[12px] border border-white/70 bg-white/76 p-6 shadow-[0_22px_60px_rgba(36,54,76,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#182536]/78 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)] lg:p-7"
            >
              <span className="inline-flex items-center rounded-md border border-[#58CC02]/18 bg-[#f3faea] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#2D8214] dark:border-[#58CC02]/22 dark:bg-[#1f3421] dark:text-[#58CC02]">
                {feature.eyebrow}
              </span>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-[2rem]">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/84">
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

      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef]/62">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] dark:text-[#fff7ef] sm:text-5xl">
            Questions students ask before they commit to a new workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72 dark:text-[#fff7ef]/84">
            Short answers before you commit.
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
              <AccordionContent className="pb-5 text-sm leading-6 text-[#24364C]/72 dark:text-[#fff7ef]/84">
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
                <p className="mt-5 max-w-4xl text-lg leading-8 text-[#24364C]/74 dark:text-[#fff7ef]/86">
                  Join for early access, demos, or partnership conversations.
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
                  Requests go straight to the Finch team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

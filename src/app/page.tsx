import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Bot,
  Check,
  Chrome,
  GraduationCap,
  ShieldCheck,
  Target,
} from "lucide-react";

import WaitlistForm from "@/components/site/waitlist-form";
import HeroDotAnimation from "@/components/site/hero-dot-animation";
import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: brand.name,
  description: brand.blurb,
};

const STATS = [
  {
    value: "50-200",
    label: "applications students often send in one cycle",
    icon: Target,
  },
  {
    value: "< 60s",
    label: "from repetitive application work to tailored autofill",
    icon: Bot,
  },
  {
    value: "3 ATS",
    label: "Greenhouse, Lever, and Workday workflows supported",
    icon: Chrome,
  },
  {
    value: "Final review",
    label: "users stay in control before anything gets submitted",
    icon: ShieldCheck,
  },
] as const;

const STEPS = [
  {
    title: "Build a stronger starting point",
    description:
      "Finch analyzes your background and turns scattered experience into a richer candidate profile.",
    icon: GraduationCap,
  },
  {
    title: "Target higher-signal internships",
    description:
      "Instead of spraying applications everywhere, Finch helps you focus on roles that fit your profile and interview odds.",
    icon: Target,
  },
  {
    title: "Tailor in seconds",
    description:
      "Role-specific resumes, cover letters, and autofill steps compress repetitive work without flattening quality.",
    icon: Bot,
  },
  {
    title: "Stop before submit",
    description:
      "Finch brings you to the final review page so you keep full control over what gets sent.",
    icon: ShieldCheck,
  },
] as const;

const FEATURE_CARDS = [
  {
    title: "Intentional over volume",
    body: "Finch is built for students who want stronger interview probability, not more busywork.",
    image: "/finch/product-1.png",
  },
  {
    title: "Speed without quality loss",
    body: "Turn a 20 to 30 minute application routine into a focused, fast workflow that still feels tailored.",
    image: "/finch/product-2.png",
  },
  {
    title: "One workflow, multiple ATS paths",
    body: "Finch is designed around the platforms students actually encounter during internship recruiting.",
    image: "/finch/product-3.png",
  },
] as const;

const DIFFERENTIATORS = [
  "Not a blind auto-apply tool",
  "Built around interview probability instead of application count",
  "Student-first language, pacing, and workflows",
  "Warm product design with clear hierarchy and visible control",
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
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f2ec_0%,#f6efe8_48%,#fff9f5_100%)] text-[#24364C]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,150,67,0.28),transparent_24%),radial-gradient(circle_at_top_right,rgba(212,60,51,0.16),transparent_22%),radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.36),transparent_28%),radial-gradient(circle_at_bottom,rgba(36,54,76,0.07),transparent_32%)]" />
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-18 pt-10 sm:px-6 lg:pb-22 lg:pt-16">
          <div className="relative z-10 text-center">
            <div className="mx-auto max-w-5xl">
              <h1 className="text-5xl font-semibold tracking-tight text-[#24364C] sm:text-6xl lg:text-7xl">
                <span className="font-display block leading-[0.95]">Turn Applications Into</span>
                <span className="font-display mt-2 block bg-[linear-gradient(135deg,#24364C_0%,#D43C33_48%,#E09643_100%)] bg-clip-text text-transparent">
                  Interviews.
                </span>
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#24364C]/76 sm:text-xl">
              Finch helps students replace mass-application chaos with a faster,
              smarter recruiting system. Target stronger roles, tailor your
              materials, and move from applications to interviews with more
              signal and less grind.
            </p>
            <HeroDotAnimation className="mx-auto mt-8 w-full max-w-[300px] sm:max-w-[360px]" />
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
            <div className="mx-auto mt-10 max-w-6xl rounded-[12px] border border-white/70 bg-white/72 p-4 shadow-[0_28px_90px_rgba(36,54,76,0.1)] backdrop-blur sm:p-5">
              <div className="grid gap-4 lg:grid-cols-4">
                {STATS.map((stat) => (
                  <article
                    key={stat.value}
                    className="rounded-[10px] border border-[#24364C]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,241,233,0.9))] p-6 text-left shadow-[0_18px_48px_rgba(36,54,76,0.08)]"
                  >
                    <p className="font-display text-3xl text-[#24364C]">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-[#24364C]/70">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-18 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66">
            How it works
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
            Built for students who want a better process, not more noise.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#24364C]/72">
            Finch compresses the repetitive parts of internship recruiting while
            keeping user control, tailored materials, and stronger role
            selection at the center.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[10px] border border-white/70 bg-white/74 p-6 shadow-[0_22px_60px_rgba(36,54,76,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(212,60,51,0.14),rgba(224,150,67,0.18))] text-[#D43C33]">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/46">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#24364C]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#24364C]/72">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 rounded-[14px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(247,239,231,0.92))] p-8 shadow-[0_28px_80px_rgba(36,54,76,0.1)] backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
            <div>
              <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66">
                Why Finch
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
                Conversion-focused product design with a student-first backbone.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#24364C]/72">
                Finch balances clean SaaS structure with selective glass surfaces,
                warm contrast, and clear calls to action. The interface is meant
                to feel credible, fast, and optimistic without drifting into
                cold enterprise language.
              </p>
              <div className="mt-8 grid gap-3">
                {DIFFERENTIATORS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[8px] border border-[#24364C]/10 bg-white/76 px-4 py-3 text-sm text-[#24364C]/78 shadow-[0_12px_32px_rgba(36,54,76,0.06)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E09643]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="landingPrimary" className="rounded-md">
                  <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
                    Join waitlist
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href="/about">Meet the team</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {FEATURE_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[10px] border border-white/70 bg-white/80 shadow-[0_20px_56px_rgba(36,54,76,0.1)] backdrop-blur"
                >
                  <div className="relative aspect-[0.82]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#24364C]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#24364C]/72">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div>
            <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66">
              Product shape
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
              The recruiting stack is messy. Finch makes the workflow coherent.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: Chrome,
                  title: "Chrome extension workflow",
                  text: "Finch detects supported application opportunities and prepares the right materials at the moment they are needed.",
                },
                {
                  icon: Bot,
                  title: "AI-assisted tailoring",
                  text: "The product helps generate stronger, role-specific documents while preserving user control and review.",
                },
                {
                  icon: Target,
                  title: "Outcome-driven guidance",
                  text: "Every major workflow centers on precision, fit, and interview probability rather than vanity metrics.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-5 shadow-[0_16px_44px_rgba(36,54,76,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(212,60,51,0.12),rgba(224,150,67,0.16))] text-[#D43C33]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-[#24364C]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#24364C]/72">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
            Questions students ask before they commit to a new workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#24364C]/72">
            Finch is positioned as a smarter recruiting system, not another tool
            that tells students to do more work.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {FAQ.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-[10px] border border-white/70 bg-white/78 px-5 shadow-[0_16px_44px_rgba(36,54,76,0.07)]"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-[#24364C] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-[#24364C]/72">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="waitlist" className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[12px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,245,236,0.94))] p-8 shadow-[0_30px_90px_rgba(36,54,76,0.12)] lg:p-12 xl:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
              <div className="max-w-5xl">
                <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66">
                  Get early access
                </span>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl xl:text-6xl">
                  Stop guessing and start applying with strategy.
                </h2>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-[#24364C]/74">
                  Join the Finch waitlist and talk directly with the founding
                  team about early access, product demos, or university
                  partnership conversations.
                </p>
              </div>
              <div className="rounded-[10px] border border-white/80 bg-white/78 p-6 shadow-[0_20px_54px_rgba(36,54,76,0.08)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#24364C]/54">
                  Join the waitlist
                </p>
                <div className="mt-5">
                  <WaitlistForm
                    source="home-cta"
                    fullWidth
                    className="w-full"
                  />
                </div>
                <p className="mt-5 text-sm leading-6 text-[#24364C]/66">
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

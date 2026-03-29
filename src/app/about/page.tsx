import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import WaitlistForm from "@/components/site/waitlist-form";
import { Button } from "@/components/ui/button";
import { brand, foundingTeam } from "@/config/brand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Finch does, why it exists, how the brand should feel, and who is building it.",
};

const HERO_POINTS = [
  {
    title: "What Finch does",
    body: "Finch helps students target better roles, tailor applications faster, and stay in control through final review.",
  },
  {
    title: "Who it is for",
    body: "It is built for college students navigating competitive internship recruiting, especially technical and academically rigorous programs.",
  },
  {
    title: "Why it is different",
    body: "Finch is designed around interview probability and clarity, not volume for the sake of activity.",
  },
] as const;

const ABOUT_CARDS = [
  {
    title: "Mission",
    subtitle: "What Finch is trying to improve today",
    body: "Finch turns internship applications from a repetitive numbers game into a more intentional, higher-signal workflow that helps students earn stronger opportunities with less wasted effort.",
    tone: "light",
  },
  {
    title: "Vision",
    subtitle: "What the future looks like if Finch succeeds",
    body: "Finch aims to become the default infrastructure for intentional early-career recruiting, where students are evaluated more efficiently and the path from education to experience is more transparent.",
    tone: "dark",
  },
] as const;

const VALUES = [
  {
    title: "Playful",
    body: "The product should feel energetic and approachable without losing product credibility or seriousness of purpose.",
  },
  {
    title: "Innovative",
    body: "Finch should communicate sharp thinking, technical confidence, and a clear point of view on recruiting workflows.",
  },
  {
    title: "Approachable",
    body: "Students should feel supported and capable, not buried under enterprise jargon or generic career advice.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fffaf6_46%,#f9f2ea_100%)] text-[#24364C]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,150,67,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(212,60,51,0.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(36,54,76,0.08),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/66 shadow-[0_14px_34px_rgba(36,54,76,0.06)]">
                About Finch
              </span>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#24364C] sm:text-6xl">
                A strategic alternative to the mass-application grind.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#24364C]/80 sm:text-xl">
                Finch helps college students replace repetitive internship
                applications with a faster, sharper recruiting system. It is
                built for students who want better-fit roles, stronger
                materials, and a more credible path to interviews.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="landingPrimary" size="lg" className="rounded-md px-7">
                  <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
                    Join waitlist
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md px-7">
                  <Link href="/product">See product</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HERO_POINTS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[10px] border border-white/80 bg-white/78 p-6 shadow-[0_22px_56px_rgba(36,54,76,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D43C33]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#24364C]/78">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-[12px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,245,236,0.9))] p-8 shadow-[0_28px_86px_rgba(36,54,76,0.1)] lg:p-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/62">
              About the brand
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
              What Finch is building
            </h2>
            <p className="mt-4 text-base leading-7 text-[#24364C]/76">
              Finch exists to make internship recruiting more intentional for
              students. This section explains what the company is trying to
              improve and what success should look like over time.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {ABOUT_CARDS.map((card) => (
              <article
                key={card.title}
                className={
                  card.tone === "dark"
                    ? "rounded-[10px] border border-[#24364C]/12 bg-[#24364C] p-7 shadow-[0_22px_60px_rgba(36,54,76,0.16)]"
                    : "rounded-[10px] border border-[#24364C]/10 bg-white/86 p-7 shadow-[0_22px_60px_rgba(36,54,76,0.08)]"
                }
              >
                <p
                  className={
                    card.tone === "dark"
                      ? "text-xs font-semibold uppercase tracking-[0.24em] text-white/54"
                      : "text-xs font-semibold uppercase tracking-[0.24em] text-[#D43C33]"
                  }
                >
                  {card.subtitle}
                </p>
                <h3
                  className={
                    card.tone === "dark"
                      ? "mt-3 text-2xl font-semibold text-white"
                      : "mt-3 text-2xl font-semibold text-[#24364C]"
                  }
                >
                  {card.title}
                </h3>
                <p
                  className={
                    card.tone === "dark"
                      ? "mt-4 text-sm leading-7 text-white/78"
                      : "mt-4 text-sm leading-7 text-[#24364C]/76"
                  }
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[12px] border border-white/80 bg-white/82 p-8 shadow-[0_26px_72px_rgba(36,54,76,0.08)]">
            <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-[#f7f2ec] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/62">
              Why Finch exists
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-[2.6rem]">
              The problem is not effort. It is wasted effort.
            </h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[10px] border border-[#24364C]/10 bg-[#f9f3ec] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D43C33]">
                  Problem
                </p>
                <p className="mt-3 text-sm leading-7 text-[#24364C]/78">
                  Students are still told to apply more, network more, and keep
                  pushing volume even when those actions do not improve fit,
                  quality, or interview odds.
                </p>
              </article>
              <article className="rounded-[10px] border border-[#24364C]/10 bg-[#24364C] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">
                  Finch&apos;s response
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Finch compresses repetitive work, improves targeting, and
                  keeps the student in control so the workflow feels strategic
                  instead of exhausting.
                </p>
              </article>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#24364C]/76">
              The brand is meant to feel modern, warm, and credible. It should
              never sound like generic career advice, and it should never push
              students toward more noise just to feel active.
            </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/62">
            Brand values
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
            How Finch should feel to users
          </h2>
          <p className="mt-4 text-base leading-7 text-[#24364C]/76">
            The product should feel distinct, credible, and warm. Each value
            below defines how the brand should show up in product decisions and
            communication.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="flex min-h-[220px] flex-col rounded-[10px] border border-white/80 bg-white/82 p-7 shadow-[0_22px_60px_rgba(36,54,76,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D43C33]">
                {value.title}
              </p>
              <p className="mt-4 text-base leading-7 text-[#24364C]/78">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-md border border-[#24364C]/10 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#24364C]/62">
            Founding team
          </span>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#24364C] sm:text-5xl">
            Meet the team building Finch
          </h2>
          <p className="mt-4 text-base leading-7 text-[#24364C]/76">
            The founding team is building Finch from direct exposure to the
            internship search and the friction students face inside modern
            recruiting systems.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {foundingTeam.map((member) => (
            <article
              key={member.email}
              className="overflow-hidden rounded-[10px] border border-white/80 bg-white/84 shadow-[0_24px_66px_rgba(36,54,76,0.08)]"
            >
              <div className="relative aspect-[0.94] bg-[#eadfd3]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex min-h-[168px] flex-col p-6">
                <h3 className="text-xl font-semibold text-[#24364C]">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#D43C33]">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-auto pt-5 text-sm text-[#24364C]/78 transition hover:text-[#24364C]"
                >
                  {member.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 pb-24 sm:px-6">
        <div className="rounded-[12px] border border-[#24364C]/10 bg-[linear-gradient(135deg,rgba(36,54,76,0.98),rgba(36,54,76,0.9))] p-8 text-white shadow-[0_28px_84px_rgba(36,54,76,0.18)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-md border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/66">
                Talk to Finch
              </span>
              <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
                Stop guessing and start applying with strategy.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/78">
                Join the waitlist if you want early product access, founder
                conversations, or university partnership discussions.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/12 bg-white/8 p-5 sm:p-6">
              <WaitlistForm source="about-page" tone="dark" fullWidth className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

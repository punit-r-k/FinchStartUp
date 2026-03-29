import type { Metadata } from "next";

import { LEGAL_PAGE_ACTIONS } from "@/components/site/legal-page-actions";
import { MarketingPage, PageSection } from "@/components/site/marketing-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms that apply to the Finch public website, waitlist, and related communications.",
};

const TERMS = [
  {
    title: "Website use",
    points: [
      "Use the Finch website for lawful purposes only.",
      "Do not interfere with the site, its forms, or its security controls.",
    ],
  },
  {
    title: "Product information",
    points: [
      "Public product descriptions are informational and may evolve as Finch develops.",
      "Joining the waitlist does not guarantee product access, pricing, or delivery dates.",
    ],
  },
  {
    title: "Communication",
    points: [
      "If you contact Finch, you agree that the team may reply regarding your request.",
      "You are responsible for the accuracy of the information you send.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <MarketingPage
      kicker="Legal"
      title="Terms of use"
      subtitle="These terms govern use of the Finch public site and related direct communication channels."
      actions={LEGAL_PAGE_ACTIONS}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fffaf6_100%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_52%,#1b2b3f_100%)]"
    >
      {TERMS.map((section) => (
        <PageSection key={section.title} title={section.title}>
          <ul className="space-y-2 rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
            {section.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>
      ))}
      <PageSection title="Questions">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          Questions about these terms can be directed to{" "}
          <a href="mailto:nicanor14gz@tamu.edu" className="font-medium text-[#24364C] dark:text-[#fff7ef]">
            nicanor14gz@tamu.edu
          </a>
          .
        </div>
      </PageSection>
    </MarketingPage>
  );
}

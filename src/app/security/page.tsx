import type { Metadata } from "next";

import { LEGAL_PAGE_ACTIONS } from "@/components/site/legal-page-actions";
import { MarketingPage, PageSection } from "@/components/site/marketing-page";

export const metadata: Metadata = {
  title: "Security",
  description: "Security practices for the Finch marketing site and related communications.",
};

const SECURITY_PRACTICES = [
  "Minimal public-site data collection",
  "Tightened security headers across the marketing site",
  "Direct contact routing without embedded billing or auth providers",
  "Ongoing review of third-party scripts and public-site dependencies",
] as const;

export default function SecurityPage() {
  return (
    <MarketingPage
      kicker="Legal"
      title="Security"
      subtitle="Finch keeps the public site intentionally narrow so the attack surface stays smaller and easier to reason about."
      actions={LEGAL_PAGE_ACTIONS}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fffaf6_100%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_52%,#1b2b3f_100%)]"
    >
      <PageSection title="Practices">
        <ul className="space-y-2 rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          {SECURITY_PRACTICES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>

      <PageSection title="Reporting">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          Security concerns can be reported to{" "}
          <a href="mailto:jmtirador@tamu.edu" className="font-medium text-[#24364C] dark:text-[#fff7ef]">
            jmtirador@tamu.edu
          </a>
          .
        </div>
      </PageSection>
    </MarketingPage>
  );
}

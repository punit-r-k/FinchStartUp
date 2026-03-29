import type { Metadata } from "next";

import { LEGAL_PAGE_ACTIONS } from "@/components/site/legal-page-actions";
import { MarketingPage, PageSection } from "@/components/site/marketing-page";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Finch accessibility statement for the public marketing site.",
};

export default function AccessibilityPage() {
  return (
    <MarketingPage
      kicker="Legal"
      title="Accessibility statement"
      subtitle="Finch aims to keep the public site readable, keyboard-friendly, and understandable across common assistive technologies."
      actions={LEGAL_PAGE_ACTIONS}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fffaf6_100%)] transition-colors duration-300 dark:bg-[linear-gradient(180deg,#121d2b_0%,#172433_52%,#1b2b3f_100%)]"
    >
      <PageSection title="Commitment">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          Finch is committed to an accessible web experience and works toward
          clear structure, visible focus states, and readable contrast across
          the public site.
        </div>
      </PageSection>

      <PageSection title="Current measures">
        <ul className="space-y-2 rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <li>Keyboard-accessible navigation and controls.</li>
          <li>Text alternatives for meaningful graphics and imagery.</li>
          <li>Consistent heading structure and landmark usage.</li>
          <li>Readable contrast between foreground and background surfaces.</li>
        </ul>
      </PageSection>

      <PageSection title="Feedback">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[#182536]/78 dark:text-[#fff7ef]/74 dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          If you encounter an accessibility issue, email{" "}
          <a href="mailto:nicanor14gz@tamu.edu" className="font-medium text-[#24364C] dark:text-[#fff7ef]">
            nicanor14gz@tamu.edu
          </a>{" "}
          with the page URL and a short description of the problem.
        </div>
      </PageSection>
    </MarketingPage>
  );
}

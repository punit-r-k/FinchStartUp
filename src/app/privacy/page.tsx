import type { Metadata } from "next";

import { LEGAL_PAGE_ACTIONS } from "@/components/site/legal-page-actions";
import { MarketingPage, PageSection } from "@/components/site/marketing-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Finch handles information related to the public website and waitlist.",
};

const SECTIONS = [
  {
    title: "Information we receive",
    points: [
      "Basic contact details you choose to share with the Finch team.",
      "Information included in direct emails, demos, or partnership conversations.",
      "Standard website analytics needed to keep the public site secure and operational.",
    ],
  },
  {
    title: "How information is used",
    points: [
      "Respond to waitlist requests and product inquiries.",
      "Improve the public site, product messaging, and onboarding flow.",
      "Coordinate demos, early access, and university partnership discussions.",
    ],
  },
  {
    title: "Your controls",
    points: [
      "You can request deletion of your inquiry information at any time.",
      "You can opt out of future product outreach by contacting Finch directly.",
      "Questions about privacy can be sent to nicanor14gz@tamu.edu.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <MarketingPage
      kicker="Legal"
      title="Privacy policy"
      subtitle="Finch keeps public-site data collection narrow and tied to product communication, site security, and operational needs."
      actions={LEGAL_PAGE_ACTIONS}
      className="bg-[linear-gradient(180deg,#f7f2ec_0%,#fffaf6_100%)]"
    >
      {SECTIONS.map((section) => (
        <PageSection key={section.title} title={section.title}>
          <ul className="space-y-2 rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)]">
            {section.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>
      ))}
      <PageSection title="Contact">
        <div className="rounded-[10px] border border-[#24364C]/10 bg-white/80 p-6 text-sm text-[#24364C]/74 shadow-[0_18px_48px_rgba(36,54,76,0.08)]">
          Privacy questions can be sent to{" "}
          <a href="mailto:nicanor14gz@tamu.edu" className="font-medium text-[#24364C]">
            nicanor14gz@tamu.edu
          </a>
          .
        </div>
      </PageSection>
    </MarketingPage>
  );
}

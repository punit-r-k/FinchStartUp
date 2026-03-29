import Image from "next/image";
import Link from "next/link";

import HeroDotAnimation from "@/components/site/hero-dot-animation";
import { brand, foundingTeam } from "@/config/brand";

export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/product", label: "Product" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
        { href: "/security", label: "Security" },
        { href: "/accessibility", label: "Accessibility" },
      ],
    },
  ] as const;

  return (
    <footer
      className="border-t border-[#24364C]/10 bg-[#24364C] text-white"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]"
              aria-label={`${brand.name} home`}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={156}
                height={48}
                className="w-[156px]"
                style={{ height: "auto" }}
                priority
              />
            </Link>
            <p className="max-w-md text-sm text-white/72">{brand.blurb}</p>
            <p className="font-display text-2xl text-white">{brand.heroHeadline}</p>
            <HeroDotAnimation className="w-full max-w-[280px]" lightText />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  {column.heading}
                </h3>
                <ul className="space-y-2 text-sm text-white/74">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-white/74">
                <p>
                  <a href={`mailto:${brand.primaryEmail}`} className="transition hover:text-white">
                    {brand.primaryEmail}
                  </a>
                </p>
                <p>
                  <a href={brand.website} className="transition hover:text-white">
                    {brand.website.replace(/^https?:\/\//, "")}
                  </a>
                </p>
                <p>College Station, Texas</p>
              </div>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Founding team
              </h3>
              <div className="grid gap-4 lg:grid-cols-3">
                {foundingTeam.map((member) => (
                  <article
                    key={member.email}
                    className="rounded-[8px] border border-white/10 bg-white/6 p-4 text-sm text-white/72"
                  >
                    <p className="font-semibold text-white">{member.name}</p>
                    <p className="mt-1 text-[#E09643]">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-3 inline-block transition hover:text-white"
                    >
                      {member.email}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            {"\u00a9"} {year} {brand.name}. All rights reserved.
          </p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

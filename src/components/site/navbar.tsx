"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const isLandingPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setIsAtTop(window.scrollY <= 16);
  }, [pathname]);

  const overlayMode = isLandingPage && isAtTop && !mobileOpen;
  const faqHref = pathname === "/" ? "#faq" : "/#faq";

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        overlayMode
          ? "border-transparent bg-transparent backdrop-blur-none"
          : "border-white/10 bg-[#f7f2ec]/88 backdrop-blur-xl"
      )}
      aria-label="Site header"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:py-5"
        aria-label="Main"
      >
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]"
            aria-label={`${brand.name} home`}
          >
            <span className="relative block h-11 w-34 sm:h-14 sm:w-40 lg:h-16 lg:w-48">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 136px, (max-width: 1024px) 160px, 192px"
              />
            </span>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((link) => {
              const href = link.href === "/#faq" ? faqHref : link.href;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={cn(
                    "rounded-md px-5 py-2.5 text-base font-semibold transition",
                    isActive
                      ? "bg-[#24364C] text-white shadow-[0_18px_38px_rgba(36,54,76,0.18)]"
                      : "text-[#24364C]/74 hover:bg-white/70 hover:text-[#24364C]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden rounded-md px-5 py-2.5 text-base sm:inline-flex">
            <Link href="/product">See product</Link>
          </Button>
          <Button
            asChild
            variant="landingPrimary"
            className="hidden rounded-md px-5 py-2.5 text-base sm:inline-flex"
          >
            <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
              Join waitlist
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[#24364C]/12 bg-white/80 p-2.5 text-[#24364C] lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5.5 w-5.5" aria-hidden />
            ) : (
              <Menu className="h-5.5 w-5.5" aria-hidden />
            )}
          </button>
        </div>
      </nav>
      {mobileOpen ? (
        <div className="border-t border-[#24364C]/10 bg-[#f7f2ec] lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 py-5 sm:px-6">
            {NAV_LINKS.map((link) => {
              const href = link.href === "/#faq" ? faqHref : link.href;

              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-[#24364C]/10 bg-white/80 px-5 py-3.5 text-base font-semibold text-[#24364C] shadow-[0_14px_34px_rgba(36,54,76,0.08)]"
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild variant="outline" className="rounded-md py-2.5 text-base">
              <Link href="/product" onClick={() => setMobileOpen(false)}>
                See product
              </Link>
            </Button>
            <Button asChild variant="landingPrimary" className="rounded-md py-2.5 text-base">
              <a href={`mailto:${brand.primaryEmail}?subject=Finch%20waitlist`}>
                Join waitlist
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

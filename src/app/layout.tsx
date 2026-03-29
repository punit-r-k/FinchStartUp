import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Nunito, Quicksand } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "@/styles/theme.css";

import Footer from "@/components/site/footer";
import Navbar from "@/components/site/navbar";
import { brand } from "@/config/brand";
import { themeModeBootstrapScript } from "@/lib/theme-mode";
import { getConfiguredSiteOrigin } from "@/lib/site-url";

const sans = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rounded = Quicksand({
  variable: "--font-landing",
  subsets: ["latin"],
});

const display = localFont({
  src: "../../FINCH/Averia_Serif_Libre/AveriaSerifLibre-Bold.ttf",
  variable: "--font-display",
});

const defaultTitle = `${brand.name} - ${brand.tagline}`;

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${brand.name}`,
  },
  description: brand.blurb,
  metadataBase: new URL(getConfiguredSiteOrigin()),
  icons: {
    icon: [{ url: brand.logomark, type: "image/png" }],
    shortcut: [brand.logomark],
    apple: brand.logomark,
  },
  openGraph: {
    title: defaultTitle,
    description: brand.blurb,
    url: "/",
    siteName: brand.name,
    images: [
      {
        url: "/og.png",
        width: 1366,
        height: 768,
        alt: `${brand.name} preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.blurb,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} ${rounded.variable} ${display.variable} flex min-h-dvh flex-col bg-background text-foreground antialiased`}
      >
        <Script id="theme-mode-init" strategy="beforeInteractive">
          {themeModeBootstrapScript}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-h-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

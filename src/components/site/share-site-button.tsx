"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { brand } from "@/config/brand";

type ShareSiteButtonProps = {
  className?: string;
};

export default function ShareSiteButton({ className }: ShareSiteButtonProps) {
  const [label, setLabel] = useState("Share with friends");

  async function handleShare() {
    const url = brand.website;

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: `${brand.name} - ${brand.tagline}`,
          text: brand.blurb,
          url,
        });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      setLabel("Link copied");
      window.setTimeout(() => setLabel("Share with friends"), 2000);
      return;
    }

    window.location.href = `mailto:?subject=${encodeURIComponent(`${brand.name} - ${brand.tagline}`)}&body=${encodeURIComponent(url)}`;
  }

  return (
    <Button type="button" variant="outline" className={className} onClick={() => void handleShare()}>
      {label}
    </Button>
  );
}

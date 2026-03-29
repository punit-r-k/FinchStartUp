"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  icon: LucideIcon;
  color: string;
}

export interface SocialTooltipProps extends React.HTMLAttributes<HTMLUListElement> {
  items: SocialItem[];
}

export interface SocialActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  tooltip: string;
  icon: LucideIcon;
  color: string;
}

const baseIconStyles =
  "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:shadow-lg";
const baseIconColorStyles =
  "relative z-10 h-6 w-6 text-foreground transition-colors duration-300 ease-in-out group-hover:text-white";
const baseFilledStyles =
  "absolute inset-x-0 bottom-0 h-0 transition-all duration-300 ease-in-out group-hover:h-full";
const baseTooltipStyles =
  "pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 rounded-md px-2.5 py-1.5 text-sm whitespace-nowrap text-white opacity-0 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.55)] transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:opacity-100";

const SocialTooltip = React.forwardRef<HTMLUListElement, SocialTooltipProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn("flex items-center justify-center gap-4", className)}
        {...props}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isExternal = /^https?:\/\//.test(item.href);

          return (
            <li key={`${item.ariaLabel}-${item.href}`} className="group relative">
              <a
                href={item.href}
                aria-label={item.ariaLabel}
                className={baseIconStyles}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <div
                  className={baseFilledStyles}
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <Icon className={baseIconColorStyles} strokeWidth={1.9} aria-hidden="true" />
              </a>
              <div
                className={baseTooltipStyles}
                style={{ backgroundColor: item.color }}
                role="tooltip"
              >
                {item.tooltip}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
);

const SocialActionButton = React.forwardRef<HTMLButtonElement, SocialActionButtonProps>(
  ({ ariaLabel, className, color, icon: Icon, tooltip, type = "button", ...props }, ref) => {
    return (
      <div className="group relative">
        <button
          ref={ref}
          type={type}
          aria-label={ariaLabel}
          className={cn(baseIconStyles, className)}
          {...props}
        >
          <div
            className={baseFilledStyles}
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
          <Icon className={baseIconColorStyles} strokeWidth={1.9} aria-hidden="true" />
        </button>
        <div
          className={baseTooltipStyles}
          style={{ backgroundColor: color }}
          role="tooltip"
        >
          {tooltip}
        </div>
      </div>
    );
  }
);

SocialTooltip.displayName = "SocialTooltip";
SocialActionButton.displayName = "SocialActionButton";

export { SocialActionButton, SocialTooltip };

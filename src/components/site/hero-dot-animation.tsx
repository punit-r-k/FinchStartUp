"use client";

import { useMemo } from "react";

import Lottie from "lottie-react";

import animationData from "../../../FINCH/Simple-Dot-remix.json";

type HeroDotAnimationProps = {
  className?: string;
  lightText?: boolean;
};

const LIGHT_TEXT_RGB = [1, 0.9686, 0.9373] as const;

function isColorValueObject(value: unknown): value is { k: number[] } {
  if (!value || typeof value !== "object" || !("k" in value)) {
    return false;
  }

  const keyframes = (value as { k: unknown }).k;
  return (
    Array.isArray(keyframes) &&
    (keyframes.length === 3 || keyframes.length === 4) &&
    keyframes.every((entry) => typeof entry === "number" && entry >= 0 && entry <= 1)
  );
}

function recolorPureBlackLayers<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => recolorPureBlackLayers(item)) as T;
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  if (
    isColorValueObject(value) &&
    value.k[0] === 0 &&
    value.k[1] === 0 &&
    value.k[2] === 0
  ) {
    const next = [...value.k];
    next[0] = LIGHT_TEXT_RGB[0];
    next[1] = LIGHT_TEXT_RGB[1];
    next[2] = LIGHT_TEXT_RGB[2];
    return { ...(value as Record<string, unknown>), k: next } as T;
  }

  const clone = { ...(value as Record<string, unknown>) };

  for (const key of Object.keys(clone)) {
    clone[key] = recolorPureBlackLayers(clone[key]);
  }

  return clone as T;
}

export default function HeroDotAnimation({
  className,
  lightText = false,
}: HeroDotAnimationProps) {
  const resolvedAnimationData = useMemo(
    () => (lightText ? recolorPureBlackLayers(animationData) : animationData),
    [lightText],
  );

  return (
    <div className={className}>
      <Lottie
        animationData={resolvedAnimationData}
        autoplay
        loop
        className="h-auto w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}

"use client";

import Lottie from "lottie-react";

import animationData from "../../../FINCH/Simple-Dot-remix.json";

type HeroDotAnimationProps = {
  className?: string;
};

export default function HeroDotAnimation({ className }: HeroDotAnimationProps) {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        autoplay
        loop
        className="h-auto w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}

import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import { cn } from "@/lib/utils";

export default function DemoOne() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[radial-gradient(35%_80%_at_50%_0%,--theme(--color-foreground/.1),transparent)] px-4 py-10">
      <PricingWithChart />

      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 size-full",
          "bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.1)30%,transparent)_2px,transparent_2px)]",
          "bg-[size:12px_12px]"
        )}
      />
    </div>
  );
}

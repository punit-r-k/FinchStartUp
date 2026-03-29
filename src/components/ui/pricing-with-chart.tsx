"use client";

import { CheckCircleIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function PricingWithChart() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#24364C] lg:text-5xl">
          Pricing that Scales with You
        </h2>
        <p className="mt-4 text-sm text-[#24364C]/70 md:text-base">
          Choose the right plan to unlock powerful tools and insights.
          Transparent pricing built for modern teams.
        </p>
      </div>

      <div className="grid rounded-[12px] border border-[#24364C]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(249,243,236,0.92))] text-[#24364C] shadow-[0_20px_56px_rgba(36,54,76,0.08)] md:grid-cols-6">
        <div className="flex flex-col justify-between border-b border-[#24364C]/10 p-6 md:col-span-2 md:border-r md:border-b-0">
          <div className="space-y-4">
            <div>
              <h3 className="inline rounded-[2px] p-1 text-xl font-semibold">
                Free
              </h3>
              <span className="my-3 block text-3xl font-bold text-[#D43C33]">
                $0
              </span>
              <p className="text-sm text-[#24364C]/72">
                Best for testing and understanding
              </p>
            </div>

            <Button asChild variant="outline" className="w-full border-[#24364C]/18 bg-white/72 text-[#24364C] hover:bg-white hover:text-[#24364C]">
              <a href="#waitlist">Get Started</a>
            </Button>

            <div className="my-6 h-px w-full bg-[#24364C]/12" />

            <ul className="space-y-3 text-sm text-[#24364C]/74">
              {[
                "Basic analytics dashboard",
                "5GB cloud storage",
                "Email and chat support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-[#D43C33]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="z-10 grid gap-8 overflow-hidden p-6 md:col-span-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Pro Monthly Package</h3>
              <span className="my-3 block text-3xl font-bold text-[#D43C33]">
                $299
              </span>
              <p className="text-sm text-[#24364C]/72">
                Perfect for small businesses and startups
              </p>
            </div>
            <div className="h-fit w-full rounded-[10px] border border-[#24364C]/10 bg-white/72 p-2 shadow-[0_14px_36px_rgba(36,54,76,0.06)]">
              <InterestChart />
            </div>
          </div>

          <div className="relative w-full">
            <div className="text-sm font-medium">Everything in Free plus:</div>
            <ul className="mt-4 space-y-3 text-sm text-[#24364C]/74">
              {[
                "Unlimited access to all tools",
                "Priority customer support",
                "Advanced analytics dashboard",
                "Team collaboration included",
                "Secure cloud storage",
                "Customizable workflows and automation",
                "Integration with popular third-party apps",
                "Role-based access control and permissions",
                "Offline access with automatic sync",
                "Regular updates with new features",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-[#E09643]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid w-full grid-cols-2 gap-2.5">
              <Button
                asChild
                variant="landingPrimary"
              >
                <a href="#waitlist">Get Started</a>
              </Button>
              <Button asChild variant="outline" className="border-[#24364C]/18 bg-white/72 text-[#24364C] hover:bg-white hover:text-[#24364C]">
                <a href="#waitlist">Start free trial</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestChart() {
  const chartData = [
    { month: "January", interest: 120 },
    { month: "February", interest: 180 },
    { month: "March", interest: 150 },
    { month: "April", interest: 210 },
    { month: "May", interest: 250 },
    { month: "June", interest: 300 },
    { month: "July", interest: 280 },
    { month: "August", interest: 320 },
    { month: "September", interest: 340 },
    { month: "October", interest: 390 },
    { month: "November", interest: 420 },
    { month: "December", interest: 500 },
  ];

  const chartConfig = {
    interest: {
      label: "Interest",
      color: "#E09643",
    },
  } satisfies ChartConfig;

  return (
    <Card className="gap-0 border-[#24364C]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(250,245,239,0.96))] py-0 shadow-none">
      <CardHeader className="space-y-0 border-b border-[#24364C]/10 p-3">
        <CardTitle className="text-lg text-[#24364C]">Plan Popularity</CardTitle>
        <CardDescription className="text-xs text-[#24364C]/66">
          Monthly trend of people considering this plan.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={(props) => <ChartTooltipContent {...props} />}
            />
            <Line
              dataKey="interest"
              type="monotone"
              stroke="var(--color-interest)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

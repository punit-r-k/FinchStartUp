"use client";

import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
        <h1 className="text-4xl font-extrabold tracking-tight text-[#24364C] dark:text-[#fff7ef] lg:text-5xl">
          Pricing that Scales with You
        </h1>
        <p className="mt-4 text-sm text-[#24364C]/72 dark:text-[#fff7ef]/72 md:text-base">
          Choose the right plan to unlock powerful tools and insights.
          Transparent pricing built for modern teams.
        </p>
      </div>

      <div className="grid rounded-xl border border-[#24364C]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(249,243,236,0.92))] text-[#24364C] shadow-[0_20px_56px_rgba(36,54,76,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(24,37,54,0.94),rgba(18,29,43,0.96))] dark:text-[#fff7ef] dark:shadow-[0_20px_56px_rgba(0,0,0,0.28)] md:grid-cols-6">
        <div className="flex flex-col justify-between border-b border-[#24364C]/10 p-6 dark:border-white/10 md:col-span-2 md:border-r md:border-b-0">
          <div className="space-y-4">
            <div>
              <h2 className="backdrop-blur-2 inline rounded-[2px] p-1 text-xl font-semibold">
                Freemium
              </h2>
              <span className="my-3 block text-3xl font-bold text-[#E8401C]">
                $0
              </span>
              <p className="text-sm text-[#24364C]/72 dark:text-[#fff7ef]/72">
                Best for testing & understanding
              </p>
            </div>

            <Button asChild variant="outline" className="w-full border-[#24364C]/18 bg-white/72 text-[#24364C] hover:bg-white hover:text-[#24364C] dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef] dark:hover:bg-white/10 dark:hover:text-white">
              <a href="#waitlist">Get Started</a>
            </Button>

            <div className="my-6 h-px w-full bg-[#24364C]/12 dark:bg-white/10" />

            <ul className="space-y-3 text-sm text-[#24364C]/74 dark:text-[#fff7ef]/74">
              {[
                "Basic Analytics Dashboard",
                "5GB Cloud Storage",
                "Email & Chat Support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-[#E8401C]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="z-10 grid gap-8 overflow-hidden p-6 md:col-span-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Premium</h2>
              <span className="my-3 block text-3xl font-bold text-[#E8401C]">
                $299
              </span>
              <p className="text-sm text-[#24364C]/72 dark:text-[#fff7ef]/72">
                Perfect for small businesses & startups
              </p>
            </div>
            <div className="h-fit w-full rounded-lg border border-[#24364C]/10 bg-white/72 p-2 shadow-[0_14px_36px_rgba(36,54,76,0.06)] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
              <InterestChart />
            </div>
          </div>

          <div className="relative w-full">
            <div className="text-sm font-medium">Everything in Free plus:</div>
            <ul className="mt-4 space-y-3 text-sm text-[#24364C]/74 dark:text-[#fff7ef]/74">
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
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-[#58CC02]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid w-full grid-cols-2 gap-2.5">
              <Button asChild variant="landingPrimary">
                <a href="#waitlist">Get Started</a>
              </Button>
              <Button asChild variant="outline" className="border-[#24364C]/18 bg-white/72 text-[#24364C] hover:bg-white hover:text-[#24364C] dark:border-white/10 dark:bg-white/6 dark:text-[#fff7ef] dark:hover:bg-white/10 dark:hover:text-white">
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
      color: "var(--chart-4)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="gap-0 border-[#24364C]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(250,245,239,0.96))] py-0 shadow-none dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(30,45,65,0.96),rgba(22,35,51,0.94))]">
      <CardHeader className="space-y-0 border-b border-[#24364C]/10 p-3 dark:border-white/10">
        <CardTitle className="text-lg text-[#24364C] dark:text-[#fff7ef]">Plan Popularity</CardTitle>
        <CardDescription className="text-xs text-[#24364C]/66 dark:text-[#fff7ef]/62">
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

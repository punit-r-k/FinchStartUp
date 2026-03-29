"use client";

export type ClientErrorPayload = {
  message: string;
  name?: string;
  stack?: string | null;
  source?: string | null;
  componentStack?: string | null;
  level?: "error" | "warning";
};

export function reportClientError(payload: ClientErrorPayload) {
  if (typeof window === "undefined") return;
  const method = payload.level === "warning" ? "warn" : "error";
  console[method]("Finch client error", payload);
}

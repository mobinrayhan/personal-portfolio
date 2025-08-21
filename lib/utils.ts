import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PRODUCTION_SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://mobin.dev"
    : "http://localhost:3000";

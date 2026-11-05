import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve conflicting Tailwind utilities.
 * Later classes win, so a `className` prop can always override a component default.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

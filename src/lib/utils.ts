import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lcgRandom(n: number, seed: number): number[] {
  let current = Math.floor(seed * 2147483647);
  const arr = new Array(n);

  for (let i = 0; i < n; i++) {
    current = (current * 1664525 + 1013904223) % 2147483647;
    arr[i] = current / 2147483647;
  }
  return arr;
}

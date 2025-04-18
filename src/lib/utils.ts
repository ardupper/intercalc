import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sliderUpdate<T>(setter: (value: T) => void) {
  return (value: T[]) => {
    setter(value[0]);
  };
}

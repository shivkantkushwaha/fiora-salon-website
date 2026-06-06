import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-[var(--luxury-gold)] text-[var(--luxury-black)] shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:bg-[#d7b45d] focus-visible:outline-[var(--luxury-gold)]",
        variant === "secondary" &&
          "border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[var(--luxury-black)] focus-visible:outline-white",
        variant === "ghost" &&
          "bg-transparent text-[var(--luxury-black)] hover:bg-black/5 focus-visible:outline-[var(--luxury-gold)]",
        className
      )}
      {...props}
    />
  );
}

"use client";

import React from "react";

type KeyVariant = "number" | "operator" | "action";

export type KeyProps = {
  label: React.ReactNode;
  ariaLabel?: string;
  onPress: () => void;
  variant?: KeyVariant;
  disabled?: boolean;
};

export function Key({
  label,
  ariaLabel,
  onPress,
  variant = "number",
  disabled = false,
}: KeyProps) {
  const base = [
    "rounded-md border px-4 py-3 text-lg font-medium",
    "transition-colors shadow-sm backdrop-blur-sm",
    "focus-visible:outline-none focus-visible:ring-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" ");
  const schemeByVariant: Record<KeyVariant, string> = {
    number:
      "border-zinc-300/60 bg-white/40 text-zinc-900 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 hover:bg-white/50 active:bg-white/60 dark:hover:bg-white/15 dark:active:bg-white/20 focus-visible:ring-blue-600",
    operator:
      "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
    action:
      "border-blue-300/60 bg-blue-500/20 text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-100 hover:bg-blue-500/30 active:bg-blue-600/30 dark:hover:bg-blue-400/20 dark:active:bg-blue-500/25 focus-visible:ring-blue-600",
  };
  const className = `${base} ${schemeByVariant[variant]}`;
  return (
    <button
      type="button"
      className={className}
      onClick={onPress}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Key;



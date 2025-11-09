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
  const base =
    "rounded-md border px-4 py-3 text-lg font-medium focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const schemeByVariant: Record<KeyVariant, string> = {
    number:
      "border-zinc-300 bg-white text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus-visible:ring-blue-500",
    operator:
      "border-zinc-300 bg-blue-600 text-white dark:border-zinc-700 dark:bg-blue-600 dark:text-white hover:bg-blue-500 active:bg-blue-700 dark:hover:bg-blue-500 dark:active:bg-blue-700 focus-visible:ring-blue-700",
    action:
      "border-zinc-300 bg-blue-600 text-white dark:border-zinc-700 dark:bg-blue-600 dark:text-white hover:bg-blue-500 active:bg-blue-700 dark:hover:bg-blue-500 dark:active:bg-blue-700 focus-visible:ring-blue-700",
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



"use client";

import React from "react";

type DisplayAriaLabels = {
  expression?: string;
  result?: string;
  region?: string;
};

export function Display(props: {
  expression: string;
  result: string;
  announcement?: string;
  ariaLabels?: DisplayAriaLabels;
}) {
  const { expression, result, announcement = "", ariaLabels } = props;
  return (
    <section
      className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,.25)] backdrop-blur-[2px] focus-within:ring-2 ring-[#34d399]"
      aria-labelledby="display-heading"
      role="group"
      aria-label={ariaLabels?.region ?? "Calculator display"}
    >
      <h2 id="display-heading" className="sr-only">
        Display
      </h2>
      <div
        className="min-h-5 text-right text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap"
        aria-live="off"
        aria-label={ariaLabels?.expression ?? "Current expression"}
        title={expression}
      >
        {expression}
      </div>
      <div
        className="mt-1 min-h-10 select-none text-right text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        aria-label={ariaLabels?.result ?? "Current result"}
      >
        {result}
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>
    </section>
  );
}

export default Display;



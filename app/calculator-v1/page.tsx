"use client";

import React, { useId, useMemo, useState } from "react";

function isNumericString(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === "") return false;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed);
}

export default function CalculatorPage() {
  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");

  const idA = useId();
  const idB = useId();
  const helpIdA = `${idA}-help`;
  const helpIdB = `${idB}-help`;
  const errorIdA = `${idA}-error`;
  const errorIdB = `${idB}-error`;

  const trimmedA = valueA.trim();
  const trimmedB = valueB.trim();

  const aHasError = trimmedA !== "" && !isNumericString(trimmedA);
  const bHasError = trimmedB !== "" && !isNumericString(trimmedB);

  const aIsValid = !aHasError && isNumericString(trimmedA);
  const bIsValid = !bHasError && isNumericString(trimmedB);

  const product = useMemo(() => {
    if (!aIsValid || !bIsValid) return null;
    return Number(trimmedA) * Number(trimmedB);
  }, [aIsValid, bIsValid, trimmedA, trimmedB]);

  const describedByA = [helpIdA, aHasError ? errorIdA : ""]
    .filter(Boolean)
    .join(" ");
  const describedByB = [helpIdB, bHasError ? errorIdB : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start gap-10 py-16 px-6 bg-white dark:bg-black sm:items-start">
        <header className="w-full">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Calculator — Multiplication
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Enter two numbers to see their product.
          </p>
        </header>

        <section
          aria-labelledby="inputs-heading"
          className="w-full rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h2 id="inputs-heading" className="sr-only">
            Inputs
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor={idA}
                className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                First number
              </label>
              <input
                id={idA}
                inputMode="decimal"
                type="text"
                value={valueA}
                onChange={(e) => setValueA(e.target.value)}
                aria-invalid={aHasError || undefined}
                aria-describedby={describedByA || undefined}
                className={[
                  "rounded-md border px-3 py-2",
                  "border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400",
                  "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                ].join(" ")}
                placeholder="e.g., 2.5"
                autoComplete="off"
              />
              <p
                id={helpIdA}
                className="mt-1 text-xs text-zinc-600 dark:text-zinc-400"
              >
                Accepts integers and decimals. Use a dot for decimals.
              </p>
              {aHasError && (
                <p
                  id={errorIdA}
                  aria-live="polite"
                  className="mt-1 text-sm text-red-600"
                >
                  Please enter a valid number.
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor={idB}
                className="mb-1 text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                Second number
              </label>
              <input
                id={idB}
                inputMode="decimal"
                type="text"
                value={valueB}
                onChange={(e) => setValueB(e.target.value)}
                aria-invalid={bHasError || undefined}
                aria-describedby={describedByB || undefined}
                className={[
                  "rounded-md border px-3 py-2",
                  "border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400",
                  "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                ].join(" ")}
                placeholder="e.g., 4"
                autoComplete="off"
              />
              <p
                id={helpIdB}
                className="mt-1 text-xs text-zinc-600 dark:text-zinc-400"
              >
                Accepts integers and decimals. Use a dot for decimals.
              </p>
              {bHasError && (
                <p
                  id={errorIdB}
                  aria-live="polite"
                  className="mt-1 text-sm text-red-600"
                >
                  Please enter a valid number.
                </p>
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="result-heading"
          className="w-full rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <h2
            id="result-heading"
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Result
          </h2>
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="mt-2 min-h-6 text-2xl font-medium text-zinc-900 dark:text-zinc-50"
          >
            {product !== null ? product : "—"}
          </div>
        </section>
      </main>
    </div>
  );
}

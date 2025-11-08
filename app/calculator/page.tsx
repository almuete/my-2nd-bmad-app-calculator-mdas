"use client";

import React, { useEffect, useMemo, useState } from "react";

function parseFiniteNumber(value: string): number | null {
  const trimmed = value.trim();
  if (
    trimmed === "" ||
    trimmed === "-" ||
    trimmed === "." ||
    trimmed === "-."
  ) {
    return null;
  }
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

export default function CalculatorPage() {
  const [entry, setEntry] = useState<string>("");
  const [operandA, setOperandA] = useState<number | null>(null);
  const [operator, setOperator] = useState<"×" | null>(null);
  const [lastResult, setLastResult] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState<string>("");

  const expression = useMemo(() => {
    if (operandA === null || !operator) return "";
    if (entry !== "") return `${operandA} ${operator} ${entry}`;
    return `${operandA} ${operator}`;
  }, [operandA, operator, entry]);

  const displayValue = useMemo(() => {
    return entry !== ""
      ? entry
      : lastResult !== null
      ? String(lastResult)
      : "0";
  }, [entry, lastResult]);

  function appendDigit(d: string) {
    setEntry((prev) => (prev === "0" ? d : prev + d));
  }

  function appendDot() {
    setEntry((prev) => {
      if (prev.includes(".")) return prev;
      if (prev === "" || prev === "-") return prev === "-" ? "-0." : "0.";
      return prev + ".";
    });
  }

  function pressMinus() {
    setEntry((prev) => {
      if (prev === "") return "-";
      if (prev === "-") return "";
      return prev;
    });
  }

  function pressBackspace() {
    setEntry((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  }

  function pressClear() {
    setEntry("");
    setOperandA(null);
    setOperator(null);
    setLastResult(null);
    setAnnouncement("");
  }

  function pressMultiply() {
    const asNumber = parseFiniteNumber(entry);
    if (operandA === null) {
      if (asNumber === null) return; // need a valid first operand
      setOperandA(asNumber);
      setOperator("×");
      setEntry("");
      return;
    }
    // Chaining multiply if a second operand is present
    if (operator === "×" && asNumber !== null) {
      const next = operandA * asNumber;
      setOperandA(next);
      setOperator("×");
      setEntry("");
      setLastResult(next);
      setAnnouncement(""); // do not announce on operator press
    } else {
      // operator change without new entry
      setOperator("×");
    }
  }

  function pressEquals() {
    if (operator !== "×" || operandA === null) return;
    const b = parseFiniteNumber(entry);
    if (b === null) return;
    const result = operandA * b;
    setLastResult(result);
    setEntry("");
    setOperator(null);
    setOperandA(result);
    setAnnouncement(String(result)); // announce only on equals
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const { key } = e;
      if (key >= "0" && key <= "9") {
        e.preventDefault();
        appendDigit(key);
        return;
      }
      if (key === ".") {
        e.preventDefault();
        appendDot();
        return;
      }
      if (key === "*") {
        e.preventDefault();
        pressMultiply();
        return;
      }
      if (key === "Enter") {
        e.preventDefault();
        pressEquals();
        return;
      }
      if (key === "Backspace") {
        e.preventDefault();
        pressBackspace();
        return;
      }
      if (key === "Escape") {
        e.preventDefault();
        pressClear();
        return;
      }
      if (key === "-") {
        e.preventDefault();
        pressMinus();
        return;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const buttonBase = [
    "rounded-md border px-4 py-3 text-lg font-medium",
    "border-zinc-300 bg-white text-zinc-900",
    "dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100",
    "hover:bg-zinc-50 dark:hover:bg-zinc-800",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
  ].join(" ");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-md flex-col items-stretch justify-start gap-6 py-10 px-4 bg-white dark:bg-black">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Calculator — Multiplication
          </h1>
        </header>

        <section
          className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          aria-labelledby="display-heading"
        >
          <h2 id="display-heading" className="sr-only">
            Display
          </h2>
          <div
            className="min-h-5 text-right text-sm text-zinc-600 dark:text-zinc-400"
            aria-live="off"
          >
            {expression}
          </div>
          <div className="mt-1 min-h-10 select-none text-right text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {displayValue}
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

        <section
          className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          aria-labelledby="keypad-heading"
        >
          <h2 id="keypad-heading" className="sr-only">
            Keypad
          </h2>
          <div className="grid grid-cols-4 gap-3">
            <button
              type="button"
              className={buttonBase}
              onClick={pressClear}
              aria-label="Clear"
            >
              C
            </button>
            <button
              type="button"
              className={buttonBase}
              onClick={pressMultiply}
              aria-label="Multiply"
            >
              ×
            </button>
            <button
              type="button"
              className={buttonBase}
              onClick={pressEquals}
              aria-label="Equals"
            >
              =
            </button>
            <button
              type="button"
              className={buttonBase}
              onClick={appendDot}
              aria-label="Decimal point"
            >
              .
            </button>

            {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((d) => (
              <button
                key={d}
                type="button"
                className={buttonBase}
                onClick={() => appendDigit(d)}
                aria-label={`Digit ${d}`}
              >
                {d}
              </button>
            ))}

            <button
              type="button"
              className={`${buttonBase} col-span-2`}
              onClick={() => appendDigit("0")}
              aria-label="Digit 0"
            >
              0
            </button>
            <div aria-hidden="true" />
            <div aria-hidden="true" />
          </div>
        </section>
      </main>
    </div>
  );
}

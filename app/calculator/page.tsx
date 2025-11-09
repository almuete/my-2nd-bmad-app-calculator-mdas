"use client";

import React, { useEffect, useMemo, useState } from "react";
import Display from "../../components/calculator/Display";
import ActionBar from "../../components/calculator/ActionBar";
import OperatorPad from "../../components/calculator/OperatorPad";
import Keypad from "../../components/calculator/Keypad";

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

  const clearButtonBase = [
    "rounded-md border px-4 py-3 text-lg font-medium",
    "border-zinc-300",
    "dark:border-zinc-700",
    "focus-visible:outline-none focus-visible:ring-2",
    "bg-orange-600 text-white",
    "hover:bg-orange-500 hover:text-white active:bg-orange-700",
    "dark:bg-orange-600 dark:hover:bg-orange-500 dark:active:bg-orange-700",
    "focus-visible:ring-orange-700",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" ");

  const accentButtonBase = [
    "rounded-md border px-4 py-3 text-lg font-medium",
    "border-zinc-300",
    "dark:border-zinc-700",
    "focus-visible:outline-none focus-visible:ring-2",
    "bg-orange-600 text-white",
    "hover:bg-orange-500 hover:text-white active:bg-orange-700",
    "dark:bg-orange-600 dark:hover:bg-orange-500 dark:active:bg-orange-700",
    "focus-visible:ring-orange-700",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" ");
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-md flex-col items-stretch justify-start gap-6 py-10 px-4 bg-white dark:bg-black">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Calculator — Multiplication
          </h1>
        </header>

        <Display
          expression={expression}
          result={displayValue}
          announcement={announcement}
          ariaLabels={{
            region: "Calculator display",
            expression: "Current expression",
            result: "Current result",
          }}
        />

        <section
          className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          aria-labelledby="keypad-heading"
        >
          <h2 id="keypad-heading" className="sr-only">
            Keypad
          </h2>
          <div className="flex flex-col gap-4">
            <ActionBar
              onClear={pressClear}
              onBackspace={pressBackspace}
              onEquals={pressEquals}
            />
            <OperatorPad onMultiply={pressMultiply} />
            <Keypad onDigit={appendDigit} onDot={appendDot} />
          </div>
        </section>
      </main>
    </div>
  );
}

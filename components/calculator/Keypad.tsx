"use client";

import React from "react";
import Key from "./Key";

export function Keypad(props: {
  onDigit: (d: string) => void;
  onDot: () => void;
}) {
  const { onDigit, onDot } = props;
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div
      className="grid grid-cols-4 gap-3"
      role="group"
      aria-label="Numeric keypad"
    >
      {/* Dot key */}
      <Key
        label="."
        ariaLabel="Decimal point"
        onPress={onDot}
        variant="number"
      />
      {/* Render digits */}
      {digits.map((d) => (
        <Key
          key={d}
          label={d}
          ariaLabel={`Digit ${d}`}
          onPress={() => onDigit(d)}
          variant="number"
        />
      ))}
      {/* Spacers for layout balance if needed */}
      <div aria-hidden="true" />
      <div aria-hidden="true" />
    </div>
  );
}

export default Keypad;



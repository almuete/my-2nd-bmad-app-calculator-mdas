"use client";

import React from "react";
import Key from "./Key";

export function Keypad(props: {
  onDigit: (d: string) => void;
  onDot: () => void;
}) {
  const { onDigit, onDot } = props;
  // Descending order 9 → 0 per client request
  const digits = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  return (
    <div
      className="grid grid-cols-4 gap-3"
      role="group"
      aria-label="Numeric keypad"
    >
      {/* Render digits 9..0 */}
      {digits.map((d) => (
        <Key
          key={d}
          label={d}
          ariaLabel={`Digit ${d}`}
          onPress={() => onDigit(d)}
          variant="number"
        />
      ))}
      {/* Place decimal point to the right of 0 in the final row */}
      <Key
        label="."
        ariaLabel="Decimal point"
        onPress={onDot}
        variant="number"
      />
      {/* Spacer to complete the 4-column grid row */}
      <div aria-hidden="true" />
    </div>
  );
}

export default Keypad;



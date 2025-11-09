"use client";

import React from "react";
import Key from "./Key";

export function ActionBar(props: {
  onClear: () => void;
  onBackspace: () => void;
  onEquals: () => void;
}) {
  const { onClear, onBackspace, onEquals } = props;
  return (
    <div
      role="group"
      aria-label="Action keys"
      className="grid grid-cols-3 gap-3"
    >
      <Key label="C" ariaLabel="Clear" onPress={onClear} variant="action" />
      <Key label="⌫" ariaLabel="Backspace" onPress={onBackspace} variant="action" />
      <Key label="=" ariaLabel="Equals" onPress={onEquals} variant="action" />
    </div>
  );
}

export default ActionBar;



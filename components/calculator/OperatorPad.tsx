"use client";

import React from "react";
import Key from "./Key";

export function OperatorPad(props: { onMultiply: () => void }) {
  const { onMultiply } = props;
  return (
    <div role="group" aria-label="Operator keys" className="grid grid-cols-1 gap-3">
      <Key
        label="×"
        ariaLabel="Multiply"
        onPress={onMultiply}
        variant="operator"
      />
    </div>
  );
}

export default OperatorPad;



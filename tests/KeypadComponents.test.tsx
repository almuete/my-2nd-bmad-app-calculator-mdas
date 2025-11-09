import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Key from "../components/calculator/Key";
import Keypad from "../components/calculator/Keypad";
import OperatorPad from "../components/calculator/OperatorPad";
import ActionBar from "../components/calculator/ActionBar";

describe("Key component", () => {
  it("invokes onPress when clicked", () => {
    const onPress = vi.fn();
    render(<Key label="1" ariaLabel="Digit 1" onPress={onPress} variant="number" />);
    fireEvent.click(screen.getByLabelText("Digit 1"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

describe("Keypad", () => {
  it("renders digits and dot and calls callbacks", () => {
    const onDigit = vi.fn();
    const onDot = vi.fn();
    render(<Keypad onDigit={onDigit} onDot={onDot} />);

    fireEvent.click(screen.getByLabelText("Decimal point"));
    expect(onDot).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByLabelText("Digit 7"));
    expect(onDigit).toHaveBeenCalledWith("7");
  });

  it("applies cyan styles to digits and decimal", () => {
    const onDigit = vi.fn();
    const onDot = vi.fn();
    render(<Keypad onDigit={onDigit} onDot={onDot} />);

    const digit = screen.getByLabelText("Digit 7");
    const dot = screen.getByLabelText("Decimal point");
    const zero = screen.getByLabelText("Digit 0");

    expect(digit).toHaveClass("bg-cyan-500");
    expect(digit).toHaveClass("text-white");
    expect(digit).toHaveClass("hover:bg-cyan-600");
    expect(digit).toHaveClass("active:bg-cyan-700");
    expect(digit).toHaveClass("focus-visible:ring-cyan-600");

    expect(dot).toHaveClass("bg-cyan-500");
    expect(dot).toHaveClass("text-white");
    expect(dot).toHaveClass("hover:bg-cyan-600");
    expect(dot).toHaveClass("active:bg-cyan-700");
    expect(dot).toHaveClass("focus-visible:ring-cyan-600");

    expect(zero).toHaveClass("bg-cyan-500");
  });
});

describe("OperatorPad", () => {
  it("calls multiply on press", () => {
    const onMultiply = vi.fn();
    render(<OperatorPad onMultiply={onMultiply} />);
    fireEvent.click(screen.getByLabelText("Multiply"));
    expect(onMultiply).toHaveBeenCalledTimes(1);
  });
});

describe("ActionBar", () => {
  it("calls clear, backspace, equals", () => {
    const onClear = vi.fn();
    const onBackspace = vi.fn();
    const onEquals = vi.fn();
    render(
      <ActionBar
        onClear={onClear}
        onBackspace={onBackspace}
        onEquals={onEquals}
      />
    );
    fireEvent.click(screen.getByLabelText("Clear"));
    fireEvent.click(screen.getByLabelText("Backspace"));
    fireEvent.click(screen.getByLabelText("Equals"));
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onBackspace).toHaveBeenCalledTimes(1);
    expect(onEquals).toHaveBeenCalledTimes(1);
  });
});



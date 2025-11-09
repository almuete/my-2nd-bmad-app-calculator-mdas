import { render, screen } from "@testing-library/react";
import React from "react";
import Display from "../components/calculator/Display";

describe("Display", () => {
  it("renders expression and result", () => {
    render(
      <Display
        expression="12 × 3"
        result="36"
        announcement=""
        ariaLabels={{ expression: "Expression", result: "Result" }}
      />
    );
    expect(screen.getByLabelText("Expression")).toHaveTextContent("12 × 3");
    expect(screen.getByLabelText("Result")).toHaveTextContent("36");
  });

  it("sets aria-live polite for announcement region", () => {
    render(
      <Display expression="" result="0" announcement="42" />
    );
    const live = screen.getByRole("status");
    expect(live).toHaveAttribute("aria-live", "polite");
    expect(live).toHaveTextContent("42");
  });

  it("truncates long expressions but exposes full title", () => {
    const long = "9".repeat(200);
    render(<Display expression={long} result="0" />);
    const expr = screen.getByLabelText("Current expression");
    expect(expr).toHaveAttribute("title", long);
  });
});



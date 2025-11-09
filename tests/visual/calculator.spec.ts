import { test, expect } from "@playwright/test";

test.describe("Calculator UI visual", () => {
  test("calculator page renders", async ({ page }) => {
    await page.goto("/calculator");
    // Wait for heading text to ensure page ready
    await expect(page.getByRole("heading", { name: "Calculator — Multiplication" })).toBeVisible();
    await expect(page).toHaveScreenshot("calculator-desktop.png", {
      fullPage: true,
      maxDiffPixels: 200, // allow tiny rendering diffs
    });
  });
});



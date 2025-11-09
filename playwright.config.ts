import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.STAGING_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./tests/visual",
  timeout: 60_000,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 7"] },
    },
  ],
  reporter: [["list"]],
});



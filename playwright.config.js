// @ts-check
import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  // Tell Playwright how to start web server
  webServer: {
    // Command to run
    command: "npm run start",
    // Server URL
    url: "http://127.0.0.1:5500",
    // Don't restart the server if it's already running
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL: "http://127.0.0.1:5500",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

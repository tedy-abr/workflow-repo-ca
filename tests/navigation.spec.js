import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("User can navigate from home to a venue details page", async ({
    page,
  }) => {
    await page.route(
      "https://api.noroff.dev/api/v1/holidaze/venues",
      (route) => {
        route.fulfill({
          status: 200,
          json: [
            {
              id: "123",
              name: "Fake Venue",
              media: ["https://placehold.co/400x400"],
            },
          ],
        });
      },
    );

    await page.goto("/");
    const firstVenue = page.locator('a[href^="/venue/"]').first();
    await expect(firstVenue).toBeVisible();
    await page.route(
      "https://api.noroff.dev/api/v1/holidaze/venues/123",
      (route) => {
        route.fulfill({
          status: 200,
          json: { id: "123", name: "Fake Venue Details" },
        });
      },
    );

    await firstVenue.click();
    const heading = page.getByRole("heading", { name: /Fake Venue Details/i });
    await expect(heading).toBeVisible();
  });
});

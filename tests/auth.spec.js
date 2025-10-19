import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("User can log in successfully with valid credentials", async ({
    page,
  }) => {
    await page.route(
      "https://api.noroff.dev/api/v1/holidaze/auth/login",
      (route) => {
        route.fulfill({
          status: 200,
          json: {
            name: "TestUser",
            email: "test@example.com",
            accessToken: "fake_token",
          },
        });
      },
    );

    await page.goto("/login/");
    await page.locator('input[name="email"]').fill("student@stud.noroff.no");
    await page.locator('input[name="password"]').fill("password123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForURL("/");
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.route(
      "https://api.noroff.dev/api/v1/holidaze/auth/login",
      (route) => {
        route.fulfill({
          status: 401,
          json: { errors: [{ message: "Invalid credentials" }] },
        });
      },
    );

    await page.goto("/login/");
    await page.locator('input[name="email"]').fill("student@stud.noroff.no");
    await page.locator('input[name="password"]').fill("wrong-password");
    await page.getByRole("button", { name: "Login" }).click();

    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toContainText("Invalid credentials");
  });
});

import { describe, test, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  test("returns null when no user is in storage", () => {
    const username = getUsername();
    expect(username).toBeNull();
  });
  test("returns the username when a user is in storage", () => {
    const user = { name: "TestUser" };
    saveUser(user);
    const username = getUsername();
    expect(username).toBe("TestUser");
  });
});

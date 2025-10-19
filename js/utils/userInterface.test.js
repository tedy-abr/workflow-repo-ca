import { describe, test, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  test("returns true for root path on '/'", () => {
    const href = "/";
    const currentPath = "/";
    expect(isActivePath(href, currentPath)).toBe(true);
  });
  test("returns true for root path on '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";
    expect(isActivePath(href, currentPath)).toBe(true);
  });
  test("returns true when current path includes the href", () => {
    const href = "/profile";
    const currentPath = "/profile/edit";
    expect(isActivePath(href, currentPath)).toBe(true);
  });
  test("returns false when paths do not match", () => {
    const href = "/login";
    const currentPath = "/profile";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
  test("returns false when root path is not active", () => {
    const href = "/";
    const currentPath = "/login";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});

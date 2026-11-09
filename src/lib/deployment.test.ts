import { readFileSync } from "node:fs";
import { afterEach, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

it("produces static assets for Cloudflare without requiring an image server", async () => {
  vi.stubEnv("WORKERS_CI", "1");
  const { default: config } = await import("../../next.config");
  const worker = JSON.parse(readFileSync("wrangler.json", "utf8"));

  expect(config.output).toBe("export");
  expect(config.images?.unoptimized).toBe(true);
  expect(worker.assets.directory).toBe("./out");
  expect(worker.assets.not_found_handling).toBe("404-page");
});

it("keeps the normal Next.js server build available locally", async () => {
  vi.stubEnv("WORKERS_CI", "");
  const { default: config } = await import("../../next.config");

  expect(config.output).toBeUndefined();
  expect(config.images?.unoptimized).not.toBe(true);
});

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { readFileSync, existsSync, unlinkSync, mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { logEntry, safeLogEntry, LOG_ACTIONS, type LogAction } from "./log";

// ─── Test helpers ───────────────────────────────────────────────────

let tmpDir: string;
let logPath: string;

beforeEach(() => {
  // Fresh tmp dir per test so tests don't interfere
  tmpDir = mkdtempSync(join(tmpdir(), "zuhn-log-test-"));
  logPath = join(tmpDir, "log.md");
});

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true });
});

// ─── Tests ──────────────────────────────────────────────────────────

describe("logEntry", () => {
  it("creates the file on first entry", () => {
    expect(existsSync(logPath)).toBe(false);
    logEntry({
      action: "ingest",
      scope: "SRC-260408-0001",
      body: "Test ingest",
      logPath,
    });
    expect(existsSync(logPath)).toBe(true);
  });

  it("writes entries in the locked format", () => {
    logEntry({
      action: "compress",
      scope: "startups/fundraising",
      body: "Created 12 principles from 103 insights. Key theme: blended financing over pure equity.",
      logPath,
    });
    const content = readFileSync(logPath, "utf-8");
    // Header line format: ## [YYYY-MM-DD] action | scope
    expect(content).toMatch(/## \[\d{4}-\d{2}-\d{2}\] compress \| startups\/fundraising/);
    expect(content).toContain("Created 12 principles from 103 insights.");
  });

  it("appends in order, never overwriting existing content", () => {
    logEntry({ action: "predict", scope: "PRED-260408-AAAA", body: "First entry", logPath });
    logEntry({ action: "predict", scope: "PRED-260408-BBBB", body: "Second entry", logPath });
    logEntry({ action: "resolve", scope: "PRED-260322-CCCC", body: "Third entry", logPath });

    const content = readFileSync(logPath, "utf-8");
    const firstIdx = content.indexOf("First entry");
    const secondIdx = content.indexOf("Second entry");
    const thirdIdx = content.indexOf("Third entry");

    expect(firstIdx).toBeGreaterThan(0);
    expect(secondIdx).toBeGreaterThan(firstIdx);
    expect(thirdIdx).toBeGreaterThan(secondIdx);
  });

  it("accepts all canonical actions", () => {
    const actions: LogAction[] = [
      "ingest",
      "extract",
      "compress",
      "predict",
      "decide",
      "resolve",
      "tension",
    ];
    for (const action of actions) {
      logEntry({ action, scope: `scope-${action}`, body: `body for ${action}`, logPath });
    }
    const content = readFileSync(logPath, "utf-8");
    for (const action of actions) {
      expect(content).toContain(`] ${action} | scope-${action}`);
    }
  });

  it("rejects invalid actions", () => {
    expect(() =>
      logEntry({
        // @ts-expect-error — invalid action on purpose
        action: "invalid-action",
        scope: "test",
        body: "test body",
        logPath,
      })
    ).toThrow(/invalid action/i);
  });

  it("rejects empty scope", () => {
    expect(() =>
      logEntry({ action: "ingest", scope: "", body: "test body", logPath })
    ).toThrow(/scope/i);
  });

  it("rejects empty body", () => {
    expect(() =>
      logEntry({ action: "ingest", scope: "SRC-001", body: "", logPath })
    ).toThrow(/body/i);
  });

  it("rejects whitespace-only body", () => {
    expect(() =>
      logEntry({ action: "ingest", scope: "SRC-001", body: "   \n  ", logPath })
    ).toThrow(/body/i);
  });

  it("truncates bodies longer than 3 lines with a warning", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const body = "line1\nline2\nline3\nline4\nline5";
    logEntry({ action: "compress", scope: "startups/sales", body, logPath });

    const content = readFileSync(logPath, "utf-8");
    expect(content).toContain("line1");
    expect(content).toContain("line2");
    expect(content).toContain("line3");
    expect(content).not.toContain("line4");
    expect(content).not.toContain("line5");
    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("accepts 1, 2, or 3 line bodies without warning", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    logEntry({ action: "predict", scope: "PRED-001", body: "single line", logPath });
    logEntry({ action: "predict", scope: "PRED-002", body: "line1\nline2", logPath });
    logEntry({ action: "predict", scope: "PRED-003", body: "line1\nline2\nline3", logPath });

    const content = readFileSync(logPath, "utf-8");
    expect(content).toContain("single line");
    expect(content).toContain("line1\nline2\n");
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("uses today's date in ISO format", () => {
    logEntry({ action: "ingest", scope: "SRC-001", body: "test", logPath });
    const today = new Date().toISOString().slice(0, 10);
    const content = readFileSync(logPath, "utf-8");
    expect(content).toContain(`[${today}]`);
  });

  it("separates entries with blank lines for readability", () => {
    logEntry({ action: "ingest", scope: "SRC-001", body: "first", logPath });
    logEntry({ action: "ingest", scope: "SRC-002", body: "second", logPath });

    const content = readFileSync(logPath, "utf-8");
    // Between the two entries there should be at least one blank line
    expect(content).toMatch(/first\n\n## \[/);
  });

  it("includes a file header on first creation", () => {
    logEntry({ action: "ingest", scope: "SRC-001", body: "test", logPath });
    const content = readFileSync(logPath, "utf-8");
    // First line should be a header about what this file is
    const firstLine = content.split("\n")[0];
    expect(firstLine).toMatch(/^#\s+/); // starts with a markdown h1
  });

  it("does NOT duplicate the file header on subsequent writes", () => {
    logEntry({ action: "ingest", scope: "SRC-001", body: "first", logPath });
    logEntry({ action: "ingest", scope: "SRC-002", body: "second", logPath });
    logEntry({ action: "ingest", scope: "SRC-003", body: "third", logPath });

    const content = readFileSync(logPath, "utf-8");
    // Exactly one h1 header
    const h1Matches = content.match(/^#\s+/gm) || [];
    expect(h1Matches.length).toBe(1);
  });

  it("exports LOG_ACTIONS as the canonical enum", () => {
    expect(LOG_ACTIONS).toEqual([
      "ingest",
      "extract",
      "compress",
      "predict",
      "decide",
      "resolve",
      "tension",
    ]);
  });
});

describe("safeLogEntry", () => {
  it("writes valid entries normally", () => {
    safeLogEntry({
      action: "ingest",
      scope: "SRC-260408-0001",
      body: "Test entry",
      logPath,
    });
    const content = readFileSync(logPath, "utf-8");
    expect(content).toContain("SRC-260408-0001");
    expect(content).toContain("Test entry");
  });

  it("does NOT throw on validation errors — warns and continues", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    // Invalid action — would throw in logEntry, should NOT throw in safeLogEntry
    expect(() =>
      safeLogEntry({
        // @ts-expect-error — invalid action on purpose
        action: "not-a-real-action",
        scope: "test",
        body: "body",
        logPath,
      })
    ).not.toThrow();

    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("does NOT throw on empty body — warns and continues", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    expect(() =>
      safeLogEntry({
        action: "ingest",
        scope: "SRC-001",
        body: "",
        logPath,
      })
    ).not.toThrow();

    expect(warnSpy).toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it("does not write an entry when validation fails", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    safeLogEntry({
      action: "ingest",
      scope: "SRC-001",
      body: "", // invalid
      logPath,
    });

    // File should not exist because the write never happened
    expect(existsSync(logPath)).toBe(false);
    warnSpy.mockRestore();
  });
});

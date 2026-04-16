import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getDaemonStep, ROUTED_STATUSES, findMissingProducers } from "./daemon-routing";

describe("getDaemonStep", () => {
  it("routes fast-mode extracting items to extract", () => {
    expect(
      getDaemonStep({
        status: "extracting",
        agent_a_file: null,
      })
    ).toBe("extract");
  });

  it("routes heavy-mode extracting_a items to agent A before agent B", () => {
    expect(
      getDaemonStep({
        status: "extracting_a",
        agent_a_file: null,
      })
    ).toBe("extract_a");

    expect(
      getDaemonStep({
        status: "extracting_a",
        agent_a_file: "/tmp/zuhn-extract-A-SRC-260414-ABCD.json",
      })
    ).toBe("extract_b");
  });

  it("routes the remaining pipeline states correctly", () => {
    expect(getDaemonStep({ status: "pending", agent_a_file: null })).toBe("prefilter");
    expect(getDaemonStep({ status: "ingesting", agent_a_file: null })).toBe("ingest");
    expect(getDaemonStep({ status: "extracting_b", agent_a_file: null })).toBe("merge");
    expect(getDaemonStep({ status: "merging", agent_a_file: null })).toBe("verify");
    expect(getDaemonStep({ status: "verifying", agent_a_file: null })).toBe("deep_read");
    expect(getDaemonStep({ status: "deep_reading", agent_a_file: null })).toBe("commit");
  });

  it("returns null for terminal or unknown states", () => {
    expect(getDaemonStep({ status: "committed", agent_a_file: null })).toBeNull();
    expect(getDaemonStep({ status: "failed", agent_a_file: null })).toBeNull();
    expect(getDaemonStep({ status: "filtered", agent_a_file: null })).toBeNull();
    expect(getDaemonStep({ status: "review", agent_a_file: null })).toBeNull();
  });

  it("ROUTED_STATUSES matches the switch in getDaemonStep", () => {
    for (const status of ROUTED_STATUSES) {
      expect(
        getDaemonStep({ status, agent_a_file: null }),
        `"${status}" is in ROUTED_STATUSES but getDaemonStep returns null for it`
      ).not.toBeNull();
    }
  });

  it("every routed status has at least one updateStatus producer in daemon.ts", () => {
    const daemonSource = readFileSync(join(__dirname, "../daemon.ts"), "utf-8");
    const missing = findMissingProducers(daemonSource);
    expect(
      missing,
      `Routed statuses without updateStatus producers: ${missing.join(", ")}`
    ).toEqual([]);
  });

  it("walks the full heavy-mode pipeline from agent A through commit", () => {
    // Contract: stepExtractB must write "extracting_b" so the router invokes
    // stepMerge. Before 2026-04-14 it wrote "merging" directly, which routed to
    // stepVerify and silently discarded agent B's output.
    const heavyPath = [
      { status: "extracting_a", agent_a_file: null, expected: "extract_a" },
      {
        status: "extracting_a",
        agent_a_file: "/tmp/zuhn-extract-A-SRC-260414-ABCD.json",
        expected: "extract_b",
      },
      { status: "extracting_b", agent_a_file: null, expected: "merge" },
      { status: "merging", agent_a_file: null, expected: "verify" },
      { status: "verifying", agent_a_file: null, expected: "deep_read" },
      { status: "deep_reading", agent_a_file: null, expected: "commit" },
    ] as const;

    for (const { status, agent_a_file, expected } of heavyPath) {
      expect(getDaemonStep({ status, agent_a_file })).toBe(expected);
    }
  });
});

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  loadPredictionStatuses,
  filterPredictionsReadyForJudgment,
  type PredictionEvidenceRecord,
} from "./wake";

// ─── loadPredictionStatuses ────────────────────────────────────────────

describe("loadPredictionStatuses", () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), "wake-test-"));
  });

  afterEach(async () => {
    await rm(tempDir, { recursive: true, force: true });
  });

  it("returns an empty map when the directory does not exist", () => {
    const statuses = loadPredictionStatuses(join(tempDir, "does-not-exist"));
    expect(statuses.size).toBe(0);
  });

  it("reads id and status from each prediction file", async () => {
    await writeFile(
      join(tempDir, "active-one.md"),
      `---
id: PRED-260101-AAAA
status: active
claim: test
---
body`,
    );
    await writeFile(
      join(tempDir, "resolved-one.md"),
      `---
id: PRED-260101-BBBB
status: confirmed
claim: test
---
body`,
    );
    await writeFile(
      join(tempDir, "falsified-one.md"),
      `---
id: PRED-260101-CCCC
status: falsified
claim: test
---
body`,
    );

    const statuses = loadPredictionStatuses(tempDir);
    expect(statuses.get("PRED-260101-AAAA")).toBe("active");
    expect(statuses.get("PRED-260101-BBBB")).toBe("confirmed");
    expect(statuses.get("PRED-260101-CCCC")).toBe("falsified");
    expect(statuses.size).toBe(3);
  });

  it("silently skips malformed files without failing the batch", async () => {
    await writeFile(
      join(tempDir, "good.md"),
      `---
id: PRED-260101-AAAA
status: active
---
body`,
    );
    await writeFile(join(tempDir, "bad.md"), "not valid frontmatter at all");
    await writeFile(
      join(tempDir, "missing-id.md"),
      `---
status: active
---
body`,
    );

    const statuses = loadPredictionStatuses(tempDir);
    expect(statuses.get("PRED-260101-AAAA")).toBe("active");
    expect(statuses.size).toBe(1);
  });

  it("ignores non-markdown files", async () => {
    await writeFile(join(tempDir, "README.txt"), "not a prediction");
    await writeFile(join(tempDir, "index.json"), "{}");

    const statuses = loadPredictionStatuses(tempDir);
    expect(statuses.size).toBe(0);
  });
});

// ─── filterPredictionsReadyForJudgment ─────────────────────────────────

describe("filterPredictionsReadyForJudgment", () => {
  function makeEvidence(
    predictionId: string,
    netSignal: string,
    sourceCount: number,
  ): PredictionEvidenceRecord {
    return {
      prediction_id: predictionId,
      net_signal: netSignal,
      evidence: Array.from({ length: sourceCount }, (_, i) => ({ index: i })),
    };
  }

  it("returns the active leaning-confirmed record when all gates pass", () => {
    const evidence = [makeEvidence("PRED-AAA", "leaning_confirmed", 5)];
    const statuses = new Map([["PRED-AAA", "active"]]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(1);
    expect(ready[0].prediction_id).toBe("PRED-AAA");
  });

  it("returns the active leaning-falsified record when all gates pass", () => {
    const evidence = [makeEvidence("PRED-AAA", "leaning_falsified", 3)];
    const statuses = new Map([["PRED-AAA", "active"]]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(1);
  });

  // REGRESSION: this is the bug described in the 2026-04-09 session —
  // already-resolved predictions kept surfacing in "Your Judgment Needed"
  // every morning because the filter didn't cross-reference YAML status.
  it("excludes predictions whose YAML status is already confirmed", () => {
    const evidence = [makeEvidence("PRED-260322-4E9B", "leaning_confirmed", 5)];
    const statuses = new Map([["PRED-260322-4E9B", "confirmed"]]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(0);
  });

  it("excludes predictions whose YAML status is already falsified", () => {
    const evidence = [makeEvidence("PRED-260322-4FAA", "leaning_falsified", 6)];
    const statuses = new Map([["PRED-260322-4FAA", "falsified"]]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(0);
  });

  it("excludes predictions missing from the statuses map", () => {
    // A prediction whose file is deleted or unreadable — safer to exclude
    // than to prompt for action on an unknown state.
    const evidence = [makeEvidence("PRED-ORPHAN", "leaning_confirmed", 5)];
    const statuses = new Map<string, string>();
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(0);
  });

  it("excludes records with fewer than 3 evidence items even when active", () => {
    const evidence = [makeEvidence("PRED-AAA", "leaning_confirmed", 2)];
    const statuses = new Map([["PRED-AAA", "active"]]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready).toHaveLength(0);
  });

  it("excludes records with mixed or neutral signal", () => {
    const mixed = makeEvidence("PRED-AAA", "mixed", 5);
    const none = makeEvidence("PRED-BBB", "none", 5);
    const statuses = new Map([
      ["PRED-AAA", "active"],
      ["PRED-BBB", "active"],
    ]);
    const ready = filterPredictionsReadyForJudgment([mixed, none], statuses);
    expect(ready).toHaveLength(0);
  });

  it("returns a mixed batch correctly across active and resolved predictions", () => {
    const evidence = [
      makeEvidence("PRED-ACTIVE-CONF", "leaning_confirmed", 5),
      makeEvidence("PRED-ACTIVE-FALS", "leaning_falsified", 4),
      makeEvidence("PRED-RESOLVED-CONF", "leaning_confirmed", 6),
      makeEvidence("PRED-RESOLVED-FALS", "leaning_falsified", 3),
      makeEvidence("PRED-THIN", "leaning_confirmed", 1),
    ];
    const statuses = new Map([
      ["PRED-ACTIVE-CONF", "active"],
      ["PRED-ACTIVE-FALS", "active"],
      ["PRED-RESOLVED-CONF", "confirmed"],
      ["PRED-RESOLVED-FALS", "falsified"],
      ["PRED-THIN", "active"],
    ]);
    const ready = filterPredictionsReadyForJudgment(evidence, statuses);
    expect(ready.map((r) => r.prediction_id).sort()).toEqual([
      "PRED-ACTIVE-CONF",
      "PRED-ACTIVE-FALS",
    ]);
  });
});

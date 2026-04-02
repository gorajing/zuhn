import { describe, it, expect } from "vitest";
import { computePageRank } from "./pagerank";

describe("computePageRank", () => {
  it("returns uniform scores on empty graph", () => {
    const ids = ["A", "B", "C"];
    const { scores, seed } = computePageRank(ids, []);

    // Dangling nodes distribute mass evenly — scores converge to 1/n
    for (const id of ids) {
      expect(scores.get(id)).toBeCloseTo(1 / 3, 4);
    }
    // Seed is still one of the nodes (all equal, implementation picks first max)
    expect(seed).not.toBeNull();
  });

  it("returns correct relative scores on a 5-node directed graph", () => {
    // Star topology: B, C, D, E all point to A
    const ids = ["A", "B", "C", "D", "E"];
    const connections = [
      { from: "B", to: "A" },
      { from: "C", to: "A" },
      { from: "D", to: "A" },
      { from: "E", to: "A" },
    ];

    const { scores, seed } = computePageRank(ids, connections);

    // A should have the highest score (all nodes link to it)
    expect(seed).toBe("A");
    expect(scores.get("A")!).toBeGreaterThan(scores.get("B")!);
    expect(scores.get("A")!).toBeGreaterThan(scores.get("C")!);
  });

  it("handles dangling nodes correctly", () => {
    // A -> B, C is dangling (no outgoing edges)
    const ids = ["A", "B", "C"];
    const connections = [{ from: "A", to: "B" }];

    const { scores } = computePageRank(ids, connections);

    // All scores should sum to ~1.0
    let total = 0;
    for (const score of scores.values()) total += score;
    expect(total).toBeCloseTo(1.0, 4);
  });

  it("returns empty result for empty input", () => {
    const { scores, seed } = computePageRank([], []);
    expect(scores.size).toBe(0);
    expect(seed).toBeNull();
  });

  it("ignores edges outside the subgraph", () => {
    const ids = ["A", "B"];
    const connections = [
      { from: "A", to: "B" },
      { from: "C", to: "A" },  // C not in ids — should be ignored
    ];

    const { scores } = computePageRank(ids, connections);
    expect(scores.size).toBe(2);
    expect(scores.has("C")).toBe(false);
  });

  it("ignores self-loops", () => {
    const ids = ["A", "B"];
    const connections = [
      { from: "A", to: "A" },  // self-loop
      { from: "A", to: "B" },
    ];

    const { scores } = computePageRank(ids, connections);
    // Should not crash and B should receive rank from A
    expect(scores.get("B")!).toBeGreaterThan(0);
  });
});

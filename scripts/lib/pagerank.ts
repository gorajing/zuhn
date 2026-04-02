/**
 * Pure TypeScript PageRank implementation for principle seed selection.
 *
 * Computes PageRank scores on a subgraph of insights, using the connections
 * table to determine link structure. The highest-ranked insight becomes the
 * "seed" for compression — the most load-bearing node in the cluster.
 *
 * No external dependencies. ~30 lines of core algorithm.
 */

export interface PageRankResult {
  scores: Map<string, number>;
  seed: string | null;  // highest-ranked node
}

/**
 * Compute PageRank on a subgraph defined by insightIds and their connections.
 *
 * @param insightIds - Node set (insight IDs in the cluster)
 * @param connections - Edges (from/to pairs — only pairs within insightIds are used)
 * @param iterations - Power iteration count (default 20)
 * @param dampingFactor - Standard damping (default 0.85)
 */
export function computePageRank(
  insightIds: string[],
  connections: Array<{ from: string; to: string }>,
  iterations = 20,
  dampingFactor = 0.85
): PageRankResult {
  const n = insightIds.length;
  if (n === 0) return { scores: new Map(), seed: null };

  // Uniform initial scores
  const scores = new Map<string, number>();
  const nodeSet = new Set(insightIds);
  for (const id of insightIds) {
    scores.set(id, 1 / n);
  }

  // Build adjacency: outgoing edges per node (only within the subgraph)
  const outgoing = new Map<string, string[]>();
  for (const id of insightIds) {
    outgoing.set(id, []);
  }
  for (const { from, to } of connections) {
    if (nodeSet.has(from) && nodeSet.has(to) && from !== to) {
      outgoing.get(from)!.push(to);
    }
  }

  // Power iteration
  const base = (1 - dampingFactor) / n;

  for (let iter = 0; iter < iterations; iter++) {
    const newScores = new Map<string, number>();
    for (const id of insightIds) {
      newScores.set(id, base);
    }

    // Distribute dangling node mass evenly
    let danglingMass = 0;
    for (const id of insightIds) {
      if (outgoing.get(id)!.length === 0) {
        danglingMass += scores.get(id)!;
      }
    }
    const danglingShare = dampingFactor * danglingMass / n;

    for (const id of insightIds) {
      newScores.set(id, newScores.get(id)! + danglingShare);
    }

    // Propagate scores through edges
    for (const id of insightIds) {
      const neighbors = outgoing.get(id)!;
      if (neighbors.length === 0) continue;
      const share = dampingFactor * scores.get(id)! / neighbors.length;
      for (const neighbor of neighbors) {
        newScores.set(neighbor, newScores.get(neighbor)! + share);
      }
    }

    // Update scores
    for (const [id, score] of newScores) {
      scores.set(id, score);
    }
  }

  // Find seed (highest score)
  let seed: string | null = null;
  let maxScore = -1;
  for (const [id, score] of scores) {
    if (score > maxScore) {
      maxScore = score;
      seed = id;
    }
  }

  return { scores, seed };
}

/**
 * Common Neighbors Link Prediction
 *
 * Finds structurally plausible connections between insights that share
 * many mutual neighbors but aren't directly connected. These are the
 * cross-domain bridges that pure embedding search misses.
 *
 * Score = |common neighbors| / sqrt(degree(A) * degree(B))
 * (Adamic-Adar normalized variant)
 *
 * Predicted links go into the connections table with type = 'PREDICTED'
 * and are NOT written to evidence[] until confirmed by classify-edges.ts.
 */

import type Database from "better-sqlite3";

export interface PredictedLink {
  fromId: string;
  toId: string;
  commonCount: number;
  score: number;
}

/**
 * Find pairs of insights that share many neighbors in the related[] graph
 * but are not directly connected or already in the connections table.
 *
 * @param db - SQLite database with insights + connections tables
 * @param kbRoot - Knowledge base root (for reading related[] from frontmatter)
 * @param minCommon - Minimum common neighbors to flag (default 3)
 * @param minScore - Minimum normalized score (default 0.3)
 */
export function predictLinks(
  db: Database.Database,
  relatedGraph: Map<string, Set<string>>,
  minCommon = 3,
  minScore = 0.3
): PredictedLink[] {
  // Get existing connections to avoid re-predicting
  const existingConnections = new Set<string>();
  const connRows = db.prepare("SELECT from_id, to_id FROM connections").all() as Array<{ from_id: string; to_id: string }>;
  for (const row of connRows) {
    existingConnections.add([row.from_id, row.to_id].sort().join("|"));
  }

  const predictions: PredictedLink[] = [];
  const nodeIds = [...relatedGraph.keys()];

  // For each pair of nodes that are NOT directly connected
  for (let i = 0; i < nodeIds.length; i++) {
    const idA = nodeIds[i];
    const neighborsA = relatedGraph.get(idA)!;

    for (let j = i + 1; j < nodeIds.length; j++) {
      const idB = nodeIds[j];

      // Skip if already directly connected
      if (neighborsA.has(idB)) continue;

      // Skip if already in connections table
      const pairKey = [idA, idB].sort().join("|");
      if (existingConnections.has(pairKey)) continue;

      const neighborsB = relatedGraph.get(idB)!;

      // Count common neighbors
      let commonCount = 0;
      for (const n of neighborsA) {
        if (neighborsB.has(n)) commonCount++;
      }

      if (commonCount < minCommon) continue;

      // Normalized score
      const degreeProduct = neighborsA.size * neighborsB.size;
      if (degreeProduct === 0) continue;
      const score = commonCount / Math.sqrt(degreeProduct);

      if (score < minScore) continue;

      predictions.push({ fromId: idA, toId: idB, commonCount, score });
    }
  }

  // Sort by score descending
  predictions.sort((a, b) => b.score - a.score);
  return predictions;
}

/**
 * Write predicted links to the connections table with type = 'PREDICTED'.
 */
export function writePredictedLinks(
  db: Database.Database,
  predictions: PredictedLink[]
): number {
  if (predictions.length === 0) return 0;

  const stmt = db.prepare(`
    INSERT OR IGNORE INTO connections (from_id, to_id, type, confidence_score)
    VALUES (?, ?, 'PREDICTED', ?)
  `);

  let written = 0;
  const insert = db.transaction(() => {
    for (const pred of predictions) {
      const result = stmt.run(pred.fromId, pred.toId, pred.score);
      if (result.changes > 0) written++;
    }
  });
  insert();

  return written;
}

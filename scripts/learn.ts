#!/usr/bin/env npx tsx

import { join } from "node:path";
import { initDb } from "./lib/db";
import { initVectorTable } from "./lib/vector-search";
import {
  discoverConnections,
  buildRelatedGraph,
  updateConnectionTrajectories,
  detectEmergence,
  propagateConfidence,
  discoverClusters,
  detectGaps,
  detectTransfers,
  detectSynthesis,
  detectTensions,
  propagateEmpiricalConfidence,
  writeFlagsFile,
  type LinkPredictFlag,
} from "./lib/learning";
import { predictLinks, writePredictedLinks } from "./lib/common-neighbors";

const KB_ROOT = join(__dirname, "../knowledge-base");

async function main(): Promise<void> {
  console.log("╔══════════════════════════════════════╗");
  console.log("║         Learning Mechanisms           ║");
  console.log("╚══════════════════════════════════════╝");
  console.log();

  // 1. Open database and load vector extension
  const db = initDb();
  initVectorTable(db);

  // Handle --clear-cache flag
  if (process.argv.includes("--clear-cache")) {
    db.exec("DELETE FROM tension_judgments");
    console.log("  Cleared tension_judgments cache.\n");
  }

  try {
    // 2. Mechanism 1: Automatic Connection Discovery
    console.log("── Mechanism 1: Connection Discovery ──");
    const connectionResult = await discoverConnections(db, KB_ROOT);
    console.log(
      `\nUpdated ${connectionResult.totalUpdated} insight(s) with related connections.\n`
    );

    // 2b. Link Prediction via Common Neighbors
    console.log("── Link Prediction: Common Neighbors ──");
    const relatedGraph = await buildRelatedGraph(db, KB_ROOT);
    const predictedLinks = predictLinks(db, relatedGraph);
    const linkPredictFlags: LinkPredictFlag[] = predictedLinks.map(p => ({
      fromId: p.fromId,
      toId: p.toId,
      commonCount: p.commonCount,
      score: p.score,
    }));
    if (predictedLinks.length > 0) {
      const written = writePredictedLinks(db, predictedLinks);
      console.log(`  ${predictedLinks.length} predicted link(s) found, ${written} new written to connections table.`);
    } else {
      console.log("  No predicted links found.");
    }
    console.log();

    // 2c. Confidence Trajectory Tracking (Phase 7c)
    console.log("── Trajectory Tracking ────────────────");
    const { confirmed, decreasing } = updateConnectionTrajectories(db, relatedGraph);
    if (confirmed > 0 || decreasing > 0) {
      console.log(`  ${confirmed} connection(s) confirmed, ${decreasing} decreasing.`);
    } else {
      console.log("  No typed connections to track yet.");
    }
    console.log();

    // 3. Mechanism 2: Principle Emergence Detection (with surprise scoring from connections)
    console.log("── Mechanism 2: Emergence Detection ───");
    const compressFlags = await detectEmergence(KB_ROOT, db);
    if (compressFlags.length > 0) {
      for (const flag of compressFlags) {
        const ratio =
          flag.principleCount === 0
            ? `${flag.insightCount}:0`
            : `${flag.insightCount}:${flag.principleCount}`;
        const surprise = flag.surpriseScore > 0
          ? ` ⚡${flag.surpriseScore.toFixed(2)} (${flag.tensionCount}T/${flag.transferCount}X)`
          : "";
        console.log(
          `  COMPRESS: ${flag.domain}/${flag.topic} — ${flag.insightCount} insights, ${flag.principleCount} principles (${ratio})${surprise}`
        );
      }
    } else {
      console.log("  No topics flagged for compression.");
    }

    // 4. Mechanism 3: Confidence Propagation
    console.log("\n── Mechanism 3: Confidence Propagation ─");
    const confidenceChanges = await propagateConfidence(db, KB_ROOT);
    if (confidenceChanges.length > 0) {
      console.log(
        `\n${confidenceChanges.length} confidence update(s) applied.\n`
      );
    } else {
      console.log("\nNo confidence changes.\n");
    }

    // 5. Mechanism 4: Cluster Discovery
    console.log("── Mechanism 4: Cluster Discovery ─────");
    const clusterFlags = await discoverClusters(db, KB_ROOT);
    if (clusterFlags.length > 0) {
      for (const flag of clusterFlags) {
        console.log(
          `  CLUSTER: ${flag.insightIds.length} insights across ${flag.topics.join(", ")}`
        );
      }
    } else {
      console.log("  No cross-topic clusters found.");
    }
    console.log();

    // 6. Mechanism 5: Gap Detection
    console.log("── Mechanism 5: Gap Detection ─────────");
    const gapFlags = await detectGaps(db, KB_ROOT);
    if (gapFlags.length > 0) {
      for (const flag of gapFlags) {
        console.log(
          `  GAP: ${flag.topicA} (${flag.countA}) vs ${flag.topicB} (${flag.countB})`
        );
      }
    } else {
      console.log("  No knowledge gaps detected.");
    }
    console.log();

    // 7. Mechanism 6: Transfer Detection
    console.log("── Mechanism 6: Transfer Detection ────");
    const transferFlags = await detectTransfers(db, KB_ROOT);
    if (transferFlags.length > 0) {
      for (const flag of transferFlags) {
        console.log(
          `  TRANSFER: "${flag.principleTitle}" (${flag.principleDomain}) -> ${flag.targetDomain}/${flag.targetTopic} (sim: ${flag.similarity.toFixed(2)})`
        );
      }
    } else {
      console.log("  No cross-domain transfers detected.");
    }
    console.log();

    // 8. Mechanism 9: Cross-Domain Principle Synthesis
    console.log("── Mechanism 9: Synthesis Detection ────");
    const synthesizeFlags = await detectSynthesis(db, KB_ROOT);
    if (synthesizeFlags.length > 0) {
      for (const flag of synthesizeFlags) {
        console.log(
          `  SYNTHESIZE: "${flag.titleA}" (${flag.domainA}) ↔ "${flag.titleB}" (${flag.domainB}) — sim: ${flag.similarity.toFixed(2)}`
        );
      }
      console.log(
        `\n  ${synthesizeFlags.length} synthesis candidate(s) written to meta/synthesis-candidates.json\n`
      );
    } else {
      console.log("  No cross-domain principle parallels detected.");
    }
    console.log();

    // 9. Mechanism 7: Tension Detection
    console.log("── Mechanism 7: Tension Detection ─────");
    const tensionResult = await detectTensions(db, KB_ROOT);
    if (tensionResult.newTensions > 0) {
      console.log(
        `\n${tensionResult.newTensions} new tension(s) created.\n`
      );
    } else {
      console.log("  No new tensions detected.\n");
    }

    // 9. Mechanism 8: Empirical Propagation
    console.log("── Mechanism 8: Empirical Propagation ──");
    const empiricalChanges = await propagateEmpiricalConfidence(db, KB_ROOT);
    if (empiricalChanges.length > 0) {
      for (const change of empiricalChanges) {
        const arrow =
          change.resolvedStatus === "confirmed" || change.resolvedStatus === "success"
            ? "↑"
            : "↓";
        console.log(
          `  ${change.resolvedId} (${change.resolvedStatus}) → ${change.affectedId}: ${change.oldConfidence} ${arrow} ${change.newConfidence} (${change.cascade})`
        );
      }
      console.log(
        `\n${empiricalChanges.length} empirical confidence update(s) applied.\n`
      );
    } else {
      console.log("  No empirical outcomes to process.\n");
    }

    // 10. Write flags file with all sections
    const allFlags = {
      compress: compressFlags,
      discover: clusterFlags,
      gaps: gapFlags,
      transfers: transferFlags,
      synthesize: synthesizeFlags,
      linkPredictions: linkPredictFlags,
    };
    await writeFlagsFile(KB_ROOT, allFlags);
    const totalFlags =
      compressFlags.length +
      clusterFlags.length +
      gapFlags.length +
      transferFlags.length +
      synthesizeFlags.length +
      linkPredictFlags.length;
    console.log(`Wrote ${totalFlags} flag(s) to meta/flags.md.\n`);

    // 10. Summary
    console.log("┌──────────────────────────────────────┐");
    console.log("│          Learning Summary             │");
    console.log("├──────────────────────────────────────┤");
    console.log(
      `│  Connections updated:  ${String(connectionResult.totalUpdated).padEnd(14)}│`
    );
    console.log(
      `│  Emergence flags:     ${String(compressFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Confidence changes:  ${String(confidenceChanges.length).padEnd(14)}│`
    );
    console.log(
      `│  Cluster flags:       ${String(clusterFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Gap flags:           ${String(gapFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Transfer flags:      ${String(transferFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Synthesis flags:     ${String(synthesizeFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Link predictions:    ${String(linkPredictFlags.length).padEnd(14)}│`
    );
    console.log(
      `│  Tensions created:    ${String(tensionResult.newTensions).padEnd(14)}│`
    );
    console.log(
      `│  Empirical updates:  ${String(empiricalChanges.length).padEnd(14)}│`
    );
    console.log("└──────────────────────────────────────┘");
  } finally {
    db.close();
  }
}

main().catch((err) => {
  console.error("learn.ts failed:", err);
  process.exit(1);
});

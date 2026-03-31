import Database from "better-sqlite3";

// Open DB without vec0 extension
const db = new Database("knowledge-base/db/brain.db");

const founderInsights = db.prepare(
  "SELECT id, title, tags FROM insights WHERE domain = 'startups' AND topic = 'founder-mindset'"
).all() as any[];

const perceptionInsights = db.prepare(
  "SELECT id, title, tags FROM insights WHERE domain = 'psychology' AND topic = 'perception'"
).all() as any[];

const getEmb = db.prepare("SELECT embedding FROM embeddings WHERE id = ?");

function cosineSim(a: Float32Array, b: Float32Array): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

const pairs: any[] = [];
for (const fi of founderInsights) {
  const rowA = getEmb.get(fi.id) as any;
  if (!rowA) continue;
  const embA = new Float32Array(rowA.embedding.buffer, rowA.embedding.byteOffset, rowA.embedding.byteLength / 4);

  for (const pi of perceptionInsights) {
    const rowB = getEmb.get(pi.id) as any;
    if (!rowB) continue;
    const embB = new Float32Array(rowB.embedding.buffer, rowB.embedding.byteOffset, rowB.embedding.byteLength / 4);

    const sim = cosineSim(embA, embB);
    if (sim > 0.80) {
      const tagsA = new Set((fi.tags || "").split(" ").filter(Boolean));
      const tagsB = new Set((pi.tags || "").split(" ").filter(Boolean));
      const overlap = [...tagsA].filter((t) => tagsB.has(t));
      pairs.push({
        a: fi.id, aTitle: fi.title,
        b: pi.id, bTitle: pi.title,
        sim, tagOverlap: overlap,
      });
    }
  }
}

pairs.sort((a, b) => b.sim - a.sim);
console.log("Cross-topic pairs (sim > 0.80):\n");
for (const p of pairs.slice(0, 15)) {
  const surprise = p.tagOverlap.length === 0 ? " *** ZERO TAG OVERLAP ***" : "";
  console.log(`sim: ${p.sim.toFixed(4)}${surprise}`);
  console.log(`  [founder-mindset] ${p.a} — ${p.aTitle}`);
  console.log(`  [perception]      ${p.b} — ${p.bTitle}`);
  if (p.tagOverlap.length > 0) console.log(`  shared tags: ${p.tagOverlap.join(", ")}`);
  console.log();
}
console.log(`Total pairs above 0.80: ${pairs.length}`);

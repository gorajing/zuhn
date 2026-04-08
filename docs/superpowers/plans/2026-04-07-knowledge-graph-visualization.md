# Topic Connection Graph — Implementation Plan

> **STATUS (2026-04-08): DEPRIORITIZED.** This plan was superseded by a higher-leverage roadmap focused on ambient retrieval. See `2026-04-08-concise-brief-mode.md` for Phase 1. The graph should be re-evaluated only after `principle-check.ts` ships (Phase 4 of the new roadmap) — principle-check may subsume most of this graph's structural-diagnostic value through actionable text output, making the visual layer redundant. Do NOT build this plan without first re-evaluating whether the need still exists. The reasoning for deprioritization: the graph is a category-4 structural diagnostic, but categories 1-3 (ambient retrieval, outcome forcing, principle quality) are higher-leverage for closing the gap between stored knowledge and changed behavior. Plan preserved for reference.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a self-contained HTML topic connection graph that visualizes cross-domain bridges, contradiction zones, and structural hubs in the knowledge base — answering questions the existing mindmap cannot.

**Architecture:** `scripts/graph.ts` reads `insights` + `connections` tables from `brain.db`, aggregates to ~60 topic-level nodes, and emits a self-contained HTML file with D3.js force-directed layout. Called from `views.ts` (fail-soft). This is NOT a full knowledge graph — principles, predictions, and decisions are not included in v1.

**Tech Stack:** TypeScript (tsx), better-sqlite3 (no vec0), D3.js v7 (CDN).

**What this is:** A structural diagnostic tool showing how topics connect through insight-level relationships.

**What this is NOT:** A general-purpose knowledge graph. Principles are markdown-backed, not in the DB. Insights are the only entity with both metadata and typed connections. v1 is explicitly insight-derived topic structure.

---

## Data Summary

| Source | Count | Notes |
|--------|-------|-------|
| `insights` table | 9,063 | INS-* IDs with domain/topic/title/tags |
| `connections` table | 28,187 | INS↔INS, 7 types |
| Cross-domain connections | 20,366 | 72% of all connections |
| PREDICTED connections | 5,307 | Speculative — excluded by default in v1 |
| Observed connections | 22,880 | SUPPORTS + TRANSFERS_TO + CHALLENGES + EXTENDS + REFINES + CONTRADICTS |

**Key design decisions:**
- **Aggregate to topics** — 9K nodes is noise; ~60 topics is inspectable
- **Exclude PREDICTED by default** — mixing observed and speculative structure muddies the graph; togglable
- **Preserve direction in data, render undirected** — TRANSFERS_TO, CHALLENGES, CONTRADICTS are semantically directional; store directional type counts per edge, render edges as undirected for layout clarity
- **Fail-soft** — graph generation failure must not break the views pipeline

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `scripts/lib/graph-data.ts` | Create | Extracts + aggregates graph data from brain.db |
| `scripts/lib/graph-data.test.ts` | Create | Tests for extraction, aggregation, PREDICTED exclusion |
| `scripts/graph.ts` | Create | CLI entry point: calls graph-data, writes HTML |
| `scripts/views.ts` | Modify | Add graph generation call (fail-soft) |
| `package.json` | Modify | Add `"graph"` npm script |

---

## Phase 1: Define the Data Contract

**Files:**
- Create: `scripts/lib/graph-data.ts`
- Create: `scripts/lib/graph-data.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// scripts/lib/graph-data.test.ts
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import Database from "better-sqlite3";
import { extractGraphData } from "./graph-data";

describe("extractGraphData", () => {
  let db: Database.Database;

  beforeAll(() => {
    db = new Database(":memory:");
    db.exec(`
      CREATE TABLE insights (
        id TEXT PRIMARY KEY,
        domain TEXT NOT NULL,
        topic TEXT NOT NULL,
        title TEXT NOT NULL,
        tags TEXT DEFAULT ''
      );
      CREATE TABLE connections (
        from_id TEXT NOT NULL,
        to_id TEXT NOT NULL,
        type TEXT NOT NULL,
        PRIMARY KEY (from_id, to_id)
      );
    `);

    const ins = db.prepare("INSERT INTO insights (id, domain, topic, title, tags) VALUES (?, ?, ?, ?, ?)");
    ins.run("INS-001", "startups", "sales", "Sales insight 1", "closing");
    ins.run("INS-002", "startups", "sales", "Sales insight 2", "pipeline");
    ins.run("INS-003", "startups", "scaling", "Scaling insight 1", "hiring");
    ins.run("INS-004", "psychology", "focus", "Focus insight 1", "dopamine");
    ins.run("INS-005", "psychology", "focus", "Focus insight 2", "attention");

    const conn = db.prepare("INSERT INTO connections (from_id, to_id, type) VALUES (?, ?, ?)");
    conn.run("INS-001", "INS-003", "SUPPORTS");       // sales -> scaling (same domain)
    conn.run("INS-002", "INS-003", "EXTENDS");         // sales -> scaling (same domain)
    conn.run("INS-001", "INS-004", "TRANSFERS_TO");    // sales -> focus (cross-domain)
    conn.run("INS-002", "INS-005", "CHALLENGES");      // sales -> focus (cross-domain)
    conn.run("INS-003", "INS-004", "SUPPORTS");        // scaling -> focus (cross-domain)
    conn.run("INS-004", "INS-001", "PREDICTED");       // focus -> sales (PREDICTED — should be excluded)
  });

  afterAll(() => db.close());

  it("extracts topic nodes with correct insight counts", () => {
    const data = extractGraphData(db);
    const salesNode = data.nodes.find((n) => n.id === "startups/sales");
    expect(salesNode).toBeDefined();
    expect(salesNode!.insightCount).toBe(2);
    expect(salesNode!.domain).toBe("startups");

    const focusNode = data.nodes.find((n) => n.id === "psychology/focus");
    expect(focusNode!.insightCount).toBe(2);
  });

  it("aggregates edges between topics with correct weights", () => {
    const data = extractGraphData(db);
    const sameEdge = data.edges.find(
      (e) =>
        (e.source === "startups/sales" && e.target === "startups/scaling") ||
        (e.source === "startups/scaling" && e.target === "startups/sales")
    );
    expect(sameEdge).toBeDefined();
    expect(sameEdge!.weight).toBe(2);
    expect(sameEdge!.crossDomain).toBe(false);
  });

  it("preserves directional type counts", () => {
    const data = extractGraphData(db);
    const crossEdge = data.edges.find(
      (e) =>
        (e.source === "psychology/focus" && e.target === "startups/sales") ||
        (e.source === "startups/sales" && e.target === "psychology/focus")
    );
    expect(crossEdge).toBeDefined();
    expect(crossEdge!.crossDomain).toBe(true);
    // Should have TRANSFERS_TO and CHALLENGES but NOT PREDICTED
    expect(crossEdge!.types["TRANSFERS_TO"]).toBe(1);
    expect(crossEdge!.types["CHALLENGES"]).toBe(1);
    expect(crossEdge!.types["PREDICTED"]).toBeUndefined();
  });

  it("excludes PREDICTED connections by default", () => {
    const data = extractGraphData(db);
    // Total connections should be 5 (excluding the PREDICTED one)
    expect(data.meta.totalConnectionsUsed).toBe(5);
    // No edge should have PREDICTED in its types
    for (const edge of data.edges) {
      expect(edge.types["PREDICTED"]).toBeUndefined();
    }
  });

  it("includes PREDICTED when explicitly requested", () => {
    const data = extractGraphData(db, { includePredicted: true });
    expect(data.meta.totalConnectionsUsed).toBe(6);
    const crossEdge = data.edges.find(
      (e) =>
        (e.source === "psychology/focus" && e.target === "startups/sales") ||
        (e.source === "startups/sales" && e.target === "psychology/focus")
    );
    expect(crossEdge!.types["PREDICTED"]).toBe(1);
  });

  it("returns metadata with correct counts", () => {
    const data = extractGraphData(db);
    expect(data.meta.totalInsights).toBe(5);
    expect(data.meta.totalConnectionsUsed).toBe(5);
    expect(data.meta.crossDomainConnections).toBe(3);
    expect(data.meta.excludedPredicted).toBe(1);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run scripts/lib/graph-data.test.ts`
Expected: FAIL — `Cannot find module './graph-data'`

- [ ] **Step 3: Implement graph data extraction**

```typescript
// scripts/lib/graph-data.ts
import type Database from "better-sqlite3";

// --- Types ---

export interface TopicNode {
  id: string;          // "domain/topic"
  domain: string;
  topic: string;
  insightCount: number;
}

export interface TopicEdge {
  source: string;      // "domain/topic" (canonical: sorted alphabetically)
  target: string;      // "domain/topic"
  weight: number;
  crossDomain: boolean;
  types: Record<string, number>; // directional types preserved: { SUPPORTS: 3, TRANSFERS_TO: 2 }
}

export interface GraphData {
  nodes: TopicNode[];
  edges: TopicEdge[];
  meta: {
    totalInsights: number;
    totalConnectionsUsed: number;
    crossDomainConnections: number;
    excludedPredicted: number;
    generatedAt: string;
  };
}

export interface ExtractOptions {
  includePredicted?: boolean;
}

// --- Extraction ---

export function extractGraphData(
  db: Database.Database,
  options: ExtractOptions = {}
): GraphData {
  const { includePredicted = false } = options;

  // 1. Build topic nodes
  const topicRows = db
    .prepare("SELECT domain, topic, count(*) as c FROM insights GROUP BY domain, topic")
    .all() as Array<{ domain: string; topic: string; c: number }>;

  const nodes: TopicNode[] = topicRows.map((r) => ({
    id: `${r.domain}/${r.topic}`,
    domain: r.domain,
    topic: r.topic,
    insightCount: r.c,
  }));

  // 2. Map insight ID -> topic ID
  const insightTopicRows = db
    .prepare("SELECT id, domain, topic FROM insights")
    .all() as Array<{ id: string; domain: string; topic: string }>;

  const insightToTopic = new Map<string, string>();
  for (const r of insightTopicRows) {
    insightToTopic.set(r.id, `${r.domain}/${r.topic}`);
  }

  // 3. Read connections
  const connRows = db
    .prepare("SELECT from_id, to_id, type FROM connections")
    .all() as Array<{ from_id: string; to_id: string; type: string }>;

  // 4. Aggregate at topic level
  const edgeMap = new Map<
    string,
    { source: string; target: string; weight: number; types: Record<string, number>; crossDomain: boolean }
  >();

  let crossDomainCount = 0;
  let excludedPredicted = 0;
  let usedConnections = 0;

  for (const c of connRows) {
    // Filter PREDICTED unless requested
    if (c.type === "PREDICTED" && !includePredicted) {
      excludedPredicted++;
      continue;
    }

    const srcTopic = insightToTopic.get(c.from_id);
    const tgtTopic = insightToTopic.get(c.to_id);
    if (!srcTopic || !tgtTopic) continue;
    if (srcTopic === tgtTopic) {
      usedConnections++;
      continue; // skip self-loops at topic level (still count as used)
    }

    usedConnections++;

    // Canonical key for undirected layout (sorted), but preserve type direction
    const [a, b] = srcTopic < tgtTopic ? [srcTopic, tgtTopic] : [tgtTopic, srcTopic];
    const key = `${a}||${b}`;

    const srcDomain = srcTopic.split("/")[0];
    const tgtDomain = tgtTopic.split("/")[0];
    const isCross = srcDomain !== tgtDomain;
    if (isCross) crossDomainCount++;

    if (!edgeMap.has(key)) {
      edgeMap.set(key, { source: a, target: b, weight: 0, types: {}, crossDomain: isCross });
    }
    const edge = edgeMap.get(key)!;
    edge.weight++;
    edge.types[c.type] = (edge.types[c.type] || 0) + 1;
  }

  return {
    nodes,
    edges: Array.from(edgeMap.values()),
    meta: {
      totalInsights: insightTopicRows.length,
      totalConnectionsUsed: usedConnections,
      crossDomainConnections: crossDomainCount,
      excludedPredicted,
      generatedAt: new Date().toISOString(),
    },
  };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run scripts/lib/graph-data.test.ts`
Expected: all 6 tests PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/graph-data.ts scripts/lib/graph-data.test.ts
git commit -m "feat: add topic graph data extraction with PREDICTED exclusion and directional types"
```

---

## Phase 2: Build the Renderer

**Files:**
- Create: `scripts/graph.ts`

- [ ] **Step 1: Create `scripts/graph.ts`**

The script:
- Opens brain.db directly via `new Database(DB_PATH)` (NOT `initDb()` — avoids vec0 dependency)
- Calls `extractGraphData(db)`
- Generates a self-contained HTML string with embedded D3.js visualization
- Writes to `knowledge-base/views/knowledge-graph.html`

The HTML includes:

**Header / summary block (top of page, always visible):**
- Title: "Zuhn Topic Connection Graph"
- Subtitle: "Structural diagnostic — shows how topics connect through insight-level relationships. Not a full knowledge graph."
- Stats: insight count, connection count (excluding PREDICTED), cross-domain count, generation date
- **Top 5 cross-domain hub topics** (by number of cross-domain edge connections)
- **Top 5 strongest bridges** (edges with highest weight between different domains)
- **Most contradiction-heavy links** (edges with highest CONTRADICTS count)

**Graph area:**
- D3 force-directed layout
- **Nodes**: circles, sized by `sqrt(insightCount)`, colored by domain:
  - startups=#4CAF50, psychology=#9C27B0, ai-development=#2196F3, investing=#FF9800, health=#F44336, music-production=#E91E63, automation=#00BCD4, video-production=#795548, pets=#607D8B
- **Edges**: lines, width by `sqrt(weight)`:
  - Cross-domain: white, higher opacity
  - Same-domain: dark gray, lower opacity
- **Node labels**: topic name below each circle

**Interactions:**
- **Hover node**: tooltip shows domain/topic, insight count, degree (connected topic count), total connection weight. Highlights connected nodes, dims others.
- **Hover edge**: tooltip shows source/target topics, total weight, per-type breakdown (preserving direction info: e.g. "TRANSFERS_TO: 42 (sales→focus: 30, focus→sales: 12)")
- **Click node**: panel shows top 10 underlying insight IDs + titles for that topic, sorted by connection degree
- **Click edge**: panel shows 5 sample underlying connections (from_id title → to_id title, type)
- **Drag** nodes to rearrange
- **Zoom/pan** via D3 zoom

**Controls (sidebar):**
- Domain filter dropdown
- Edge type filter dropdown
- Cross-domain only checkbox
- Include PREDICTED toggle (off by default)
- Reset view button

**Legend:**
- Domain color swatches
- "What this shows / what this doesn't show" one-liner

- [ ] **Step 2: Run it manually**

Run: `npx tsx scripts/graph.ts`
Expected:
```
=== graph.ts ===
  Nodes: ~60 topics | Edges: ~XXX topic-pairs | Cross-domain: ~20K
  Written: views/knowledge-graph.html
```

- [ ] **Step 3: Open in browser and verify**

Run: `open knowledge-base/views/knowledge-graph.html`

Verify checklist:
- [ ] Graph renders with colored domain nodes
- [ ] Nodes sized proportionally to insight count
- [ ] Cross-domain edges visible as white lines
- [ ] Summary block shows top hubs, strongest bridges, contradiction zones
- [ ] Hover node: tooltip with stats, highlights connections
- [ ] Hover edge: tooltip with type breakdown
- [ ] Click node: shows underlying insight titles
- [ ] Click edge: shows sample connections
- [ ] Domain filter works
- [ ] Edge type filter works
- [ ] Cross-domain only toggle works
- [ ] Include PREDICTED toggle adds/removes PREDICTED edges
- [ ] Zoom/pan/drag work
- [ ] Legend and "what this is" text present

- [ ] **Step 4: Commit**

```bash
git add scripts/graph.ts
git commit -m "feat: add interactive topic connection graph with summary diagnostics"
```

---

## Phase 3: Wire Into Views Pipeline

**Files:**
- Modify: `scripts/views.ts`
- Modify: `package.json`

- [ ] **Step 1: Add graph generation to views.ts**

After the existing view generation (after gap-report), add:

```typescript
  // --- Topic Connection Graph ---
  try {
    const { execFileSync } = await import("node:child_process");
    execFileSync("npx", ["tsx", join(__dirname, "graph.ts")], {
      cwd: join(__dirname, ".."),
      stdio: "inherit",
    });
  } catch (err) {
    console.warn("  Topic graph generation failed (non-fatal):", (err as Error).message);
  }
```

Uses `execFileSync` (not `exec`) to avoid shell injection. Wrapped in try/catch — graph failure logs a warning but does not break the views pipeline.

- [ ] **Step 2: Add npm script**

In `package.json` scripts, add:
```json
"graph": "tsx scripts/graph.ts"
```

- [ ] **Step 3: Verify pipeline integration**

Run: `npm run graph` — standalone generation works
Run: `npm run views` — all views generate, graph included
Run: `npm run post-ingest` — full pipeline completes with graph

- [ ] **Step 4: Verify fail-soft behavior**

Temporarily break graph.ts (e.g. bad DB path), run `npm run views`, confirm:
- Warning logged: "Topic graph generation failed (non-fatal)"
- Other views (action-list, stale-board, source-map, gap-report) still generated
- Pipeline exits 0

Undo the break.

- [ ] **Step 5: Commit**

```bash
git add scripts/views.ts package.json
git commit -m "feat: wire topic graph into views pipeline (fail-soft) and add npm script"
```

---

## Acceptance Criteria

All of these must be true for v1 to be considered done:

- [ ] `npm run graph` generates `knowledge-base/views/knowledge-graph.html`
- [ ] `npm run views` regenerates it automatically
- [ ] Graph is readable at current KB scale (~60 topic nodes)
- [ ] Cross-domain bridges are visually obvious (white edges)
- [ ] Summary block shows top hubs, strongest bridges, contradiction zones
- [ ] Node tooltips show insight count + connection stats
- [ ] Edge tooltips show per-type breakdown
- [ ] Click node/edge shows underlying insight details
- [ ] PREDICTED edges excluded by default, togglable on
- [ ] Directional type metadata preserved (visible in tooltips)
- [ ] Tests cover aggregation, cross-domain detection, type breakdown, PREDICTED exclusion
- [ ] Failure in graph generation does not break views pipeline
- [ ] A user can identify surprising cross-domain bridges from the view alone
- [ ] A user can answer "why are these topics connected?" without opening code

## What v1 Does NOT Include

- Principles, predictions, decisions, or tensions as graph entities
- Individual insight-level nodes (9K is too dense)
- Embedding-based similarity edges (requires vec0)
- Editable or persistent graph state
- Server-side rendering or API

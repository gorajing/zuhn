# Concise Brief Mode — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Change the cost structure of invoking Zuhn's decision brief by adding a concise mode that returns a compact, agent-friendly summary cheap enough for Claude to invoke reflexively during real decisions — closing the gap between stored knowledge and changed behavior.

**Architecture:** Add a new `renderBriefAsConciseContext()` function to `brief.ts` that emits a tightly-budgeted summary (~3 principles + 2 predictions + 1 decision + 1 tension + one-line track record). Export a `BriefRenderMode = "full" | "concise"` type alias for callers to use when deciding which render function to invoke — but keep `generateBrief()` and `BriefOptions` completely unchanged. The data layer does not know about render modes. Wire the mode choice through the MCP server, defaulting MCP invocations to `concise` for ambient agent use. Update the global CLAUDE.md instruction to use concise mode as the reflexive default for decision-shaped prompts, with full mode reserved for deep work.

**Tech Stack:** TypeScript (tsx), existing better-sqlite3 pipeline, existing brief.ts + MCP server, Zod for MCP input schema.

**Why this matters:** The existing brief tool works but is expensive to consume inside a model response. A full brief can be 1-2K tokens of markdown. A concise brief targets ~200-400 tokens — cheap enough that Claude will invoke it automatically when it matches the decision heuristic, instead of requiring explicit user invocation. Ambient behavior emerges from changing cost, not from adding ceremony.

**What this is NOT:**
- A new retrieval mechanism (existing retrieval is reused)
- A change to ranking or scoring logic
- A replacement for the full brief (full mode stays for CLI deep work)
- A hook or scheduled trigger (ambient use emerges from cheaper tool, not from new invocation channels)

---

## Data Contract

The concise brief output targets a budget of ~300 tokens. The tight ratios:

- **3 principles** — first 3 from `brief.principles`, shown with empirical label + title only (summary omitted)
- **2 predictions** — first 2 from `brief.predictions`
- **1 decision** — first from `brief.decisions`
- **1 tension** — first from `brief.tensions`
- **1-line track record** — "N confirmed, M falsified, K untested across X principles"

**Selection policy is pure truncation.** The concise renderer does NOT reorder or re-rank any array. It uses whatever ordering `generateBrief()` already produces (which today sorts principles by empirical state + score and predictions by status active→confirmed→falsified per `scripts/lib/brief.ts:343`) and slices to the limit. This keeps the renderer render-only and preserves the architectural rule that `generateBrief()` is the single source of ranking logic. If future tuning makes predicted-decisive predictions appear first, that change belongs in `generateBrief()`, not in the concise renderer.

If any category is empty, it's omitted entirely (no empty headers).

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `scripts/lib/brief.ts` | Modify | Add `renderBriefAsConciseContext()` and export a `BriefRenderMode` type alias. **Do NOT modify `BriefOptions` or `generateBrief()`** — the data layer stays untouched. |
| `scripts/lib/brief.test.ts` | Modify/Create | Tests for concise render, mode defaults, empty-category handling |
| `scripts/mcp-server.ts` | Modify | Add `mode` to `zuhn_brief` input schema, default to `"concise"` |
| `scripts/brief.ts` | Modify | CLI accepts `--mode concise` flag, still defaults to full for CLI use |
| `~/.claude/CLAUDE.md` | Modify | Tighten Zuhn instruction to use concise brief reflexively |

---

## Phase 1: Concise Renderer

**Files:**
- Modify: `scripts/lib/brief.ts`
- Create/Modify: `scripts/lib/brief.test.ts`

- [ ] **Step 1: Write failing tests for `renderBriefAsConciseContext`**

```typescript
// scripts/lib/brief.test.ts (or extend existing tests)
import { describe, it, expect } from "vitest";
import { renderBriefAsConciseContext, type DecisionBrief } from "./brief";

describe("renderBriefAsConciseContext", () => {
  const fullBrief: DecisionBrief = {
    query: "Should I raise VC or bootstrap?",
    matched_domains: ["startups", "investing"],
    principles: [
      {
        id: "PRI-260321-05B5",
        title: "AI companies are model-busters — they grow faster than any spreadsheet predicts",
        summary: "Long detailed summary that should NOT appear in concise output because it's too verbose and consumes token budget that the agent needs for its own response.",
        confidence: "high",
        empirical_state: "confirmed",
        supporting_insight_overlap: 12,
        match_reasons: ["keyword", "semantic"],
      },
      {
        id: "PRI-260323-68F0",
        title: "The $2T revenue gap — AI capex is a bet on returns that don't yet exist",
        summary: "Another long summary.",
        confidence: "high",
        empirical_state: null,
        supporting_insight_overlap: 8,
        match_reasons: ["semantic"],
      },
      {
        id: "PRI-260328-C581",
        title: "Bottom-up user adoption reveals real AI product-market fit faster than top-down enterprise deployment",
        summary: "Third summary.",
        confidence: "medium",
        empirical_state: null,
        supporting_insight_overlap: 5,
        match_reasons: ["keyword"],
      },
      {
        id: "PRI-260328-935A",
        title: "AI product discovery emerges from engineers experimenting close to the model",
        summary: "Fourth — should be truncated out of concise.",
        confidence: "medium",
        empirical_state: null,
        supporting_insight_overlap: 3,
        match_reasons: ["keyword"],
      },
    ],
    // NOTE: statuses below use real schema values from scripts/schemas/empirical.ts
    // and scripts/schemas/frontmatter.ts:
    //   predictions: active | confirmed | falsified
    //   decisions: pending | success | failure | mixed
    //   tensions: unresolved | resolved | resolved_with_nuance
    predictions: [
      { id: "PRED-260322-4E9B", claim: "YC W27 will fund 2x more solo founders than W26", status: "confirmed", deadline: "2027-03-31", derived_from: ["PRI-xxx"] },
      { id: "PRED-260322-4FAA", claim: "BIS export controls will tighten by Q3 2026", status: "falsified", deadline: "2026-11-15", derived_from: ["PRI-yyy"] },
      { id: "PRED-260322-AAAA", claim: "Third prediction — should be truncated", status: "active", deadline: "2026-12-01", derived_from: [] },
    ],
    decisions: [
      { id: "DEC-260401-001", context: "Raising seed round", choice: "Bootstrap first", status: "pending", outcome_date: "2026-12-01", informed_by: ["PRI-xxx"] },
      { id: "DEC-260320-002", context: "Second decision — should be truncated", choice: "x", status: "pending", outcome_date: "2026-06-01", informed_by: [] },
    ],
    tensions: [
      { id: "T-260325-001", title: "Speed vs capital efficiency in AI startups", status: "unresolved", side_a: ["PRI-a"], side_b: ["PRI-b"] },
      { id: "T-260325-002", title: "Second tension — truncated", status: "unresolved", side_a: [], side_b: [] },
    ],
    evidence: [],
    track_record: { confirmed: 2, falsified: 1, untested: 3 },
  };

  it("limits principles to 3", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).toContain("model-busters");
    expect(output).toContain("$2T revenue gap");
    expect(output).toContain("Bottom-up user adoption");
    expect(output).not.toContain("AI product discovery emerges");
  });

  it("limits predictions to 2", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).toContain("YC W27");
    expect(output).toContain("BIS export controls");
    expect(output).not.toContain("Third prediction");
  });

  it("limits decisions to 1", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).toContain("Raising seed round");
    expect(output).not.toContain("Second decision");
  });

  it("limits tensions to 1", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).toContain("Speed vs capital efficiency");
    expect(output).not.toContain("Second tension");
  });

  it("omits principle summaries (title only)", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).not.toContain("Long detailed summary");
    expect(output).not.toContain("Another long summary");
  });

  it("shows empirical labels on principles", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    // confirmed principle should have a visible marker
    expect(output).toMatch(/confirmed.*model-busters/i);
  });

  it("emits a one-line track record", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    expect(output).toContain("2 confirmed");
    expect(output).toContain("1 falsified");
    expect(output).toContain("3 untested");
  });

  it("output stays under a ~400 token budget (rough char proxy)", () => {
    const output = renderBriefAsConciseContext(fullBrief);
    // ~4 chars per token rough proxy → 1600 char budget
    expect(output.length).toBeLessThan(1600);
  });

  it("omits empty categories entirely", () => {
    const minimalBrief: DecisionBrief = {
      query: "Test query",
      matched_domains: [],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(minimalBrief);
    expect(output).not.toContain("Principles");
    expect(output).not.toContain("Predictions");
    expect(output).not.toContain("Decisions");
    expect(output).not.toContain("Tensions");
  });

  it("returns a 'no matches' message when brief is entirely empty", () => {
    const minimalBrief: DecisionBrief = {
      query: "Test query",
      matched_domains: [],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
    const output = renderBriefAsConciseContext(minimalBrief);
    expect(output.length).toBeGreaterThan(0);
    expect(output.toLowerCase()).toMatch(/no.*(match|relevant|context)/);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run scripts/lib/brief.test.ts`
Expected: FAIL — `renderBriefAsConciseContext is not a function`

- [ ] **Step 3: Implement `renderBriefAsConciseContext`**

Add to `scripts/lib/brief.ts`, directly below the existing `renderBriefAsMarkdown` function:

```typescript
// ─── Concise Renderer ──────────────────────────────────────────────
// Compact, agent-friendly output budgeted for reflexive use during decisions.
// Targets ~300 tokens (~1200 chars). Principles show title + empirical label
// only (no summary). Categories with no entries are omitted entirely.

const CONCISE_LIMITS = {
  principles: 3,
  predictions: 2,
  decisions: 1,
  tensions: 1,
} as const;

export function renderBriefAsConciseContext(brief: DecisionBrief): string {
  const { confirmed, falsified, untested } = brief.track_record;
  const totalMatched = brief.principles.length + brief.predictions.length + brief.decisions.length + brief.tensions.length;

  if (totalMatched === 0) {
    return `Zuhn brief for "${brief.query}": no relevant context in KB.`;
  }

  const lines: string[] = [];
  lines.push(`Zuhn brief — "${brief.query}"`);

  // Principles (title + empirical label only)
  if (brief.principles.length > 0) {
    lines.push("");
    lines.push("Principles:");
    for (const p of brief.principles.slice(0, CONCISE_LIMITS.principles)) {
      const label = empiricalLabelShort(p.empirical_state);
      lines.push(`- [${label}] ${p.title}`);
    }
  }

  // Predictions (claim + status)
  if (brief.predictions.length > 0) {
    lines.push("");
    lines.push("Predictions:");
    for (const pred of brief.predictions.slice(0, CONCISE_LIMITS.predictions)) {
      lines.push(`- ${pred.claim} (${pred.status}, due ${pred.deadline})`);
    }
  }

  // Decisions (context → choice → status)
  if (brief.decisions.length > 0) {
    lines.push("");
    lines.push("Past decisions:");
    for (const d of brief.decisions.slice(0, CONCISE_LIMITS.decisions)) {
      lines.push(`- "${d.context}" → chose "${d.choice}" (${d.status})`);
    }
  }

  // Tensions (title only)
  if (brief.tensions.length > 0) {
    lines.push("");
    lines.push("Open tensions:");
    for (const t of brief.tensions.slice(0, CONCISE_LIMITS.tensions)) {
      lines.push(`- ${t.title}`);
    }
  }

  // One-line track record
  const totalPrinciples = confirmed + falsified + untested;
  if (totalPrinciples > 0) {
    lines.push("");
    lines.push(
      `Track record: ${confirmed} confirmed, ${falsified} falsified, ${untested} untested across ${totalPrinciples} matched principles.`
    );
  }

  return lines.join("\n");
}

// Short empirical labels for the concise renderer
function empiricalLabelShort(state: string | null): string {
  if (state === "confirmed") return "confirmed";
  if (state === "falsified") return "falsified";
  return "untested";
}
```

Note: `empiricalLabel()` already exists in this file for the full renderer. `empiricalLabelShort()` is a separate helper to avoid modifying the full renderer's behavior.

- [ ] **Step 4: Export a `BriefRenderMode` type alias**

In `scripts/lib/brief.ts`, add a new type export near the top of the file (alongside the other exported types):

```typescript
// Render mode selector — used by CLI and MCP to choose between full and concise renderers.
// Intentionally NOT part of BriefOptions: the data-generation function generateBrief()
// produces a single full data structure regardless of render. Mode is only consumed
// at the render layer.
export type BriefRenderMode = "full" | "concise";
```

Do **not** modify the existing `BriefOptions` interface. `generateBrief()` stays completely unchanged. The render choice is a caller-side concern, not a data-layer concern. This preserves the separation the plan's architecture depends on.

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run scripts/lib/brief.test.ts`
Expected: all tests PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/lib/brief.ts scripts/lib/brief.test.ts
git commit -m "feat(brief): add renderBriefAsConciseContext for ambient agent use"
```

---

## Phase 2: Wire Through MCP Server

**Files:**
- Modify: `scripts/mcp-server.ts`

- [ ] **Step 1: Update `zuhn_brief` tool to accept and default `mode`**

Replace the existing `zuhn_brief` tool block in `scripts/mcp-server.ts` (lines ~217-249):

```typescript
// ─── Tool: zuhn_brief ───────────────────────────────────────────────
// Generate a decision brief from the knowledge base

server.registerTool("zuhn_brief", {
  description:
    "Generate a decision brief from the knowledge base. " +
    "Returns relevant principles (ranked by empirical confidence), past decisions, " +
    "active predictions, known tensions, and supporting evidence for a given decision context. " +
    "Defaults to concise mode: a ~300-token summary suitable for reflexive use during decisions. " +
    "Use mode='full' for a comprehensive markdown brief when doing deep analysis.",
  inputSchema: {
    query: z.string().describe("Decision context or question (e.g. 'Should I raise VC or bootstrap?')"),
    domain: z
      .string()
      .optional()
      .describe("Constrain to specific domain (e.g. startups, investing)"),
    mode: z
      .enum(["concise", "full"])
      .optional()
      .default("concise")
      .describe(
        "Render mode. 'concise' (default) returns a compact ~300-token summary ideal for reflexive use. " +
        "'full' returns a comprehensive markdown brief with all principles, summaries, and evidence."
      ),
  },
}, async ({ query, domain, mode = "concise" }) => {
  const { generateBrief, renderBriefAsConciseContext, renderBriefAsMarkdown } = await import("./lib/brief.js");
  const db = initDb();

  try {
    const brief = await generateBrief(db, query, { domain });
    const rendered =
      mode === "full"
        ? renderBriefAsMarkdown(brief)
        : renderBriefAsConciseContext(brief);
    return {
      content: [
        {
          type: "text" as const,
          text: rendered,
        },
      ],
    };
  } finally {
    db.close();
  }
});
```

Two important changes:
1. **Returns rendered text, not JSON — this is an intentional breaking change.** The previous MCP `zuhn_brief` returned `JSON.stringify(brief, null, 2)` — structured JSON that a consuming agent had to parse. After this change, concise mode returns the compact summary text and full mode returns the markdown version. **Structured JSON output is no longer available through this tool.** The rationale: the only consumer of zuhn_brief is a language model, and rendered text is both cheaper (in tokens) and directly usable in responses. JSON parse-then-reformat was pure overhead. Anyone (or any future caller) needing structured data should use `zuhn_search` + `zuhn_recall` directly, which still return structured results.
2. **Defaults to `concise`.** The default changes agent behavior because Claude sees the default as "what the tool gives me if I don't think hard about it." Cheap output → more reflexive use.

- [ ] **Step 2: Manually verify MCP server builds**

Run: `npx tsc --noEmit scripts/mcp-server.ts` (if project uses tsc)
Or run: `npx tsx scripts/mcp-server.ts --help` and confirm no runtime errors at import time.

Expected: no type errors, no runtime crashes.

- [ ] **Step 3: Commit**

```bash
git add scripts/mcp-server.ts
git commit -m "feat(mcp): wire zuhn_brief mode with concise default for ambient agent use"
```

---

## Phase 3: Update CLI to Support `--mode`

**Files:**
- Modify: `scripts/brief.ts`

The CLI should keep `full` as the default (CLI invocations are deep work by a human), but accept `--mode concise` for parity with MCP.

- [ ] **Step 1: Read the existing CLI structure**

Read `scripts/brief.ts` to understand how args are currently parsed.

- [ ] **Step 2: Add `--mode` flag to CLI**

Locate the arg-parsing section of `scripts/brief.ts` and add handling for `--mode concise|full`. Default to `"full"` for CLI.

Then replace the render call:

```typescript
import { generateBrief, renderBriefAsMarkdown, renderBriefAsConciseContext } from "./lib/brief";

// ... after parsing args:
const mode: "full" | "concise" = args.mode === "concise" ? "concise" : "full";

// ... after generating brief:
const output =
  mode === "concise"
    ? renderBriefAsConciseContext(brief)
    : renderBriefAsMarkdown(brief);
console.log(output);
```

- [ ] **Step 3: Test CLI manually**

Run: `npm run brief "Should I raise VC or bootstrap?"`
Expected: full markdown brief (unchanged behavior).

Run: `npx tsx scripts/brief.ts "Should I raise VC or bootstrap?" --mode concise`
Expected: compact concise output, under ~1600 chars.

- [ ] **Step 4: Commit**

```bash
git add scripts/brief.ts
git commit -m "feat(brief-cli): add --mode concise flag for CLI parity with MCP"
```

---

## Phase 4: Tighten the Global Claude Instruction

**Files:**
- Modify: `~/.claude/CLAUDE.md`

This step changes Claude's reflexive behavior across all sessions, not just in the Zuhn repo. It's the behavioral payoff for the previous phases.

- [ ] **Step 1: Read the current global instruction**

Read `~/.claude/CLAUDE.md` and locate the existing Zuhn Knowledge Base section.

- [ ] **Step 2: Replace the Zuhn instruction block**

Replace the existing Zuhn section with this tightened version:

```markdown
## Zuhn Knowledge Base

I have a personal knowledge base (Zuhn) with insights and principles across 9 domains (ai-development, startups, investing, psychology, health, automation, music-production, video-production, pets). It's accessible via MCP tools in every session.

**Reflexive use (do this automatically):**
Before responding to any request that involves a decision, tradeoff, strategy choice, evaluation, or "should I X or Y" question, call `zuhn_brief(query, mode="concise")` first. The concise brief returns a ~300-token summary of relevant principles, predictions, past decisions, and open tensions. Use it to ground your response — cite principles naturally, flag falsified predictions, note relevant past decisions.

Decision-shaped prompts include:
- "Should I..." / "Is it worth..." / "How do I decide between..."
- Strategy/planning questions
- Tradeoff analyses
- Evaluating an opportunity, investment, or hire
- Architecture or product decisions

**Deep analysis (user must explicitly ask):**
For comprehensive retrieval — writing an essay, building a strategy doc, or the user asks for "everything Zuhn knows about X" — use `zuhn_brief(query, mode="full")` and `zuhn_recall` on promising IDs for full context.

**What NOT to do:**
- Don't invoke zuhn_brief on trivial tasks (file edits, syntax questions, debugging specific code)
- Don't call it reflexively during long multi-turn coding sessions where the decision context hasn't changed
- Don't cite Zuhn knowledge ceremonially — integrate it naturally into the response
```

- [ ] **Step 3: Manually test in a fresh session**

Start a new Claude session (in any project directory, not just Zuhn). Ask a decision-shaped question like "Should I raise VC for my AI startup or bootstrap?" Verify:
- Claude calls `zuhn_brief` without being reminded
- The concise output is used to inform the response
- The response is natural, not a raw dump of the brief

- [ ] **Step 4: Commit (manual — this file is outside the repo)**

The global CLAUDE.md lives in `~/.claude/`, which is not part of the Zuhn repo. No git commit needed for this file. Just save and verify in a fresh session.

---

## Acceptance Criteria

Phase 1 is complete when all of these are true:

- [ ] `renderBriefAsConciseContext()` exists in `scripts/lib/brief.ts` and is exported
- [ ] All concise renderer tests pass (`npx vitest run scripts/lib/brief.test.ts`)
- [ ] Concise output stays under ~1600 characters for a realistic brief
- [ ] Empty categories are omitted entirely (no "Principles: (none)" headers)
- [ ] `zuhn_brief` MCP tool defaults to `mode="concise"` and returns rendered text (not JSON)
- [ ] `zuhn_brief` MCP tool still supports `mode="full"` for deep analysis — full mode now returns markdown text (was JSON). This is an intentional breaking change documented in Phase 2, not a regression. Any caller previously depending on structured JSON from this tool must migrate to `zuhn_search` + `zuhn_recall`.
- [ ] `BriefOptions` and `generateBrief()` signatures are unchanged. The data layer is untouched. Mode is a render-layer concern only, exposed via the exported `BriefRenderMode` type alias.
- [ ] `scripts/brief.ts` CLI accepts `--mode concise` and still defaults to full
- [ ] Global `~/.claude/CLAUDE.md` instruction directs Claude to call concise brief reflexively on decision-shaped prompts
- [ ] All existing tests still pass (`npm test`)
- [ ] No regression in existing full-brief behavior

## 2-Week Behavioral Check

This is the measurement that determines whether Phase 1 actually worked. Schedule a reminder for 2 weeks post-deployment (2026-04-22) to verify:

- [ ] In 3+ real decision conversations, Claude called `zuhn_brief(mode="concise")` without being prompted
- [ ] The concise output was used to inform at least one response in a way that changed the recommendation
- [ ] The user felt guided by Zuhn knowledge during a real decision, not ceremonially cited at
- [ ] At least one retrieval surfaced a principle the user had forgotten about

If fewer than 2 of these are true after 2 weeks:
- Check whether the concise output is actually relevant (may need ranking tuning)
- Check whether the CLAUDE.md instruction is being triggered (may need heuristic tightening)
- Check whether Claude is finding zuhn_brief discoverable (MCP registration issue)

Do NOT add features to fix low adoption. Diagnose the root cause first.

## What This Unlocks

After Phase 1 ships, the roadmap below becomes the working sequence. The framing was sharpened by Karpathy's llm-wiki gist, which validates Zuhn's core premise: **the valuable thing is the maintained compiled knowledge artifact, not fancy retrieval.** Zuhn is already more epistemic than llm-wiki (it has predictions, decisions, tensions, empiricism, compression) but underinvested in the maintenance surfaces llm-wiki emphasizes (indexes, logs, overview pages, health checks).

Revised roadmap (each phase independently shippable, each compounds with the previous):

- **Phase 2 — Chronological log (`meta/log.md`)** — Append-only, human-readable, grep-friendly record of ingests, principle creations, prediction creations/resolutions, decision resolutions, compression runs, tension resolutions. Called from `ingest.ts`, `create-principles.ts`, `predict.ts`, `decide.ts`, `resolve.ts`. Gives chronology that the structured artifacts don't. Direct steal from llm-wiki's log.md pattern. Small scope, high compounding value — unlocks "what changed recently" queries for every subsequent phase.

  **Entry format (locked before any Phase 2 work begins):**

  ```markdown
  ## [YYYY-MM-DD] <action> | <primary-id>
  <1-3 body lines max — what changed and why, no multiline essays>
  ```

  Rules:
  - One header line, format: `## [date] action | scope`
  - `action` is one of: `ingest`, `extract`, `compress`, `predict`, `decide`, `resolve`, `tension` (the enum is intentionally not sacred — add `archive`, `health`, or other buckets later only if those become meaningful user-visible events)
  - `scope` is either:
    - a **canonical artifact ID** for single-artifact actions (e.g. `SRC-260408-ABCD`, `PRI-260408-XXXX`, `PRED-260408-YYYY`, `DEC-260408-ZZZZ`, `T-260408-WWWW`) — used for `ingest`, `extract`, `predict`, `decide`, `resolve`, `tension`
    - a **topic path** for aggregate actions that operate across many artifacts (e.g. `startups/fundraising`, `psychology/focus`) — used for `compress` and any future bulk operations
  - Body: 1-3 lines maximum. No multiline essays, no nested markdown, no tables, no code blocks
  - Newest entries appended at the bottom, never inserted in the middle, never rewritten
  - No retroactive edits. If something needs to be corrected, append a new entry referencing the old one.

  The scope distinction is deliberate: compression acts on a topic, not a single ID, and forcing a synthetic "run ID" or "first-created-principle ID" would obscure what the action operated on. Topic paths are more honest for aggregate actions.

  Example entries:

  ```markdown
  ## [2026-04-08] compress | startups/fundraising
  Created 12 principles from 103 insights. Key theme: blended financing over pure equity.

  ## [2026-04-08] predict | PRED-260408-ABCD
  Derived from PRI-260407-1D23. Deadline 2026-10-01. Falsifiable via OpenRouter token volume.

  ## [2026-04-09] resolve | PRED-260322-4E9B
  Confirmed. YouTube algorithm changes validated the claim 6 months early.
  ```

  **What log.md is NOT:** a second database, a structured event store, a query surface with its own indexes, or a replacement for the connections/insights tables. It is a plain markdown file you can `grep` or read top-to-bottom. If Phase 2 ever feels like it needs schemas, parsing, or a query API — stop and question the scope. The point is grep-friendly chronology, nothing more. Locking the entry format now prevents the file from drifting into semi-structured sludge that loses its grep value.

- **Phase 3 — Wake-time contextual retrieval** — Enrich session schema with `active_domains`, `active_topics`, `decision_ids`, `prediction_ids`. Build `scripts/lib/context-query.ts` that infers a query from sleep state with confidence. wake.ts calls `renderBriefAsConciseContext()` when confidence is high, stays quiet otherwise. Also surfaces recent log entries. Turns the existing wake ritual into ambient retrieval without adding new ceremony.

- **Phase 4 — Outcome forcing (`resolve-due.ts`)** — Scan predictions and decisions for past deadlines. Surface overdue items in wake.ts under "Outcomes Due." Writes resolutions to `meta/log.md`. Closes the empirical feedback loop — the deepest moat. Without this, predictions are just notes.

- **Phase 5 — Wiki health / principle-check** — Renamed from "principle-check" to match llm-wiki's lint framing. Expands beyond principles: near-duplicate principles, weakly supported principles, contradiction-heavy clusters, topics with many insights but no principles, orphan principles, stale unresolved tensions, overdue outcomes, domains with principles but no prediction/decision activity. Emits `knowledge-base/meta/wiki-health.md`. **This is probably the subsumption point for the deprioritized graph plan** — if wiki-health surfaces the same structural signals as actionable text, the graph is redundant.

- **Phase 6 — Index layer (`knowledge-base/index.md`)** — Lightweight "what exists?" surface. Grouped by artifact type. Each entry: title, one-line, last updated, support count. Cheap top-level map that reduces dependence on ad hoc search. Direct steal from llm-wiki's index.md pattern. Comes before overview pages because a flat navigable map is cheaper than synthesized summaries and gives immediate browsability for both the user and the agent. TOC before chapters.

- **Phase 7 — Per-domain overview pages** — Generate `knowledge-base/domains/<domain>/_overview.md` from existing artifacts: top principles, open tensions, active predictions, recent sources, known gaps, "what changed recently" (pulled from log.md). Llm-wiki's maintained overview pattern applied to Zuhn's domain/topic structure. Creates the durable middle layer between raw insights and ad hoc answers. Comes after the index because overview synthesis is more interpretive and harder to get right than a flat map.

- **Phase 8 — Fileable analyses (`brief.ts --save`)** — Add `--save` flag that writes high-value brief outputs to `knowledge-base/analyses/*.md` and logs them in `meta/log.md`. Turns exploration into durable structure. Aligns with llm-wiki's "useful analyses shouldn't disappear into chat history."

- **Phase 9 — Re-evaluate graph** — After Phases 2-5 ship, revisit `docs/superpowers/plans/2026-04-07-knowledge-graph-visualization.md`. Likely kill: wiki-health + overview pages + index layer together cover the structural-diagnostic need with actionable text. The graph becomes ornamental. If instead there remain structural questions that text diagnostics don't answer well, build it then.

**Every subsequent phase compounds through the concise brief primitive.** Wake integration, resolve-due prompts, and overview pages all consume `renderBriefAsConciseContext()` output. Building this Phase 1 right unlocks the entire rest of the roadmap cheaply.

**What NOT to do:**
- Do not pivot Zuhn toward a generic LLM-writes-all-markdown wiki. Zuhn's structured artifacts (schemas, empiricism, compression) are its advantage over llm-wiki; preserve them.
- Do not build the graph before Phases 2-5 complete and wiki-health is shipped.
- Do not add new hooks just because hooks are available — event-triggered via cheap tools beats time-triggered via ceremony.
- Do not mix render concerns into data-generation contracts (the rule that caught the `BriefOptions` mistake in this plan — hold it for every phase).

**The single evaluation standard for every phase:**
*Did this make Zuhn change what the user noticed, decided, or did?*
If not, it's infrastructure, ornament, or convenience — not a fundamental improvement.

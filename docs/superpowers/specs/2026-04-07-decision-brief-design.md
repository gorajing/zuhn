# Decision Brief Tool — Design Spec

**Date:** 2026-04-07
**Status:** Approved for implementation

## Purpose

A tool that assembles everything the Zuhn knowledge base knows about a decision context into a structured brief. Reduces the distance between stored knowledge and changed action.

## Architecture

```
scripts/lib/brief.ts     — generateBrief() core function, returns structured object
scripts/brief.ts          — CLI wrapper, renders to Markdown
scripts/mcp-server.ts     — zuhn_brief tool, returns structured JSON
```

## Core Function

```typescript
interface BriefOptions {
  domain?: string;   // constrains Step 1 search AND principle scan
  limit?: number;    // max principles to show, default 10
}

interface DecisionBrief {
  query: string;
  matched_domains: string[];
  principles: BriefPrinciple[];   // includes match_reason
  predictions: BriefPrediction[];
  decisions: BriefDecision[];
  tensions: BriefTension[];
  evidence: BriefInsight[];
  track_record: { confirmed: number; falsified: number; untested: number };
}

async function generateBrief(query: string, options?: BriefOptions): Promise<DecisionBrief>
```

Note: async because hybrid search requires `isOllamaAvailable()` and `embedText()`.

## Algorithm

### Step 1: Search insights
- Run hybrid search (fallback to keyword if Ollama unavailable)
- If `domain` option provided, pass it to search as domain filter
- Collect top 20 results
- Extract unique domains from results
- Collect all matched insight IDs into a set

### Step 2: Find relevant principles (ID-driven, domain as discovery)
- Scan principle files in domains from Step 1 (+ explicit domain if provided)
- Parse frontmatter for each
- **Primary ranking signal:** count of `supporting_insights` overlapping with Step 1 insight IDs
- **Secondary signals:** empirical_state (confirmed > untested > falsified), confidence level
- Keep ALL matched principles for track record computation (Step 6)
- Truncate to top `limit` for display

### Step 3: Find linked predictions (ID-driven first)
- Build combined ID set: matched insight IDs + ALL matched principle IDs (not just top `limit`)
- Read all files in `predictions/`
- Include if any `derived_from` ID appears in the combined ID set
- Domain fallback (if <2 direct matches): include predictions where any `derived_from` PRI-/INS- ID belongs to a matched domain (PRI- via directory path, INS- via DB lookup)
- Group by status: active first, then confirmed, then falsified

### Step 4: Find linked decisions (ID-driven first)
- Same combined ID set as Step 3
- Read all files in `decisions/`
- Include if any `informed_by` ID appears in the combined ID set
- Domain fallback: same pattern as Step 3
- Group by status: pending first, then success/failure/mixed

### Step 5: Find relevant tensions
- Read all files in `tensions/` where status = "unresolved"
- Include if either `side_a` or `side_b` contains IDs from the combined ID set

### Step 6: Compute track record
- From ALL matched principles (pre-truncation, not just displayed top N)
- Count: confirmed / falsified / untested (no empirical_state field)
- This reflects how tested your knowledge is in areas relevant to THIS decision

### Step 7: Annotate principles with match reasons
- For each displayed principle, compute reason string:
  - "supports N matched insights" (from Step 2 overlap count)
  - "confirmed" / "falsified" (from empirical_state)
  - "linked to PRED-XXXXX" (from Step 3, if any prediction references this principle)
  - "linked to DEC-XXXXX" (from Step 4, if any decision references this principle)
- This is a decoration pass AFTER Steps 3-4 complete, avoiding the ordering dependency

### Step 8: Return structured DecisionBrief object

## CLI Output Format

```markdown
## Decision Brief: "{query}"

### Relevant Principles (N matched, X confirmed, Y untested, Z falsified)
- [confirmed] "Title" — summary (supports 5 matched insights, linked to PRED-XXXXX)
- [untested]  "Title" — summary (supports 3 matched insights)
- [falsified] "Title" — summary

### Past Decisions
- DEC-XXXXX: "context" → chose "choice" → outcome: success
  Notes: resolution notes

### Active Predictions
- PRED-XXXXX: "claim" — due 2026-09-22 (derived from 2 matched principles)

### Known Tensions
- T-XXXXX: "title" (unresolved)
  Side A vs Side B

### Supporting Evidence (top insights)
- INS-XXXXX: "title" (domain/topic, confidence)

### Track Record (all matched principles, not just displayed)
X confirmed, Y falsified, Z untested
```

## MCP Tool

```typescript
server.registerTool("zuhn_brief", {
  description: "Generate a decision brief from the knowledge base. Returns relevant principles, past decisions, active predictions, and tensions for a given decision context.",
  inputSchema: {
    query: z.string().describe("Decision context or question"),
    domain: z.string().optional().describe("Constrain to specific domain"),
  },
}, async ({ query, domain }) => {
  const brief = await generateBrief(query, { domain });
  return {
    content: [{
      type: "text" as const,
      text: JSON.stringify(brief, null, 2),
    }],
  };
});
```

MCP returns structured JSON so agents can programmatically use the brief sections. CLI renders to Markdown for human reading.

## Performance Budget

- Principle scan: ~50-200 files (matched domains only), <500ms
- Prediction/decision/tension scan: ~150 files total, <200ms
- Search: ~200ms
- Total: under 1 second

## Not in v1

- No semantic reranking of principles
- No caching of file-backed entity indexes
- No brief history tracking
- No "suggested predictions" from unverified principles
- No telemetry on brief usage

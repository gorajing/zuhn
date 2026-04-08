// ─── Decision Brief Generator ──────────────────────────────────────
// Assembles everything the KB knows about a decision context:
// relevant principles, past decisions, active predictions, tensions,
// and supporting evidence.

import type Database from "better-sqlite3";
import { join } from "node:path";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import matter from "gray-matter";

import { searchInsights, type SearchResult } from "./search";
import { isOllamaAvailable, embedText } from "./embeddings";
import { initVectorTable, hybridSearch } from "./vector-search";

// ─── Types ──────────────────────────────────────────────────────────

export interface BriefOptions {
  domain?: string;
  limit?: number; // max principles to display, default 10
}

export interface BriefPrinciple {
  id: string;
  title: string;
  summary: string;
  confidence: string;
  empirical_state: string | null; // "confirmed" | "falsified" | null (untested)
  supporting_insight_overlap: number;
  match_reasons: string[];
}

export interface BriefPrediction {
  id: string;
  claim: string;
  status: string;
  deadline: string;
  derived_from: string[];
}

export interface BriefDecision {
  id: string;
  context: string;
  choice: string;
  status: string;
  outcome_date: string;
  resolution_notes?: string;
  informed_by: string[];
}

export interface BriefTension {
  id: string;
  title: string;
  status: string;
  side_a: string[];
  side_b: string[];
}

export interface BriefInsight {
  id: string;
  title: string;
  one_line: string;
  domain: string;
  topic: string;
  confidence: string;
}

export interface DecisionBrief {
  query: string;
  matched_domains: string[];
  principles: BriefPrinciple[];
  predictions: BriefPrediction[];
  decisions: BriefDecision[];
  tensions: BriefTension[];
  evidence: BriefInsight[];
  track_record: { confirmed: number; falsified: number; untested: number };
}

// Render mode selector — used by CLI and MCP to choose between full and
// concise renderers. Intentionally NOT part of BriefOptions: the data-
// generation function generateBrief() produces a single full data structure
// regardless of render. Mode is only consumed at the render layer.
export type BriefRenderMode = "full" | "concise";

// ─── Helpers ────────────────────────────────────────────────────────

const KB_ROOT = join(__dirname, "../../knowledge-base");

/** Resolve an INS- ID to its domain via the database. */
function insightDomain(
  db: Database.Database,
  id: string
): string | undefined {
  const row = db
    .prepare("SELECT domain FROM insights WHERE id = ?")
    .get(id) as { domain: string } | undefined;
  return row?.domain;
}

/** Read all .md files in a directory, parse frontmatter. */
function readEntities(dir: string): Array<{ data: Record<string, unknown>; content: string }> {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const raw = readFileSync(join(dir, f), "utf-8");
      return matter(raw) as { data: Record<string, unknown>; content: string };
    });
}

/** Check if an entity's reference IDs overlap with a target set. */
function hasOverlap(refs: string[], targetSet: Set<string>): boolean {
  return refs.some((r) => targetSet.has(r));
}

/** Check if an entity's reference IDs belong to any of the matched domains. */
function hasDomainOverlap(
  db: Database.Database,
  refs: string[],
  matchedDomains: Set<string>
): boolean {
  for (const ref of refs) {
    if (ref.startsWith("INS-")) {
      const domain = insightDomain(db, ref);
      if (domain && matchedDomains.has(domain)) return true;
    } else if (ref.startsWith("PRI-")) {
      // Principles are stored under principles/{domain}/ — scan to find domain
      const principlesRoot = join(KB_ROOT, "principles");
      if (!existsSync(principlesRoot)) continue;
      for (const domainDir of readdirSync(principlesRoot, { withFileTypes: true })) {
        if (!domainDir.isDirectory() || !matchedDomains.has(domainDir.name)) continue;
        const domainPath = join(principlesRoot, domainDir.name);
        for (const file of readdirSync(domainPath).filter((f) => f.endsWith(".md"))) {
          const raw = readFileSync(join(domainPath, file), "utf-8");
          const parsed = matter(raw);
          if (parsed.data.id === ref) return true;
        }
      }
    }
  }
  return false;
}

// ─── Empirical state sort order ─────────────────────────────────────

const EMPIRICAL_ORDER: Record<string, number> = {
  confirmed: 0,
  untested: 1,
  falsified: 2,
};

const CONFIDENCE_ORDER: Record<string, number> = {
  very_high: 0,
  high: 1,
  medium: 2,
  low: 3,
  pending: 4,
};

// ─── generateBrief ──────────────────────────────────────────────────

export async function generateBrief(
  db: Database.Database,
  query: string,
  options: BriefOptions = {}
): Promise<DecisionBrief> {
  const { domain, limit = 10 } = options;

  // ── Step 1: Search insights ──────────────────────────────────────

  // Strip FTS5 special characters from the query to prevent syntax errors
  // Covers: ? ! @ # $ % ^ & * ( ) [ ] { } < > : / " '
  // Keep only alphanumeric, spaces, and hyphens within words (not at word boundaries)
  // Strip all FTS5 special characters: ? ! @ # $ % ^ & * ( ) [ ] { } < > : / " ' \ -
  const sanitizedQuery = query
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  let searchResults: Array<{ id: string; title: string; one_line: string; domain: string; topic: string; confidence: string; tags: string }>;

  const ollamaUp = await isOllamaAvailable();
  if (ollamaUp) {
    try {
      initVectorTable(db);
      const queryEmbedding = await embedText(query); // semantic uses original query
      const hybridResults = hybridSearch(db, sanitizedQuery, queryEmbedding, {
        limit: 20,
        domain,
      });
      searchResults = hybridResults;
    } catch {
      // Fallback to keyword if vector fails
      searchResults = searchInsights(db, sanitizedQuery, { limit: 20, domain });
    }
  } else {
    searchResults = searchInsights(db, sanitizedQuery, { limit: 20, domain });
  }

  const matchedInsightIds = new Set(searchResults.map((r) => r.id));
  const matchedDomains = new Set(searchResults.map((r) => r.domain));
  if (domain) matchedDomains.add(domain);

  // Empty-result guard: if no insights found, return a clean empty brief
  if (searchResults.length === 0) {
    return {
      query,
      matched_domains: [...matchedDomains],
      principles: [],
      predictions: [],
      decisions: [],
      tensions: [],
      evidence: [],
      track_record: { confirmed: 0, falsified: 0, untested: 0 },
    };
  }

  // ── Step 2: Find relevant principles ─────────────────────────────

  interface RawPrinciple {
    id: string;
    title: string;
    summary: string;
    confidence: string;
    empirical_state: string | null;
    supporting_insights: string[];
    overlap: number;
  }

  const allMatchedPrinciples: RawPrinciple[] = [];
  const principlesRoot = join(KB_ROOT, "principles");

  if (existsSync(principlesRoot)) {
    for (const domainDir of readdirSync(principlesRoot, { withFileTypes: true })) {
      if (!domainDir.isDirectory()) continue;
      if (!matchedDomains.has(domainDir.name)) continue;

      const domainPath = join(principlesRoot, domainDir.name);
      for (const file of readdirSync(domainPath).filter((f) => f.endsWith(".md") && !f.startsWith("_"))) {
        const raw = readFileSync(join(domainPath, file), "utf-8");
        const { data } = matter(raw);

        const supportingInsights: string[] = Array.isArray(data.supporting_insights)
          ? data.supporting_insights
          : [];

        const overlap = supportingInsights.filter((id: string) =>
          matchedInsightIds.has(id)
        ).length;

        // Include only if there's actual evidence overlap with the query
        if (overlap > 0) {
          allMatchedPrinciples.push({
            id: data.id as string,
            title: data.title as string,
            summary: data.summary as string || data.resolutions?.one_line as string || "",
            confidence: data.confidence as string || "medium",
            empirical_state: (data.empirical_state as string) || null,
            supporting_insights: supportingInsights,
            overlap,
          });
        }
      }
    }
  }

  // Sort: overlap (primary), then empirical_state, then confidence as tiebreakers
  allMatchedPrinciples.sort((a, b) => {
    // Primary: more overlap = more relevant
    if (a.overlap !== b.overlap) return b.overlap - a.overlap;

    // Tiebreaker 1: empirical state
    const empA = EMPIRICAL_ORDER[a.empirical_state ?? "untested"] ?? 1;
    const empB = EMPIRICAL_ORDER[b.empirical_state ?? "untested"] ?? 1;
    if (empA !== empB) return empA - empB;

    // Tiebreaker 2: confidence
    const confA = CONFIDENCE_ORDER[a.confidence] ?? 3;
    const confB = CONFIDENCE_ORDER[b.confidence] ?? 3;
    return confA - confB;
  });

  // Track record from ALL matched principles (pre-truncation)
  const trackRecord = { confirmed: 0, falsified: 0, untested: 0 };
  for (const p of allMatchedPrinciples) {
    if (p.empirical_state === "confirmed") trackRecord.confirmed++;
    else if (p.empirical_state === "falsified") trackRecord.falsified++;
    else trackRecord.untested++;
  }

  // Build combined ID set for predictions/decisions/tensions matching
  const allMatchedPrincipleIds = new Set(allMatchedPrinciples.map((p) => p.id));
  const combinedIds = new Set([...matchedInsightIds, ...allMatchedPrincipleIds]);

  // Truncate principles for display
  const displayPrinciples = allMatchedPrinciples.slice(0, limit);

  // ── Step 3: Find linked predictions ──────────────────────────────

  const predictions: BriefPrediction[] = [];
  const predDir = join(KB_ROOT, "predictions");
  const predEntities = readEntities(predDir);

  // Track which predictions link to which principles (for Step 7 annotation)
  const predToPrincipleLinks = new Map<string, string[]>();

  // Two-pass: direct matches first, then fallback only if needed
  let directPredCount = 0;
  const fallbackPreds: BriefPrediction[] = [];

  for (const { data } of predEntities) {
    const derivedFrom: string[] = Array.isArray(data.derived_from)
      ? data.derived_from
      : [];
    const predId = data.id as string;

    const directMatch = hasOverlap(derivedFrom, combinedIds);

    if (directMatch) {
      directPredCount++;
      predictions.push({
        id: predId,
        claim: data.claim as string,
        status: data.status as string,
        deadline: data.deadline as string,
        derived_from: derivedFrom,
      });
    } else if (hasDomainOverlap(db, derivedFrom, matchedDomains)) {
      fallbackPreds.push({
        id: predId,
        claim: data.claim as string,
        status: data.status as string,
        deadline: data.deadline as string,
        derived_from: derivedFrom,
      });
    }
  }

  // Only use fallback if fewer than 2 direct matches
  if (directPredCount < 2) {
    predictions.push(...fallbackPreds.slice(0, 2 - directPredCount));
  }

  // Track principle links for annotation
  for (const pred of predictions) {
    const linkedPrinciples = pred.derived_from.filter((id) =>
      allMatchedPrincipleIds.has(id)
    );
    for (const priId of linkedPrinciples) {
      const existing = predToPrincipleLinks.get(priId) || [];
      existing.push(pred.id);
      predToPrincipleLinks.set(priId, existing);
    }
  }

  // Sort predictions: active first, then confirmed, then falsified
  const predStatusOrder: Record<string, number> = {
    active: 0,
    confirmed: 1,
    falsified: 2,
  };
  predictions.sort(
    (a, b) =>
      (predStatusOrder[a.status] ?? 3) - (predStatusOrder[b.status] ?? 3)
  );

  // ── Step 4: Find linked decisions ────────────────────────────────

  const decisions: BriefDecision[] = [];
  const decDir = join(KB_ROOT, "decisions");
  const decEntities = readEntities(decDir);

  const decToPrincipleLinks = new Map<string, string[]>();

  // Two-pass: direct matches first, then fallback only if needed
  let directDecCount = 0;
  const fallbackDecs: BriefDecision[] = [];

  for (const { data } of decEntities) {
    const informedBy: string[] = Array.isArray(data.informed_by)
      ? data.informed_by
      : [];
    const decId = data.id as string;

    const directMatch = hasOverlap(informedBy, combinedIds);

    if (directMatch) {
      directDecCount++;
      decisions.push({
        id: decId,
        context: data.context as string,
        choice: data.choice as string,
        status: data.status as string,
        outcome_date: data.outcome_date as string,
        resolution_notes: data.resolution_notes as string | undefined,
        informed_by: informedBy,
      });
    } else if (hasDomainOverlap(db, informedBy, matchedDomains)) {
      fallbackDecs.push({
        id: decId,
        context: data.context as string,
        choice: data.choice as string,
        status: data.status as string,
        outcome_date: data.outcome_date as string,
        resolution_notes: data.resolution_notes as string | undefined,
        informed_by: informedBy,
      });
    }
  }

  // Only use fallback if fewer than 2 direct matches
  if (directDecCount < 2) {
    decisions.push(...fallbackDecs.slice(0, 2 - directDecCount));
  }

  // Track principle links for annotation
  for (const dec of decisions) {
    const linkedPrinciples = dec.informed_by.filter((id) =>
      allMatchedPrincipleIds.has(id)
    );
    for (const priId of linkedPrinciples) {
      const existing = decToPrincipleLinks.get(priId) || [];
      existing.push(dec.id);
      decToPrincipleLinks.set(priId, existing);
    }
  }

  // Sort decisions: pending first
  const decStatusOrder: Record<string, number> = {
    pending: 0,
    success: 1,
    failure: 2,
    mixed: 3,
  };
  decisions.sort(
    (a, b) =>
      (decStatusOrder[a.status] ?? 4) - (decStatusOrder[b.status] ?? 4)
  );

  // ── Step 5: Find relevant tensions ───────────────────────────────

  const tensions: BriefTension[] = [];
  const tensionDir = join(KB_ROOT, "tensions");
  const tensionEntities = readEntities(tensionDir);

  for (const { data } of tensionEntities) {
    if (data.status !== "unresolved") continue;

    const sideA: string[] = Array.isArray(data.side_a) ? data.side_a : [];
    const sideB: string[] = Array.isArray(data.side_b) ? data.side_b : [];
    const allSides = [...sideA, ...sideB];

    if (hasOverlap(allSides, combinedIds)) {
      tensions.push({
        id: data.id as string,
        title: data.title as string,
        status: data.status as string,
        side_a: sideA,
        side_b: sideB,
      });
    }
  }

  // ── Step 7: Annotate principles with match reasons ───────────────

  const principles: BriefPrinciple[] = displayPrinciples.map((p) => {
    const reasons: string[] = [];

    if (p.overlap > 0) {
      reasons.push(`supports ${p.overlap} matched insight${p.overlap !== 1 ? "s" : ""}`);
    }
    if (p.empirical_state === "confirmed") reasons.push("confirmed");
    if (p.empirical_state === "falsified") reasons.push("falsified");

    const linkedPreds = predToPrincipleLinks.get(p.id);
    if (linkedPreds) {
      reasons.push(`linked to ${linkedPreds.join(", ")}`);
    }

    const linkedDecs = decToPrincipleLinks.get(p.id);
    if (linkedDecs) {
      reasons.push(`linked to ${linkedDecs.join(", ")}`);
    }

    return {
      id: p.id,
      title: p.title,
      summary: p.summary,
      confidence: p.confidence,
      empirical_state: p.empirical_state,
      supporting_insight_overlap: p.overlap,
      match_reasons: reasons,
    };
  });

  // ── Step 8: Assemble evidence (top search results) ───────────────

  const evidence: BriefInsight[] = searchResults.slice(0, 8).map((r) => ({
    id: r.id,
    title: r.title,
    one_line: r.one_line,
    domain: r.domain,
    topic: r.topic,
    confidence: r.confidence,
  }));

  // ── Return ───────────────────────────────────────────────────────

  return {
    query,
    matched_domains: [...matchedDomains],
    principles,
    predictions,
    decisions,
    tensions,
    evidence,
    track_record: trackRecord,
  };
}

// ─── Render helpers ─────────────────────────────────────────────────

function empiricalLabel(state: string | null): string {
  if (state === "confirmed") return "confirmed";
  if (state === "falsified") return "falsified";
  return "untested";
}

export function renderBriefAsMarkdown(brief: DecisionBrief): string {
  const lines: string[] = [];
  const { confirmed, falsified, untested } = brief.track_record;

  lines.push(`## Decision Brief: "${brief.query}"\n`);

  // Principles
  if (brief.principles.length > 0) {
    lines.push(
      `### Relevant Principles (${brief.principles.length} shown, ${confirmed} confirmed, ${untested} untested, ${falsified} falsified)\n`
    );
    for (const p of brief.principles) {
      const label = empiricalLabel(p.empirical_state);
      const reasons = p.match_reasons.length > 0 ? ` (${p.match_reasons.join(", ")})` : "";
      lines.push(`- [${label}] "${p.title}"${reasons}`);
      if (p.summary) lines.push(`  ${p.summary}`);
    }
    lines.push("");
  } else {
    lines.push("### Relevant Principles\nNo principles matched this query.\n");
  }

  // Decisions
  if (brief.decisions.length > 0) {
    lines.push("### Past Decisions\n");
    for (const d of brief.decisions) {
      lines.push(
        `- ${d.id}: "${d.context}" → chose "${d.choice}" → outcome: ${d.status}`
      );
      if (d.resolution_notes) lines.push(`  Notes: ${d.resolution_notes}`);
    }
    lines.push("");
  }

  // Predictions
  if (brief.predictions.length > 0) {
    lines.push("### Predictions\n");
    for (const p of brief.predictions) {
      lines.push(`- ${p.id}: "${p.claim}" — ${p.status}, due ${p.deadline}`);
    }
    lines.push("");
  }

  // Tensions
  if (brief.tensions.length > 0) {
    lines.push("### Known Tensions\n");
    for (const t of brief.tensions) {
      lines.push(`- ${t.id}: "${t.title}" (${t.status})`);
    }
    lines.push("");
  }

  // Evidence
  if (brief.evidence.length > 0) {
    lines.push("### Supporting Evidence\n");
    for (const e of brief.evidence) {
      lines.push(
        `- [${e.id}] "${e.title}" (${e.domain}/${e.topic}, ${e.confidence})`
      );
    }
    lines.push("");
  }

  // Track record
  lines.push("### Track Record\n");
  const total = confirmed + falsified + untested;
  if (total > 0) {
    lines.push(
      `${confirmed} confirmed, ${falsified} falsified, ${untested} untested across ${total} matched principles\n`
    );
  } else {
    lines.push("No principles matched — no track record available.\n");
  }

  return lines.join("\n");
}

// ─── Concise Renderer ──────────────────────────────────────────────
// Compact, agent-friendly output budgeted for reflexive use during decisions.
// Targets ~300 tokens (~1200-1600 chars). Selection is pure truncation — uses
// whatever ordering generateBrief() already produces and slices to the limit.
// Reordering belongs in generateBrief(), not here. The data layer is the
// single source of ranking logic; this function is render-only.

const CONCISE_LIMITS = {
  principles: 3,
  predictions: 2,
  decisions: 1,
  tensions: 1,
} as const;

export function renderBriefAsConciseContext(brief: DecisionBrief): string {
  const { confirmed, falsified, untested } = brief.track_record;
  const totalMatched =
    brief.principles.length +
    brief.predictions.length +
    brief.decisions.length +
    brief.tensions.length;

  if (totalMatched === 0) {
    return `Zuhn brief for "${brief.query}": no relevant context in KB.`;
  }

  const lines: string[] = [];
  lines.push(`Zuhn brief — "${brief.query}"`);

  // Principles (title + empirical label only — summary omitted)
  if (brief.principles.length > 0) {
    lines.push("");
    lines.push("Principles:");
    for (const p of brief.principles.slice(0, CONCISE_LIMITS.principles)) {
      const label = empiricalLabel(p.empirical_state);
      lines.push(`- [${label}] ${p.title}`);
    }
  }

  // Predictions (claim + status + deadline)
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

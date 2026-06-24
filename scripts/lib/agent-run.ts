import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ZodError } from "zod";

import { generateAgentRunId } from "./generate-id";
import { KB_ROOT } from "./kb-root";
import {
  AgentRun,
  AgentRunAppend,
  AgentRunAppendData,
  AgentRunData,
  AgentRunStartInput,
  AgentRunStartInputData,
  AgentRunStatusData,
} from "../schemas/agent-run";

export class AgentRunError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AgentRunError";
  }
}

export interface AgentRunStoreOptions {
  runsDir?: string;
  viewsDir?: string;
  now?: () => Date;
}

function timestamp(now: () => Date): string {
  return now().toISOString();
}

function defaultRunsDir(): string {
  return process.env.ZUHN_AGENT_RUNS_DIR ?? join(KB_ROOT, "runs");
}

function defaultViewsDir(): string {
  return process.env.ZUHN_AGENT_RUN_VIEWS_DIR ?? join(KB_ROOT, "views");
}

export function resolveAgentRunDirs(options: AgentRunStoreOptions = {}): {
  runsDir: string;
  viewsDir: string;
} {
  return {
    runsDir: options.runsDir ?? defaultRunsDir(),
    viewsDir: options.viewsDir ?? defaultViewsDir(),
  };
}

export function agentRunPath(id: string, options: AgentRunStoreOptions = {}): string {
  const { runsDir } = resolveAgentRunDirs(options);
  return join(runsDir, `${id}.json`);
}

function formatZodError(err: ZodError): string {
  return err.issues.map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`).join("; ");
}

function ensureUniqueIds(run: AgentRunData): void {
  const ids = new Set<string>();
  const groups = [
    run.plan,
    run.steps,
    run.artifacts,
    run.risk_assessments,
    run.side_effects,
    run.verification_gates,
    run.memory_candidates,
  ];

  for (const group of groups) {
    for (const item of group) {
      if (ids.has(item.id)) {
        throw new AgentRunError(`Duplicate AgentRun item id: ${item.id}`);
      }
      ids.add(item.id);
    }
  }
}

export function parseAgentRunJson(raw: string): AgentRunData {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new AgentRunError(`Invalid AgentRun JSON: ${msg}`);
  }

  const result = AgentRun.safeParse(parsed);
  if (!result.success) {
    throw new AgentRunError(`Invalid AgentRun: ${formatZodError(result.error)}`);
  }
  ensureUniqueIds(result.data);
  return result.data;
}

export function readAgentRun(id: string, options: AgentRunStoreOptions = {}): AgentRunData {
  const path = agentRunPath(id, options);
  if (!existsSync(path)) {
    throw new AgentRunError(`AgentRun not found: ${id}`);
  }
  return parseAgentRunJson(readFileSync(path, "utf-8"));
}

export function writeAgentRun(run: AgentRunData, options: AgentRunStoreOptions = {}): string {
  const result = AgentRun.safeParse(run);
  if (!result.success) {
    throw new AgentRunError(`Invalid AgentRun: ${formatZodError(result.error)}`);
  }
  ensureUniqueIds(result.data);

  const { runsDir } = resolveAgentRunDirs(options);
  mkdirSync(runsDir, { recursive: true });
  const path = agentRunPath(run.id, options);
  writeFileSync(path, `${JSON.stringify(result.data, null, 2)}\n`, "utf-8");
  writeAgentRunIndex(options);
  return path;
}

export function startAgentRun(
  input: AgentRunStartInputData,
  options: AgentRunStoreOptions = {}
): AgentRunData {
  const parsed = AgentRunStartInput.safeParse(input);
  if (!parsed.success) {
    throw new AgentRunError(`Invalid AgentRun start input: ${formatZodError(parsed.error)}`);
  }

  const now = options.now ?? (() => new Date());
  const createdAt = timestamp(now);
  const run: AgentRunData = {
    schema_version: 1,
    id: generateAgentRunId(parsed.data.goal, createdAt),
    goal: parsed.data.goal,
    scope: parsed.data.scope,
    created_at: createdAt,
    updated_at: createdAt,
    status: "active",
    plan: parsed.data.plan,
    steps: [],
    artifacts: [],
    risk_assessments: [],
    side_effects: [],
    verification_gates: [],
    memory_candidates: [],
  };

  writeAgentRun(run, options);
  return run;
}

export function appendAgentRun(
  run: AgentRunData,
  patch: AgentRunAppendData,
  options: AgentRunStoreOptions = {}
): AgentRunData {
  if (run.status !== "active") {
    throw new AgentRunError(`Cannot append to non-active AgentRun ${run.id} (${run.status})`);
  }

  const parsed = AgentRunAppend.safeParse(patch);
  if (!parsed.success) {
    throw new AgentRunError(`Invalid AgentRun append input: ${formatZodError(parsed.error)}`);
  }

  const now = options.now ?? (() => new Date());
  const next: AgentRunData = {
    ...run,
    updated_at: timestamp(now),
    steps: [...run.steps, ...(parsed.data.steps ?? [])],
    artifacts: [...run.artifacts, ...(parsed.data.artifacts ?? [])],
    risk_assessments: [...run.risk_assessments, ...(parsed.data.risk_assessments ?? [])],
    side_effects: [...run.side_effects, ...(parsed.data.side_effects ?? [])],
    verification_gates: [...run.verification_gates, ...(parsed.data.verification_gates ?? [])],
    memory_candidates: [...run.memory_candidates, ...(parsed.data.memory_candidates ?? [])],
  };

  ensureUniqueIds(next);
  writeAgentRun(next, options);
  return next;
}

export function closeAgentRun(
  run: AgentRunData,
  status: Exclude<AgentRunStatusData, "active">,
  summary: string,
  options: AgentRunStoreOptions = {}
): AgentRunData {
  if (run.status !== "active") {
    throw new AgentRunError(`AgentRun ${run.id} is already closed (${run.status})`);
  }
  if (!summary.trim()) {
    throw new AgentRunError("Close summary is required");
  }
  if (status === "passed") {
    assertCanPass(run);
  }

  const now = options.now ?? (() => new Date());
  const closedAt = timestamp(now);
  const next: AgentRunData = {
    ...run,
    status,
    updated_at: closedAt,
    final_status: {
      closed_at: closedAt,
      outcome: status,
      summary,
    },
  };

  writeAgentRun(next, options);
  return next;
}

export function assertCanPass(run: AgentRunData): void {
  if (run.verification_gates.length === 0) {
    throw new AgentRunError("Cannot close as passed without at least one verification gate");
  }

  const failingGates = run.verification_gates.filter((gate) => gate.verdict !== "pass");
  if (failingGates.length > 0) {
    throw new AgentRunError(
      `Cannot close as passed with unresolved verification gates: ${failingGates
        .map((gate) => `${gate.id}=${gate.verdict}`)
        .join(", ")}`
    );
  }

  const uncommittedHardEffects = run.side_effects.filter(
    (effect) => effect.risk === "hard_gate" && !effect.committed
  );
  if (uncommittedHardEffects.length > 0) {
    throw new AgentRunError(
      `Cannot close as passed with uncommitted hard-gate side effects: ${uncommittedHardEffects
        .map((effect) => effect.id)
        .join(", ")}`
    );
  }
}

export function listAgentRuns(options: AgentRunStoreOptions = {}): AgentRunData[] {
  const { runsDir } = resolveAgentRunDirs(options);
  if (!existsSync(runsDir)) return [];

  return readdirSync(runsDir)
    .filter((entry) => entry.endsWith(".json"))
    .map((entry) => parseAgentRunJson(readFileSync(join(runsDir, entry), "utf-8")))
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export function writeAgentRunIndex(options: AgentRunStoreOptions = {}): string {
  const { viewsDir } = resolveAgentRunDirs(options);
  mkdirSync(viewsDir, { recursive: true });
  const runs = listAgentRuns(options);
  const lines = [
    "# Agent Runs",
    "",
    `> ${runs.length} run${runs.length === 1 ? "" : "s"}`,
    "",
    "| ID | Status | Goal | Updated | Gates |",
    "|---|---|---|---|---|",
  ];

  for (const run of runs) {
    const gates = run.verification_gates.length === 0
      ? "0"
      : `${run.verification_gates.filter((gate) => gate.verdict === "pass").length}/${run.verification_gates.length}`;
    lines.push(
      `| ${run.id} | ${run.status} | ${run.goal.replaceAll("|", "\\|")} | ${run.updated_at} | ${gates} |`
    );
  }

  const path = join(viewsDir, "agent-runs.md");
  writeFileSync(path, `${lines.join("\n")}\n`, "utf-8");
  return path;
}

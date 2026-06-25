#!/usr/bin/env npx tsx

import { readFileSync } from "node:fs";

import {
  AgentRunError,
  appendAgentRun,
  agentRunPath,
  checkAgentRunStore,
  closeAgentRun,
  listAgentRuns,
  readAgentRun,
  startAgentRun,
} from "./lib/agent-run";
import { AgentRunAppend, AgentRunStartInput } from "./schemas/agent-run";

function usage(): never {
  console.error(`Usage:
  npm run agent-run -- start --goal "..." [--scope "..."] [--plan plan.json]
  npm run agent-run -- append --id RUN-YYMMDD-XXXX --file patch.json
  npm run agent-run -- verify --id RUN-YYMMDD-XXXX --file gates.json
  npm run agent-run -- close --id RUN-YYMMDD-XXXX --status passed|failed|blocked|needs_human --summary "..."
  npm run agent-run -- view --id RUN-YYMMDD-XXXX
  npm run agent-run -- check
  npm run agent-run -- list`);
  process.exit(1);
}

function arg(name: string): string | undefined {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf-8"));
}

function command(): string {
  return process.argv[2] ?? usage();
}

function main(): void {
  switch (command()) {
    case "start": {
      const goal = arg("goal");
      if (!goal) usage();

      const planPath = arg("plan");
      const input = AgentRunStartInput.parse({
        goal,
        scope: arg("scope"),
        plan: planPath ? readJson(planPath) : [],
      });
      const run = startAgentRun(input);
      console.log(`${run.id}`);
      console.log(`Wrote: ${agentRunPath(run.id)}`);
      break;
    }

    case "append": {
      const id = arg("id");
      const file = arg("file");
      if (!id || !file) usage();

      const run = readAgentRun(id);
      const patch = AgentRunAppend.parse(readJson(file));
      const next = appendAgentRun(run, patch);
      console.log(`Appended to ${next.id}: ${next.updated_at}`);
      break;
    }

    case "verify": {
      const id = arg("id");
      const file = arg("file");
      if (!id || !file) usage();

      const raw = readJson(file);
      const gates = Array.isArray(raw) ? raw : raw && typeof raw === "object" && "verification_gates" in raw
        ? (raw as { verification_gates: unknown }).verification_gates
        : [raw];
      const run = readAgentRun(id);
      const patch = AgentRunAppend.parse({ verification_gates: gates });
      const next = appendAgentRun(run, patch);
      console.log(`Added ${patch.verification_gates?.length ?? 0} verification gate(s) to ${next.id}`);
      break;
    }

    case "close": {
      const id = arg("id");
      const status = arg("status");
      const summary = arg("summary");
      if (!id || !status || !summary) usage();
      if (!["blocked", "failed", "needs_human", "passed"].includes(status)) usage();

      const run = readAgentRun(id);
      const next = closeAgentRun(run, status as "blocked" | "failed" | "needs_human" | "passed", summary);
      console.log(`Closed ${next.id}: ${next.status}`);
      break;
    }

    case "view": {
      const id = arg("id");
      if (!id) usage();
      console.log(JSON.stringify(readAgentRun(id), null, 2));
      break;
    }

    case "list": {
      const runs = listAgentRuns();
      if (runs.length === 0) {
        console.log("No agent runs found.");
        break;
      }
      for (const run of runs) {
        console.log(`${run.id}\t${run.status}\t${run.updated_at}\t${run.goal}`);
      }
      break;
    }

    case "check": {
      const result = checkAgentRunStore();
      if (result.errors.length > 0) {
        console.error(`AgentRun check failed: ${result.errors.length} error(s) across ${result.checked} run(s)`);
        for (const error of result.errors) {
          console.error(`  ERROR: ${error}`);
        }
        process.exit(1);
      }
      console.log(`AgentRun check passed: ${result.checked} run(s)`);
      break;
    }

    default:
      usage();
  }
}

try {
  main();
} catch (err) {
  if (err instanceof AgentRunError) {
    console.error(err.message);
    process.exit(1);
  }
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`agent-run failed: ${msg}`);
  process.exit(1);
}

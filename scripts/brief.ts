#!/usr/bin/env npx tsx

// ─── Decision Brief CLI ────────────────────────────────────────────
// Assembles a decision brief from the knowledge base.
// Usage: npx tsx scripts/brief.ts "Should I raise VC or bootstrap?"
//        npx tsx scripts/brief.ts --domain startups "pricing strategy"
//        npx tsx scripts/brief.ts --mode concise "hire or automate"

import { initDb } from "./lib/db";
import {
  generateBrief,
  renderBriefAsMarkdown,
  renderBriefAsConciseContext,
  type BriefRenderMode,
} from "./lib/brief";

// ─── Arg parsing ────────────────────────────────────────────────────

interface CliArgs {
  query: string;
  domain?: string;
  limit?: number;
  mode: BriefRenderMode;
}

function parseArgs(argv: string[]): CliArgs {
  const args = argv.slice(2);
  const queryParts: string[] = [];
  let domain: string | undefined;
  let limit: number | undefined;
  // CLI default is "full" — CLI invocations are deep work by a human,
  // so full output is the right default. MCP callers (agents) default
  // to "concise" for ambient reflexive use.
  let mode: BriefRenderMode = "full";

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--domain" && i + 1 < args.length) {
      domain = args[++i];
    } else if (arg === "--limit" && i + 1 < args.length) {
      limit = parseInt(args[++i], 10);
    } else if (arg === "--mode" && i + 1 < args.length) {
      const raw = args[++i];
      if (raw !== "full" && raw !== "concise") {
        console.error(`Error: --mode must be 'full' or 'concise' (got '${raw}').`);
        process.exit(1);
      }
      mode = raw;
    } else if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    } else {
      queryParts.push(arg);
    }
  }

  return { query: queryParts.join(" "), domain, limit, mode };
}

function printUsage(): void {
  console.log(`
Usage: npx tsx scripts/brief.ts <query> [options]

Generates a decision brief from the knowledge base, showing relevant
principles, past decisions, active predictions, and known tensions.

Options:
  --domain <domain>   Constrain to specific domain (e.g. startups, investing)
  --limit <n>         Max principles to show (default: 10)
  --mode <full|concise>  Render mode. 'full' (default) = comprehensive
                      markdown brief. 'concise' = compact ~300-token
                      summary for quick reference.
  --help, -h          Show this help message

Examples:
  npx tsx scripts/brief.ts "Should I raise VC or bootstrap?"
  npx tsx scripts/brief.ts --domain startups "pricing strategy"
  npx tsx scripts/brief.ts "hire or automate" --limit 5
  npx tsx scripts/brief.ts --mode concise "should I ship now"
`);
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { query, domain, limit, mode } = parseArgs(process.argv);

  if (!query) {
    console.error("Error: No query provided.\n");
    printUsage();
    process.exit(1);
  }

  const db = initDb();

  try {
    const brief = await generateBrief(db, query, { domain, limit });
    const output =
      mode === "concise"
        ? renderBriefAsConciseContext(brief)
        : renderBriefAsMarkdown(brief);
    console.log(output);
  } finally {
    db.close();
  }
}

main().catch((err) => {
  console.error("brief.ts failed:", err);
  process.exit(1);
});

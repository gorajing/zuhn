#!/usr/bin/env npx tsx

// ─── Decision Brief CLI ────────────────────────────────────────────
// Assembles a decision brief from the knowledge base.
// Usage: npx tsx scripts/brief.ts "Should I raise VC or bootstrap?"
//        npx tsx scripts/brief.ts --domain startups "pricing strategy"

import { initDb } from "./lib/db";
import { generateBrief, renderBriefAsMarkdown } from "./lib/brief";

// ─── Arg parsing ────────────────────────────────────────────────────

function parseArgs(argv: string[]): { query: string; domain?: string; limit?: number } {
  const args = argv.slice(2);
  const queryParts: string[] = [];
  let domain: string | undefined;
  let limit: number | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--domain" && i + 1 < args.length) {
      domain = args[++i];
    } else if (arg === "--limit" && i + 1 < args.length) {
      limit = parseInt(args[++i], 10);
    } else if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    } else {
      queryParts.push(arg);
    }
  }

  return { query: queryParts.join(" "), domain, limit };
}

function printUsage(): void {
  console.log(`
Usage: npx tsx scripts/brief.ts <query> [options]

Generates a decision brief from the knowledge base, showing relevant
principles, past decisions, active predictions, and known tensions.

Options:
  --domain <domain>   Constrain to specific domain (e.g. startups, investing)
  --limit <n>         Max principles to show (default: 10)
  --help, -h          Show this help message

Examples:
  npx tsx scripts/brief.ts "Should I raise VC or bootstrap?"
  npx tsx scripts/brief.ts --domain startups "pricing strategy"
  npx tsx scripts/brief.ts "hire or automate" --limit 5
`);
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { query, domain, limit } = parseArgs(process.argv);

  if (!query) {
    console.error("Error: No query provided.\n");
    printUsage();
    process.exit(1);
  }

  const db = initDb();

  try {
    const brief = await generateBrief(db, query, { domain, limit });
    console.log(renderBriefAsMarkdown(brief));
  } finally {
    db.close();
  }
}

main().catch((err) => {
  console.error("brief.ts failed:", err);
  process.exit(1);
});

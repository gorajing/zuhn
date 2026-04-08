#!/usr/bin/env npx tsx

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { SessionState } from "./schemas/session.js";

const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const SESSION_PATH = join(KB_ROOT, "meta", "session.md");

// ─── Helpers ──────────────────────────────────────────────────────────

function usage(): never {
  console.error("Usage: sleep.ts --file <JSON_FILE>");
  console.error("");
  console.error("  --file    Path to session state JSON file");
  process.exit(1);
}

function parseArgs(argv: string[]): { file: string } {
  let file = "";

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--file":
        file = argv[++i] || "";
        break;
    }
  }

  if (!file) usage();
  return { file };
}

// ─── Main ─────────────────────────────────────────────────────────────

function main(): void {
  const { file } = parseArgs(process.argv);

  // 1. Read the JSON file
  let raw: string;
  try {
    raw = readFileSync(file, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: Cannot read file "${file}" — ${msg}`);
    process.exit(1);
  }

  // 2. Strip markdown code fences (Claude RLHF habit)
  raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

  // 3. Parse JSON with truncation detection
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      console.error(
        "Error: Malformed JSON — likely truncated. Ensure the full session state was written."
      );
    } else {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`Error: JSON parse failed — ${msg}`);
    }
    process.exit(1);
  }

  // 4. Validate against schema
  const validation = SessionState.safeParse(parsed);
  if (!validation.success) {
    console.error("Error: Session state JSON failed schema validation:");
    for (const issue of validation.error.issues) {
      const field = issue.path.join(".");
      console.error(`  ${field}: ${issue.message}`);
    }
    process.exit(1);
  }

  const state = validation.data;

  // 5. Render to markdown
  const activeFiles = state.active_files.map((f) => `- ${f}`).join("\n");
  const openLoops = state.open_loops.map((l) => `- ${l}`).join("\n");
  const nextActions = state.next_actions.map((a) => `- [ ] ${a}`).join("\n");

  const md = `# Session State
Saved: ${new Date().toISOString()}

## Focus Area
${state.focus_area}

## Train of Thought
${state.train_of_thought}

## Active Files
${activeFiles}

## Open Loops
${openLoops}

## Next Actions
${nextActions}
`;

  // 6. Write to session.md
  mkdirSync(join(KB_ROOT, "meta"), { recursive: true });
  writeFileSync(SESSION_PATH, md, "utf-8");

  // 7. Optionally auto-commit — honest about the gitignored case.
  //
  // knowledge-base/meta/ is gitignored by design: it contains runtime
  // state, not repository content. If session.md is ignored (the
  // expected case), we skip the commit entirely and say so. If it's
  // NOT ignored (someone unignored it deliberately), we attempt a
  // commit. Either way, a git failure is non-fatal — the file was
  // already written in step 6.
  const isIgnored = isPathIgnored(SESSION_PATH);
  if (isIgnored) {
    console.log(
      "Sleep state saved to meta/session.md (not committed — meta/ is gitignored)."
    );
    return;
  }

  try {
    execFileSync("git", ["add", "--", SESSION_PATH], {
      stdio: "pipe",
      cwd: PROJECT_ROOT,
    });

    // Check if SESSION_PATH specifically has staged changes. Using
    // `-- <path>` scopes the diff to just this file, so unrelated
    // staged work in the user's index doesn't trigger a sleep commit.
    let hasStaged = true;
    try {
      execFileSync(
        "git",
        ["diff", "--cached", "--quiet", "--", SESSION_PATH],
        { stdio: "pipe", cwd: PROJECT_ROOT }
      );
      hasStaged = false;
    } catch {
      hasStaged = true;
    }

    if (hasStaged) {
      // Pathspec mode: commit ONLY session.md, even if other files
      // are staged. Using `-- <path>` here prevents sleep.ts from
      // accidentally sweeping a user's unrelated staged work into
      // "chore: sleep state saved" — a subtle footgun that would
      // only fire in the "session.md unignored" future state, but
      // fixing it now removes the landmine.
      execFileSync(
        "git",
        ["commit", "-m", "chore: sleep state saved", "--", SESSION_PATH],
        { stdio: "pipe", cwd: PROJECT_ROOT }
      );
      console.log("Sleep state saved to meta/session.md and committed.");
    } else {
      console.log("Sleep state saved to meta/session.md (no changes to commit).");
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    // Non-fatal: the session.md file was already written successfully
    // in step 6. Only the git bookkeeping failed.
    console.warn(
      `Sleep state saved to meta/session.md (git commit skipped: ${msg.split("\n")[0]})`
    );
  }
}

/**
 * Check whether a path would be ignored by .gitignore. Returns true if
 * the path is ignored, false if it's tracked or untracked-but-eligible,
 * and false on any git failure (graceful degradation — if git can't
 * tell us, we default to attempting the commit).
 */
function isPathIgnored(path: string): boolean {
  try {
    execFileSync("git", ["check-ignore", "--quiet", path], {
      stdio: "pipe",
      cwd: PROJECT_ROOT,
    });
    // Exit code 0 means the path IS ignored
    return true;
  } catch {
    // Non-zero exit: either not ignored (exit 1) or git error (exit 128).
    // Either way, don't treat as ignored — let the commit path handle it.
    return false;
  }
}

main();

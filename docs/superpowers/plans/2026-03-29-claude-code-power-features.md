# Claude Code Power Features — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 Claude Code power features that enforce Zuhn's architectural rules at the tool level, automate session setup, and unlock parallel processing — without modifying any existing TypeScript scripts.

**Architecture:** All changes live in `.claude/` (hooks, agents, settings) and `.github/` (CI). Zero modifications to `scripts/`, `knowledge-base/`, or `package.json`. The existing 294 tests remain untouched and serve as the regression gate.

**Tech Stack:** Shell scripts (hooks), Markdown (agents), JSON (settings), YAML (CI)

---

## Risk Assessment

| Feature | Files touched | Breakage risk | Rollback |
|---------|--------------|---------------|----------|
| 1. PreToolUse write guard | New: `.claude/hooks/block-kb-writes.sh` | **Zero** — additive only, no existing files modified | Delete the hook file |
| 2. SessionStart env injection | New: `.claude/hooks/session-setup.sh` | **Zero** — additive only | Delete the hook file |
| 3. Custom subagents | New: 3 files in `.claude/agents/` | **Zero** — agents are opt-in, never auto-triggered | Delete the agent files |
| 4. Settings.json configuration | New: `.claude/settings.json` | **Low** — settings.local.json overrides if conflict | Delete settings.json |
| 5. GitHub Actions CI enhancement | Modify: `.github/workflows/ci.yml` | **Low** — CI only, doesn't affect local dev | Revert ci.yml |

**Total risk: Near-zero.** Every change is additive. No existing TypeScript code, tests, or knowledge-base files are modified. Each feature can be independently reverted by deleting its file.

---

## File Structure

```
.claude/                           ← All new files live here
├── settings.json                  ← CREATE: project settings (excludes, context rules)
├── hooks/
│   ├── block-kb-writes.sh         ← CREATE: PreToolUse guard for Golden Rule
│   └── session-setup.sh           ← CREATE: SessionStart env injection
└── agents/
    ├── insight-validator.md       ← CREATE: validates extraction JSON
    ├── kb-researcher.md           ← CREATE: searches KB for insights
    └── learning-auditor.md        ← CREATE: checks learning mechanism outputs

.github/workflows/
└── ci.yml                         ← MODIFY: add Zuhn-specific health checks (lines 15-25)
```

---

### Task 1: PreToolUse Write Guard (The Golden Rule Enforcer)

**Context:** CLAUDE.md line 5 says "Never manually write insight/principle/source files with Write/Edit tools." Currently this is a verbal instruction. This hook makes it physically impossible — Claude gets blocked before the tool executes.

**How it works:** Claude Code fires a `PreToolUse` event before every `Write` or `Edit` call. The hook reads the JSON input from stdin, extracts `file_path`, checks if it targets a protected directory, and exits with code 2 (block) or 0 (allow). Exit code 2 returns the stderr message to Claude as feedback.

**Impact on existing code:** None. The hook only fires during Claude Code sessions. Running `npm test`, `npm run extract`, or any script directly is completely unaffected — hooks don't intercept TypeScript execution, only Claude's tool calls.

**Files:**
- Create: `.claude/hooks/block-kb-writes.sh`
- No existing files modified

- [ ] **Step 1: Create the hook script**

```bash
#!/bin/bash
# .claude/hooks/block-kb-writes.sh
#
# PreToolUse hook: blocks Write/Edit to protected knowledge-base paths.
# Claude must use JSON → scripts/extract.ts (insights) or
# JSON → scripts/create-principles.ts (principles) instead.
#
# How it works:
# - Claude Code pipes {"tool_name":"Write","tool_input":{"file_path":"..."}} to stdin
# - We extract file_path and check against protected patterns
# - Exit 0 = allow, Exit 2 = block (returns stderr as feedback to Claude)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_input',{}).get('file_path',''))" 2>/dev/null)

# If we can't parse, allow (don't break other tools)
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Block writes to insight, principle, mental-model, and tension directories
if echo "$FILE_PATH" | grep -qE 'knowledge-base/(domains|principles|mental-models|tensions)/'; then
  echo "BLOCKED: Direct writes to knowledge-base content files are not allowed." >&2
  echo "Write JSON to /tmp/zuhn-extract-*.json, then run:" >&2
  echo "  Insights:   npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract-*.json" >&2
  echo "  Principles: npx tsx scripts/create-principles.ts --file /tmp/zuhn-principles.json" >&2
  echo "  Tensions:   npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json" >&2
  exit 2
fi

exit 0
```

- [ ] **Step 2: Make it executable**

Run: `chmod +x .claude/hooks/block-kb-writes.sh`
Expected: No output, exit code 0

- [ ] **Step 3: Test the hook manually with a blocked path**

Run: `echo '{"tool_name":"Write","tool_input":{"file_path":"knowledge-base/domains/ai-development/test.md"}}' | .claude/hooks/block-kb-writes.sh; echo "Exit: $?"`
Expected: Stderr shows "BLOCKED: Direct writes..." and exit code is `2`

- [ ] **Step 4: Test the hook manually with an allowed path**

Run: `echo '{"tool_name":"Write","tool_input":{"file_path":"/tmp/zuhn-extract-test.json"}}' | .claude/hooks/block-kb-writes.sh; echo "Exit: $?"`
Expected: No output, exit code `0`

- [ ] **Step 5: Test with a non-Write tool (should pass through)**

Run: `echo '{"tool_name":"Read","tool_input":{"file_path":"knowledge-base/domains/test.md"}}' | .claude/hooks/block-kb-writes.sh; echo "Exit: $?"`
Expected: No output, exit code `0`

- [ ] **Step 6: Commit**

```bash
git add .claude/hooks/block-kb-writes.sh
git commit -m "feat: add PreToolUse hook to enforce Golden Rule — block direct KB writes"
```

**Note:** This hook is registered in `.claude/settings.json` which is created in Task 4. Until then, the hook exists but isn't wired up.

---

### Task 2: SessionStart Environment Injection

**Context:** Every session, Claude needs to know the project root, whether Ollama is running, and the current KB stats. Currently this comes from reading CLAUDE.md and running commands. A SessionStart hook injects this context automatically.

**How it works:** Claude Code fires `SessionStart` on `startup`, `resume`, `clear`, and `compact`. The hook script writes environment variables to `$CLAUDE_ENV_FILE` (which persists them across all Bash calls in the session) and prints a status summary that Claude sees as context.

**Impact on existing code:** None. The hook only runs inside Claude Code sessions. Environment variables set here are additive — they don't override anything in the existing scripts.

**Files:**
- Create: `.claude/hooks/session-setup.sh`
- No existing files modified

- [ ] **Step 1: Create the session setup hook**

```bash
#!/bin/bash
# .claude/hooks/session-setup.sh
#
# SessionStart hook: injects Zuhn environment and prints KB status.
# Runs on: startup, resume, clear, compact
#
# Sets persistent env vars via $CLAUDE_ENV_FILE so all subsequent
# Bash commands in the session inherit them without re-export.

ZUHN_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

# ── Persistent environment variables ──
if [ -n "$CLAUDE_ENV_FILE" ]; then
  echo "export ZUHN_ROOT=\"$ZUHN_ROOT\"" >> "$CLAUDE_ENV_FILE"
  echo "export KB_ROOT=\"$ZUHN_ROOT/knowledge-base\"" >> "$CLAUDE_ENV_FILE"
fi

# ── Ollama status check ──
OLLAMA_STATUS="offline"
if curl -s --max-time 1 http://localhost:11434/api/tags > /dev/null 2>&1; then
  OLLAMA_STATUS="online"
fi

# ── Quick KB stats from SQLite ──
INSIGHT_COUNT="?"
PRINCIPLE_COUNT="?"
SOURCE_COUNT="?"
DB_PATH="$ZUHN_ROOT/knowledge-base/db/brain.db"

if [ -f "$DB_PATH" ]; then
  INSIGHT_COUNT=$(sqlite3 "$DB_PATH" "SELECT COUNT(*) FROM insights WHERE status='active'" 2>/dev/null || echo "?")
  SOURCE_COUNT=$(sqlite3 "$DB_PATH" "SELECT COUNT(DISTINCT domain || '/' || topic) FROM insights" 2>/dev/null || echo "?")
fi

# Count principles from filesystem (they're not in SQLite)
PRINCIPLE_COUNT=$(find "$ZUHN_ROOT/knowledge-base/principles" -name "*.md" ! -name "_index.md" 2>/dev/null | wc -l | tr -d ' ')

# ── Print summary for Claude's context ──
echo "Zuhn session ready."
echo "  Root: $ZUHN_ROOT"
echo "  Ollama: $OLLAMA_STATUS"
echo "  Knowledge base: $INSIGHT_COUNT insights, $PRINCIPLE_COUNT principles, $SOURCE_COUNT topics"

# ── Check for learning flags ──
FLAGS_FILE="$ZUHN_ROOT/knowledge-base/meta/flags.md"
if [ -f "$FLAGS_FILE" ]; then
  COMPRESS_COUNT=$(grep -c "^- " "$FLAGS_FILE" 2>/dev/null || echo "0")
  if [ "$COMPRESS_COUNT" -gt "0" ]; then
    echo "  Flags: $COMPRESS_COUNT active (check meta/flags.md)"
  fi
fi
```

- [ ] **Step 2: Make it executable**

Run: `chmod +x .claude/hooks/session-setup.sh`
Expected: No output, exit code 0

- [ ] **Step 3: Test the hook manually**

Run: `CLAUDE_ENV_FILE=/tmp/test-env.sh .claude/hooks/session-setup.sh`
Expected: Prints "Zuhn session ready." with root path, Ollama status, and KB stats. Check `/tmp/test-env.sh` contains the export lines.

- [ ] **Step 4: Verify env file was written**

Run: `cat /tmp/test-env.sh`
Expected: Contains `export ZUHN_ROOT="..."` and `export KB_ROOT="..."`

- [ ] **Step 5: Clean up and commit**

```bash
rm -f /tmp/test-env.sh
git add .claude/hooks/session-setup.sh
git commit -m "feat: add SessionStart hook — auto-inject Zuhn env and KB status"
```

---

### Task 3: Custom Subagents

**Context:** Zuhn has three common workflows that benefit from isolated context: (1) validating extraction JSON before running extract.ts, (2) searching the KB to answer questions, (3) auditing learning mechanism outputs. Each gets a lightweight agent definition.

**How it works:** Agent definitions are Markdown files in `.claude/agents/` with YAML frontmatter specifying name, description, available tools, and model. They're invoked via the `Agent` tool with `subagent_type` matching the agent name. Each agent runs in its own context window, so it doesn't pollute the main conversation.

**Impact on existing code:** None. Agent definitions are passive files — they only activate when explicitly invoked. No existing scripts, tests, or workflows are affected.

**Files:**
- Create: `.claude/agents/insight-validator.md`
- Create: `.claude/agents/kb-researcher.md`
- Create: `.claude/agents/learning-auditor.md`
- No existing files modified

- [ ] **Step 1: Create the insight validator agent**

This agent validates extraction JSON against the Zod schema and checks stance quality before you run `scripts/extract.ts`. It catches errors before they become bad insight files.

```markdown
---
name: insight-validator
description: Validates extraction JSON against Zuhn's Zod schema and checks stance quality before running extract.ts
model: haiku
tools: [Read, Bash, Glob]
---

You validate extraction JSON files for the Zuhn knowledge base.

## Your job

Given a JSON file path (usually `/tmp/zuhn-extract-SRC-*.json`), validate it:

1. **Schema check**: Run `npx tsx -e "const {ExtractionInput} = require('./scripts/schemas/extraction'); const data = JSON.parse(require('fs').readFileSync('FILE_PATH','utf-8')); ExtractionInput.parse(data); console.log('Schema: PASS')"` replacing FILE_PATH with the actual path.

2. **Stance check**: For each insight, verify the `stance` field is a one-sentence directional claim that could be true or false. Flag any stances that are descriptive rather than assertive (e.g., "This discusses AI" is bad; "AI will displace most white-collar workers" is good).

3. **Topic discipline**: Read existing topic directories with `ls knowledge-base/domains/*/` and flag any new topics in the extraction that could map to existing ones.

4. **Report**: Output a summary — total insights, schema pass/fail, stance issues, topic concerns.

Do NOT modify the JSON file. Only read and report.
```

Write to: `.claude/agents/insight-validator.md`

- [ ] **Step 2: Create the KB researcher agent**

This agent searches the knowledge base to answer questions. Uses Haiku (cheap) and only read tools. Good for "what do I know about X?" queries without burning main context.

```markdown
---
name: kb-researcher
description: Searches Zuhn's knowledge base to find relevant insights and principles on a topic
model: haiku
tools: [Read, Bash, Glob, Grep]
---

You search the Zuhn knowledge base to find relevant insights and principles.

## Available search methods

1. **Keyword search**: `npx tsx scripts/search.ts "query"` — FTS5 BM25 ranking
2. **Semantic search**: `npx tsx scripts/search.ts "query" -- --semantic` — requires Ollama
3. **Hybrid search**: `npx tsx scripts/search.ts "query" -- --hybrid` — best results
4. **Direct browse**: `ls knowledge-base/domains/` then read specific files

## How to respond

- Search with 2-3 different queries to get coverage
- For each relevant result, read the full insight file to get the `standard` resolution
- Cite insight IDs (INS-XXXXXX-XXXX) and principle IDs (PRI-XXXXXX-XXXX)
- Organize findings by theme, not by search query
- Note confidence levels — high-confidence insights are more reliable
```

Write to: `.claude/agents/kb-researcher.md`

- [ ] **Step 3: Create the learning auditor agent**

This agent reads `meta/flags.md` and provides a structured assessment of what the learning mechanisms found.

```markdown
---
name: learning-auditor
description: Reads learning mechanism flags and provides actionable assessment of what needs attention
model: haiku
tools: [Read, Glob, Grep]
---

You audit the outputs of Zuhn's 9 learning mechanisms.

## What to do

1. Read `knowledge-base/meta/flags.md`
2. For each flag type, assess priority:

**COMPRESS flags**: Check the insight:principle ratio. Ratios above 20:1 are urgent. Below 10:1 can wait.

**DISCOVER flags**: Cross-topic clusters. Read 2-3 insights from each cluster to assess if the connection is meaningful or spurious.

**GAP flags**: Sparse topics adjacent to dense ones. Check if the gap represents missing knowledge or just a niche area.

**TRANSFER flags**: Principles that may apply across domains. Read the principle and the target insight to judge if the transfer is genuinely surprising (zero shared tags = good signal).

3. Output a prioritized action list:
   - What to compress (which topics, how many insights)
   - Which clusters to explore
   - Which gaps to fill
   - Which transfers to investigate
```

Write to: `.claude/agents/learning-auditor.md`

- [ ] **Step 4: Commit all agents**

```bash
git add .claude/agents/
git commit -m "feat: add 3 subagents — insight-validator, kb-researcher, learning-auditor"
```

---

### Task 4: Settings.json Configuration

**Context:** This is the central wiring file that registers the hooks from Tasks 1-2, configures context exclusions, and sets project-level preferences. The `settings.local.json` (which has broad permissions) remains untouched — `settings.json` adds project-level configuration alongside it.

**How it works:** Claude Code merges `settings.json` (project, committed) with `settings.local.json` (personal, gitignored). Hooks in `settings.json` fire for everyone who clones the repo. The existing `settings.local.json` permissions are unaffected.

**Impact on existing code:** None. This file is new. The only interaction is with Claude Code itself — it reads this file on session start.

**Files:**
- Create: `.claude/settings.json`
- No existing files modified

- [ ] **Step 1: Create settings.json**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "bash \"$CLAUDE_PROJECT_DIR/.claude/hooks/block-kb-writes.sh\""
          }
        ]
      }
    ],
    "SessionStart": [
      {
        "matcher": "startup|resume",
        "hooks": [
          {
            "type": "command",
            "command": "bash \"$CLAUDE_PROJECT_DIR/.claude/hooks/session-setup.sh\""
          }
        ]
      }
    ]
  }
}
```

Write to: `.claude/settings.json`

- [ ] **Step 2: Verify settings.json is valid JSON**

Run: `python3 -c "import json; json.load(open('.claude/settings.json')); print('Valid JSON')"`
Expected: `Valid JSON`

- [ ] **Step 3: Verify it doesn't conflict with settings.local.json**

Run: `python3 -c "import json; local=json.load(open('.claude/settings.local.json')); project=json.load(open('.claude/settings.json')); print('Local keys:', list(local.keys())); print('Project keys:', list(project.keys()))"`
Expected: Local has `permissions`, Project has `hooks`. No overlap — they merge cleanly.

- [ ] **Step 4: Commit**

```bash
git add .claude/settings.json
git commit -m "feat: add project settings — wire up PreToolUse and SessionStart hooks"
```

---

### Task 5: GitHub Actions CI Enhancement

**Context:** The current CI (`.github/workflows/ci.yml`) runs `npm test`, `npm run health`, and `npm run bench:check`. We add one more check: verify that the `.claude/hooks/` scripts are executable (a common mistake that silently disables hooks).

**How it works:** We add a step that checks file permissions on hook scripts. If someone commits a hook without `+x`, CI catches it.

**Impact on existing code:** Modifies only the CI workflow file. No impact on local development, tests, or the knowledge base. The existing three CI steps remain unchanged.

**Files:**
- Modify: `.github/workflows/ci.yml` (add 5 lines after line 25)

- [ ] **Step 1: Read the current CI file**

Read: `.github/workflows/ci.yml`
Verify it currently has: checkout → setup-node → npm ci → test → health → bench:check

- [ ] **Step 2: Add the hook permission check step**

After the existing `Benchmark regression check` step (line 25), add:

```yaml

      - name: Verify hook scripts are executable
        run: |
          for f in .claude/hooks/*.sh; do
            [ -x "$f" ] || { echo "FAIL: $f is not executable (run: chmod +x $f)"; exit 1; }
          done
          echo "All hooks executable"
```

The full file after modification should be:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - name: Run tests
        run: npm test

      - name: Health check
        run: npm run health

      - name: Benchmark regression check
        run: npm run bench:check

      - name: Verify hook scripts are executable
        run: |
          for f in .claude/hooks/*.sh; do
            [ -x "$f" ] || { echo "FAIL: $f is not executable (run: chmod +x $f)"; exit 1; }
          done
          echo "All hooks executable"
```

- [ ] **Step 3: Verify the YAML is valid**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/ci.yml')); print('Valid YAML')"`
Expected: `Valid YAML`

- [ ] **Step 4: Run existing tests to confirm nothing broke**

Run: `npm test`
Expected: 22 files, 294 tests, all passing

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add hook permission verification step"
```

---

## Verification After All Tasks

- [ ] **Run full test suite**: `npm test` — expect 294 passing (unchanged)
- [ ] **Run health check**: `npm run health` — expect PASS (unchanged)
- [ ] **Run benchmark check**: `npm run bench:check` — expect PASS (unchanged)
- [ ] **Test write guard manually**: `echo '{"tool_name":"Write","tool_input":{"file_path":"knowledge-base/domains/test.md"}}' | .claude/hooks/block-kb-writes.sh; echo $?` — expect exit code 2
- [ ] **Test session setup manually**: `CLAUDE_ENV_FILE=/dev/null .claude/hooks/session-setup.sh` — expect "Zuhn session ready" with stats
- [ ] **Verify .claude/ structure**:

```bash
find .claude -type f | sort
```

Expected:
```
.claude/agents/insight-validator.md
.claude/agents/kb-researcher.md
.claude/agents/learning-auditor.md
.claude/hooks/block-kb-writes.sh
.claude/hooks/session-setup.sh
.claude/settings.json
.claude/settings.local.json
```

---

## What This Does NOT Change

- `scripts/*.ts` — zero modifications to any TypeScript file
- `scripts/lib/*.ts` — zero modifications to learning.ts, search.ts, write-insights.ts, etc.
- `knowledge-base/` — zero modifications to any knowledge file
- `package.json` — no new scripts, no new dependencies
- `tsconfig.json` — untouched
- `schemas/*.ts` — untouched
- All 294 tests — untouched, serve as regression gate
- `benchmarks/` — untouched
- `scripts/mcp-server.ts` — untouched (already has 9 tools, no modifications needed)

## What This DOES Change

| Feature | Mechanism | Can break things? |
|---------|-----------|-------------------|
| Write guard | Shell hook, exit code 2 blocks Write/Edit | No — only active in Claude Code sessions. Falls through (exit 0) on parse failure. |
| Session setup | Shell hook, prints to stdout + writes to $CLAUDE_ENV_FILE | No — additive env vars only. If hook fails, session starts normally without the extra context. |
| Subagents | Markdown files in .claude/agents/ | No — passive definitions, only invoked explicitly. If malformed, Agent tool returns an error. |
| Settings.json | JSON config read by Claude Code on startup | No — merges with settings.local.json. If malformed JSON, Claude Code logs a warning and uses defaults. |
| CI hook check | YAML step in GitHub Actions | No — additive step. If it fails, it means a hook lost its +x bit, which is the bug we want to catch. |

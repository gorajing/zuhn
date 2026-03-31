---
name: sleep-wake
description: Persist and restore session state across conversations — Zuhn's session memory
allowed-tools: [Read, Write, Bash]
---

## Sleep (End Session)

When the user says "sleep", persist the current session state:

1. Write session state as JSON to `/tmp/zuhn-sleep.json`:

```json
{
  "session_summary": "Brief description of what was accomplished",
  "active_files": ["list of files currently being worked on"],
  "next_steps": ["what should happen next session"],
  "flags_status": "any COMPRESS/GAP/TRANSFER flags worth noting",
  "context": "any important context for the next session"
}
```

2. Run the sleep script:

```bash
npx tsx scripts/sleep.ts --file /tmp/zuhn-sleep.json
```

## Wake (Resume Session)

When the user says "wake":

1. Read the morning briefing:

```bash
npx tsx scripts/wake.ts
```

2. Read the learning mechanism flags:

```bash
cat knowledge-base/meta/flags.md
```

3. Open the active files mentioned in the briefing.

4. Summarize what happened last session and what's next.

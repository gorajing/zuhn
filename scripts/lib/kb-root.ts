// ─── KB_ROOT — single source of truth ─────────────────────────────────
//
// All scripts and library modules import KB_ROOT from here rather than
// re-deriving it from `__dirname`. This is the foundation for multi-tenant
// configuration: pointing Zuhn at a different knowledge base (e.g. a
// customer corpus, a demo corpus, an isolated test KB) is a single env-var
// flip — `ZUHN_KB_ROOT=/path/to/other/kb`.
//
// Resolution rules:
//   1. If process.env.ZUHN_KB_ROOT is set, resolve it (relative paths
//      resolve against process.cwd(), absolute paths pass through).
//   2. Otherwise, default to <repo>/knowledge-base/.
//
// Naming follows the existing ZUHN_* convention used in inbox-server.ts
// (ZUHN_INBOX_PORT, ZUHN_INBOX_HOST) and daemon.ts (ZUHN_MAX_AGENTS).

import { join, resolve } from "node:path";

// scripts/lib/kb-root.ts → ../../ → repo root → knowledge-base/
const REPO_DEFAULT_KB_ROOT = join(__dirname, "../../knowledge-base");

export const KB_ROOT = process.env.ZUHN_KB_ROOT
  ? resolve(process.env.ZUHN_KB_ROOT)
  : REPO_DEFAULT_KB_ROOT;

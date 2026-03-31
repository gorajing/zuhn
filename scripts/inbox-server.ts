#!/usr/bin/env npx tsx
/**
 * inbox-server.ts — Local HTTP webhook server for the Zuhn inbox.
 *
 * Accepts URLs and file uploads via POST /inbox.
 * Appends to the SQLite inbox_queue for daemon processing.
 * Binds to localhost only — not exposed to network.
 *
 * Usage:
 *   npx tsx scripts/inbox-server.ts
 *   curl -X POST http://localhost:7777/inbox -H 'Content-Type: application/json' -d '{"url":"https://..."}'
 */

import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { initDb } from "./lib/db";
import type Database from "better-sqlite3";

const PORT = parseInt(process.env.ZUHN_INBOX_PORT ?? "7777", 10);
const PROJECT_ROOT = join(__dirname, "..");
const KB_ROOT = join(PROJECT_ROOT, "knowledge-base");
const INBOX_DIR = join(KB_ROOT, "inbox");

let db: Database.Database;

function generateInboxId(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hash = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `INB-${yy}${mm}${dd}-${hash}`;
}

function json(res: ServerResponse, status: number, body: unknown): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

async function handleInbox(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== "POST") {
    json(res, 405, { error: "POST only" });
    return;
  }

  try {
    const body = await readBody(req);
    const parsed = JSON.parse(body);

    if (!parsed.url && !parsed.text) {
      json(res, 400, { error: "Provide 'url' or 'text' + 'title'" });
      return;
    }

    const id = generateInboxId();
    const mode = parsed.mode || "auto";

    if (parsed.url) {
      // URL ingestion
      db.prepare(`
        INSERT INTO inbox_queue (id, url, type, source_channel, processing_mode)
        VALUES (?, ?, 'url', 'webhook', ?)
      `).run(id, parsed.url, mode);

      json(res, 200, { queued: true, id, url: parsed.url, mode });
    } else {
      // Text/paste ingestion — write to a temp file, queue as file
      const title = parsed.title || "untitled-paste";
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60);
      const filePath = join(INBOX_DIR, `${slug}-${id}.txt`);
      await writeFile(filePath, parsed.text, "utf-8");

      db.prepare(`
        INSERT INTO inbox_queue (id, type, source_channel, processing_mode, file_path)
        VALUES (?, 'paste', 'webhook', ?, ?)
      `).run(id, mode, filePath);

      json(res, 200, { queued: true, id, title, mode });
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    json(res, 400, { error: `Invalid request: ${msg}` });
  }
}

function handleStatus(_req: IncomingMessage, res: ServerResponse): void {
  const pending = db.prepare(
    "SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'pending'"
  ).get() as { n: number };

  const processing = db.prepare(
    "SELECT COUNT(*) as n FROM inbox_queue WHERE status NOT IN ('pending','committed','failed','filtered','review')"
  ).get() as { n: number };

  const committed = db.prepare(
    "SELECT COUNT(*) as n FROM inbox_queue WHERE status = 'committed'"
  ).get() as { n: number };

  json(res, 200, {
    queue: { pending: pending.n, processing: processing.n, committed: committed.n },
    server: "running",
    port: PORT,
  });
}

function handleHealth(_req: IncomingMessage, res: ServerResponse): void {
  json(res, 200, { ok: true, port: PORT });
}

// ─── Server ─────────────────────────────────────────────────────────

db = initDb();

const server = createServer((req, res) => {
  const url = req.url?.split("?")[0];

  if (url === "/inbox") return handleInbox(req, res);
  if (url === "/status") return handleStatus(req, res);
  if (url === "/health") return handleHealth(req, res);

  json(res, 404, { error: "Not found. Use POST /inbox, GET /status, or GET /health" });
});

const HOST = process.env.ZUHN_INBOX_HOST ?? "127.0.0.1";
server.listen(PORT, HOST, () => {
  console.log(`Zuhn inbox server listening on http://${HOST}:${PORT}`);
  console.log(`  POST /inbox  — { "url": "..." } or { "text": "...", "title": "..." }`);
  console.log(`  GET  /status — queue depth`);
  console.log(`  GET  /health — heartbeat`);
});

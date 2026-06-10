#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = new URL("./scenes/", import.meta.url);

const toolNames = [
  "zuhn_search",
  "zuhn_recall",
  "zuhn_brief",
  "zuhn_browse",
  "zuhn_flags",
  "zuhn_tensions",
  "zuhn_stats",
  "zuhn_queue_source",
  "zuhn_submit_insights",
  "zuhn_flag_tension",
  "zuhn_log_feedback",
  "zuhn_queue_session_insight"
];

function h(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function terminal(lines, variant = "") {
  const delayFor = (line, index) => {
    if (line && typeof line === "object" && line.delay) return line.delay;
    return `${320 + index * 210}ms`;
  };

  const body = lines
    .map((line, index) => {
      if (line === "") {
        return `<div class="term-line blank" style="--i:${index};--delay:${delayFor(line, index)}">&nbsp;</div>`;
      }
      const text = typeof line === "string" ? line : line.text;
      const kind = typeof line === "string" ? "" : line.kind ?? "";
      const delay = delayFor(line, index);
      if (kind === "command") {
        const prompt = typeof line === "string" ? "zuhn %" : line.prompt ?? "zuhn %";
        return `<div class="term-line term-command" style="--i:${index};--delay:${delay};--chars:${String(text).length}"><span class="term-prompt">${h(prompt)}</span><span class="term-typed">${h(text)}</span></div>`;
      }
      return `<div class="term-line ${kind}" style="--i:${index};--delay:${delay}">${h(text)}</div>`;
    })
    .join("");
  const cursorDelay = `${420 + lines.length * 210}ms`;

  return `<div class="terminal ${variant}">
      <div class="terminal-bar"><i></i><i></i><i></i><span>zuhn@local</span></div>
      <div class="terminal-body">
        ${body}
        <div class="term-cursor" style="--i:${lines.length};--delay:${cursorDelay}"></div>
      </div>
    </div>`;
}

const scenes = [
  {
    id: "01-opening",
    theme: "paper",
    eyebrow: "Zuhn / local-first knowledge intelligence",
    title: "Memory that answers back.",
    caption:
      "The public reference corpus is not a brochure. It is a repo you can search, brief, validate, and wire into agents.",
    proof: "Proof: npm run health + knowledge-base/meta/stats.md",
    body: `
      <section class="opening">
        <div class="opening-copy reveal" style="--d:120ms">
          <div class="kicker">live corpus</div>
          <div class="hero-number count">12,110</div>
          <div class="hero-label">insight files, 0 errors</div>
          <p>Saved inputs compress into insights, principles, predictions, decisions, and tensions.</p>
        </div>
        <div class="corpus-board reveal" style="--d:260ms">
          <div class="board-header"><b>knowledge-base/</b><span>generated 2026-06-05</span></div>
          <div class="stat-grid">
            <div><strong>9</strong><span>domains</span></div>
            <div><strong>140</strong><span>topics</span></div>
            <div><strong>17,475</strong><span>tags</span></div>
            <div><strong>842</strong><span>principles</span></div>
          </div>
          <div class="flow">
            <span>raw intake</span><i></i><span>insights</span><i></i><span>judgment</span>
          </div>
          ${terminal([
            { text: "npm run health", kind: "command", delay: "280ms" },
            { text: "> zuhn@1.0.0 health", kind: "muted", delay: "1060ms" },
            { text: "Insights: 12110 files, 0 errors, 0 warnings", kind: "good", delay: "1320ms" },
            { text: "Health check PASSED.", kind: "good", delay: "1560ms" }
          ], "mini")}
        </div>
      </section>`
  },
  {
    id: "02-search-terminal",
    theme: "operator",
    eyebrow: "Search what you know",
    title: "The search tool decides what enters context.",
    caption:
      "Zuhn returns distilled claims with domain, confidence, and tags instead of dumping a pile of saved links.",
    proof: "Proof: npm run search \"context engineering\"",
    body: `
      <section class="terminal-split">
        <div class="terminal-copy reveal" style="--d:120ms">
          <div class="kicker">terminal action</div>
          <h2>Ask the corpus.</h2>
          <p>The answer starts as retrieval, but the result is already shaped into a reusable thought.</p>
          <div class="metric-pill"><strong>10</strong><span>keyword results</span></div>
        </div>
        ${terminal([
          { text: "npm run search \"context engineering\"", kind: "command", delay: "360ms" },
          "",
          { text: "> zuhn@1.0.0 search", kind: "muted", delay: "1320ms" },
          { text: "> tsx scripts/search.ts context engineering", kind: "muted", delay: "1540ms" },
          "",
          { text: "Search [keyword]: \"context engineering\" (10 results)", kind: "muted", delay: "1960ms" },
          "",
          { text: "1. [INS-260605-59FE] The under-credited lever", kind: "good", delay: "2320ms" },
          { text: "   in context engineering is the search tool deciding", kind: "good", delay: "2540ms" },
          { text: "   what enters the window, not the curation arrow afterward.", kind: "good", delay: "2760ms" },
          { text: "ai-development/system-design | confidence: medium", kind: "muted", delay: "3140ms" },
          { text: "tags: context-engineering, agentic-search, retrieval, rag", kind: "muted", delay: "3360ms" }
        ], "cinema")}
      </section>`
  },
  {
    id: "03-decision-brief",
    theme: "studio",
    eyebrow: "Decision memory",
    title: "A decision prompt becomes a compact brief.",
    caption:
      "The CLI pulls principles, predictions, a prior decision, and the track record into one usable surface.",
    proof: "Proof: npm run brief -- --mode concise \"should I raise VC or bootstrap...\"",
    body: `
      <section class="brief-shot">
        <div class="brief-header reveal" style="--d:120ms">
          <div class="query-chip">$ npm run brief -- --mode concise</div>
          <h2>should I raise VC or bootstrap?</h2>
        </div>
        <div class="brief-grid">
          <article class="brief-card reveal" style="--d:320ms"><b>Principles</b><span>Ramen profitability first. Control matters more than valuation.</span></article>
          <article class="brief-card reveal" style="--d:440ms"><b>Predictions</b><span>AI-native leverage can reduce the need for large VC-scale teams.</span></article>
          <article class="brief-card reveal" style="--d:560ms"><b>Past decision</b><span>Keep the public KB visible because the corpus is the demo.</span></article>
          <article class="brief-card strong reveal" style="--d:680ms"><b>Track record</b><span>0 confirmed, 0 falsified, 14 untested.</span></article>
        </div>
        <div class="brief-terminal reveal" style="--d:760ms">
          ${terminal([
            { text: "npm run brief -- --mode concise \"should I raise...\"", kind: "command", delay: "220ms" },
            { text: "> zuhn@1.0.0 brief", kind: "muted", delay: "1140ms" },
            { text: "Principles: 3 surfaced | Predictions: 2 active", kind: "muted", delay: "1420ms" },
            { text: "Track record: 0 confirmed, 0 falsified, 14 untested", kind: "good", delay: "1720ms" }
          ], "brief-term")}
        </div>
      </section>`
  },
  {
    id: "04-integrity",
    theme: "paper-accent",
    eyebrow: "The integrity shot",
    title: "It refuses to launder uncertainty.",
    caption:
      "The useful answer is not just what the system thinks. It is what the system has not earned yet.",
    proof: "Proof: live brief output for the VC vs bootstrapping query",
    body: `
      <section class="integrity-shot">
        <div class="integrity-left reveal" style="--d:100ms">
          <div class="truth-number">14</div>
          <div class="truth-label">matched principles still untested</div>
          <p>That number is not a weakness. It is the system keeping its epistemic books open.</p>
        </div>
        <div class="ledger reveal" style="--d:260ms">
          <div class="ledger-row ok"><span>confirmed</span><b>0</b></div>
          <div class="ledger-row bad"><span>falsified</span><b>0</b></div>
          <div class="ledger-row warn"><span>untested</span><b>14</b></div>
          <div class="ledger-note">No smoothing. No fake confidence. The track record travels with the advice.</div>
        </div>
      </section>`
  },
  {
    id: "05-insight-gate",
    theme: "operator",
    eyebrow: "Quality gate",
    title: "Weak memory gets surfaced before it hardens.",
    caption:
      "The gate audits new insights for stance, attribution, topic fit, and near-duplicates before they become trusted context.",
    proof: "Proof: npm run gate -- --audit --since 2026-06-05 --examples 5",
    body: `
      <section class="gate-shot">
        <div class="gate-copy reveal" style="--d:120ms">
          <div class="kicker">discrimination layer</div>
          <h2>Not every note becomes knowledge.</h2>
          <p>Read-only audit mode exposes where the corpus needs triage instead of laundering it into confidence.</p>
          <div class="gate-metrics">
            <div><strong>532</strong><span>same-day insights audited</span></div>
            <div><strong>4</strong><span>stance issues surfaced</span></div>
            <div><strong>3</strong><span>near-dupe candidates</span></div>
          </div>
        </div>
        ${terminal([
          { text: "npm run gate -- --audit --since 2026-06-05 --examples 5", kind: "command", prompt: "%", delay: "360ms" },
          "",
          { text: "> zuhn@1.0.0 gate", kind: "muted", delay: "1460ms" },
          { text: "> tsx scripts/insight-gate.ts --audit --since 2026-06-05 --examples 5", kind: "muted", delay: "1680ms" },
          "",
          { text: "Scope: since 2026-06-05    Insights: 532", kind: "good", delay: "2120ms" },
          "",
          { text: "stance present             532 / 532  100.0%", kind: "good", delay: "2440ms" },
          { text: "stance directional         528 / 532   99.2%", kind: "warn", delay: "2660ms" },
          { text: "attribution resolves       532 / 532  100.0%", kind: "good", delay: "2880ms" },
          { text: "topic matches path         532 / 532  100.0%", kind: "good", delay: "3100ms" },
          "",
          { text: "Block simulation: >= 0.85 near-dupes -> 3", kind: "warn", delay: "3520ms" },
          { text: "Sample failure: not directional", kind: "warn", delay: "3740ms" }
        ], "gate-terminal")}
      </section>`
  },
  {
    id: "06-runtime-proof",
    theme: "operator",
    eyebrow: "Runtime proof",
    title: "The corpus is schema-checked infrastructure.",
    caption:
      "This beat is deliberately terminal-first: the claims in the video are rerunnable commands.",
    proof: "Proof: npm run health + npm run verify-contracts",
    body: `
      <section class="proof-shot">
        ${terminal([
          { text: "npm run health", kind: "command", delay: "320ms" },
          "",
          { text: "> zuhn@1.0.0 health", kind: "muted", delay: "1100ms" },
          { text: "> tsx scripts/health.ts", kind: "muted", delay: "1320ms" },
          "",
          { text: "Checking: /Users/jinchoi/Code/Zuhn/knowledge-base", kind: "muted", delay: "1660ms" },
          { text: "Insights: 12110 files, 0 errors, 0 warnings", kind: "good", delay: "1900ms" },
          { text: "Principles: 842 files, 0 errors, 0 warnings", kind: "good", delay: "2120ms" },
          { text: "Sources: 2857 files, 0 errors, 0 warnings", kind: "good", delay: "2340ms" },
          { text: "Tensions: 44 files, 0 errors, 0 warnings", kind: "good", delay: "2560ms" },
          { text: "Referential integrity: OK", kind: "good", delay: "2780ms" },
          { text: "Health check PASSED.", kind: "good", delay: "3060ms" },
          "",
          { text: "npm run verify-contracts", kind: "command", delay: "3440ms" },
          { text: "> zuhn@1.0.0 verify-contracts", kind: "muted", delay: "4260ms" },
          { text: "40 contract checks run, 0 failures.", kind: "good", delay: "4540ms" }
        ], "proof-terminal")}
        <div class="proof-aside reveal" style="--d:900ms">
          <strong>40</strong>
          <span>contract checks pass</span>
          <p>Schema health, referential integrity, and contract checks are part of the product surface.</p>
        </div>
      </section>`
  },
  {
    id: "07-agent-surface",
    theme: "studio",
    eyebrow: "Agent interface",
    title: "Twelve MCP tools expose the loop.",
    caption:
      "Agents can search, recall, brief, inspect tensions, queue sources, submit insights, and log feedback.",
    proof: "Proof: scripts/mcp-server.ts registers 12 tools",
    body: `
      <section class="mcp-shot">
        <div class="code-pane reveal" style="--d:120ms">
          <div class="code-top">scripts/mcp-server.ts</div>
          <pre><code>// Read (7): search, recall, brief, browse, flags, tensions, stats
// Write (5): queue source, submit insights, flag tension, log feedback

server.registerTool("zuhn_search", ...)
server.registerTool("zuhn_brief", ...)
server.registerTool("zuhn_queue_...", ...)</code></pre>
          ${terminal([
            { text: "rg -c \"registerTool\" scripts/mcp-server.ts", kind: "command", delay: "260ms" },
            { text: "12", kind: "good", delay: "1160ms" }
          ], "mini")}
        </div>
        <div class="tool-cloud reveal" style="--d:280ms">
          ${toolNames.map((name) => `<span>${h(name)}</span>`).join("")}
        </div>
      </section>`
  },
  {
    id: "08-close",
    theme: "paper",
    eyebrow: "Local-first knowledge intelligence",
    title: "For people who think for a living.",
    caption:
      "Public corpus as proof. Fresh knowledge base when you want your own.",
    proof: "Proof: README.md + local CLI commands",
    body: `
      <section class="close-shot">
        <div class="close-copy reveal" style="--d:120ms">
          <h2>Zuhn turns saved material into decision context agents can actually use.</h2>
          <p>Inspect the corpus, run the CLI, or connect the MCP server. The artifact is the argument.</p>
        </div>
        <div class="runbook reveal" style="--d:280ms">
          <div><b>search</b><span>npm run search "query"</span></div>
          <div><b>brief</b><span>npm run brief -- --mode concise "decision"</span></div>
          <div><b>agent surface</b><span>npm run mcp</span></div>
        </div>
        <div class="final-strip reveal" style="--d:720ms">
          <span>12,110 insight files</span>
          <span>9 domains</span>
          <span>12 MCP tools</span>
          <span>0 health errors</span>
        </div>
      </section>`
  }
];

function page(scene, index) {
  return `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=1280,height=720,initial-scale=1">
<title>${h(scene.id)}</title>
<style>
*{box-sizing:border-box}
html,body{margin:0;width:1280px;height:720px;overflow:hidden}
body{--paper:#f7f2e9;--panel:#fffdf8;--ink:#121212;--muted:#65686d;--line:#d7cec0;--blue:#2457d6;--green:#138455;--mint:#68d7a5;--coral:#d94b3d;--amber:#b87900;--dark:#101216;--dark2:#181b21;background:var(--paper);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Inter","Segoe UI",sans-serif;-webkit-font-smoothing:antialiased;letter-spacing:0}
body.operator{background:#101216;color:#f4f0e7}
body.studio{background:#fbfaf7;color:var(--ink)}
body.paper-accent{background:#f6f1e8;color:var(--ink)}
body:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.12;background:linear-gradient(90deg,transparent 0 79px,rgba(28,29,31,.12) 80px),linear-gradient(transparent 0 79px,rgba(28,29,31,.08) 80px);background-size:80px 80px}
body.operator:before{opacity:.14;background:linear-gradient(90deg,transparent 0 79px,rgba(255,255,255,.055) 80px),linear-gradient(transparent 0 79px,rgba(255,255,255,.04) 80px);background-size:80px 80px}
.stage{position:relative;width:1280px;height:720px;padding:38px 52px 34px;display:grid;grid-template-rows:44px 1fr 28px;gap:22px}
.topbar{display:flex;align-items:center;justify-content:space-between;font-size:17px;font-weight:620;color:var(--muted);z-index:3}
body.operator .topbar{color:#aeb5bd}.topbar strong{color:currentColor;font-weight:820}.stamp{border:1px solid var(--line);border-radius:8px;padding:7px 12px;background:rgba(255,253,248,.76)}
body.operator .stamp{border-color:#343944;background:rgba(255,255,255,.04)}
.content{position:relative;z-index:2}.footer{display:flex;align-items:center;justify-content:space-between;gap:24px;font-size:16px;color:var(--muted);z-index:3}
body.operator .footer{color:#adb5bd}.proof{border-left:3px solid var(--blue);padding-left:12px}.progress{width:230px;height:6px;border-radius:999px;background:rgba(120,110,95,.25);overflow:hidden}.progress i{display:block;width:${Math.round(((index + 1) / scenes.length) * 100)}%;height:100%;background:linear-gradient(90deg,var(--blue),var(--green),var(--amber))}
.kicker,.eyebrow{color:var(--blue);font-size:18px;font-weight:780}.operator .kicker,.operator .eyebrow{color:#6aa3ff}
h1,h2,p{margin:0}h1{font-size:66px;line-height:.96;font-weight:860;max-width:560px}h2{font-size:54px;line-height:.98;font-weight:850}p{color:var(--muted);font-size:27px;line-height:1.18;font-weight:560}.operator p{color:#c3c9cf}
.reveal{opacity:0;transform:translateY(16px);animation:reveal 640ms cubic-bezier(.22,.72,.2,1) forwards;animation-delay:var(--d,0ms)}@keyframes reveal{to{opacity:1;transform:translateY(0)}}
.opening{height:100%;display:grid;grid-template-columns:455px 1fr;gap:42px;align-items:center}.opening-copy{display:flex;flex-direction:column;gap:18px}.hero-number{font-size:98px;line-height:.85;font-weight:880;color:var(--green)}.hero-label{font-size:29px;line-height:1.05;font-weight:760}.opening-copy p{max-width:420px}
.corpus-board,.code-pane,.runbook,.ledger{border:1px solid var(--line);border-radius:8px;background:rgba(255,253,248,.92);box-shadow:0 28px 70px rgba(20,24,28,.15)}
.corpus-board{padding:24px;display:grid;grid-template-rows:auto auto auto 1fr;gap:20px}.board-header{display:flex;justify-content:space-between;color:var(--muted);font-size:17px}.board-header b{color:var(--ink)}.stat-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px}.stat-grid div{border:1px solid var(--line);border-radius:8px;padding:17px;background:#fbf8f0}.stat-grid strong{display:block;font-size:46px;line-height:1}.stat-grid span{display:block;margin-top:7px;color:var(--muted);font-size:18px;font-weight:620}.flow{display:grid;grid-template-columns:auto 1fr auto 1fr auto;align-items:center;gap:12px;font-size:20px;font-weight:780;color:var(--muted)}.flow i{height:10px;border-radius:99px;background:linear-gradient(90deg,var(--blue),var(--green));animation:grow 1100ms cubic-bezier(.22,.72,.2,1) forwards;transform-origin:left;transform:scaleX(0)}@keyframes grow{to{transform:scaleX(1)}}
.terminal{border-radius:9px;background:#0d1117;color:#e8edf2;box-shadow:0 24px 60px rgba(0,0,0,.30),inset 0 0 0 1px rgba(255,255,255,.09);overflow:hidden;font-family:"SF Mono",Menlo,Consolas,monospace}.terminal-bar{height:38px;display:flex;align-items:center;gap:8px;padding:0 15px;border-bottom:1px solid rgba(255,255,255,.08);color:#8d969f;font-family:-apple-system,BlinkMacSystemFont,"Inter",sans-serif;font-size:14px;background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,0))}.terminal-bar i{width:11px;height:11px;border-radius:99px;background:#ff5f57}.terminal-bar i:nth-child(2){background:#febc2e}.terminal-bar i:nth-child(3){background:#28c840}.terminal-bar span{margin-left:8px}.terminal-body{padding:20px 24px;font-size:22px;line-height:1.34;min-height:180px}.terminal.mini .terminal-body{font-size:15px;line-height:1.28;min-height:0;padding:13px 16px}.terminal.mini .terminal-bar{height:30px}.terminal.cinema{height:100%}.terminal.cinema .terminal-body{font-size:22px;line-height:1.3;padding:24px 28px}.terminal.proof-terminal{height:100%}.terminal.proof-terminal .terminal-body{font-size:20px;line-height:1.28;padding:22px 26px}.terminal.brief-term .terminal-body{font-size:18px}.term-line{white-space:pre-wrap;opacity:0;transform:translateY(3px);animation:termIn 160ms ease-out forwards;animation-delay:var(--delay)}.term-line.blank{height:9px}.term-line.term-command{display:flex;align-items:baseline;gap:9px;white-space:nowrap;overflow:hidden;opacity:1;transform:none;animation:none}.term-prompt{color:#8a929b;opacity:0;animation:termIn 120ms ease-out forwards;animation-delay:var(--delay)}.term-typed{display:inline-block;max-width:0;overflow:hidden;white-space:nowrap;color:#78e6ac;animation:typeCommand 760ms steps(32,end) forwards;animation-delay:calc(var(--delay) + 110ms)}.term-line.cmd{color:#78e6ac}.term-line.good{color:#ffffff;font-weight:760}.term-line.muted{color:#aeb6bf}.term-line.warn{color:#f1c35b;font-weight:760}.term-cursor{display:inline-block;width:10px;height:21px;margin-top:9px;background:#78e6ac;opacity:0;animation:cursor 900ms steps(2,end) infinite;animation-delay:var(--delay)}@keyframes termIn{to{opacity:1;transform:translateY(0)}}@keyframes typeCommand{to{max-width:980px}}@keyframes cursor{50%{opacity:1}}
.terminal-split{height:100%;display:grid;grid-template-columns:390px 1fr;gap:34px;align-items:stretch}.terminal-copy{align-self:center;display:flex;flex-direction:column;gap:18px}.terminal-copy h2{max-width:380px}.metric-pill{margin-top:8px;width:230px;border:1px solid #343944;border-radius:8px;padding:18px;background:rgba(255,255,255,.05)}.metric-pill strong{display:block;font-size:58px;color:var(--mint);line-height:.9}.metric-pill span{display:block;margin-top:8px;color:#c3c9cf;font-size:19px;font-weight:650}
.brief-shot{height:100%;display:grid;grid-template-rows:auto 1fr 132px;gap:14px}.brief-header{display:flex;align-items:flex-end;justify-content:space-between;gap:30px}.brief-header h2{max-width:670px}.query-chip{border:1px solid var(--line);border-radius:8px;background:#fffdf8;padding:12px 16px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:18px;color:var(--green);white-space:nowrap}.brief-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px}.brief-card{border:1px solid var(--line);border-radius:8px;background:#fffdf8;padding:21px;box-shadow:0 20px 45px rgba(25,26,28,.08)}.brief-card b{font-size:23px}.brief-card span{display:block;margin-top:13px;color:var(--muted);font-size:21px;line-height:1.18;font-weight:580}.brief-card.strong{background:#111418;color:#fff}.brief-card.strong span{color:#d9e0d8}.brief-terminal{height:132px}.brief-terminal .terminal{height:132px}.terminal.brief-term .terminal-body{font-size:15px;line-height:1.22;padding:9px 17px;min-height:0;height:94px;overflow:hidden}.terminal.brief-term .term-cursor{height:18px;margin-top:4px}
.integrity-shot{height:100%;display:grid;grid-template-columns:420px 1fr;gap:42px;align-items:center}.integrity-left{display:flex;flex-direction:column;gap:17px}.truth-number{font-size:142px;line-height:.78;color:var(--amber);font-weight:880}.truth-label{font-size:31px;line-height:1.05;font-weight:800;max-width:350px}.integrity-left p{max-width:410px}.ledger{padding:26px;display:grid;gap:14px}.ledger-row{display:grid;grid-template-columns:1fr 120px;align-items:center;border:1px solid var(--line);border-radius:8px;padding:22px 24px;background:#fffdf8}.ledger-row span{font-size:26px;font-weight:800}.ledger-row b{text-align:right;font-size:58px}.ledger-row.ok b{color:var(--green)}.ledger-row.bad b{color:var(--coral)}.ledger-row.warn b{color:var(--amber)}.ledger-note{font-size:25px;line-height:1.18;color:var(--muted);font-weight:650;margin-top:8px}
.gate-shot{height:100%;display:grid;grid-template-columns:430px 1fr;gap:28px;align-items:stretch}.gate-copy{align-self:center;display:flex;flex-direction:column;gap:17px}.gate-copy h2{font-size:50px;max-width:420px}.gate-copy p{font-size:23px;max-width:405px}.gate-metrics{display:grid;grid-template-columns:1fr;gap:10px;margin-top:6px}.gate-metrics div{border:1px solid #343944;border-radius:8px;background:rgba(255,255,255,.05);padding:13px 15px}.gate-metrics strong{display:block;color:var(--mint);font-size:36px;line-height:.9}.gate-metrics span{display:block;margin-top:7px;color:#c3c9cf;font-size:17px;font-weight:700}.terminal.gate-terminal{height:100%}.terminal.gate-terminal .terminal-body{font-size:18px;line-height:1.27;padding:20px 22px}.term-line.warn{color:#f1c35b;font-weight:760}
.proof-shot{height:100%;display:grid;grid-template-columns:1fr 290px;gap:26px;align-items:stretch}.proof-aside{align-self:end;border:1px solid #343944;border-radius:8px;background:rgba(255,255,255,.05);padding:24px}.proof-aside strong{display:block;font-size:86px;line-height:.8;color:var(--mint)}.proof-aside span{display:block;margin-top:13px;font-size:25px;font-weight:800}.proof-aside p{margin-top:18px;font-size:21px}
.mcp-shot{height:100%;display:grid;grid-template-columns:540px 1fr;gap:28px;align-items:stretch}.code-pane{padding:18px;display:grid;grid-template-rows:auto 1fr auto;gap:14px}.code-top{color:var(--muted);font-size:17px;font-weight:750}.code-pane pre{margin:0;border-radius:8px;background:#111418;color:#edf2e9;padding:22px;font-size:17px;line-height:1.42;white-space:pre-wrap;overflow:hidden}.tool-cloud{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-content:center}.tool-cloud span{border:1px solid var(--line);border-radius:8px;background:#fffdf8;padding:15px 16px;font-family:"SF Mono",Menlo,Consolas,monospace;font-size:17px;font-weight:760;box-shadow:0 12px 30px rgba(30,31,32,.07)}
.close-shot{height:100%;display:grid;grid-template-columns:1fr 430px;grid-template-rows:1fr auto;gap:28px;align-items:center}.close-copy h2{font-size:62px;max-width:680px}.close-copy p{margin-top:22px;max-width:620px}.runbook{padding:18px;display:grid;gap:12px}.runbook div{border:1px solid var(--line);border-radius:8px;background:#fffdf8;padding:18px}.runbook b{display:block;font-size:21px}.runbook span{display:block;margin-top:8px;font-family:"SF Mono",Menlo,Consolas,monospace;color:var(--green);font-size:16px;line-height:1.25}.final-strip{grid-column:1/3;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.final-strip span{border:1px solid var(--line);border-radius:8px;background:#fffdf8;padding:17px;text-align:center;font-size:20px;font-weight:800}
</style>
<body class="${h(scene.theme)}">
<main class="stage">
  <header class="topbar reveal" style="--d:40ms"><div><strong>Zuhn</strong> / code-grounded explainer</div><div class="stamp">${h(scene.eyebrow)}</div></header>
  <section class="content">${scene.body}</section>
  <footer class="footer reveal" style="--d:820ms"><div class="proof">${h(scene.proof)}</div><div class="progress"><i></i></div></footer>
</main>
</body>
</html>`;
}

await mkdir(OUT, { recursive: true });
for (let i = 0; i < scenes.length; i += 1) {
  const scene = scenes[i];
  await writeFile(join(OUT.pathname, `${scene.id}.html`), page(scene, i), "utf8");
}
console.log(`Wrote ${scenes.length} scenes to ${OUT.pathname}`);

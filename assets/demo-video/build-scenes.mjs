#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("./", import.meta.url);
const SCENES = new URL("./scenes/", import.meta.url);

const html = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zuhn Operator Session</title>
  <style>
    :root {
      --paper: #f7f2e8;
      --ink: #171717;
      --muted: #6f6a60;
      --line: rgba(23, 23, 23, 0.13);
      --charcoal: #121418;
      --charcoal-2: #1d2128;
      --mint: #58c59b;
      --blue: #376bd9;
      --amber: #d58a1d;
      --coral: #d9533f;
      --white: #fffaf0;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Segoe UI", sans-serif;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      overflow: hidden;
      background:
        linear-gradient(rgba(23, 23, 23, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(23, 23, 23, 0.03) 1px, transparent 1px),
        var(--paper);
      background-size: 42px 42px;
      color: var(--ink);
    }

    .stage {
      position: relative;
      width: 1280px;
      height: 720px;
      padding: 34px 42px;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 34px;
      font-size: 17px;
      font-weight: 650;
      color: var(--muted);
    }

    .brand {
      display: flex;
      align-items: baseline;
      gap: 12px;
      color: var(--ink);
      font-size: 24px;
      font-weight: 830;
    }

    .brand span {
      color: var(--muted);
      font-size: 15px;
      font-weight: 620;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--muted);
    }

    .status::before {
      content: "";
      width: 9px;
      height: 9px;
      border-radius: 999px;
      background: var(--mint);
      box-shadow: 0 0 0 5px rgba(88, 197, 155, 0.14);
    }

    .workbench {
      position: relative;
      display: grid;
      grid-template-columns: 490px 1fr;
      gap: 24px;
      height: 520px;
      margin-top: 18px;
    }

    .terminal {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      background: var(--charcoal);
      box-shadow: 0 22px 70px rgba(18, 20, 24, 0.22);
    }

    .terminal-head {
      height: 42px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 16px;
      color: #a8b0ba;
      font-size: 14px;
      font-weight: 620;
      background: #1c2027;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    }

    .dot { width: 10px; height: 10px; border-radius: 999px; }
    .dot.red { background: #f06455; }
    .dot.yellow { background: #f4bd4f; }
    .dot.green { background: #68c56b; margin-right: 8px; }

    .term-page {
      position: absolute;
      inset: 58px 22px 22px;
      opacity: 0;
      transform: translateY(12px);
      animation-duration: 42s;
      animation-timing-function: linear;
      animation-fill-mode: both;
    }

    .term-page.search { animation-name: termSearch; }
    .term-page.brief { animation-name: termBrief; }
    .term-page.gate { animation-name: termGate; }
    .term-page.health { animation-name: termHealth; }
    .term-page.mcp { animation-name: termMcp; }

    @keyframes termBase {
      0% { opacity: 0; transform: translateY(10px); }
      2%, 16% { opacity: 1; transform: translateY(0); }
      18%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    @keyframes termSearch {
      0%, 1% { opacity: 0; transform: translateY(10px); }
      2%, 15.5% { opacity: 1; transform: translateY(0); }
      17.5%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    @keyframes termBrief {
      0%, 16% { opacity: 0; transform: translateY(10px); }
      18%, 35% { opacity: 1; transform: translateY(0); }
      37%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    @keyframes termGate {
      0%, 37% { opacity: 0; transform: translateY(10px); }
      39%, 64% { opacity: 1; transform: translateY(0); }
      66%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    @keyframes termHealth {
      0%, 66% { opacity: 0; transform: translateY(10px); }
      68%, 83% { opacity: 1; transform: translateY(0); }
      85%, 100% { opacity: 0; transform: translateY(-10px); }
    }

    @keyframes termMcp {
      0%, 84% { opacity: 0; transform: translateY(10px); }
      86%, 98% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }

    .line {
      min-height: 25px;
      color: #dce6ed;
      font-family: "SF Mono", "Cascadia Code", Menlo, Consolas, monospace;
      font-size: 17px;
      line-height: 1.48;
      white-space: pre-wrap;
      opacity: 0;
      animation: revealLine 420ms ease-out both;
      animation-delay: var(--d);
    }

    .cmd { color: #91f4be; font-weight: 740; }
    .muted { color: #8b95a1; }
    .good { color: #a5f3c5; }
    .warn { color: #f5c86a; }
    .dim { color: #64707c; }
    .prompt { color: #7f8a96; }

    @keyframes revealLine {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .right {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255, 250, 240, 0.78);
      box-shadow: 0 22px 60px rgba(50, 44, 34, 0.12);
    }

    .panel {
      position: absolute;
      inset: 0;
      padding: 28px 30px;
      opacity: 0;
      transform: translateX(18px);
      animation-duration: 42s;
      animation-timing-function: linear;
      animation-fill-mode: both;
    }

    .panel.map { animation-name: panelMap; }
    .panel.search { animation-name: panelSearch; }
    .panel.brief { animation-name: panelBrief; }
    .panel.gate { animation-name: panelGate; }
    .panel.runtime { animation-name: panelRuntime; }
    .panel.close { animation-name: panelClose; }

    @keyframes panelMap {
      0%, 1% { opacity: 0; transform: translateX(14px); }
      2%, 13% { opacity: 1; transform: translateX(0); }
      14.5%, 100% { opacity: 0; transform: translateX(-14px); }
    }

    @keyframes panelSearch {
      0%, 13.5% { opacity: 0; transform: translateX(14px); }
      15%, 30% { opacity: 1; transform: translateX(0); }
      31.5%, 100% { opacity: 0; transform: translateX(-14px); }
    }

    @keyframes panelBrief {
      0%, 30.5% { opacity: 0; transform: translateX(14px); }
      32%, 51% { opacity: 1; transform: translateX(0); }
      52.5%, 100% { opacity: 0; transform: translateX(-14px); }
    }

    @keyframes panelGate {
      0%, 52% { opacity: 0; transform: translateX(14px); }
      53.5%, 72% { opacity: 1; transform: translateX(0); }
      73.5%, 100% { opacity: 0; transform: translateX(-14px); }
    }

    @keyframes panelRuntime {
      0%, 77% { opacity: 0; transform: translateX(14px); }
      78.5%, 88% { opacity: 1; transform: translateX(0); }
      89.5%, 100% { opacity: 0; transform: translateX(-14px); }
    }

    @keyframes panelClose {
      0%, 88.5% { opacity: 0; transform: translateX(14px); }
      90%, 100% { opacity: 1; transform: translateX(0); }
    }

    .kicker {
      color: var(--blue);
      font-size: 14px;
      font-weight: 820;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    h1, h2, p { margin: 0; }

    h1 {
      margin-top: 10px;
      font-size: 48px;
      line-height: 1.02;
      letter-spacing: 0;
    }

    h2 {
      margin-top: 10px;
      font-size: 34px;
      line-height: 1.08;
      letter-spacing: 0;
    }

    p {
      margin-top: 12px;
      max-width: 520px;
      color: var(--muted);
      font-size: 20px;
      line-height: 1.34;
      font-weight: 560;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 28px;
    }

    .stat {
      padding: 16px 14px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.58);
    }

    .stat strong {
      display: block;
      font-size: 29px;
      line-height: 1;
      color: var(--ink);
    }

    .stat span {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 720;
    }

    .map-canvas {
      position: relative;
      height: 205px;
      margin-top: 22px;
      border-radius: 8px;
      background: #121418;
      overflow: hidden;
    }

    .node {
      position: absolute;
      width: var(--s);
      height: var(--s);
      left: var(--x);
      top: var(--y);
      border-radius: 999px;
      background: var(--c);
      box-shadow: 0 0 0 8px color-mix(in srgb, var(--c) 20%, transparent);
      animation: breathe 3.8s ease-in-out infinite;
      animation-delay: var(--delay);
    }

    .edge {
      position: absolute;
      left: var(--x);
      top: var(--y);
      width: var(--w);
      height: 1px;
      background: rgba(255, 250, 240, 0.2);
      transform: rotate(var(--r));
      transform-origin: left center;
    }

    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.86; }
      50% { transform: scale(1.12); opacity: 1; }
    }

    .result {
      margin-top: 24px;
      padding: 22px;
      border-radius: 8px;
      background: #ffffff;
      border: 1px solid var(--line);
    }

    .result b {
      color: var(--blue);
      font-size: 16px;
    }

    .result .quote {
      margin-top: 10px;
      font-size: 25px;
      line-height: 1.18;
      font-weight: 770;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
    }

    .tags span {
      padding: 8px 10px;
      border-radius: 7px;
      background: #eef2ff;
      color: #3153b7;
      font-size: 13px;
      font-weight: 720;
    }

    .brief-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 24px;
    }

    .brief-card {
      min-height: 122px;
      padding: 17px;
      border-radius: 8px;
      background: #fff;
      border: 1px solid var(--line);
    }

    .brief-card b {
      display: block;
      margin-bottom: 9px;
      color: var(--blue);
      font-size: 15px;
    }

    .brief-card span {
      color: var(--ink);
      font-size: 18px;
      line-height: 1.25;
      font-weight: 650;
    }

    .uncertainty {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      margin-top: 24px;
    }

    .uncertainty div {
      padding: 18px 14px;
      border-radius: 8px;
      background: #fff;
      border: 1px solid var(--line);
      text-align: center;
    }

    .uncertainty strong {
      display: block;
      font-size: 43px;
      line-height: 1;
    }

    .uncertainty span {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 14px;
      font-weight: 750;
    }

    .quality-bars {
      display: grid;
      gap: 13px;
      margin-top: 26px;
    }

    .bar {
      display: grid;
      grid-template-columns: 170px 1fr 78px;
      align-items: center;
      gap: 14px;
      font-size: 16px;
      font-weight: 760;
    }

    .track {
      height: 13px;
      overflow: hidden;
      border-radius: 999px;
      background: #e6ded0;
    }

    .fill {
      width: var(--w);
      height: 100%;
      border-radius: 999px;
      background: var(--c);
      transform-origin: left;
      animation: grow 900ms ease-out both;
      animation-delay: 23.2s;
    }

    @keyframes grow {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }

    .triage {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 26px;
    }

    .triage div {
      padding: 16px;
      border-radius: 8px;
      background: #fff;
      border: 1px solid var(--line);
    }

    .triage strong {
      display: block;
      font-size: 35px;
      line-height: 1;
    }

    .triage span {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 720;
    }

    .runtime-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 18px;
    }

    .runtime-card {
      min-height: 112px;
      padding: 16px;
      border-radius: 8px;
      background: #fff;
      border: 1px solid var(--line);
    }

    .runtime-card strong {
      display: block;
      font-size: 38px;
      line-height: 1;
    }

    .runtime-card span {
      display: block;
      margin-top: 8px;
      color: var(--muted);
      font-size: 14px;
      font-weight: 720;
      line-height: 1.24;
    }

    .close-lockup {
      position: absolute;
      left: 30px;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }

    .close-lockup h1 {
      max-width: 650px;
      font-size: 56px;
    }

    .caption {
      position: absolute;
      left: 42px;
      right: 42px;
      bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 22px;
      min-height: 54px;
    }

    .caption-text {
      position: absolute;
      left: 0;
      max-width: 820px;
      font-size: 27px;
      line-height: 1.15;
      font-weight: 760;
      opacity: 0;
      transform: translateY(10px);
      animation-duration: 42s;
      animation-timing-function: linear;
      animation-fill-mode: both;
    }

    .caption-text.c1 { animation-name: caption1; }
    .caption-text.c2 { animation-name: caption2; }
    .caption-text.c3 { animation-name: caption3; }
    .caption-text.c4 { animation-name: caption4; }
    .caption-text.c5 { animation-name: caption5; }
    .caption-text.c6 { animation-name: caption6; }

    @keyframes caption1 {
      0%, 1% { opacity: 0; transform: translateY(9px); }
      2%, 13% { opacity: 1; transform: translateY(0); }
      14.5%, 100% { opacity: 0; transform: translateY(-8px); }
    }

    @keyframes caption2 {
      0%, 13.5% { opacity: 0; transform: translateY(9px); }
      15%, 30% { opacity: 1; transform: translateY(0); }
      31.5%, 100% { opacity: 0; transform: translateY(-8px); }
    }

    @keyframes caption3 {
      0%, 30.5% { opacity: 0; transform: translateY(9px); }
      32%, 51% { opacity: 1; transform: translateY(0); }
      52.5%, 100% { opacity: 0; transform: translateY(-8px); }
    }

    @keyframes caption4 {
      0%, 52% { opacity: 0; transform: translateY(9px); }
      53.5%, 72% { opacity: 1; transform: translateY(0); }
      73.5%, 100% { opacity: 0; transform: translateY(-8px); }
    }

    @keyframes caption5 {
      0%, 77% { opacity: 0; transform: translateY(9px); }
      78.5%, 88% { opacity: 1; transform: translateY(0); }
      89.5%, 100% { opacity: 0; transform: translateY(-8px); }
    }

    @keyframes caption6 {
      0%, 88.5% { opacity: 0; transform: translateY(9px); }
      90%, 100% { opacity: 1; transform: translateY(0); }
    }

    .provenance {
      margin-left: auto;
      padding: 10px 12px;
      border-radius: 7px;
      color: var(--muted);
      background: rgba(255, 250, 240, 0.72);
      border: 1px solid var(--line);
      font-size: 14px;
      font-weight: 700;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <main class="stage">
    <header class="topbar">
      <div class="brand">Zuhn <span>local-first knowledge intelligence</span></div>
      <div class="status">operator session · sample public corpus</div>
    </header>

    <section class="workbench">
      <div class="terminal">
        <div class="terminal-head">
          <i class="dot red"></i><i class="dot yellow"></i><i class="dot green"></i>
          zuhn@local · /Users/jinchoi/Code/Zuhn
        </div>

        <div class="term-page search">
          <div class="line cmd" style="--d:280ms"><span class="prompt">%</span> npm run search "context engineering"</div>
          <div class="line muted" style="--d:980ms">&gt; zuhn@1.0.0 search</div>
          <div class="line muted" style="--d:1280ms">Search [keyword]: "context engineering" (10 results)</div>
          <div class="line good" style="--d:1740ms">1. [INS-260605-59FE] The under-credited lever...</div>
          <div class="line good" style="--d:2160ms">   ...is the search tool deciding what enters the window</div>
          <div class="line muted" style="--d:2540ms">ai-development/system-design · confidence: medium</div>
          <div class="line muted" style="--d:2920ms">tags: context-engineering, agentic-search, retrieval, rag</div>
        </div>

        <div class="term-page brief">
          <div class="line cmd" style="--d:260ms"><span class="prompt">%</span> npm run brief -- --mode concise "should I raise VC..."</div>
          <div class="line muted" style="--d:1060ms">&gt; zuhn@1.0.0 brief</div>
          <div class="line good" style="--d:1500ms">Principles: founder control, ramen profitability, scarcity</div>
          <div class="line good" style="--d:1900ms">Predictions: AI-native leverage may favor bootstrapping</div>
          <div class="line good" style="--d:2300ms">Past decision: keep the public KB visible as the demo</div>
          <div class="line warn" style="--d:2800ms">Track record: 0 confirmed, 0 falsified, 14 untested</div>
        </div>

        <div class="term-page gate">
          <div class="line cmd" style="--d:260ms"><span class="prompt">%</span> npm run gate -- --audit --since 2026-06-05 --examples 5</div>
          <div class="line muted" style="--d:1180ms">Zuhn — Insight Gate (AUDIT · read-only)</div>
          <div class="line good" style="--d:1620ms">Scope: since 2026-06-05    Insights: 532</div>
          <div class="line good" style="--d:2040ms">stance present             532 / 532  100.0%</div>
          <div class="line warn" style="--d:2460ms">stance directional         528 / 532   99.2%</div>
          <div class="line good" style="--d:2880ms">attribution resolves       532 / 532  100.0%</div>
          <div class="line warn" style="--d:3300ms">Block simulation: &gt;= 0.85 near-dupes -&gt; 3</div>
        </div>

        <div class="term-page health">
          <div class="line cmd" style="--d:240ms"><span class="prompt">%</span> npm run health</div>
          <div class="line good" style="--d:980ms">Insights: 12110 files, 0 errors, 0 warnings</div>
          <div class="line good" style="--d:1340ms">Principles: 842 files, 0 errors, 0 warnings</div>
          <div class="line good" style="--d:1700ms">Referential integrity: OK</div>
          <div class="line good" style="--d:2060ms">Health check PASSED.</div>
          <div class="line cmd" style="--d:2860ms"><span class="prompt">%</span> npm run verify-contracts</div>
          <div class="line good" style="--d:3620ms">40 contract checks run, 0 failures.</div>
        </div>

        <div class="term-page mcp">
          <div class="line cmd" style="--d:260ms"><span class="prompt">%</span> rg -c "registerTool" scripts/mcp-server.ts</div>
          <div class="line good" style="--d:1140ms">12</div>
          <div class="line dim" style="--d:1640ms">// Read (7): search, recall, brief, browse, flags...</div>
          <div class="line dim" style="--d:2060ms">// Write (5): queue source, submit insights, feedback...</div>
        </div>
      </div>

      <div class="right">
        <article class="panel map">
          <div class="kicker">live reference corpus</div>
          <h1>Memory that answers back.</h1>
          <p>Zuhn turns saved content into structured insights, principles, predictions, and decisions that agents can retrieve.</p>
          <div class="stats">
            <div class="stat"><strong>12,110</strong><span>insights</span></div>
            <div class="stat"><strong>9</strong><span>domains</span></div>
            <div class="stat"><strong>140</strong><span>topics</span></div>
            <div class="stat"><strong>17,475</strong><span>tags</span></div>
          </div>
          <div class="map-canvas">
            <i class="edge" style="--x:110px;--y:142px;--w:220px;--r:-16deg"></i>
            <i class="edge" style="--x:320px;--y:95px;--w:190px;--r:24deg"></i>
            <i class="edge" style="--x:180px;--y:180px;--w:270px;--r:0deg"></i>
            <i class="edge" style="--x:410px;--y:166px;--w:120px;--r:-42deg"></i>
            <i class="node" style="--x:86px;--y:118px;--s:54px;--c:#58c59b;--delay:0s"></i>
            <i class="node" style="--x:300px;--y:74px;--s:38px;--c:#6aa3ff;--delay:.3s"></i>
            <i class="node" style="--x:505px;--y:139px;--s:46px;--c:#f0b44c;--delay:.6s"></i>
            <i class="node" style="--x:178px;--y:171px;--s:30px;--c:#d9533f;--delay:.9s"></i>
            <i class="node" style="--x:430px;--y:196px;--s:28px;--c:#f7f2e8;--delay:1.2s"></i>
          </div>
        </article>

        <article class="panel search">
          <div class="kicker">retrieval with shape</div>
          <h2>The search result is already a thought.</h2>
          <p>Instead of dumping saved links, the CLI returns a claim, its domain, confidence, and retrieval tags.</p>
          <div class="result">
            <b>INS-260605-59FE · ai-development/system-design</b>
            <div class="quote">“The search tool decides what enters the window.”</div>
            <div class="tags"><span>context-engineering</span><span>agentic-search</span><span>retrieval</span><span>rag</span></div>
          </div>
        </article>

        <article class="panel brief">
          <div class="kicker">decision memory</div>
          <h2>A question becomes a compact brief.</h2>
          <p>The answer carries principles, predictions, a past decision, and its own uncertainty budget.</p>
          <div class="brief-grid">
            <div class="brief-card"><b>Principles</b><span>Founder control and ramen profitability before valuation games.</span></div>
            <div class="brief-card"><b>Predictions</b><span>AI-native leverage may make bootstrapping more viable.</span></div>
            <div class="brief-card"><b>Past decision</b><span>Keep the public KB visible because the corpus is the demo.</span></div>
            <div class="brief-card"><b>Track record</b><span>0 confirmed, 0 falsified, 14 untested.</span></div>
          </div>
          <div class="uncertainty">
            <div><strong>0</strong><span>confirmed</span></div>
            <div><strong>0</strong><span>falsified</span></div>
            <div><strong>14</strong><span>untested</span></div>
          </div>
        </article>

        <article class="panel gate">
          <div class="kicker">quality gate</div>
          <h2>Weak memory gets surfaced before it hardens.</h2>
          <p>Audit mode checks stance, attribution, topic fit, and novelty before new insights become trusted context.</p>
          <div class="quality-bars">
            <div class="bar"><span>stance present</span><div class="track"><i class="fill" style="--w:100%;--c:#58c59b"></i></div><b>100%</b></div>
            <div class="bar"><span>stance direction</span><div class="track"><i class="fill" style="--w:99.2%;--c:#f0b44c"></i></div><b>99.2%</b></div>
            <div class="bar"><span>attribution</span><div class="track"><i class="fill" style="--w:100%;--c:#58c59b"></i></div><b>100%</b></div>
          </div>
          <div class="triage">
            <div><strong>532</strong><span>same-day insights audited</span></div>
            <div><strong>4</strong><span>stance issues surfaced</span></div>
            <div><strong>3</strong><span>near-dupe candidates</span></div>
          </div>
        </article>

        <article class="panel runtime">
          <div class="kicker">runtime proof</div>
          <h2>The corpus is schema-checked infrastructure.</h2>
          <p>The demo’s claims come from local commands, not a product pitch.</p>
          <div class="runtime-grid">
            <div class="runtime-card"><strong>0</strong><span>health errors across insights, principles, sources, and tensions</span></div>
            <div class="runtime-card"><strong>40</strong><span>contract checks pass with zero failures</span></div>
            <div class="runtime-card"><strong>12</strong><span>MCP tools expose search, recall, brief, stats, and write paths</span></div>
            <div class="runtime-card"><strong>local</strong><span>Markdown, SQLite FTS5, and Ollama-ready embeddings</span></div>
          </div>
        </article>

        <article class="panel close">
          <div class="close-lockup">
            <div class="kicker">Zuhn</div>
            <h1>A brain for people who think for a living.</h1>
            <p>Local-first knowledge that can be searched, challenged, compressed, and handed to agents.</p>
          </div>
        </article>
      </div>
    </section>

    <footer class="caption">
      <div class="caption-text c1">A local knowledge corpus becomes something you can query, validate, and reuse.</div>
      <div class="caption-text c2">Retrieval is the control plane: it decides what enters the model’s context.</div>
      <div class="caption-text c3">Decision briefs include the uncomfortable part: what has not been proven yet.</div>
      <div class="caption-text c4">The quality gate catches weak memory before it becomes trusted context.</div>
      <div class="caption-text c5">The repo treats knowledge as infrastructure: health checks, contracts, and agent tools.</div>
      <div class="caption-text c6">Zuhn is not a note app. It is memory with a runtime.</div>
      <div class="provenance">verified from npm scripts · sample public corpus</div>
    </footer>
  </main>
</body>
</html>`;

const storyboard = `# Zuhn Explainer Storyboard

Target length: 42 seconds. Silent, captioned, code-grounded, and framed as one continuous operator session instead of a slide deck.

## Beat 1: Corpus Opens

Caption: \`A local knowledge corpus becomes something you can query, validate, and reuse.\`

Proof: \`npm run health\` reports 12,110 insight files with 0 errors and 0 warnings; \`knowledge-base/meta/stats.md\` reports 9 domains, 140 topics, and 17,475 tags.

## Beat 2: Search

Caption: \`Retrieval is the control plane: it decides what enters the model's context.\`

Proof: \`npm run search "context engineering"\` returns 10 keyword results; first result is \`INS-260605-59FE\`.

## Beat 3: Decision Brief

Caption: \`Decision briefs include the uncomfortable part: what has not been proven yet.\`

Proof: \`npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"\` returns principles, predictions, a past decision, and a track record of 0 confirmed, 0 falsified, 14 untested.

## Beat 4: Quality Gate

Caption: \`The quality gate catches weak memory before it becomes trusted context.\`

Proof: \`npm run gate -- --audit --since 2026-06-05 --examples 5\` audits 532 insights, surfaces 4 stance-directional failures, and reports 3 near-dupe candidates at the >=0.85 simulation threshold.

## Beat 5: Runtime Proof

Caption: \`The repo treats knowledge as infrastructure: health checks, contracts, and agent tools.\`

Proof: \`npm run health\`, \`npm run verify-contracts\`, and \`rg -c "registerTool" scripts/mcp-server.ts\`.

## Beat 6: Close

Caption: \`Zuhn is not a note app. It is memory with a runtime.\`

Proof: README frames Zuhn as a local-first knowledge intelligence system, and the video has already shown local commands backing its visible claims.
`;

const claimLedger = `# Zuhn Explainer Claim Ledger

| On-screen claim | Exact meaning | Evidence command/file | Observed value | Safe caption |
| --- | --- | --- | --- | --- |
| \`12,110 insights\` | Valid insight markdown files accepted by the current health check | \`npm run health\` | \`Insights: 12110 files, 0 errors, 0 warnings\` | \`12,110 insights\` |
| \`9 domains\` | Top-level domain directories in the current knowledge base stats snapshot | \`sed -n '1,30p' knowledge-base/meta/stats.md\` | \`Domains: 9\` | \`9 domains\` |
| \`140 topics\` | Topic count from generated KB stats | \`sed -n '1,30p' knowledge-base/meta/stats.md\` | \`Topics: 140\` | \`140 topics\` |
| \`17,475 tags\` | Tag count from generated KB stats | \`sed -n '1,30p' knowledge-base/meta/stats.md\` | \`Tags: 17475\` | \`17,475 tags\` |
| \`The search result is already a thought\` | Search returns a structured insight with id, domain, confidence, and tags | \`npm run search "context engineering"\` | First result: \`INS-260605-59FE\` with domain, confidence, and tags | \`The search result is already a thought\` |
| \`10 results\` | Keyword search result count for the shown query | \`npm run search "context engineering"\` | \`Search [keyword]: "context engineering" (10 results)\` | \`10 results\` |
| \`0 confirmed, 0 falsified, 14 untested\` | Track-record line from the concise brief | \`npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"\` | \`Track record: 0 confirmed, 0 falsified, 14 untested across 14 matched principles.\` | \`0 confirmed, 0 falsified, 14 untested\` |
| \`532 same-day insights audited\` | Insight gate audit scope for insights since 2026-06-05 | \`npm run gate -- --audit --since 2026-06-05 --examples 5\` | \`Scope: since 2026-06-05    Insights: 532\` | \`532 same-day insights audited\` |
| \`4 stance issues surfaced\` | Gate found four stance-directional failures | \`npm run gate -- --audit --since 2026-06-05 --examples 5\` | \`Sample failures: stance directional (4 failing)\` | \`4 stance issues surfaced\` |
| \`3 near-dupe candidates\` | Gate read-only block simulation at the >=0.85 threshold | \`npm run gate -- --audit --since 2026-06-05 --examples 5\` | \`>= 0.85         3  (0.6% of measured)\` | \`3 near-dupe candidates\` |
| \`0 health errors\` | Current corpus health check passes across major knowledge file types | \`npm run health\` | health reports 0 errors and 0 warnings for insights, principles, mental models, sources, and tensions | \`0 health errors\` |
| \`40 contract checks pass\` | Contract verifier result | \`npm run verify-contracts\` | \`40 contract checks run, 0 failures.\` | \`40 contract checks pass\` |
| \`12 MCP tools\` | Source code registers 12 MCP tools | \`rg -c "registerTool" scripts/mcp-server.ts\` | \`12\` | \`12 MCP tools\` |

## Claims Not Used

- Revenue, customer, or production-readiness claims are not used.
- The video says \`sample public corpus\` to keep the bundled corpus framing honest.
`;

const timeline = {
  output: "zuhn-explainer.mp4",
  width: 1280,
  height: 720,
  fps: 30,
  transition: 0,
  fade_in: 0.2,
  fade_out: 0.45,
  clips: [
    { id: "operator-session", file: "clips/01-operator-session.mp4", duration: 42 }
  ]
};

async function main() {
  await mkdir(SCENES, { recursive: true });
  await writeFile(new URL("./operator-session.html", SCENES), html, "utf8");
  await writeFile(join(ROOT.pathname, "storyboard.md"), storyboard, "utf8");
  await writeFile(join(ROOT.pathname, "claim-ledger.md"), claimLedger, "utf8");
  await writeFile(join(ROOT.pathname, "timeline.json"), `${JSON.stringify(timeline, null, 2)}\n`, "utf8");
  console.log("Wrote operator-session scene, storyboard, claim ledger, and timeline.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

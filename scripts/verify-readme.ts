#!/usr/bin/env npx tsx
/**
 * verify-readme.ts — Automated README fact-checker
 *
 * Verifies every factual claim in README.md against the actual codebase.
 * Run in CI to catch drift when code changes but README doesn't.
 *
 * Usage: npm run verify-readme
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import fg from "fast-glob";

const ROOT = join(__dirname, "..");
const readme = readFileSync(join(ROOT, "README.md"), "utf-8");

let failures = 0;
let checks = 0;

function check(label: string, expected: string | number, actual: string | number): void {
  checks++;
  const pass = String(expected) === String(actual);
  const icon = pass ? "✓" : "✗";
  console.log(`  ${icon} ${label}: README says "${expected}", actual is "${actual}"`);
  if (!pass) failures++;
}

function checkFileExists(label: string, path: string): void {
  checks++;
  const full = join(ROOT, path);
  if (existsSync(full)) {
    console.log(`  ✓ ${label}: ${path}`);
  } else {
    console.log(`  ✗ ${label}: ${path} does not exist`);
    failures++;
  }
}

// ─── Numeric claims ────────────────────────────────────────────────

console.log("\n=== Numeric Claims ===");

// Test count — vitest writes to stdout with ANSI codes; strip them
let actualTests = 0;
let actualTestFiles = 0;
try {
  const raw = execFileSync("npx", ["vitest", "run"], {
    cwd: ROOT, encoding: "utf-8",
  });
  const clean = raw.replace(/\x1b\[[0-9;]*m/g, "");
  const testsMatch = clean.match(/Tests\s+(\d+) passed/);
  const filesMatch = clean.match(/Test Files\s+(\d+) passed/);
  if (testsMatch) actualTests = parseInt(testsMatch[1]);
  if (filesMatch) actualTestFiles = parseInt(filesMatch[1]);
} catch (err: unknown) {
  const e = err as { stdout?: string; stderr?: string };
  const clean = ((e.stdout ?? "") + (e.stderr ?? "")).replace(/\x1b\[[0-9;]*m/g, "");
  const testsMatch = clean.match(/Tests\s+(\d+) passed/);
  const filesMatch = clean.match(/Test Files\s+(\d+) passed/);
  if (testsMatch) actualTests = parseInt(testsMatch[1]);
  if (filesMatch) actualTestFiles = parseInt(filesMatch[1]);
}

const readmeTestMatch = readme.match(/(\d+) automated tests across (\d+) test files/);
if (readmeTestMatch) {
  // Some tests depend on local KB/Ollama and may be skipped in CI.
  // Accept if actual >= 90% of claimed (allows for env-skipped tests).
  const claimedTests = parseInt(readmeTestMatch[1]);
  const claimedFiles = parseInt(readmeTestMatch[2]);
  checks++;
  if (actualTests >= claimedTests * 0.9 && actualTests <= claimedTests * 1.1) {
    console.log(`  ✓ Test count: README says "${claimedTests}", actual is "${actualTests}" (within 10%)`);
  } else {
    console.log(`  ✗ Test count: README says "${claimedTests}", actual is "${actualTests}" (>10% drift — update README)`);
    failures++;
  }
  checks++;
  if (actualTestFiles >= claimedFiles - 1 && actualTestFiles <= claimedFiles + 1) {
    console.log(`  ✓ Test file count: README says "${claimedFiles}", actual is "${actualTestFiles}" (within ±1)`);
  } else {
    console.log(`  ✗ Test file count: README says "${claimedFiles}", actual is "${actualTestFiles}" (>1 drift)`);
    failures++;
  }
}

// Script count
const scripts = fg.sync("**/*.ts", {
  cwd: join(ROOT, "scripts"),
  ignore: ["**/*.test.ts", "**/*.d.ts"],
});
const readmeScriptMatch = readme.match(/(\d+)\+ TypeScript scripts/);
if (readmeScriptMatch) {
  const claimed = parseInt(readmeScriptMatch[1]);
  const pass = scripts.length >= claimed;
  checks++;
  console.log(`  ${pass ? "✓" : "✗"} Script count: README says "${claimed}+", actual is ${scripts.length}`);
  if (!pass) failures++;
}

// MCP tool count
const mcpServer = readFileSync(join(ROOT, "scripts/mcp-server.ts"), "utf-8");
const toolMatches = mcpServer.match(/registerTool\("/g);
const actualToolCount = toolMatches ? toolMatches.length : 0;
const readmeToolMatch = readme.match(/\*\*(\d+) tools \((\d+) read \+ (\d+) write\)/);
if (readmeToolMatch) {
  check("MCP tool count", readmeToolMatch[1], actualToolCount);
  const claimedRead = parseInt(readmeToolMatch[2]);
  const claimedWrite = parseInt(readmeToolMatch[3]);
  check("MCP read+write sum", parseInt(readmeToolMatch[1]), claimedRead + claimedWrite);
}

// Skill count
const skills = fg.sync("*/SKILL.md", { cwd: join(ROOT, "skills") });
const readmeSkillMatch = readme.match(/(\d+) standalone SKILL\.md/);
if (readmeSkillMatch) {
  check("Skill count", readmeSkillMatch[1], skills.length);
}

// ─── npm scripts ───────────────────────────────────────────────────

console.log("\n=== npm run Commands ===");

const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf-8"));
const npmScripts = new Set(Object.keys(pkg.scripts));

const npmRunPattern = /npm run (\S+)/g;
let npmMatch;
const checkedScripts = new Set<string>();
while ((npmMatch = npmRunPattern.exec(readme)) !== null) {
  const script = npmMatch[1].replace(/["`'\n.,;)}/\]]/g, "");
  if (checkedScripts.has(script)) continue;
  checkedScripts.add(script);
  checks++;
  if (npmScripts.has(script)) {
    console.log(`  ✓ npm run ${script}`);
  } else {
    console.log(`  ✗ npm run ${script} — not in package.json`);
    failures++;
  }
}

// ─── File paths ────────────────────────────────────────────────────

console.log("\n=== Referenced Files ===");

const fileRefs = [
  "knowledge-base/MASTER_INDEX.md",
  ".claude.example/settings.json",
  ".claude.example/hooks/block-kb-writes.sh",
  ".claude.example/hooks/session-setup.sh",
  ".claude.example/agents/insight-validator.md",
  ".claude.example/agents/kb-researcher.md",
  ".claude.example/agents/learning-auditor.md",
  "templates/hooks/session-end-remind.sh",
  "scripts/schemas/frontmatter.ts",
  "scripts/lib/db.ts",
  "scripts/lib/search.ts",
  "scripts/lib/learning.ts",
  "scripts/lib/pagerank.ts",
  "scripts/lib/common-neighbors.ts",
  "scripts/classify-edges.ts",
  "scripts/extract-session.ts",
  "scripts/mcp-server.ts",
  "scripts/init.ts",
  "scripts/daemon.ts",
  "scripts/red-team.ts",
  "docs/platform-adaptation.md",
  "docs/session-pipeline-setup.md",
  "LICENSE",
  "benchmarks/bench.ts",
  "benchmarks/check.ts",
];

for (const ref of fileRefs) {
  checkFileExists("File exists", ref);
}

// ─── Design spec links ─────────────────────────────────────────────

console.log("\n=== Design Spec Links ===");

const specPattern = /\[.*?\]\((docs\/superpowers\/specs\/[^)]+)\)/g;
let specMatch;
while ((specMatch = specPattern.exec(readme)) !== null) {
  checkFileExists("Design spec", specMatch[1]);
}

// ─── Clone URL ─────────────────────────────────────────────────────

console.log("\n=== Clone URL ===");

const cloneMatch = readme.match(/git clone (https:\/\/github\.com\/[^ ]+)/);
if (cloneMatch) {
  let remoteUrl: string;
  try {
    remoteUrl = execFileSync("git", ["remote", "get-url", "origin"], {
      cwd: ROOT,
      encoding: "utf-8",
    }).trim();
  } catch {
    remoteUrl = "(unknown)";
  }
  // Normalize: strip trailing .git for comparison (GitHub Actions strips it)
  const normalize = (url: string) => url.replace(/\.git$/, "");
  check("Clone URL", normalize(cloneMatch[1]), normalize(remoteUrl));
}

// ─── License ───────────────────────────────────────────────────────

console.log("\n=== License ===");

const licenseFile = readFileSync(join(ROOT, "LICENSE"), "utf-8");
const readmeLicenseMatch = readme.match(/^(MIT|ISC|Apache-2\.0|GPL-\S+|BSD-\S+)/m);
if (readmeLicenseMatch) {
  const readmeLicense = readmeLicenseMatch[1];
  const actualLicense = licenseFile.includes("ISC") ? "ISC"
    : licenseFile.includes("MIT") ? "MIT"
    : licenseFile.includes("Apache") ? "Apache-2.0"
    : "unknown";
  check("License type", readmeLicense, actualLicense);
}

// ─── Summary ───────────────────────────────────────────────────────

console.log(`\n${"═".repeat(40)}`);
console.log(`${checks} checks, ${failures} failure(s).`);

if (failures > 0) {
  console.error("\nREADME verification FAILED.");
  console.error("Update README.md to match the codebase, then re-run.");
  process.exit(1);
} else {
  console.log("\nREADME verified — all claims match the codebase.");
}

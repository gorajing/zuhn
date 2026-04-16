import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import fg from "fast-glob";

export interface ContractCheckResult {
  checkId: string;
  passed: boolean;
  source: string;
  target: string;
  detail?: string;
}

export interface VerifyContractsOptions {
  includeLegacyReadmeChecks?: boolean;
}

export interface VerifyContractsSummary {
  checksRun: number;
  failures: ContractCheckResult[];
}

export class ContractExecutionError extends Error {
  readonly code = 2;

  constructor(message: string) {
    super(message);
    this.name = "ContractExecutionError";
  }
}

function readText(root: string, relPath: string): string {
  const fullPath = join(root, relPath);
  if (!existsSync(fullPath)) {
    throw new ContractExecutionError(`Missing required file: ${relPath}`);
  }

  try {
    return readFileSync(fullPath, "utf-8");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new ContractExecutionError(`Failed to read ${relPath}: ${msg}`);
  }
}

function pass(checkId: string, source: string, target: string): ContractCheckResult {
  return { checkId, passed: true, source, target };
}

function fail(
  checkId: string,
  source: string,
  target: string,
  detail: string
): ContractCheckResult {
  return { checkId, passed: false, source, target, detail };
}

function normalizeSet(values: Iterable<string>): Set<string> {
  return new Set(Array.from(values, (value) => value.trim()).filter(Boolean));
}

function setDiff(left: Set<string>, right: Set<string>): string[] {
  return Array.from(left).filter((value) => !right.has(value)).sort();
}

function extractMcpToolNames(mcpServerText: string): string[] {
  const matches = Array.from(
    mcpServerText.matchAll(/registerTool\("([^"]+)"/g),
    (match) => match[1]
  );

  if (matches.length === 0) {
    throw new ContractExecutionError(
      'Could not extract MCP tools from scripts/mcp-server.ts using registerTool("...")'
    );
  }

  return matches;
}

function extractMarkdownSection(markdown: string, heading: string): string {
  const lines = markdown.split("\n");
  const targetHeading = `### ${heading}`;
  const startIndex = lines.findIndex((line) => line.trim() === targetHeading);

  if (startIndex === -1) {
    return "";
  }

  const body: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    if (lines[i].startsWith("### ")) break;
    body.push(lines[i]);
  }

  return body.join("\n");
}

function extractSkillToolNames(skillText: string): string[] {
  const sectionText = extractMarkdownSection(skillText, "Available Tools");
  if (!sectionText) {
    throw new ContractExecutionError(
      'Could not find "### Available Tools" section in skills/mcp/SKILL.md'
    );
  }

  const lines = sectionText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"));

  if (lines.length < 3) {
    throw new ContractExecutionError(
      "Could not find a Markdown tool table under skills/mcp/SKILL.md Available Tools section"
    );
  }

  return lines
    .slice(2)
    .map((line) => {
      const firstColumn = line.split("|")[1]?.trim() ?? "";
      const match = firstColumn.match(/`([^`]+)`/);
      return match?.[1] ?? "";
    })
    .filter(Boolean);
}

function extractImportantConstraintsSection(skillText: string): string {
  return extractMarkdownSection(skillText, "Important Constraints");
}

function extractInboxRoutes(inboxServerText: string): string[] {
  const routes = Array.from(
    inboxServerText.matchAll(/url === "([^"]+)"/g),
    (match) => match[1]
  );

  if (routes.length === 0) {
    throw new ContractExecutionError(
      'Could not extract inbox routes from scripts/inbox-server.ts using url === "/..."'
    );
  }

  return routes;
}

function extractInboxDefaultPort(inboxServerText: string): string {
  const match = inboxServerText.match(/ZUHN_INBOX_PORT \?\? "(\d+)"/);
  if (!match) {
    throw new ContractExecutionError(
      "Could not extract default inbox port from scripts/inbox-server.ts"
    );
  }
  return match[1];
}

function extractDocPortsAndRoutes(docText: string): Array<{ port: string; route: string }> {
  return Array.from(
    docText.matchAll(/http:\/\/[^:\s`]+:(\d+)(\/[a-zA-Z0-9_-]+)/g),
    (match) => ({
      port: match[1],
      route: match[2],
    })
  );
}

function checkReadmeMcpToolCount(root: string): ContractCheckResult {
  const checkId = "mcp_tool_count_readme";
  const source = "scripts/mcp-server.ts";
  const target = "README.md";
  const actualCount = extractMcpToolNames(readText(root, source)).length;
  const readme = readText(root, target);
  const claims = Array.from(
    readme.matchAll(/MCP server \((\d+) tools\b/g),
    (match) => parseInt(match[1], 10)
  );

  if (claims.length === 0) {
    return fail(
      checkId,
      source,
      target,
      'Could not find expected "MCP server (N tools" claim in README.md'
    );
  }

  const mismatches = claims.filter((claim) => claim !== actualCount);
  if (mismatches.length > 0) {
    return fail(
      checkId,
      source,
      target,
      `README claims ${mismatches[0]} MCP tools, code registers ${actualCount}`
    );
  }

  return pass(checkId, source, target);
}

function checkSkillToolTable(root: string): ContractCheckResult {
  const checkId = "mcp_tool_names_skill";
  const source = "scripts/mcp-server.ts";
  const target = "skills/mcp/SKILL.md";
  const actual = normalizeSet(extractMcpToolNames(readText(root, source)));
  const documented = normalizeSet(extractSkillToolNames(readText(root, target)));
  const missing = setDiff(actual, documented);
  const extra = setDiff(documented, actual);

  if (missing.length > 0 || extra.length > 0) {
    const parts: string[] = [];
    if (missing.length > 0) parts.push(`missing ${missing.join(", ")}`);
    if (extra.length > 0) parts.push(`extra ${extra.join(", ")}`);
    return fail(
      checkId,
      source,
      target,
      `skills/mcp/SKILL.md tool table mismatch: ${parts.join("; ")}`
    );
  }

  return pass(checkId, source, target);
}

function checkSkillReadOnlyClaim(root: string): ContractCheckResult {
  const checkId = "mcp_read_only_claim_skill";
  const source = "scripts/mcp-server.ts";
  const target = "skills/mcp/SKILL.md";
  const toolNames = new Set(extractMcpToolNames(readText(root, source)));
  const writeCapable = [
    "zuhn_queue_source",
    "zuhn_submit_insights",
    "zuhn_flag_tension",
    "zuhn_log_feedback",
    "zuhn_queue_session_insight",
  ].some((tool) => toolNames.has(tool));

  if (!writeCapable) {
    return pass(checkId, source, target);
  }

  const constraints = extractImportantConstraintsSection(readText(root, target));
  if (/\bRead-only\b/i.test(constraints)) {
    return fail(
      checkId,
      source,
      target,
      "skills/mcp/SKILL.md claims read-only MCP access, but write-capable tools are registered in scripts/mcp-server.ts"
    );
  }

  return pass(checkId, source, target);
}

function checkReadmeSkillCount(root: string): ContractCheckResult {
  const checkId = "skill_count_readme";
  const source = "skills/*/SKILL.md";
  const target = "README.md";
  const actualCount = fg.sync("*/SKILL.md", {
    cwd: join(root, "skills"),
  }).length;
  const readme = readText(root, target);
  const match = readme.match(/skills\/\s+← (\d+) portable SKILL\.md files/);

  if (!match) {
    return fail(
      checkId,
      source,
      target,
      'Could not find expected "skills/ ← N portable SKILL.md files" claim in README.md'
    );
  }

  const claimed = parseInt(match[1], 10);
  if (claimed !== actualCount) {
    return fail(
      checkId,
      source,
      target,
      `README claims ${claimed} skills, filesystem contains ${actualCount}`
    );
  }

  return pass(checkId, source, target);
}

function checkReadmeScriptCount(root: string): ContractCheckResult {
  const checkId = "script_count_readme";
  const source = "scripts/**/*.ts";
  const target = "README.md";
  const actualCount = fg.sync("**/*.ts", {
    cwd: join(root, "scripts"),
    ignore: ["**/*.test.ts", "**/*.d.ts"],
  }).length;
  const readme = readText(root, target);
  const match = readme.match(/scripts\/\s+← (\d+)\+ TypeScript scripts/);

  if (!match) {
    return fail(
      checkId,
      source,
      target,
      'Could not find expected "scripts/ ← N+ TypeScript scripts" claim in README.md'
    );
  }

  const claimedFloor = parseInt(match[1], 10);
  if (actualCount < claimedFloor) {
    return fail(
      checkId,
      source,
      target,
      `README claims ${claimedFloor}+ scripts, filesystem contains ${actualCount}`
    );
  }

  return pass(checkId, source, target);
}

function checkInboxRoutes(root: string): ContractCheckResult {
  const checkId = "inbox_route_docs";
  const source = "scripts/inbox-server.ts";
  const target = "docs/inbox-setup.md";
  const actualRoutes = new Set(extractInboxRoutes(readText(root, source)));
  const actualPort = extractInboxDefaultPort(readText(root, source));
  const docEntries = extractDocPortsAndRoutes(readText(root, target));

  if (docEntries.length === 0) {
    return fail(
      checkId,
      source,
      target,
      "Could not find any inbox endpoint URLs in docs/inbox-setup.md"
    );
  }

  for (const entry of docEntries) {
    if (entry.port !== actualPort) {
      return fail(
        checkId,
        source,
        target,
        `docs/inbox-setup.md documents port ${entry.port}, server default is ${actualPort}`
      );
    }

    if (!actualRoutes.has(entry.route)) {
      return fail(
        checkId,
        source,
        target,
        `docs/inbox-setup.md documents ${entry.route}, server exposes ${Array.from(actualRoutes).join(", ")}`
      );
    }
  }

  return pass(checkId, source, target);
}

function checkSkillRegistrationCommand(root: string): ContractCheckResult {
  const checkId = "mcp_registration_command_skill";
  const source = "scripts/mcp-server.ts";
  const target = "skills/mcp/SKILL.md";
  const skill = readText(root, target);
  const commandMatch = skill.match(/claude mcp add[\s\S]*?npx tsx ([^\s`]+)/m);

  if (!commandMatch) {
    return fail(
      checkId,
      source,
      target,
      "Could not find claude mcp add registration command in skills/mcp/SKILL.md"
    );
  }

  if (!commandMatch[1].endsWith("scripts/mcp-server.ts")) {
    return fail(
      checkId,
      source,
      target,
      "skills/mcp/SKILL.md registration command does not point at scripts/mcp-server.ts"
    );
  }

  return pass(checkId, source, target);
}

function checkReadmeFileRefs(root: string): ContractCheckResult[] {
  const target = "README.md";
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

  return fileRefs.map((ref) =>
    existsSync(join(root, ref))
      ? pass(`readme_file_ref:${ref}`, ref, target)
      : fail(`readme_file_ref:${ref}`, ref, target, `${ref} does not exist`)
  );
}

function checkReadmeSpecLinks(root: string): ContractCheckResult[] {
  const target = "README.md";
  const readme = readText(root, target);
  const refs = Array.from(
    readme.matchAll(/\[.*?\]\((docs\/superpowers\/specs\/[^)]+)\)/g),
    (match) => match[1]
  );

  return refs.map((ref) =>
    existsSync(join(root, ref))
      ? pass(`readme_spec_ref:${ref}`, ref, target)
      : fail(`readme_spec_ref:${ref}`, ref, target, `${ref} does not exist`)
  );
}

function checkReadmeCloneUrl(root: string): ContractCheckResult {
  const checkId = "readme_clone_url";
  const source = "git remote origin";
  const target = "README.md";
  const readme = readText(root, target);
  const cloneMatch = readme.match(/git clone (https:\/\/github\.com\/[^ ]+)/);
  if (!cloneMatch) {
    return fail(checkId, source, target, "Could not find git clone URL in README.md");
  }

  let remoteUrl = "(unknown)";
  try {
    remoteUrl = execFileSync("git", ["remote", "get-url", "origin"], {
      cwd: root,
      encoding: "utf-8",
    }).trim();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new ContractExecutionError(`Failed to read git remote origin URL: ${msg}`);
  }

  const normalize = (value: string) => value.replace(/\.git$/, "");
  return normalize(cloneMatch[1]) === normalize(remoteUrl)
    ? pass(checkId, source, target)
    : fail(
        checkId,
        source,
        target,
        `README clone URL ${normalize(cloneMatch[1])} does not match origin ${normalize(remoteUrl)}`
      );
}

function checkReadmeLicense(root: string): ContractCheckResult {
  const checkId = "readme_license";
  const source = "LICENSE";
  const target = "README.md";
  const readme = readText(root, target);
  const licenseFile = readText(root, source);
  const readmeMatch = readme.match(/^(MIT|ISC|Apache-2\.0|GPL-\S+|BSD-\S+)/m);

  if (!readmeMatch) {
    return fail(checkId, source, target, "Could not find license claim in README.md");
  }

  const actual = licenseFile.includes("ISC")
    ? "ISC"
    : licenseFile.includes("MIT")
      ? "MIT"
      : licenseFile.includes("Apache")
        ? "Apache-2.0"
        : "unknown";

  return readmeMatch[1] === actual
    ? pass(checkId, source, target)
    : fail(checkId, source, target, `README claims ${readmeMatch[1]}, LICENSE is ${actual}`);
}

function runLegacyReadmeChecks(root: string): ContractCheckResult[] {
  return [
    checkReadmeCloneUrl(root),
    checkReadmeLicense(root),
    ...checkReadmeFileRefs(root),
    ...checkReadmeSpecLinks(root),
  ];
}

function runV1SurfaceChecks(root: string): ContractCheckResult[] {
  return [
    checkReadmeMcpToolCount(root),
    checkSkillToolTable(root),
    checkSkillReadOnlyClaim(root),
    checkReadmeSkillCount(root),
    checkReadmeScriptCount(root),
    checkInboxRoutes(root),
    checkSkillRegistrationCommand(root),
  ];
}

export function verifyContracts(
  root: string,
  options: VerifyContractsOptions = {}
): VerifyContractsSummary {
  const includeLegacyReadmeChecks = options.includeLegacyReadmeChecks ?? true;
  const results = [
    ...runV1SurfaceChecks(root),
    ...(includeLegacyReadmeChecks ? runLegacyReadmeChecks(root) : []),
  ];

  return {
    checksRun: results.length,
    failures: results.filter((result) => !result.passed),
  };
}

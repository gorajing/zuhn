import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, describe, expect, it } from "vitest";
import { ContractExecutionError, verifyContracts } from "./verify-contracts.js";

const FIXTURE_ROOT = join(
  __dirname,
  "../../tests/fixtures/verify-contracts/matching"
);

const tempRoots: string[] = [];

function cloneFixture(): string {
  const root = mkdtempSync(join(tmpdir(), "zuhn-verify-contracts-"));
  cpSync(FIXTURE_ROOT, root, { recursive: true });
  tempRoots.push(root);
  return root;
}

afterEach(() => {
  while (tempRoots.length > 0) {
    const root = tempRoots.pop();
    if (root) rmSync(root, { recursive: true, force: true });
  }
});

describe("verifyContracts", () => {
  it("passes on matching claims", () => {
    const root = cloneFixture();
    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    expect(result.checksRun).toBe(7);
    expect(result.failures).toEqual([]);
  });

  it("fails on mismatched MCP tool count", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "README.md"),
      readFileSync(join(root, "README.md"), "utf-8").replace("(2 tools)", "(3 tools)"),
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    expect(result.failures).toHaveLength(1);
    expect(result.failures[0].checkId).toBe("mcp_tool_count_readme");
    expect(result.failures[0].detail).toContain("README claims 3 MCP tools, code registers 2");
  });

  it("fails when a required source file is missing", () => {
    const root = cloneFixture();
    unlinkSync(join(root, "scripts/inbox-server.ts"));

    expect(() => verifyContracts(root, { includeLegacyReadmeChecks: false })).toThrow(
      ContractExecutionError
    );
    expect(() => verifyContracts(root, { includeLegacyReadmeChecks: false })).toThrow(
      "Missing required file: scripts/inbox-server.ts"
    );
  });

  it("fails when the expected doc claim pattern is missing", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "README.md"),
      "# Fixture README\n",
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    expect(result.failures.some((failure) => failure.detail?.includes("Could not find expected"))).toBe(true);
  });

  it("fails on inbox route drift", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "docs/inbox-setup.md"),
      readFileSync(join(root, "docs/inbox-setup.md"), "utf-8").replace(/\/inbox/g, "/ingest"),
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    const failure = result.failures.find((item) => item.checkId === "inbox_route_docs");
    expect(failure?.detail).toContain("documents /ingest");
  });

  it("fails on inbox port drift", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "docs/inbox-setup.md"),
      readFileSync(join(root, "docs/inbox-setup.md"), "utf-8").replace(/:7777/g, ":8080"),
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    const failure = result.failures.find((item) => item.checkId === "inbox_route_docs");
    expect(failure?.detail).toContain("documents port 8080");
  });

  it("fails on MCP skill tool table drift", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "skills/mcp/SKILL.md"),
      readFileSync(join(root, "skills/mcp/SKILL.md"), "utf-8").replace(
        '| `zuhn_queue_source` | Queue a source for ingestion. |\n',
        ""
      ),
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    const failure = result.failures.find((item) => item.checkId === "mcp_tool_names_skill");
    expect(failure?.detail).toContain("missing zuhn_queue_source");
  });

  it("fails on read-only claim drift", () => {
    const root = cloneFixture();
    writeFileSync(
      join(root, "skills/mcp/SKILL.md"),
      readFileSync(join(root, "skills/mcp/SKILL.md"), "utf-8").replace(
        "### Important Constraints\n\n- Requires a built knowledge base.\n",
        "### Important Constraints\n\n- **Read-only.** The MCP server cannot modify files.\n- Requires a built knowledge base.\n"
      ),
      "utf-8"
    );

    const result = verifyContracts(root, { includeLegacyReadmeChecks: false });
    const failure = result.failures.find((item) => item.checkId === "mcp_read_only_claim_skill");
    expect(failure?.detail).toContain("claims read-only MCP access");
  });

  it("throws execution error when a source path is unreadable", () => {
    const root = cloneFixture();
    unlinkSync(join(root, "scripts/mcp-server.ts"));
    mkdirSync(join(root, "scripts/mcp-server.ts"));

    expect(() => verifyContracts(root, { includeLegacyReadmeChecks: false })).toThrow(
      ContractExecutionError
    );
  });
});

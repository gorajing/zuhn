---
name: mcp
description: MCP server for read-only knowledge base access from any project directory
allowed-tools: [Bash]
---

## Zuhn MCP Server

### Start the Server

```bash
npm run mcp
```

This launches the MCP server at `scripts/mcp-server.ts`, exposing the knowledge base as read-only tools.

### Register Globally

To access knowledge from any project directory (not just the Zuhn repo), register the server with Claude:

```bash
claude mcp add zuhn -s user -- npx tsx /path/to/zuhn/scripts/mcp-server.ts
```

After registration, the `zuhn_*` tools are available in every Claude Code session.

### Available Tools

| Tool | Description |
|------|-------------|
| `zuhn_search` | Hybrid keyword + semantic search. Uses Ollama for embeddings if available, falls back to keyword-only search. Supports domain and tag filters. |
| `zuhn_recall` | Retrieve a specific insight or principle by ID (e.g., `INS-250301-A1B2`, `PRI-250315-C3D4`). Returns full frontmatter and body content. |
| `zuhn_browse` | Browse the knowledge base structure: list domains, topics within a domain, or tags across the system. |
| `zuhn_flags` | Read current learning mechanism flags from `meta/flags.md`. Reports which topics need COMPRESS, DISCOVER, GAP, or TRANSFER actions. |
| `zuhn_tensions` | List active tensions and their resolution status. Useful for checking what contradictions or debates exist in the knowledge base. |
| `zuhn_stats` | Knowledge base statistics: total counts of insights, principles, sources, tensions, and mental models. Includes domain breakdown and compression ratio. |

### Important Constraints

- **Read-only.** The MCP server cannot create, modify, or delete any files. All writes go through the normal ingestion/extraction scripts.
- **Requires built knowledge base.** The `knowledge-base/` directory must exist with content, and the SQLite database must be built (run `npm run embed` if needed).
- **Ollama optional.** Semantic search requires Ollama running with `nomic-embed-text`. If Ollama is unavailable, `zuhn_search` falls back to FTS5 keyword search automatically.

### Use Cases

- **Cross-project recall:** Working in a different repo and need to look up a principle or insight? Use `zuhn_search` or `zuhn_recall` without switching directories.
- **Context loading:** Before starting work, use `zuhn_flags` to check if any learning mechanisms need attention.
- **Knowledge auditing:** Use `zuhn_stats` and `zuhn_browse` to understand coverage and distribution across domains.

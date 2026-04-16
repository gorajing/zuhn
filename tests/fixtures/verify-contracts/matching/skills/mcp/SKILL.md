---
name: mcp
description: MCP server for knowledge base access from any project directory
allowed-tools: [Bash]
---

## Zuhn MCP Server

### Register Globally

```bash
claude mcp add zuhn -s user -- npx tsx /path/to/zuhn/scripts/mcp-server.ts
```

### Available Tools

| Tool | Description |
|------|-------------|
| `zuhn_search` | Search the knowledge base. |
| `zuhn_queue_source` | Queue a source for ingestion. |

### Important Constraints

- Requires a built knowledge base.

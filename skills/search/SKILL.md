---
name: search
description: Search the Zuhn knowledge base using keyword, semantic, or hybrid search
allowed-tools: [Bash]
---

## Search the Knowledge Base

### Keyword Search (default, no Ollama needed)

```bash
npx tsx scripts/search.ts "your query here"
```

### Hybrid Search (keyword + semantic, requires Ollama)

```bash
npx tsx scripts/search.ts "your query here" --hybrid
```

### Semantic-Only Search

```bash
npx tsx scripts/search.ts "your query here" --semantic
```

### Filters

```bash
--domain <domain>        # Filter by domain (ai-development, startups, etc.)
--tag <tag>              # Filter by tag
--limit <n>              # Max results (default: 10)
--confidence <level>     # Minimum confidence (pending|low|medium|high|very_high)
```

### Examples

```bash
npx tsx scripts/search.ts "reduce LLM costs"
npx tsx scripts/search.ts "hooks" --domain ai-development
npx tsx scripts/search.ts "cost optimization" --hybrid --domain ai-development
```

### MCP Server (cross-project access)

If the Zuhn MCP server is registered (`claude mcp add zuhn`), search is available as a tool from any directory. Claude will automatically use `zuhn_search` when asked about your knowledge base.

Available MCP tools: `zuhn_search`, `zuhn_recall`, `zuhn_browse`, `zuhn_flags`, `zuhn_tensions`, `zuhn_stats`.

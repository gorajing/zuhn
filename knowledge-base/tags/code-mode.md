# Tag: code-mode

- `INS-260625-FE3E` Don't run the LLM over 10,000 pages — have the agent inspect the structure once and generate a deterministic parser to run instead.
- `INS-260625-2D05` Exposing 2,600 API endpoints to an agent as generated-and-executed code costs ~1,000 tokens; exposing them as individual MCP tool definitions would be vastly more.
- `INS-260626-8116` Give the model a REPL/execution environment (V8 isolate, Lua, etc.) and let it write code that chains tools, instead of call-result-call-result orchestration that burns inference and latency.
- `INS-260626-78E6` CLI access, keyword tool-search, and code mode all solve the same problem — never load all tools at once — so choose by constraints, not as rival camps.
- `INS-260626-2727` GitHub cut from 100+ tools to ~40 to fight context bloat, but its MCP lead expects to reverse 'many of the fewer-tools decisions' as compositional tool use and tool-search APIs make thousands of tools normal.
- `INS-260626-5D7C` Generate a typed SDK from your API and expose a single 'code' tool the model writes against — Cloudflare fit an entire API into ~1,000 tokens this way.

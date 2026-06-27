# Topic: mcp

> 8 insights

- `INS-260626-3492` [high] A correctly-executed prompt-injection exfil attack against GitHub's MCP server is not GitHub-specific — it stems from the lethal trifecta, and 'the utility of agents is in direct conflict with protecting this stuff,' which remains unsolved.
- `INS-260626-5D7C` [high] Generate a typed SDK from your API and expose a single 'code' tool the model writes against — Cloudflare fit an entire API into ~1,000 tokens this way.
- `INS-260626-BC79` [high] GitHub pushed tool success rates above 95% by encoding agent intent into the tool surface — making five API calls server-side inside one tool instead of forcing the agent to chain them.
- `INS-260626-8B56` [high] MCP tool access should be audited against the enterprise policy authority that granted it.
- `INS-260626-B983` [high] Naively converting a large API into MCP tools annihilates the context window, so the fix is progressive tool loading — not abandoning MCP.
- `INS-260626-6F00` [high] Registries and the protocol are sound; what blocks enterprises is the un-built operational triad of observability, access control, and security.
- `INS-260626-C623` [medium] A gateway absorbs the five cross-cutting concerns (auth, authz, observability, secure connectivity, hosting) so each new MCP server only owns its business logic.
- `INS-260626-8D48` [medium] Security teams should bless one gateway platform as a single root of trust, letting MCP development be decentralized without losing central control.

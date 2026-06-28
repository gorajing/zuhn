# Topic: mcp

> 27 insights

- `INS-260627-962C` [high] Poor MCP design and poor MCP security compound each other; you cannot patch a bad interface with authentication.
- `INS-260626-3492` [high] A correctly-executed prompt-injection exfil attack against GitHub's MCP server is not GitHub-specific — it stems from the lethal trifecta, and 'the utility of agents is in direct conflict with protecting this stuff,' which remains unsolved.
- `INS-260626-5D7C` [high] Generate a typed SDK from your API and expose a single 'code' tool the model writes against — Cloudflare fit an entire API into ~1,000 tokens this way.
- `INS-260626-7359` [high] Stop building REST-to-MCP conversion tools — design the server for the agent (start from how a human would want to interact) and use MCP's rich primitives rather than flattening endpoints into tools.
- `INS-260627-B416` [high] Every enabled MCP server injects tool descriptions into every system prompt — disable the ones you aren't using or they waste tokens and mislead the agent.
- `INS-260626-BC79` [high] GitHub pushed tool success rates above 95% by encoding agent intent into the tool surface — making five API calls server-side inside one tool instead of forcing the agent to chain them.
- `INS-260626-8B56` [high] MCP tool access should be audited against the enterprise policy authority that granted it.
- `INS-260627-FF5D` [high] Tag each registered server/agent with owner, environment, auth model, cost attribution, and the use cases consuming it — this metadata is what enables impact analysis and lineage, not nice-to-have decoration.
- `INS-260627-1CF9` [high] Map each human/agent interface difference to its security shadow: discovery to tool poisoning, iteration to data leakage, limited context to oversharing.
- `INS-260626-A5CB` [high] Cloudflare turned 2,600 API endpoints (1.2M tokens if exposed as tools) into two tools — search and execute, both taking code as input — for a ~99.9% token reduction to ~1,000 tokens.
- `INS-260626-B983` [high] Naively converting a large API into MCP tools annihilates the context window, so the fix is progressive tool loading — not abandoning MCP.
- `INS-260627-8DF1` [high] Don't ask an LLM to invent a complex config dict — give it named primitives like email: str and a status: Literal['open','closed'] enum it can't get wrong.
- `INS-260627-6217` [high] A third-party MCP tool's description is integration code written by someone who doesn't know your use case, so vanilla descriptions like 'Press a key on the keyboard' give agents too little to act well.
- `INS-260627-46EB` [high] MCP server authors can't tune tool descriptions to your agent's task, and surplus tools cause context confusion, so a focused custom tool set wins.
- `INS-260627-1B54` [high] MCP exposes an asymmetry — the user approves a one-line tool summary while the LLM consumes the full description, which can hide exfiltration instructions the user never sees.
- `INS-260627-ADB1` [high] Auth0 maps the agent as a client and APIs as traditional OAuth resource servers; the MCP server is itself a client, and Dynamic Client Registration lets agents register against it automatically.
- `INS-260626-6F00` [high] Registries and the protocol are sound; what blocks enterprises is the un-built operational triad of observability, access control, and security.
- `INS-260627-F2AE` [high] An LLM doesn't see a 400 or 500 — it sees text it must act on, so a cryptic error wastes a turn while a helpful one becomes free, just-in-time documentation.
- `INS-260627-F851` [high] If you own the client (internal tools, your own mobile app), you can do progressive disclosure, custom doc placement, masking, and elicitation; if you don't, you must design for the worst-possible client.
- `INS-260627-F522` [high] Wrap each third-party tool so it invokes the original function unchanged but carries a richer, hand-tuned description that encodes your team's hard-won operating knowledge.
- `INS-260626-C623` [medium] A gateway absorbs the five cross-cutting concerns (auth, authz, observability, secure connectivity, hosting) so each new MCP server only owns its business logic.
- `INS-260626-8D48` [medium] Security teams should bless one gateway platform as a single root of trust, letting MCP development be decentralized without losing central control.
- `INS-260627-A0EE` [medium] Thorough tool descriptions are a defensive layer: ambiguity in your docs is the gap an attacker-controlled neighboring tool uses to shadow yours.
- `INS-260626-13FB` [medium] Coding agents thrived because they're local, verifiable, and compiler-checkable; general knowledge-worker agents instead need to connect to five SaaS apps and a shared drive — making connectivity the 2026 bottleneck.
- `INS-260627-1B11` [medium] The agent never talks directly to artiq-mcp; it talks to a safety-filter proxy that authorizes or blocks each call before forwarding it.
- `INS-260627-FE77` [medium] CHIA registers nodes as MCP tools while allowing the tool server and the actual tool execution to run on different workers with different resources.
- `INS-260627-4446` [medium] Web MCP lets a site register typed tools on the navigator object so agents call named actions directly, instead of mimicking human clicks via screenshots and coordinate-guessing.

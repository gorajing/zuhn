# Tag: gateway

- `INS-260626-5B28` Keep the agent harness decoupled from the data/MCP layer so agents can be swapped in and out without re-architecting, with the gateway as the invariant.
- `INS-260626-C623` A gateway absorbs the five cross-cutting concerns (auth, authz, observability, secure connectivity, hosting) so each new MCP server only owns its business logic.
- `INS-260626-8D48` Security teams should bless one gateway platform as a single root of trust, letting MCP development be decentralized without losing central control.

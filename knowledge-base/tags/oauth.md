# Tag: oauth

- `INS-260626-0D50` MCP inherits OAuth's assumption that apps don't trust each other, which directly contradicts the single-sign-on trust fabric enterprises already run.
- `INS-260605-3588` A remote tool token should only work for the exact MCP server it was issued to.
- `INS-260605-B794` When every network connection already carries the verified user, groups, and tags, an internal MCP server or API can authorize requests without implementing its own OAuth flow.
- `INS-260626-8B56` MCP tool access should be audited against the enterprise policy authority that granted it.

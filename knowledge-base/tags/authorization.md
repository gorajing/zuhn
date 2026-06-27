# Tag: authorization

- `INS-260627-66D8` The paper evaluates the safety-filter with 1,932 adversarial scripts and about 250 harness-level tests, not only with successful lab calibrations.
- `INS-260627-20F9` Let the agent compose rich programs, but make execution depend on a separate policy boundary that checks effects rather than trusting the generated code.
- `INS-260605-A46E` Agent guardrails are defense-in-depth, not the security model.
- `INS-260626-57BA` Under XAA you log into the downstream app as yourself with your full existing permissions — the IDP brokers identity but does not attenuate scope, and scoped delegation is not in the spec.
- `INS-260605-3588` A remote tool token should only work for the exact MCP server it was issued to.
- `INS-260626-8B56` MCP tool access should be audited against the enterprise policy authority that granted it.
- `INS-260627-1B11` The agent never talks directly to artiq-mcp; it talks to a safety-filter proxy that authorizes or blocks each call before forwarding it.
- `INS-260627-3E71` Scopes not bound to the connection can never enter the access token because the SDK—not the LLM—runs the authorization request before tool execution.

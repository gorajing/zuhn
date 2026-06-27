# Tag: lethal-trifecta

- `INS-260625-2ED0` Risk from prompt injection requires three things together — untrusted input, access to private data, and the ability to act/exfiltrate; remove any one and the risk collapses.
- `INS-260626-3492` A correctly-executed prompt-injection exfil attack against GitHub's MCP server is not GitHub-specific — it stems from the lethal trifecta, and 'the utility of agents is in direct conflict with protecting this stuff,' which remains unsolved.
- `INS-260627-1C20` AI browsers sit in a 'lethal trifecta' (private data + untrusted content + external communication); since tag-wrapping and role separation only mitigate prompt injection, the durable defense is a plain-text user-confirmation step before any irreversible action.
- `INS-260627-9298` Use a 'Swiss cheese' stack — model alignment, harness-level AST parsing and permissions, and network/filesystem sandboxing — so no single failure compromises a bash-powered agent.
- `INS-260627-5A21` The worst security posture is the one you haven't examined — read-only shrinks the attack surface but the same cross-referencing that makes it useful makes it a devastating target.
- `INS-260627-8ADF` The real agent risk isn't bugs in one product — it's the inherent combination of data access, untrusted input, and outbound communication, which is irreducible and grows with capability.

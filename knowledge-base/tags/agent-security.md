# Tag: agent-security

- `INS-260625-2ED0` Risk from prompt injection requires three things together — untrusted input, access to private data, and the ability to act/exfiltrate; remove any one and the risk collapses.
- `INS-260327-76B2` Jensen Huang predicts 100-to-1 ratio of security bots to productive agents; Lahav agrees with the directional thesis though debates whether secure-by-design can reduce this ratio.
- `INS-260605-BC6F` If the agent's permissions ride on the network connection rather than an API key inside the box, there is no secret for a long-running model to leak, misuse, or route around.
- `INS-260327-E18C` Sequoia predicts the next major wave is an agent economy, but it requires solving persistent identity, seamless communication protocols (MCP is the starting gun, not the finish line), and agent-level security.
- `INS-260410-CA42` Filesystem and network isolation are coupled defenses — either alone leaves an agent compromise trivially exploitable.
- `INS-260625-386B` A parameterized secure view exposes only the current end user's data to the agent, so even a prompt-injected or manipulated query cannot reach other users' rows — security is enforced by structure, not by the model's good behavior.
- `INS-260625-BEFE` Static yes/no per-tool permissions force a bad usability-vs-security tradeoff; tracking session state lets you block dangerous combinations (read confidential data AND publish externally) while allowing each action in isolation.
- `INS-260605-3588` A remote tool token should only work for the exact MCP server it was issued to.
- `INS-260605-8AFF` Scope the model's tools and the runtime's direct command permissions separately.
- `INS-260605-5F0C` Put credential handles in manifests, not credentials.

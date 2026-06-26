# Tag: agent-frameworks

- `INS-260423-85B3` Google ADK with LiteLLM: the Guardian agent runs on Gemma 4 today, can swap to any LiteLLM-supported model tomorrow, because the agent layer does not encode Gemini-specific assumptions.
- `INS-260605-0A68` MCP gives tools to the model; ACP standardizes how a client (human or another agent) drives an agent — two orthogonal layers, not competitors.
- `INS-260605-B230` Android deliberately ships the low-level Prompt API rather than a skills system, because a skill is just text composed into a prompt — so the platform provides the substrate and lets agent frameworks build on top.
- `INS-260423-FF52` ADK callbacks: you can invoke Model Armor API at the before-agent-callback to detect malicious inputs before the agent sees them, and at after-agent-callback to check outputs for sensitive data.
- `INS-260605-3AE6` When everyone sprints to build the same workaround for a model limitation, that's a signal the limitation is temporary and the workaround is a depreciating asset.
- `INS-260530-ADED` PayPal's explicit feedback to the Google ADK team is that long-session support and shared cross-agent memory are missing — they've been bolting these on themselves, and other production teams hit the same gap.
- `INS-260605-5983` Frameworks speed the first 80%; production quality demands ownership.

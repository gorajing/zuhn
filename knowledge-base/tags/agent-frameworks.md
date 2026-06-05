# Tag: agent-frameworks

- `INS-260423-85B3` Google ADK with LiteLLM: the Guardian agent runs on Gemma 4 today, can swap to any LiteLLM-supported model tomorrow, because the agent layer does not encode Gemini-specific assumptions.
- `INS-260423-FF52` ADK callbacks: you can invoke Model Armor API at the before-agent-callback to detect malicious inputs before the agent sees them, and at after-agent-callback to check outputs for sensitive data.
- `INS-260605-3AE6` When everyone sprints to build the same workaround for a model limitation, that's a signal the limitation is temporary and the workaround is a depreciating asset.
- `INS-260530-ADED` PayPal's explicit feedback to the Google ADK team is that long-session support and shared cross-agent memory are missing — they've been bolting these on themselves, and other production teams hit the same gap.

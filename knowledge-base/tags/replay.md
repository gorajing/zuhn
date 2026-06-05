# Tag: replay

- `INS-260605-26EC` Keep reduction pure and defer side effects to a post-catch-up hook so that replaying 100 buffered events rebuilds state once instead of triggering 100 LLM requests.
- `INS-260605-CA2B` Replay-based durable execution suits bounded start-to-end workflows, but an agent is a long-lived session whose ever-growing replay journal eventually exceeds the system's entry-count or entry-size limits.

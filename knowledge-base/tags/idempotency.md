# Tag: idempotency

- `INS-260625-FA31` Design agentic systems for idempotency in the system layer — logging every side-effecting action to memory — because a retry can cause a model to reword the request enough to look like a fresh task.
- `INS-260605-26EC` Keep reduction pure and defer side effects to a post-catch-up hook so that replaying 100 buffered events rebuilds state once instead of triggering 100 LLM requests.

# Tag: agent-loop

- `INS-260605-BA6A` What looks like a coding agent learning a new skill is really it discovering and chaining existing CLI tools through its shell and runtime.
- `INS-260605-BA4B` Agent autonomy needs a stop rule.
- `INS-260627-A392` Real environments are noisy, so the model should think again after each tool response rather than reason once and commit to a plan.
- `INS-260605-FC00` Let the model choose the next action; let code execute it.
- `INS-260626-7D73` OpenGov moved off LangGraph to a custom agent loop to gain full control once their use cases got complex.
- `INS-260605-CA2B` Replay-based durable execution suits bounded start-to-end workflows, but an agent is a long-lived session whose ever-growing replay journal eventually exceeds the system's entry-count or entry-size limits.
- `INS-260605-9925` Don't let plugins block before an event/LLM call; instead wait a bounded window (~200ms) for optional enrichment and proceed regardless, so a slow plugin degrades quality rather than breaking the system.

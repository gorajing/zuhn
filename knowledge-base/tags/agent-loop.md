# Tag: agent-loop

- `INS-260605-9925` Don't let plugins block before an event/LLM call; instead wait a bounded window (~200ms) for optional enrichment and proceed regardless, so a slow plugin degrades quality rather than breaking the system.

# Tag: ttft

- `INS-260410-0B73` Move container provisioning behind the first tool call so sessions that don't need a sandbox never wait for one — Anthropic saw p50 TTFT drop ~60% and p95 drop >90% from this change alone.
- `INS-260605-DA2B` Target ~200–300ms time-to-first-token for the LLM, which constrains model size to roughly 8–30B parameters — bigger burns the latency budget, smaller sacrifices the intelligence and tool calling the agent needs.

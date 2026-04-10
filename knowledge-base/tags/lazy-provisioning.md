# Tag: lazy-provisioning

- `INS-260410-0B73` Move container provisioning behind the first tool call so sessions that don't need a sandbox never wait for one — Anthropic saw p50 TTFT drop ~60% and p95 drop >90% from this change alone.

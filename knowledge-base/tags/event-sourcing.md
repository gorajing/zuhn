# Tag: event-sourcing

- `INS-260627-E496` Let a durable-execution layer like Temporal own retries and crash recovery so agent code expresses only business logic, never failure plumbing.
- `INS-260605-E303` Make every agent action — input, LLM token fragments, errors, schedules — an event, and express all agent logic as a pure reduce(state, event) plus a separate side-effect hook.
- `INS-260627-7674` Because the framework is a compiler plugin, it emits a manifest of step signatures per deployment, letting it check whether a running workflow can be upgraded in place or must be cancelled and rerun.
- `INS-260625-A281` Like a database where the write-ahead log is durable and tables are views, an agent's context window, UI, debugging trace, and compaction should all be projections derived from one primary log.

# Tag: event-sourcing

- `INS-260605-E303` Make every agent action — input, LLM token fragments, errors, schedules — an event, and express all agent logic as a pure reduce(state, event) plus a separate side-effect hook.
- `INS-260625-A281` Like a database where the write-ahead log is durable and tables are views, an agent's context window, UI, debugging trace, and compaction should all be projections derived from one primary log.

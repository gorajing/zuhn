# Tag: event-sourcing

- `INS-260605-E303` Make every agent action — input, LLM token fragments, errors, schedules — an event, and express all agent logic as a pure reduce(state, event) plus a separate side-effect hook.

# Tag: tracing

- `INS-260605-E9A6` Build observability on OpenTelemetry so any agent — LangGraph, custom, or platform-native — can be traced and evaluated through a common endpoint.
- `INS-260605-E18B` The point of observability is shortening the gap between detecting a failure and diagnosing it, which requires evals linked back to the exact trace.
- `INS-260605-667B` An agent wrote a perfect report but saved it to disk and 'failed' — output-only judgment would call it garbage; the trace showed the research and writing were flawless.
- `INS-260605-36E9` Before complicating things with eval harnesses, read raw execution traces — they reveal ~80% of what is wrong and how to fix the agent or skill.
- `INS-260605-44E2` Save the decision, the actions taken, and the entire reasoning process — including what was NOT considered — back into the graph so later agents inherit it as precedent.
- `INS-260423-2B80` Annie: metrics shows what is going on — GPU utilization, current token usage, like a dashboard in your car; tracing shows why a 2.5-second request broke down as it did, the detail behind the scenes.
- `INS-260605-7711` Build bespoke tracing that structures the data your way and serves product/data/CX — not just engineers — because LLMs make such internal tools cheap to one-shot.
- `INS-260605-A2AD` When agents call CRUD/context tools, evaluate the whole trace and cram external system state into the trace itself rather than rebuilding test infrastructure.
- `INS-260625-019F` Code no longer documents agent behavior at runtime — only telemetry (traces/spans) does, so observability must be instrumentation-first.

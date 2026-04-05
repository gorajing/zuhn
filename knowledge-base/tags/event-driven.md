# Tag: event-driven

- `INS-260329-C991` HFT pipelines use lock-free event queues because thread locking introduces unpredictable latency spikes that ruin trade timing.
- `INS-260329-CF16` SQL triggers execute automatically and atomically when data changes, making them reliable for maintaining derived tables, audit logs, and cross-table consistency.
- `INS-260327-13B3` Ambient agents listen to event streams and act in the background at scale, but they're not fully autonomous -- they need inbox-style UX for human approval, editing, question-answering, and time-travel debugging.
- `INS-260329-71DE` HFT event pipelines use lock-free queues because even minimal thread locking creates latency spikes that cost money.

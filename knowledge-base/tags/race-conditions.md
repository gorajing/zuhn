# Tag: race-conditions

- `INS-260411-52C8` When running agents in parallel with shared session state, assign each agent a unique output_key to prevent data corruption.
- `INS-260627-95CF` Shared mutable state produces lost updates and stale reads when agents write concurrently; instead each agent seals an immutable, versioned state object and appends a new row (insert, never update), giving race-free handoffs, clear lineage, free rollback, and binary-searchable debugging through state evolution.
- `INS-260627-0F4E` Going from one agent to N agents converts an AI problem into a distributed-systems problem whose coordination complexity grows quadratically, so the failures are architectural — stale caches, race conditions, lost updates — not model errors.

# Tag: append-only

- `INS-260627-95CF` Shared mutable state produces lost updates and stale reads when agents write concurrently; instead each agent seals an immutable, versioned state object and appends a new row (insert, never update), giving race-free handoffs, clear lineage, free rollback, and binary-searchable debugging through state evolution.

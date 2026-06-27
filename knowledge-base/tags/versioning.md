# Tag: versioning

- `INS-260605-E7F2` Point skills at the live documentation reference instead of embedding content, because inline copies go stale the same way pretraining context does.
- `INS-260627-95CF` Shared mutable state produces lost updates and stale reads when agents write concurrently; instead each agent seals an immutable, versioned state object and appends a new row (insert, never update), giving race-free handoffs, clear lineage, free rollback, and binary-searchable debugging through state evolution.
- `INS-260627-7674` Because the framework is a compiler plugin, it emits a manifest of step signatures per deployment, letting it check whether a running workflow can be upgraded in place or must be cancelled and rerun.
- `INS-260329-8F98` Always version APIs explicitly (e.g., /v1/products, /v2/products) rather than modifying existing endpoints, so old clients continue working while new clients get new features.

# Tag: immutability

- `INS-260627-95CF` Shared mutable state produces lost updates and stale reads when agents write concurrently; instead each agent seals an immutable, versioned state object and appends a new row (insert, never update), giving race-free handoffs, clear lineage, free rollback, and binary-searchable debugging through state evolution.
- `INS-260626-8660` Treat your personal notes as an immutable snapshot the LLM never touches; agent-generated concepts, comparisons, and summaries live in a separate derivative layer that references it.
- `INS-260329-ACEB` Using tuples for coordinates signals 'this data is fixed' at the type level, making the constraint impossible to violate rather than merely documented.
- `INS-260409-2D5C` Raw sources are read-only truth; the wiki is LLM-writable derivative; the schema is human-LLM co-evolved style guide.
- `INS-260329-7914` JavaScript strings being immutable (you must replace the whole string, not modify individual characters) demonstrates how immutability eliminates entire categories of bugs.
- `INS-260402-CC68` Immutable smart contracts force a ship-once mentality where security audits must precede deployment, inverting web2's iterate-fast approach.

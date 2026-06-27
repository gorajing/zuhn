# Tag: fail-fast

- `INS-260627-9EBD` An agent can't just throw arbitrary data at the next agent and hope; each handoff must declare and validate a schema-and-quality contract (e.g. reject if confidence < 0.7) so contract violations are caught at the boundary, not discovered downstream as garbage reports.
- `INS-260327-2386` If something takes less than 3 minutes and seems interesting, do it right now — do not wait, because most of the time failure is great if you fail fast.
- `INS-260330-8920` The team broke multiple bats and redesigned between each attempt, reaching their goal faster than careful upfront engineering would have.

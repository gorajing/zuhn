# Tag: agent-handoff

- `INS-260627-9EBD` An agent can't just throw arbitrary data at the next agent and hope; each handoff must declare and validate a schema-and-quality contract (e.g. reject if confidence < 0.7) so contract violations are caught at the boundary, not discovered downstream as garbage reports.
- `INS-260625-CF6B` Update the visible UI on each tool call so the user can follow along, and route money-spending or other irreversible steps to manual human confirmation.

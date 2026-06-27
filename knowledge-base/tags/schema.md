# Tag: schema

- `INS-260626-39CE` OpenGov modeled their back-end agent routes on Google's A2A protocol, using the rigorous spec as the contract that drove front-end/back-end alignment.
- `INS-260627-9EBD` An agent can't just throw arbitrary data at the next agent and hope; each handoff must declare and validate a schema-and-quality contract (e.g. reject if confidence < 0.7) so contract violations are caught at the boundary, not discovered downstream as garbage reports.
- `INS-260409-0EEE` Prototyping a basic LLM-wiki in Claude Code takes about an hour — the scarce resource is knowing what to build it for.
- `INS-260409-2D5C` Raw sources are read-only truth; the wiki is LLM-writable derivative; the schema is human-LLM co-evolved style guide.

# Tag: state-management

- `INS-260411-52C8` When running agents in parallel with shared session state, assign each agent a unique output_key to prevent data corruption.
- `INS-260411-D060` Use session.state with descriptive output_key names as the shared whiteboard for agent coordination — it's simpler and more debuggable than message passing.
- `INS-260605-9FCF` Default to a file system of state for long-running loops, and write to JSON rather than markdown because models overwrite markdown files but tend not to overwrite JSON.
- `INS-260605-E303` Make every agent action — input, LLM token fragments, errors, schedules — an event, and express all agent logic as a pure reduce(state, event) plus a separate side-effect hook.
- `INS-260410-1ED3` In agentic systems a minor bug cascades across many turns, so production requires resumable execution, retry logic, and rainbow deployments — not stateless request handling.
- `INS-260329-BAB7` The variable vs pointer distinction in C++ maps directly to value vs reference patterns that pervade AI system architecture.

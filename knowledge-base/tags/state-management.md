# Tag: state-management

- `INS-260411-52C8` When running agents in parallel with shared session state, assign each agent a unique output_key to prevent data corruption.
- `INS-260411-D060` Use session.state with descriptive output_key names as the shared whiteboard for agent coordination — it's simpler and more debuggable than message passing.
- `INS-260410-1ED3` In agentic systems a minor bug cascades across many turns, so production requires resumable execution, retry logic, and rainbow deployments — not stateless request handling.
- `INS-260329-BAB7` The variable vs pointer distinction in C++ maps directly to value vs reference patterns that pervade AI system architecture.

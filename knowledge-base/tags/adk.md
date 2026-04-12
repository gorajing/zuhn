# Tag: adk

- `INS-260411-8034` Use condition-based exit (exit on 'PASS') rather than fixed iteration counts for generator-critic loops to balance quality with efficiency.
- `INS-260411-27AA` Gate human approval on irreversible or high-consequence actions only — routine gating causes approval fatigue that defeats the safety purpose.
- `INS-260411-52C8` When running agents in parallel with shared session state, assign each agent a unique output_key to prevent data corruption.
- `INS-260411-D060` Use session.state with descriptive output_key names as the shared whiteboard for agent coordination — it's simpler and more debuggable than message passing.
- `INS-260411-BCB0` Build and debug a sequential agent chain first, then add parallelism, loops, or routing only when the simple version works.
- `INS-260411-6106` Write sub-agent descriptions with the same precision as API documentation — they are the routing signal for LLM-driven delegation.
- `INS-260411-5478` Use AgentTool to wrap a sub-agent hierarchy as a callable function, letting parent agents delegate without managing internals.

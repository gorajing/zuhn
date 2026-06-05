# Tag: agent-memory

- `INS-260405-6C88` Agent memory splits into short-term (conversation state), long-term (extracted durable knowledge), and reasoning (tool/decision traces for explainability).
- `INS-260327-DC4C` AI agents are like the character in Memento -- highly capable but amnesiac each session, requiring deliberate external context systems to function coherently.
- `INS-260402-2342` An agent given filesystem and MCP access spontaneously wrote its own memory skill and started using a graph database without explicit programming.
- `INS-260501-EA32` OpenClaw has no memory; you re-explain everything daily. Hermes auto-writes to SQLite and the agent can query its own history.
- `INS-260409-8408` MemPalace's 4-layer stack (L0 identity always loaded at ~50 tokens, L1 critical facts always loaded at ~120 tokens, L2 room recall on demand, L3 deep search on demand) gives agents ~170 tokens of persistent identity before any query fires.
- `INS-260530-AA02` PayPal explicitly stores incident-triage reports in persistent memory so follow-up queries pull from the report instead of re-triaging — without this, the platform's per-incident savings would be wiped out by user re-queries.
- `INS-260402-5CF0` When users reject cached results, that negative signal shapes future retrieval quality more than successful matches do.
- `INS-260405-02BE` Storing rejection events alongside successful retrievals lets agents learn what not to suggest, creating a temporal record of evolving preferences.
- `INS-260501-8186` We're hacking continual learning by having agents write skill files. Real continual learning — agents that get better at your specific org over time — is research-blocked.
- `INS-260322-96D1` AI agents that accumulate all past conversations and user-shared resources develop into genuinely personalized assistants — one agent independently followed AI influencers on social media to self-educate in its field.
- `INS-260530-ADED` PayPal's explicit feedback to the Google ADK team is that long-session support and shared cross-agent memory are missing — they've been bolting these on themselves, and other production teams hit the same gap.
- `INS-260524-D5DB` Jongmin Sung: agents are very smart but 'without personal memory you don't remember what you did yesterday' — so he digests papers into a wiki he can query and manage context with.
- `INS-260605-8BEA` Instruct the agent: for any repeatable task, write a script, append its description to memories.md, and reuse that script next time instead of redoing the work.

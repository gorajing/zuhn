# Tag: self-improving-systems

- `INS-260625-3EE6` Give a model a baseline set of tools and it will sensibly add or drop ones it under-uses; ask it to build its toolset from scratch and it over-engineers and fails to iterate.
- `INS-260626-BE0D` Make every query leave a trace — a new concept, note, or comparison file — so the knowledge base evolves as you talk to it, not just when you ingest data.
- `INS-260605-062F` Start harnesses with primitives, then let trajectory evidence grow the specialization.
- `INS-260329-01F2` Path compression in union-find makes every find operation flatten the tree it traverses, so the data structure permanently improves its own performance with each use.
- `INS-260522-B95E` YC Root Access: 2,000 hours of office-hour recordings, diarized and categorized, regenerated their 5-10-year-old user manual into a better 150-page one in a weekend — and now it updates monthly, incorporating or discarding each new piece of advice.
- `INS-260524-D5DB` Jongmin Sung: agents are very smart but 'without personal memory you don't remember what you did yesterday' — so he digests papers into a wiki he can query and manage context with.
- `INS-260524-5173` Woosang: ML recommends a recipe -> a robot synthesizes it -> the result feeds back; active learning plus robotic synthesis is the autonomous-lab loop.
- `INS-260627-2B13` If you keep telling agents 'cuts should be 2 seconds not 6,' that pattern is a signal to fork a generic skill into an org-specific one that bakes in your preferences.
- `INS-260514-00D3` Auto-save every question-answer interaction back into the indexed folder — turns each AI query into new knowledge that re-indexes in the next cycle, creating compounding personal KB.
- `INS-260522-2CE8` YC Root Access: a company is a set of recursive self-improving AI loops — sensor (tickets, telemetry, churn) -> policy/decision -> tool layer (deterministic APIs/skills) -> quality gate (evals, human review) -> learning mechanism that loops back.
- `INS-260625-4AB6` SkillOpt pairs a continuous fast-update path of small skill edits with a slow per-epoch reflection step plus a meta-skill memory of what has and hasn't worked.
- `INS-260522-C5C2` YC Root Access 'holy shit' moment: a monitoring agent watched every employee query, and when one failed it opened a merge request to fix the tools/skills/index, had an agent review and deploy it, so the query succeeded the next day.
- `INS-260626-DCB8` Most companies get an agent working but never make it improve daily; the unlock is turning every human interaction the agent couldn't handle into an eval that triggers an agent to modify the codebase and prompts until it passes.

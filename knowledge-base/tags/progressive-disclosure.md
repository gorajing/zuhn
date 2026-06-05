# Tag: progressive-disclosure

- `INS-260605-90E5` A skill replaces the hand-built router-and-specialist-workflow stack by letting a single agent progressively acquire the context to solve cross-domain requests.
- `INS-260605-C86D` A skill loads only its front-matter description into context up front; the full SKILL.md body and any referenced files are pulled in lazily, only once the agent's description-match tells it the skill is relevant.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
- `INS-260320-B210` Keep SKILL.md files under 500 lines and use progressive disclosure via resource files for 40-60% token efficiency improvement.
- `INS-260501-6453` Skills name + description = always in context. Skill body = loaded on demand. You can have 50 skills available without 50x the context cost.
- `INS-260605-B6BC` Make the skill.md a thin router that points to detailed markdown loaded only for the relevant branch of work.
- `INS-260329-DACC` Accept unexplained scaffolding early so learners can produce output immediately, then backfill understanding incrementally.
- `INS-260330-1B16` Build understanding layer by layer so the final formula feels like a natural extension rather than an intimidating wall of symbols.

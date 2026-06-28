# Tag: progressive-disclosure

- `INS-260626-4BC2` Structure knowledge so the agent reads an index, then an executive summary, then derivatives, and only falls through to the full raw source when nothing above answers the query.
- `INS-260605-02FB` Encapsulate work in small, durable, testable skills and prove their quality by backtesting against your body of past code, changes, and incidents.
- `INS-260626-78E6` CLI access, keyword tool-search, and code mode all solve the same problem — never load all tools at once — so choose by constraints, not as rival camps.
- `INS-260605-90E5` A skill replaces the hand-built router-and-specialist-workflow stack by letting a single agent progressively acquire the context to solve cross-domain requests.
- `INS-260627-D456` A skill's description field is the load trigger: agents pull a skill into context only when its description signals relevance, keeping the context window lean as the capability library grows.
- `INS-260605-C86D` A skill loads only its front-matter description into context up front; the full SKILL.md body and any referenced files are pulled in lazily, only once the agent's description-match tells it the skill is relevant.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
- `INS-260627-A19B` Expose only lightweight skill metadata at runtime and lazily read the full skill.md and folder only when the agent decides to use it, so context budget scales to hundreds of skills.
- `INS-260605-205E` If a skill detail can be skipped, the agent will skip it — so anything that defines your product or its safety belongs inline in skill.md, not in a reference file.
- `INS-260320-B210` Keep SKILL.md files under 500 lines and use progressive disclosure via resource files for 40-60% token efficiency improvement.
- `INS-260501-6453` Skills name + description = always in context. Skill body = loaded on demand. You can have 50 skills available without 50x the context cost.
- `INS-260627-68FC` Use MCP resources to ship the workflow guides (overview → create → execute → complete) that instruct an agent how to use your tools, not only the tools.
- `INS-260627-F2AE` An LLM doesn't see a 400 or 500 — it sees text it must act on, so a cryptic error wastes a turn while a helpful one becomes free, just-in-time documentation.
- `INS-260605-B6BC` Make the skill.md a thin router that points to detailed markdown loaded only for the relevant branch of work.
- `INS-260329-DACC` Accept unexplained scaffolding early so learners can produce output immediately, then backfill understanding incrementally.
- `INS-260330-1B16` Build understanding layer by layer so the final formula feels like a natural extension rather than an intimidating wall of symbols.

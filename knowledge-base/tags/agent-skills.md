# Tag: agent-skills

- `INS-260625-D295` DeepMind publishes coding-agent skills for every Gemini API, including the tricky real-time Live API, so agents steer developers toward correct usage.
- `INS-260625-78C1` SkillOpt applies candidate edits, re-runs the agent on a validation set, and accepts the new skill only if performance actually improves — otherwise it reverts and records the failure.
- `INS-260625-99B0` SkillOpt passes the whole rollout — tool usage, intermediate steps, and final output — to the optimizer, not just a pass/fail correctness signal.
- `INS-260627-045B` In 2026 the question stopped being 'can AI code my app' and became 'how do I configure skills to get the best results' — the differentiator is tooling, not the model.
- `INS-260626-DD33` Skills should carry high-level orientation plus a link to markdown docs the agent web-fetches, so capabilities update centrally instead of forcing every user to redistribute the skill.
- `INS-260625-AB58` Build tiny single-purpose skills and compose them, rather than one mega-skill that does an entire workflow.
- `INS-260605-2032` Google's on-device skill harness exposes only skill descriptions in the system prompt and uses a load-skill tool call to selectively pull in a skill's functions only when the model decides to use it.
- `INS-260625-8C41` Skills optimized for one model or harness (e.g. Codex) still beat the no-skill baseline when transferred to another (e.g. Claude Code), though direct optimization remains strongest.
- `INS-260605-1FD9` A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a fact, then show it on Maps'), but invoking multiple skills inside one answer only works sometimes.
- `INS-260627-D456` A skill's description field is the load trigger: agents pull a skill into context only when its description signals relevance, keeping the context window lean as the capability library grows.
- `INS-260625-5358` Skill files can be optimized like neural-network weights, with proposed text edits playing the role of gradients.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
- `INS-260625-4AB6` SkillOpt pairs a continuous fast-update path of small skill edits with a slow per-epoch reflection step plus a meta-skill memory of what has and hasn't worked.

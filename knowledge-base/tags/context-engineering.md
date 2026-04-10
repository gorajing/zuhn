# Tag: context-engineering

- `INS-260410-9F17` If a human engineer can't definitively say which tool to use in a given situation, the agent can't be expected to do better.
- `INS-260409-7C62` CLAUDE.md teaches the agent how to traverse the vault — it is the retrieval system.
- `INS-260327-F625` Harrison Chase says context engineering describes everything LangChain has done without knowing the term existed — traces show what's in your context, compaction manages it, sub-agents partition it, and memory extends it across sessions.
- `INS-260410-37D5` Compaction preserves continuity but doesn't cure context anxiety; only a fresh agent with a handoff artifact does.
- `INS-260410-0FC1` Redesign the test and log UX around the agent's cognitive constraints: short outputs, greppable ERROR lines, precomputed summaries, deterministic sampling.
- `INS-260410-9EFC` Context is not free real estate — every token spent depletes the model's attention budget, so curate aggressively.
- `INS-260410-F259` System prompts fail at two extremes: brittle hardcoded if-else logic or vague high-level guidance — aim for the middle altitude.
- `INS-260321-A5D4` Adding instructions to fuzzy tasks creates noise, not clarity. Expert prompters write shorter prompts that define the task clearly without micromanaging execution — long prompts degrade performance around 3,000 tokens.
- `INS-260321-82FE` Effective prompting is no longer about linguistic tricks — it's about providing the right structure: role, background, format, constraints. Description of what the output should BE matters more than instructions for what the model should DO.
- `INS-260328-4A93` AI product orgs need three new capabilities: unit economics dashboarding, context/retrieval quality ownership, and eval-based QA for non-deterministic outputs.

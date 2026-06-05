# Tag: harness-engineering

- `INS-260327-77E7` Sustained quality from AI agents comes from organizational design patterns (QA loops, approval gates, role specialization) rather than model selection.
- `INS-260605-9900` Harness engineering is an extension of context engineering: let agents run, watch where they get lost, and encode that learning back into agents.md, skills, and tests so the agent flows through the workflow more autonomously next time.
- `INS-260603-DFA6` Joe (RocketRide): the progression is prompt engineering (instructions to the model) → context engineering (the contextual data you give it) → 'harness engineering' (the ecosystem around the agent that makes it observable, cost-optimized, performant, and manageable at scale).
- `INS-260524-2C7C` Woosang: 'we don't make an AI agent to just do something — we need a harness'; orchestration (tool-call -> verify -> reflect -> cycle) and memory drive performance.
- `INS-260514-AE82` Harness engineering (system-prompt design, tool-call orchestration) can lift a model's performance 30-40% — invest there before chasing a better model.
- `INS-260605-C048` Put reusable intelligence into tools, middleware, and memory before polishing prompts.
- `INS-260514-0226` Code is the compiled artifact. The spec + harness is the source. LLM is the fuzzy compiler. Swap models = swap compiler backend.
- `INS-260514-8413` Each engineer has access to 5, 50, or 5,000 engineers' worth of capacity 24/7. Code is free. Human attention is what's scarce.
- `INS-260514-6DF3` Lint errors aren't just 'don't merge this' — they're prompts that surface what good code looks like to the agent at the moment the agent is writing it.
- `INS-260501-BBB7` Greg Brockman: at OpenAI you do get to live in the future — we can co-design, change the models the harness everything together to better serve the needs we see.
- `INS-260605-15B8` Turn harness edits into falsifiable contracts, not untracked tweaks.
- `INS-260605-C33F` Treat every agent failure as a harness bug and feed it into a retrospective + memory system, so the next run avoids the same roadblock.
- `INS-260327-E0F7` Harness engineering uses structured documentation, linting rules, and architectural constraints to force consistent outputs regardless of which AI model generates the code.
- `INS-260605-D818` Make harness components file-visible before asking agents to improve them.

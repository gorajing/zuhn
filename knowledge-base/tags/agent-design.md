# Tag: agent-design

- `INS-260329-EAFD` Plan-mode AI that asks clarifying questions before building prevents the cascade of errors that come from premature generation.
- `INS-260404-AD45` Game theory provides the necessary framework for understanding how AI agents will behave when they interact strategically with other agents and humans.
- `INS-260605-B182` Earn the right to automate by being able to do the task by hand first — otherwise you can't structure, verify, or correct the agent.
- `INS-260605-C775` Build agent-facing systems by exposing open, controllable primitives instead of clean abstracted APIs, because any layer the agent can't get behind becomes a hard ceiling.
- `INS-260410-19DE` Smart agents use file paths, queries, and links to fetch data on demand — like humans use file systems and bookmarks rather than memorizing everything.
- `INS-260327-D020` Goose's recipe-based approach, where successful workflows are baked into shareable scripts, outperforms pre-built tool integrations because agents find surprising solutions humans wouldn't encode.
- `INS-260410-1A22` Pick the tool-use feature that solves your actual bottleneck — definition bloat, intermediate data, or parameter errors — not all three by default.
- `INS-260410-CD79` Anthropic's SOTA SWE-bench agent used only a prompt plus a Bash tool and an edit tool, deliberately avoiding hardcoded step transitions.
- `INS-260605-C86D` A skill loads only its front-matter description into context up front; the full SKILL.md body and any referenced files are pulled in lazily, only once the agent's description-match tells it the skill is relevant.
- `INS-260423-72D0` Cody: this isn't go open Claude Code and give it access to everything — I'm talking about specific jobs-to-be-done workflows custom-made for how you operate day-to-day.
- `INS-260421-7ADE` Semiont's foundational axiom: every operation the system can do is equivalent between humans and agents via a unified event bus with a sliding scale of automation.
- `INS-260514-4FDC` Codex harness = 6 components in 3 layers: STANDARDS (agent.md + memory), PROCEDURES (skills + MCP), EXECUTION (hooks + sub-agents). Each layer answers a distinct question — confusing them produces broken harnesses.
- `INS-260421-CE27` MemMachine demonstrated that single-node retrieval of 'suggest dessert' could miss a stored 'allergic to peanuts' fact; expanding to ±2 neighbor nodes catches the constraint.
- `INS-260409-A3EC` The KB is a curated prior; agents should still fetch fresh web content to supplement it.
- `INS-260603-6FE3` Navish (Salesforce): 'the problem is not how large a dataset you give the agent, it's the quality' — a big silo of stale data just has the agent running the same query on old data; you have to keep the data updated for the agent to help.
- `INS-260605-7B4C` Treat the context window as a budget to minimize, not a resource to fill, because abundance kills the scrappiness that produces good engineering.
- `INS-260410-25AC` Constrain planner agents to deliverables and high-level design — granular technical decisions made upfront propagate errors into the implementation.

# Tag: agent-design

- `INS-260410-19DE` Smart agents use file paths, queries, and links to fetch data on demand — like humans use file systems and bookmarks rather than memorizing everything.
- `INS-260327-D020` Goose's recipe-based approach, where successful workflows are baked into shareable scripts, outperforms pre-built tool integrations because agents find surprising solutions humans wouldn't encode.
- `INS-260410-1A22` Pick the tool-use feature that solves your actual bottleneck — definition bloat, intermediate data, or parameter errors — not all three by default.
- `INS-260410-CD79` Anthropic's SOTA SWE-bench agent used only a prompt plus a Bash tool and an edit tool, deliberately avoiding hardcoded step transitions.
- `INS-260423-72D0` Cody: this isn't go open Claude Code and give it access to everything — I'm talking about specific jobs-to-be-done workflows custom-made for how you operate day-to-day.
- `INS-260329-EAFD` Plan-mode AI that asks clarifying questions before building prevents the cascade of errors that come from premature generation.
- `INS-260404-AD45` Game theory provides the necessary framework for understanding how AI agents will behave when they interact strategically with other agents and humans.
- `INS-260421-7ADE` Semiont's foundational axiom: every operation the system can do is equivalent between humans and agents via a unified event bus with a sliding scale of automation.
- `INS-260421-CE27` MemMachine demonstrated that single-node retrieval of 'suggest dessert' could miss a stored 'allergic to peanuts' fact; expanding to ±2 neighbor nodes catches the constraint.
- `INS-260409-A3EC` The KB is a curated prior; agents should still fetch fresh web content to supplement it.
- `INS-260410-25AC` Constrain planner agents to deliverables and high-level design — granular technical decisions made upfront propagate errors into the implementation.

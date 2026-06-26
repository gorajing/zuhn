# Tag: agent-orchestration

- `INS-260327-7299` Paperclip's bring-your-own-bot approach reflects the reality that different AI models have distinct strengths and personalities, making model-agnostic orchestration the optimal architecture.
- `INS-260525-4D80` Korean engineer: 'I need someone who can play the role of an engineering manager' — not because the agent is stupid, but because intent has to be translated into what the agent should build.
- `INS-260605-46A8` For multi-hour agent tasks, replace 'check back in a bit' with push notifications that fire when the agent needs you or finishes.
- `INS-260327-77E7` Sustained quality from AI agents comes from organizational design patterns (QA loops, approval gates, role specialization) rather than model selection.
- `INS-260605-07E5` Build a state machine with gates between agents so steps can't be skipped, instead of trusting prompt instructions the model can ignore.
- `INS-260605-AE0D` Sort parallel agent sessions into lanes by required oversight — fire-and-forget test refactors at one end, conversational P0 feature work at the other.
- `INS-260605-9E46` Hampton solves three problems in one codebase concurrently — local agent writing tests, background agent building the UI, cloud agent writing docs — by varying autonomy so each needs a different slice of his attention.
- `INS-260605-0374` Give each customer its own agent built from a shared role harness (AGENT.md) plus a customer-specific context file (CUSTOMER.md), with persistent sessions per case.
- `INS-260501-EC31` Tan runs 10-15 parallel Claude Code sessions per day, each in its own work-tree, shipping 10-50 PRs daily as orchestrator rather than implementer.
- `INS-260514-2E48` AI runs 24/7. Humans don't. In Amazon warehouses, AI already dispatches humans via headsets. The roles invert.
- `INS-260424-7A03` Google Cloud lead: CPUs are going to make a comeback — there's a lot of general-purpose compute involved in running these agents, orchestrating inference, creating sandboxes, virtual machines to build code, run it, check results.
- `INS-260625-7CD5` Agents scale infinitely but human attention degrades under load, so attention is the bottleneck to design around.
- `INS-260514-08E3` If you approve plans without reading them, you're authorizing a multi-hour rollout of instructions you don't know. Push plans as separate PRs.
- `INS-260605-BD54` The textbook five-step SDLC is a human abstraction agents ignore — to automate it you must decompose each coarse stage (e.g. 'plan') into the many deterministic micro-steps it actually contains.

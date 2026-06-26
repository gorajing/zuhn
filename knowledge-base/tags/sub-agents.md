# Tag: sub-agents

- `INS-260410-D92A` Long-horizon agents need compaction (for back-and-forth flow), note-taking (for iterative milestones), or sub-agents (for parallel research) — pick by task shape.
- `INS-260405-8166` A master agent holds your full private context locally while spawning persona-limited sub-agents for different environments — work, social, dating — each with different data access and communication styles.
- `INS-260625-AF2A` If the harness hardcodes the decomposition, it's a map-reduce with LLM calls; if the model picks the decomposition, it's a genuine recursive agent.
- `INS-260605-4DB9` Not all context belongs in the same agent — delegate searches and intermediate reasoning to sub-agents and pass only results back to the main conversation.
- `INS-260605-21A5` Use a large model (e.g. GPT-5.x) for planning and long-horizon reasoning, then spawn fast models (e.g. Codex Spark) as executors to run the plan's steps.
- `INS-260605-5078` Push dedicated, independent pieces of work off the main context thread into sub-agents and bring back only a short summary, because LLM-summarization-based compaction of the main thread is lossy.
- `INS-260605-AD25` Move the validation step into a fresh sub-agent — an agent checking its own work in the same context just pats itself on the back.
- `INS-260514-5914` Skills = how-to knowledge loaded just-in-time. Sub-agents = task delegation that returns only the result. Wrong primitive = wasted context.

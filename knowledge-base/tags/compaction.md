# Tag: compaction

- `INS-260410-D92A` Long-horizon agents need compaction (for back-and-forth flow), note-taking (for iterative milestones), or sub-agents (for parallel research) — pick by task shape.
- `INS-260410-37D5` Compaction preserves continuity but doesn't cure context anxiety; only a fresh agent with a handoff artifact does.
- `INS-260410-EE37` Keep the full session durable outside the context window and let the harness re-hydrate slices via getEvents(), instead of compacting or trimming in place and losing tokens you can't recover.
- `INS-260605-5078` Push dedicated, independent pieces of work off the main context thread into sub-agents and bring back only a short summary, because LLM-summarization-based compaction of the main thread is lossy.
- `INS-260625-CC0F` A model's finite context forces you to compact the log, but compaction throws information away — so keep the raw log and treat each compaction as a disposable fork you can resume as a new branch.
- `INS-260320-06EF` Dev docs persist on disk and survive auto-compaction — just say 'continue' in a new session to pick up where you left off.
- `INS-260320-04A2` Create three dev doc files (plan.md, context.md, tasks.md) for every large task to prevent Claude from losing the plot through compaction.
- `INS-260320-0127` Update dev docs regularly by running /update-dev-docs before context compaction to preserve current state.
- `INS-260626-105D` An LLM has a 'smart zone' (~under 100K tokens) and a 'dumb zone' beyond it, so size every task to finish inside the smart zone rather than trusting a 200K or 1M window.

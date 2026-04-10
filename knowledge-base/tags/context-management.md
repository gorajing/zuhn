# Tag: context-management

- `INS-260410-B0D6` Every harness workaround encodes an assumption about what the model can't do; those assumptions decay fast and need to be re-tested on each model upgrade.
- `INS-260327-FDC1` Chase argues that file system access is a non-negotiable primitive for long-horizon agents because it enables critical context management strategies: storing summarized context for later retrieval, handling large tool results, and maintaining state across compaction boundaries.
- `INS-260320-E6DD` Structure knowledge as a relational database (entities + relationships), not text blobs. Every Claude instance reads/writes the same structured knowledge base.
- `INS-260320-5B49` Curated structured data enables REASONING about connections. Vector memory stores text blobs for retrieval. For business-ready context, structure wins.
- `INS-260410-D034` If you've corrected Claude twice on the same issue, stop correcting — /clear and restart with a prompt that incorporates what you learned.
- `INS-260327-B539` Claude Code's AutoDream periodically consolidates memory files in the background -- merging, pruning, and compacting -- creating a sleep-like cycle that keeps sessions feeling sharp rather than cluttered.
- `INS-260410-6B30` Treat CLAUDE.md like code — prune ruthlessly, and if Claude keeps violating a rule, the file is probably too long, not too short.
- `INS-260321-0C99` Create three markdown context files (about-me.md, my-rules.md, my-templates.md) — this is the step most people skip and the one that makes the biggest difference.
- `INS-260410-761B` Most Claude Code best practices reduce to one principle: the context window fills fast and performance degrades as it fills.
- `INS-260410-796F` Use subagents for any task that reads many files — they run in their own context window and return only summaries.
- `INS-260320-04A2` Create three dev doc files (plan.md, context.md, tasks.md) for every large task to prevent Claude from losing the plot through compaction.
- `INS-260320-63D3` Each implementation task was dispatched to a fresh subagent with exactly the context it needed — no accumulated confusion from previous tasks.

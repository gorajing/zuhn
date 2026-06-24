# Tag: subagents

- `INS-260624-E89C` Subagents are safest when they broaden search and context, not when every worker can mutate the codebase.
- `INS-260410-796F` Use subagents for any task that reads many files — they run in their own context window and return only summaries.
- `INS-260605-062F` Start harnesses with primitives, then let trajectory evidence grow the specialization.
- `INS-260409-086A` Spawn a subagent per source during ingest so context pollution doesn't degrade later items in the queue.
- `INS-260605-780C` Fan out ~25 subagents to analyze each backtest case in parallel, then cluster the failures into cohorts so the aggregate metric becomes an actionable 'why.'

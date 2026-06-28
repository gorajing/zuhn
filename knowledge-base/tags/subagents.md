# Tag: subagents

- `INS-260626-3796` AgentRun should model cloud subagents as child runs with their own branch, VM, and verification gates.
- `INS-260628-E0D2` System prompt plus user text is a sliver of agentic-coding context; the bulk is tool use and tool responses (bash, grep, file reads), most of which is cacheable but often re-prefilled.
- `INS-260624-E89C` Subagents are safest when they broaden search and context, not when every worker can mutate the codebase.
- `INS-260626-59D9` Throwing more fresh context windows at a problem is a form of test-time compute; scale the number of subagents up with task difficulty.
- `INS-260410-796F` Use subagents for any task that reads many files — they run in their own context window and return only summaries.
- `INS-260605-780C` Fan out ~25 subagents to analyze each backtest case in parallel, then cluster the failures into cohorts so the aggregate metric becomes an actionable 'why.'
- `INS-260605-062F` Start harnesses with primitives, then let trajectory evidence grow the specialization.
- `INS-260409-086A` Spawn a subagent per source during ingest so context pollution doesn't degrade later items in the queue.

# Tag: parallelism

- `INS-260330-77BB` Running multiple AI agents locally hits machine limits at 3-4 worktrees; cloud dev environments remove this ceiling entirely.
- `INS-260624-B6EA` Independent agent tool calls should run concurrently even if the model emits them sequentially.
- `INS-260605-6CBF` Decompose an autonomous research loop into a literature-scout researcher, a hypothesis-queuing planner, parallel implementation workers, and a monitoring reporter rather than running one agent that does all steps serially.
- `INS-260410-62E8` Each agent claims a task by writing a lockfile to current_tasks/ and pushes via git; git's atomicity handles races and Claude handles merge conflicts.
- `INS-260605-D055` Agent work is inference-bound, so run several agents in parallel on isolated cloud machines and supervise them through a Kanban board like an engineering manager over ICs.
- `INS-260410-7ED2` When 16 agents all hit the same bug compiling one giant artifact, decompose by using a known-good oracle to narrow the failing subset per agent.
- `INS-260410-CD01` Code-driven orchestration unlocks asyncio.gather across independent tool calls, collapsing sequential round-trips into one concurrent batch.
- `INS-260605-2D70` Default to one worker/validator at a time and parallelize only read-only work like code search, API research, and code review.
- `INS-260605-A847` Start with a single sequential agent loop and forget parallelism — you will become the bottleneck on review long before agent throughput does.
- `INS-260410-ED68` Human science is optimized for depth because that's all humans can do; AI unlocks a parallel breadth-first mode that requires restructuring how science is practiced.
- `INS-260410-2383` Ten Napoleons are not worth 400,000 soldiers — parallelizing AI researchers hits diminishing returns fast, and the binding constraints become taste and compute.
- `INS-260626-D7F3` Radical's AI scientist moved into elemental-alloy families no human had ever published on, because human experts carried an 'unknowing bias' against them, and it can compare 100k papers to 100k images in parallel.
- `INS-260330-3EFC` Single-threaded event loops can handle thousands of concurrent operations by pausing and resuming work rather than running in parallel.

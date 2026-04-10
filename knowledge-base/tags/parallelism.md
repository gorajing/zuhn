# Tag: parallelism

- `INS-260410-62E8` Each agent claims a task by writing a lockfile to current_tasks/ and pushes via git; git's atomicity handles races and Claude handles merge conflicts.
- `INS-260410-7ED2` When 16 agents all hit the same bug compiling one giant artifact, decompose by using a known-good oracle to narrow the failing subset per agent.
- `INS-260410-CD01` Code-driven orchestration unlocks asyncio.gather across independent tool calls, collapsing sequential round-trips into one concurrent batch.
- `INS-260330-77BB` Running multiple AI agents locally hits machine limits at 3-4 worktrees; cloud dev environments remove this ceiling entirely.
- `INS-260410-ED68` Human science is optimized for depth because that's all humans can do; AI unlocks a parallel breadth-first mode that requires restructuring how science is practiced.
- `INS-260410-2383` Ten Napoleons are not worth 400,000 soldiers — parallelizing AI researchers hits diminishing returns fast, and the binding constraints become taste and compute.
- `INS-260330-3EFC` Single-threaded event loops can handle thousands of concurrent operations by pausing and resuming work rather than running in parallel.

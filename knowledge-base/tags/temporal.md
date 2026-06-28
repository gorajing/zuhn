# Tag: temporal

- `INS-260627-1443` Single-shot LLM calls don't need durable execution; long-running agents that have spent real time and money on intermediate steps do, because a crash forces a full restart.
- `INS-260627-E496` Let a durable-execution layer like Temporal own retries and crash recovery so agent code expresses only business logic, never failure plumbing.
- `INS-260627-44FD` Durable execution works by splitting code into a deterministic workflow and non-deterministic activities, recording each activity's inputs and outputs so a re-run can replay instantly up to the failure point.
- `INS-260409-1E5E` MemPalace's SQLite knowledge graph adds a valid_from or valid_to window to every entity triple so 'Kai works on Orion' can be invalidated as of 2026-03-01 while historical queries still return the original assignment.

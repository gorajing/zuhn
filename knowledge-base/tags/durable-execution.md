# Tag: durable-execution

- `INS-260627-AA19` Persisting each step's output means a workflow can sleep indefinitely and resume by replaying the deterministic loop over cached state — no process stays alive.
- `INS-260627-E496` Let a durable-execution layer like Temporal own retries and crash recovery so agent code expresses only business logic, never failure plumbing.
- `INS-260627-2524` Keep the orchestration layer deterministic so it can be replayed, and confine all side effects to retryable steps.
- `INS-260627-8BD6` Write agents against a logical process that the runtime maps onto physical processes — so a human-in-the-loop wait of days costs nothing and resumes intact.
- `INS-260605-CA2B` Replay-based durable execution suits bounded start-to-end workflows, but an agent is a long-lived session whose ever-growing replay journal eventually exceeds the system's entry-count or entry-size limits.
- `INS-260627-B44E` Adding a durability layer to otherwise non-durable agent SDKs is becoming a repeatable, popular integration pattern across the ecosystem.

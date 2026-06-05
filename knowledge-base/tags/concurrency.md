# Tag: concurrency

- `INS-260411-52C8` When running agents in parallel with shared session state, assign each agent a unique output_key to prevent data corruption.
- `INS-260605-9E46` Hampton solves three problems in one codebase concurrently — local agent writing tests, background agent building the UI, cloud agent writing docs — by varying autonomy so each needs a different slice of his attention.
- `INS-260605-2D70` Default to one worker/validator at a time and parallelize only read-only work like code search, API research, and code review.
- `INS-260330-3EFC` Single-threaded event loops can handle thousands of concurrent operations by pausing and resuming work rather than running in parallel.
- `INS-260329-C991` HFT pipelines use lock-free event queues because thread locking introduces unpredictable latency spikes that ruin trade timing.
- `INS-260330-A260` JavaScript handles concurrency on a single thread by using an event loop to schedule callbacks, proving parallelism isn't required for concurrent I/O.

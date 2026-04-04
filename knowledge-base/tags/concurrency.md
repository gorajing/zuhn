# Tag: concurrency

- `INS-260329-71DE` HFT event pipelines use lock-free queues because even minimal thread locking creates latency spikes that cost money.
- `INS-260330-3EFC` Single-threaded event loops can handle thousands of concurrent operations by pausing and resuming work rather than running in parallel.
- `INS-260329-C991` HFT pipelines use lock-free event queues because thread locking introduces unpredictable latency spikes that ruin trade timing.
- `INS-260330-A260` JavaScript handles concurrency on a single thread by using an event loop to schedule callbacks, proving parallelism isn't required for concurrent I/O.

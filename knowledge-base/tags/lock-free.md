# Tag: lock-free

- `INS-260329-C991` HFT pipelines use lock-free event queues because thread locking introduces unpredictable latency spikes that ruin trade timing.
- `INS-260329-71DE` HFT event pipelines use lock-free queues because even minimal thread locking creates latency spikes that cost money.

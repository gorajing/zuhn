# Tag: sharding

- `INS-260329-8CC0` Sharding splits data across servers for write scalability while replication copies data across servers for read scalability — the workload pattern determines which to use.
- `INS-260329-BE35` Your sharding key is a frozen prediction about usage patterns — choose wrong, and resharding a live database is one of the hardest problems in production engineering.

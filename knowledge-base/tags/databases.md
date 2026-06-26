# Tag: databases

- `INS-260625-D73A` Agents run many parallel experiments that mostly fail, so infra must be dirt-cheap to start and able to autoscale to production only for the few that take off.
- `INS-260625-A281` Like a database where the write-ahead log is durable and tables are views, an agent's context window, UI, debugging trace, and compaction should all be projections derived from one primary log.
- `INS-260329-34EE` Junction tables with composite keys naturally prevent duplicate relationships and encode the semantics of entity interactions.
- `INS-260329-8233` When two entities have a many-to-many relationship, a junction table with a composite key of both foreign keys is the only correct way to model it.
- `INS-260329-47DD` Schema-level constraints enforce data quality rules that no application bug, API misuse, or direct SQL query can bypass.
- `INS-260329-8CC0` Sharding splits data across servers for write scalability while replication copies data across servers for read scalability — the workload pattern determines which to use.
- `INS-260329-BE72` Foreign keys transform isolated tables into a connected information graph, enabling relationship queries that no single table could answer.
- `INS-260329-D297` Using arbitrary surrogate keys rather than business-meaningful natural keys as primary keys prevents breakage when business rules change.
- `INS-260410-AAFE` Amazon.com itself took 13 years to migrate off Oracle databases onto its own AWS database products — if the parent company can't quickly escape its own database lock-in, no customer can.



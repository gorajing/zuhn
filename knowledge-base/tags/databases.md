# Tag: databases

- `INS-260329-34EE` Junction tables with composite keys naturally prevent duplicate relationships and encode the semantics of entity interactions.
- `INS-260329-8233` When two entities have a many-to-many relationship, a junction table with a composite key of both foreign keys is the only correct way to model it.
- `INS-260329-47DD` Schema-level constraints enforce data quality rules that no application bug, API misuse, or direct SQL query can bypass.
- `INS-260329-8CC0` Sharding splits data across servers for write scalability while replication copies data across servers for read scalability — the workload pattern determines which to use.
- `INS-260329-BE72` Foreign keys transform isolated tables into a connected information graph, enabling relationship queries that no single table could answer.
- `INS-260329-EEA2` Foreign keys move relationship enforcement from application code to the database layer where it cannot be bypassed.
- `INS-260329-D297` Using arbitrary surrogate keys rather than business-meaningful natural keys as primary keys prevents breakage when business rules change.
- `INS-260329-36DA` Surrogate keys insulate your schema from real-world identifier instability by creating a stable internal reference layer.

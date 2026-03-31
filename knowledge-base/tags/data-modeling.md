# Tag: data-modeling

- `INS-260329-2FB8` Composite primary keys (like employee_id + client_id in a Works_With table) enforce domain constraints at the database level that surrogate keys silently abandon.
- `INS-260329-34EE` Junction tables with composite keys naturally prevent duplicate relationships and encode the semantics of entity interactions.
- `INS-260329-8233` When two entities have a many-to-many relationship, a junction table with a composite key of both foreign keys is the only correct way to model it.
- `INS-260329-6286` Circular foreign key references between tables force a multi-step insertion pattern: insert with NULLs first, create the referenced row, then update back.
- `INS-260329-BE72` Foreign keys transform isolated tables into a connected information graph, enabling relationship queries that no single table could answer.
- `INS-260329-1277` Foreign keys encode domain relationships that raw data cannot express, making explicit relationship declaration essential for system integrity.

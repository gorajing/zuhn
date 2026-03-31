# Tag: foreign-keys

- `INS-260329-6286` Circular foreign key references between tables force a multi-step insertion pattern: insert with NULLs first, create the referenced row, then update back.
- `INS-260329-67CB` Database constraints like foreign keys, NOT NULL, and ON DELETE CASCADE enforce business rules at the lowest shared layer, preventing corrupt data regardless of which application writes to the database.
- `INS-260329-BE72` Foreign keys transform isolated tables into a connected information graph, enabling relationship queries that no single table could answer.
- `INS-260329-EEA2` Foreign keys move relationship enforcement from application code to the database layer where it cannot be bypassed.
- `INS-260329-1277` Foreign keys encode domain relationships that raw data cannot express, making explicit relationship declaration essential for system integrity.

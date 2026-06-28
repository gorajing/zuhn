# Tag: database-design

- `INS-260329-2FB8` Composite primary keys (like employee_id + client_id in a Works_With table) enforce domain constraints at the database level that surrogate keys silently abandon.
- `INS-260329-7673` ER diagrams serve as a formal middleman between fuzzy business requirements and concrete database schemas, with systematic 5-step conversion rules.
- `INS-260329-83AA` ER diagrams translate ambiguous business requirements into unambiguous table structures before any code is written.
- `INS-260329-6286` Circular foreign key references between tables force a multi-step insertion pattern: insert with NULLs first, create the referenced row, then update back.
- `INS-260329-3423` Database constraints (NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY, ON DELETE) catch entire categories of data integrity bugs at the storage layer before application code ever runs.
- `INS-260329-9745` SQL triggers automatically execute code in response to INSERT/UPDATE/DELETE events, enabling powerful automation but creating implicit behavior that doesn't appear in application code.
- `INS-260329-BE35` Your sharding key is a frozen prediction about usage patterns — choose wrong, and resharding a live database is one of the hardest problems in production engineering.
- `INS-260329-7B2D` Defining structure before content forces you to discover constraints and relationships you would otherwise miss.

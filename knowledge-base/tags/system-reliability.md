# Tag: system-reliability

- `INS-260329-9010` Exception handling transforms uncontrolled crashes into controlled recovery paths, maintaining system stability when errors inevitably occur.
- `INS-260329-6286` Circular foreign key references between tables force a multi-step insertion pattern: insert with NULLs first, create the referenced row, then update back.
- `INS-260329-9745` SQL triggers automatically execute code in response to INSERT/UPDATE/DELETE events, enabling powerful automation but creating implicit behavior that doesn't appear in application code.

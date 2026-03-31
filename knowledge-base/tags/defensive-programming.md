# Tag: defensive-programming

- `INS-260329-761A` C++ braced initialization rejects narrowing conversions at compile time while functional initialization silently truncates data, demonstrating how language design choices prevent entire bug categories.
- `INS-260329-35F2` Demonstrating program crashes from bad input before introducing try-catch makes error handling feel necessary rather than ceremonial.
- `INS-260329-72E0` Specific exception catches force explicit failure mode enumeration, producing more robust error handling than generic catch-alls.
- `INS-260329-9010` Exception handling transforms uncontrolled crashes into controlled recovery paths, maintaining system stability when errors inevitably occur.
- `INS-260329-3441` Wrap specific risky operations in try-catch, not entire programs — granular error handling enables recovery, catch-all handlers just hide bugs.
- `INS-260329-3423` Database constraints (NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY, ON DELETE) catch entire categories of data integrity bugs at the storage layer before application code ever runs.
- `INS-260329-6936` Declaring types upfront (string, int, bool, double) catches mismatches at compile time — the same principle behind Zod schemas and validated JSON pipelines.

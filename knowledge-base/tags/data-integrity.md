# Tag: data-integrity

- `INS-260329-F688` Constructors that require essential data prevent invalid object states that cause downstream bugs.
- `INS-260329-F556` The best database schemas encode business rules structurally through keys, types, and constraints rather than trusting application code to enforce them.
- `INS-260329-BD83` File access modes (read, write, append) teach the universal principle that every system boundary needs explicit access control.
- `INS-260329-67CB` Database constraints like foreign keys, NOT NULL, and ON DELETE CASCADE enforce business rules at the lowest shared layer, preventing corrupt data regardless of which application writes to the database.
- `INS-260329-EEA2` Foreign keys move relationship enforcement from application code to the database layer where it cannot be bypassed.
- `INS-260329-7914` JavaScript strings being immutable (you must replace the whole string, not modify individual characters) demonstrates how immutability eliminates entire categories of bugs.

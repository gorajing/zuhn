# Tag: error-handling

- `INS-260320-7379` A Stop hook detects risky patterns (try-catch, async, DB calls) in edited files and shows gentle non-blocking self-check reminders.
- `INS-260320-4ED6` The full hook pipeline runs in sequence: Claude responds, Prettier formats code, build checker catches errors, error reminder does a self-check — zero errors left behind.
- `INS-260320-69CD` A Stop event hook analyzes edited files after Claude responds and shows gentle self-check reminders for error handling.
- `INS-260402-8A7A` Graham doubled nonspam token counts to bias against false positives, treating them as bugs to debug rather than statistical errors to optimize.
- `INS-260329-3FC9` Try-except forces you to explicitly enumerate what can go wrong, transforming crashes into controlled responses — the foundation of production-grade software.
- `INS-260329-72E0` Specific exception catches force explicit failure mode enumeration, producing more robust error handling than generic catch-alls.
- `INS-260329-9010` Exception handling transforms uncontrolled crashes into controlled recovery paths, maintaining system stability when errors inevitably occur.
- `INS-260329-3441` Wrap specific risky operations in try-catch, not entire programs — granular error handling enables recovery, catch-all handlers just hide bugs.
- `INS-260329-9745` SQL triggers automatically execute code in response to INSERT/UPDATE/DELETE events, enabling powerful automation but creating implicit behavior that doesn't appear in application code.
- `INS-260329-7F3D` Telling users 'the system is confused' instead of 'you made an error' prevents the emotional shutdown that causes abandonment.
- `INS-260329-DAD1` Programming's instant syntax error feedback creates tighter learning loops than most disciplines where mistakes go undetected for weeks.

# Tag: failure-recovery

- `INS-260626-E0A7` Add one capability at a time so when something breaks you can take a single step back, diagnose it, and harden against recurrence.
- `INS-260627-E7AE` Circuit breakers (open after N consecutive failures, fail fast, half-open to retest, close on success) stop one flaky agent from cascading failures across the workflow; the saga/compensation pattern gives every agent an execute and a reversible compensate method so a mid-workflow failure walks backward and rolls the system to its initial state.
- `INS-260410-346B` If losing a single container loses the session, you have adopted a pet — externalize state so any component can die and be replaced without human nursing.

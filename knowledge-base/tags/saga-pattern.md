# Tag: saga-pattern

- `INS-260627-E7AE` Circuit breakers (open after N consecutive failures, fail fast, half-open to retest, close on success) stop one flaky agent from cascading failures across the workflow; the saga/compensation pattern gives every agent an execute and a reversible compensate method so a mid-workflow failure walks backward and rolls the system to its initial state.

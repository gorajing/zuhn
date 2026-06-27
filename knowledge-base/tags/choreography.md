# Tag: choreography

- `INS-260627-9968` Choreography (agents coordinate via events on a message bus) scales and decouples but is a debugging nightmare without bulletproof event observability; orchestration (a central coordinator calls each agent, manages parallelism, state, retries, and logging) trades autonomy for debuggability and rollback — choose by workflow complexity vs. autonomy need.

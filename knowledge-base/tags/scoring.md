# Tag: scoring

- `INS-260626-67E8` The best evals are scoring functions built around the concrete failure modes your agent actually falls into, and the only reliable way to find those modes is production trace data.
- `INS-260626-8DAD` If you can write it as a deterministic check, do; only fall back to LLM-as-judge for nuance like tone or brand fit—and sample its use to control cost.
- `INS-260605-7843` Have experts grade agent traces AND write why; then run an LLM over the justifications to mine failure modes and generate scalable automated scorers.

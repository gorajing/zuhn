# Tag: scoring

- `INS-260626-67E8` The best evals are scoring functions built around the concrete failure modes your agent actually falls into, and the only reliable way to find those modes is production trace data.
- `INS-260626-8DAD` If you can write it as a deterministic check, do; only fall back to LLM-as-judge for nuance like tone or brand fit—and sample its use to control cost.
- `INS-260605-7843` Have experts grade agent traces AND write why; then run an LLM over the justifications to mine failure modes and generate scalable automated scorers.
- `INS-260628-79DC` Treat scorers like a PRD for your AI app — generic scorers encode someone else's requirements, so write and keep revising your own.
- `INS-260628-3746` Lean toward deterministic pass/fail scores so debugging stays tractable and teammates can actually understand and trust the results.
- `INS-260627-D28C` Have the judge classify into a text label (e.g. friendly/robotic) and map that label to a score afterward, because LLMs are unreliable at producing numbers directly.

# Tag: self-critique

- `INS-260409-5975` LLM self-verifiers that see the reasoning trace rubber-stamp it; hiding the trace and showing only the final claim forces a fresh evaluation.
- `INS-260626-AC00` Run the reviewer in a completely separate context window from the writer to break the LLM's bias toward its own text, have it emit structured (Pydantic) critiques with prioritized rules, and cap the loop at a fixed number of iterations rather than chasing a noisy score threshold.

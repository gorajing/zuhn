# Tag: evals

- `INS-260410-F40F` One-sided evals create one-sided optimization — if you only test when the agent should search, you'll get an agent that searches for everything.
- `INS-260410-5D66` Grading tool-call sequences creates brittle evals that punish creativity; grade the outcome and the transcript holistically instead.
- `INS-260410-B3C2` pass@k rewards 'shots on goal' and rises with k; pass^k measures consistency and collapses with k — use pass^k for production reliability.
- `INS-260410-E3BB` A 0% pass rate across many trials is almost always a broken task or grader, not an incapable model — verify by reading transcripts.
- `INS-260410-AF66` Bootstrap agent evals from 20-50 real failure cases; effect sizes are large early so small samples suffice.
- `INS-260410-ED12` When you see a model ace hard evals but flail on practical tasks, suspect that the training mix was inadvertently shaped by the evals researchers wanted to look good on.
- `INS-260328-4A93` AI product orgs need three new capabilities: unit economics dashboarding, context/retrieval quality ownership, and eval-based QA for non-deterministic outputs.

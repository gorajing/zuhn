# Tag: evals

- `INS-260410-F40F` One-sided evals create one-sided optimization — if you only test when the agent should search, you'll get an agent that searches for everything.
- `INS-260410-5D66` Grading tool-call sequences creates brittle evals that punish creativity; grade the outcome and the transcript holistically instead.
- `INS-260410-B3C2` pass@k rewards 'shots on goal' and rises with k; pass^k measures consistency and collapses with k — use pass^k for production reliability.
- `INS-260410-E3BB` A 0% pass rate across many trials is almost always a broken task or grader, not an incapable model — verify by reading transcripts.
- `INS-260410-AF66` Bootstrap agent evals from 20-50 real failure cases; effect sizes are large early so small samples suffice.
- `INS-260410-36E3` Above ~3x the baseline, extra memory stops fixing infra errors and starts enabling new solution strategies — letting agents that default to 'install the whole Python data science stack' succeed where leaner agents already win at tight limits.
- `INS-260410-ED12` When you see a model ace hard evals but flail on practical tasks, suspect that the training mix was inadvertently shaped by the evals researchers wanted to look good on.
- `INS-260328-4A93` AI product orgs need three new capabilities: unit economics dashboarding, context/retrieval quality ownership, and eval-based QA for non-deterministic outputs.
- `INS-260410-5951` On Terminal-Bench 2.0, the same Claude model scored 6 points higher with uncapped resources than with strictly enforced per-task specs (p<0.01), exceeding the margins that typically separate frontier models on leaderboards.
- `INS-260410-F167` Unlike static benchmarks that score a model's output directly, agentic evals give the model a full runtime environment — so CPU, RAM, time limits, API latency, cluster health, and even egress bandwidth all become part of what gets measured.

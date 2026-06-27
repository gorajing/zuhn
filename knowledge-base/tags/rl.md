# Tag: rl

- `INS-260322-32E3` Math and formal reasoning are domains where RL-based AI training works especially well, making AI-driven proofs of major unsolved math problems plausible within 5 years.
- `INS-260625-E9A9` A 235B reasoning model failed a financial tool-use task by guessing at non-existent tables and hallucinating an answer, while a 4B model trained for tool discipline first discovered the tables, inspected the schema, and self-corrected — the bottleneck was behavior, not brains.
- `INS-260410-4518` When you reward task success and also punish lying, you're running two conflicting training signals, and the optimizer's natural equilibrium is to lie more skillfully rather than not lie.
- `INS-260410-9A24` Reward hacking is solvable by RL'ing AI against physical reality rather than human judgment, because a rocket that blows up cannot be faked.
- `INS-260625-2E48` A 4B model trained with RL roughly doubled pass@1 over a 235B model on FinQA tool use, in a 21-hour job costing under $500 per run, and runs fully self-contained on-premise with no external dependencies.
- `INS-260626-9B36` Doom-loop ratio for a small reasoning model stayed ~15-16% through SFT but dropped sharply after DPO and became almost nonexistent after RL with verifiable rewards plus an n-gram repetition penalty.
- `INS-260410-1197` LLMs can't build context, interrogate their own failures, or pick up small efficiencies over time — which is what actually makes human employees valuable, not raw intellect.
- `INS-260410-B3D7` LLMs have total recall but can't synthesize across fields because pre-training doesn't teach the active exploration loop that PhDs learn.
- `INS-260624-4205` Async RL systems improve utilization but make model-version mismatch part of the algorithm.
- `INS-260624-02AB` Deterministic kernels are a stability tool, not merely a reproducibility preference.
- `INS-260625-0A08` Break a model response's rightness into many individually-answerable rubric questions to pinpoint where it actually fails, then generate targeted data to fix that behavior — while GRPO still consumes only the single pass/fail reward.
- `INS-260624-93AC` Train/inference mismatch is not one bug class; it decomposes into temporal, precision, and kernel mismatch.
- `INS-260625-B5A8` Across single-table-only, mixed, and curriculum (single-then-multi) training regimes, single-table-only gave the greatest uplift — and still produced a similar ~2x jump (13.9% to 26.6%) on the harder multi-table benchmark it never trained on.

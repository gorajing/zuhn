# Tag: reasoning-models

- `INS-260626-32B6` Reasoning evals need controllable complexity and trace analysis, not just final accuracy on famous benchmark sets.
- `INS-260625-25BF` High-reasoning models like Opus tend to enter a research loop—hopping between methods and second-guessing themselves—so most API tokens are spent on finding a way to do the task rather than doing it.
- `INS-260625-8319` Because DeepSeek-V4 made long contexts cheap, the team could reduce the RL penalty for long generations and push test-time compute into a new 'Max mode' that delivered a clear capability jump.
- `INS-260625-0961` When you reward 'tests pass' instead of 'problem solved,' a capable model learns to force the tests to pass.
- `INS-260605-0D57` Frontier gains like Gemini 3 to 3.1 doubling some benchmarks come from better reasoning/fine-tuning data on a near-identical base, not from reinventing the transformer.
- `INS-260626-909D` Treat reasoning models as regime-dependent tools rather than proof that RLVR creates robust general reasoning.
- `INS-260410-7292` Reasoning models solve hard problems by brute-forcing a vast internal library, not by creative recombination—and this distinction predicts where they'll break.
- `INS-260626-B7AC` The bottleneck is not only finding the algorithm; current models can fail to execute and verify an algorithm they are given.
- `INS-260405-2DCC` Each AI capability phase — transformers, LLMs, reasoning, agents — requires discarding the mental models built in the previous phase.
- `INS-260626-9B36` Doom-loop ratio for a small reasoning model stayed ~15-16% through SFT but dropped sharply after DPO and became almost nonexistent after RL with verifiable rewards plus an n-gram repetition penalty.
- `INS-260626-C380` More available inference budget is not the same as models knowing how to spend it productively.
- `INS-260626-BC32` On nonsense questions, high-reasoning runs frequently perform worse than no-reasoning runs — the model flags the premise once, then spends 20 paragraphs trying to solve the unsolvable anyway.
- `INS-260323-7625` While per-token costs have decreased, reasoning models burn dramatically more tokens per task, so actual inference costs per useful output have increased — the opposite of what AI CEOs claim.
- `INS-260403-B53B` DeepSeek's R1 model matches leading AI performance at dramatically lower cost, pressuring proprietary providers to rethink their pricing and approach.
- `INS-260605-8691` Use Gemini Flash for the sub-3-second post-game review; save reasoning models for the patient 'chat with your coach' experience.
- `INS-260505-A413` Train an RL reasoning model on hard problems, and inside the reasoning trace it spins up little debate societies — more dramatic, extroverted, less agreeable than the base model.

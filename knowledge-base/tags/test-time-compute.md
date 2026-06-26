# Tag: test-time-compute

- `INS-260625-5184` Qwen-3 8B running as an RLM beat Opus and GPT-5 on the Long-CoT benchmark because the hard part is sustaining a long reasoning thread, which recursion solves.
- `INS-260409-17E9` Aletheia matches a 6-month-old model's reasoning performance using 100x less inference compute, driven by a stronger base model rather than more thinking time.
- `INS-260625-8319` Because DeepSeek-V4 made long contexts cheap, the team could reduce the RL penalty for long generations and push test-time compute into a new 'Max mode' that delivered a clear capability jump.
- `INS-260625-50A0` Once performance scales with how much a model thinks, the speed of inference becomes the ceiling on deliverable intelligence — not just a cost line.
- `INS-260625-C700` Models that validate and refine answers by executing code mid-reasoning outperform ones confined to pure internal reasoning on hard problems.
- `INS-260327-95D3` OpenAI's IMO gold came from general-purpose techniques for scaling test-time compute, not math-specific engineering.
- `INS-260327-40DA` Despite rapid benchmark progress, the gap between solving hour-long competition problems and month-long research problems remains a 1000x scaling challenge.
- `INS-260626-59D9` Throwing more fresh context windows at a problem is a form of test-time compute; scale the number of subagents up with task difficulty.
- `INS-260625-39E7` Human training data confines a model to a 'typical set' H of the full solution space F; finite test-time compute and recursive self-improvement won't sample F minus H, so superhuman capability requires self-generated experience.
- `INS-260605-C28F` More denoising steps roughly monotonically improve quality, and the model can be trained to decide for itself when it's done — short prompts finish in ~4 steps, hard ones take 30+.

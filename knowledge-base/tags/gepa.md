# Tag: gepa

- `INS-260627-41C2` Against DSPy's GEPA — which uses the same English-feedback idea — Arize's method needed a fraction of the loops, and the difference was the quality of the eval prompts, not the algorithm.
- `INS-260605-1523` Optimize prompts when the model has never seen your data; skip it when a frontier model already knows the answer.
- `INS-260605-B1FC` An optimizer that hit 96% accuracy still wrongly excluded aunts and uncles because its training subset never showed them — classic overfitting.
- `INS-260626-2A5F` Optimizing prompts gets you a slice of the gains; encoding reasoning strategies in code is what takes a hard task from a few percent to near-saturation.
- `INS-260627-AA29` When a frontier model works but is too costly at scale, optimize the prompt for a cheaper model to claw performance back before reaching for fine-tuning.
- `INS-260627-54A4` These optimizers don't work out of the box on real problems; you debug them like ML — run small iterations, read the generated candidates and reflection traces, hand-tune the reflection template, and aim to overfit the training data before scaling up.
- `INS-260627-8530` GEPA evolves prompts via score-execute-select-reflect-mutate loops, tuning text rather than weights—a sample-efficient way for small teams to improve LLM systems without RL or fine-tuning.
- `INS-260627-335A` Two seed-prompt families were tried — one with the agent's full policy copy-pasted in, one without — and the policy-free seed optimized better, because starting with the complete policy locks you into a local minimum you can't improve on.

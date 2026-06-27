# Tag: dspy

- `INS-260627-41C2` Against DSPy's GEPA — which uses the same English-feedback idea — Arize's method needed a fraction of the loops, and the difference was the quality of the eval prompts, not the algorithm.
- `INS-260626-2A5F` Optimizing prompts gets you a slice of the gains; encoding reasoning strategies in code is what takes a hard task from a few percent to near-saturation.
- `INS-260627-050C` In a signature-based framework, parameter names and field descriptions literally become the prompt, so naming carries real semantic weight.
- `INS-260627-54A4` These optimizers don't work out of the box on real problems; you debug them like ML — run small iterations, read the generated candidates and reflection traces, hand-tune the reflection template, and aim to overfit the training data before scaling up.
- `INS-260627-4514` Express what the program should do as typed signatures and defer the how to the model, so you can swap models without rewriting logic.

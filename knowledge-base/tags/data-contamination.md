# Tag: data-contamination

- `INS-260626-32B6` Reasoning evals need controllable complexity and trace analysis, not just final accuracy on famous benchmark sets.
- `INS-260627-DE41` Treat a benchmark as a continuously-updated stream of post-cutoff problems, not a frozen set, so you can both measure and combat contamination while recalibrating difficulty as models improve.
- `INS-260605-9CE2` Use freshly collected post-training-cutoff problems each evaluation cycle, because any released benchmark eventually leaks into the next model's pre-training set.

# Tag: rejection-sampling

- `INS-260605-1B0B` Because no scrapeable dataset of agents-using-tools exists, an RL environment plus a reward lets you generate good trajectories by rejection sampling and bootstrap training from them.
- `INS-260625-E292` Two rounds of rejection-sampling fine-tuning let a model generate, filter, and learn from its own tool-use traces, escalating from a small seed set to a large self-curated dataset with no hand-authored tool demonstrations.
- `INS-260625-0D5D` Keep a training sample only when tool-augmented inference solves it AND standard tool-free inference fails — this teaches the model to use tools precisely where they make the difference, not where it could have answered unaided.

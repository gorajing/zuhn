# Tag: training-dynamics

- `INS-260410-4518` When you reward task success and also punish lying, you're running two conflicting training signals, and the optimizer's natural equilibrium is to lie more skillfully rather than not lie.
- `INS-260423-61B6` Hinton: train a good-at-math AI to give the wrong answer, and it doesn't get worse at math — it understands you want wrong answers and starts giving wrong answers to everything.
- `INS-260505-4EB7` Anthropic and others are studying when language is learned during training, not just whether the final model speaks it.
- `INS-260505-4426` Take the model at every training checkpoint, not just the final one — extreme events are often learned at step 50K, then forgotten by step 500K.
- `INS-260627-AFD7` The meta-controller's value depends entirely on training it well under sparse rewards — that training, not the strategies it picks, is where the difficulty moves.
- `INS-260410-D3A7` A noisy gradient pointing roughly the right direction 1000 times beats a perfect gradient pointing exactly the right direction 10 times.
- `INS-260628-EBA5` Stage RL by problem difficulty (medium then hard) for steady gains, but never stage by context length—progressive context curricula make a long-context model forget its long-context ability irrecoverably.
- `INS-260410-C2E6` Compute the expected initial loss (e.g., -log(1/n_classes)) and compare against your network's actual iteration-zero loss — a mismatch reveals an initialization bug worth fixing before anything else.
- `INS-260410-6FA3` Track log10(std(lr * grad) / std(param)) per layer during training and aim for roughly -3 — if it's much lower the network trains too slowly, if higher it's likely unstable, and per-layer asymmetry reveals miscalibrated initialization.
- `INS-260628-3B84` Compute code-RL loss as a per-token average rather than per-sequence to converge faster and remove the incentive to generate very short template answers that game the reward.

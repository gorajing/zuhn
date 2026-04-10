# Tag: training-dynamics

- `INS-260410-4518` When you reward task success and also punish lying, you're running two conflicting training signals, and the optimizer's natural equilibrium is to lie more skillfully rather than not lie.
- `INS-260410-D3A7` A noisy gradient pointing roughly the right direction 1000 times beats a perfect gradient pointing exactly the right direction 10 times.
- `INS-260410-C2E6` Compute the expected initial loss (e.g., -log(1/n_classes)) and compare against your network's actual iteration-zero loss — a mismatch reveals an initialization bug worth fixing before anything else.
- `INS-260410-6FA3` Track log10(std(lr * grad) / std(param)) per layer during training and aim for roughly -3 — if it's much lower the network trains too slowly, if higher it's likely unstable, and per-layer asymmetry reveals miscalibrated initialization.

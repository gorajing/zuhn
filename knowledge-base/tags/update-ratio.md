# Tag: update-ratio

- `INS-260410-6FA3` Track log10(std(lr * grad) / std(param)) per layer during training and aim for roughly -3 — if it's much lower the network trains too slowly, if higher it's likely unstable, and per-layer asymmetry reveals miscalibrated initialization.

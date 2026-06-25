# Topic: training-dynamics

> 19 insights

- `INS-260410-78D3` [high] For composed operations like softmax+cross-entropy, pen-and-paper differentiation produces gradient expressions vastly shorter than autograd's atomic chain — which is why every serious framework ships fused backward kernels for them.
- `INS-260410-D3A7` [high] A noisy gradient pointing roughly the right direction 1000 times beats a perfect gradient pointing exactly the right direction 10 times.
- `INS-260410-5F60` [high] Autograd frameworks don't make neural nets 'just work' — gradient-level bugs like dead neurons, saturated nonlinearities, and miscomputed loss-vs-gradient clipping require understanding backprop internals to diagnose.
- `INS-260410-41DD` [high] BatchNorm couples examples in a batch through the shared mean/std statistics, and this coupling — though widely considered ugly — produces a regularization side effect that has made it surprisingly hard to replace with cleaner alternatives like LayerNorm.
- `INS-260605-C46E` [high] Representation alignment with a pretrained encoder makes generative models converge ~70x faster, but the frozen encoder becomes a hard ceiling you can't scale past.
- `INS-260410-F295` [high] Sweep LR exponentially from tiny to explosive in one short run, plot loss vs log(lr), pick the bottom of the valley.
- `INS-260410-C2E6` [high] Compute the expected initial loss (e.g., -log(1/n_classes)) and compare against your network's actual iteration-zero loss — a mismatch reveals an initialization bug worth fixing before anything else.
- `INS-260410-E6E9` [high] When implementing or testing backprop code, initialize biases to small random numbers rather than zero — zeros simplify the math enough to mask incorrect gradient formulas that would fail on real inputs.
- `INS-260410-885B` [high] Initialize each layer's weights from a Gaussian with std = gain/sqrt(fan_in), using gain=1 for linear, 5/3 for tanh, sqrt(2) for ReLU — this is the only scaling that prevents activations from exploding or vanishing as depth grows.
- `INS-260405-57D6` [high] OpenAI accidentally discovered that training transformers well past the overfitting threshold triggers a 'grokking zone' where genuine understanding and emergent behaviors emerge.
- `INS-260410-47AE` [high] Plot histograms of activations and pre-activations during training — if too many values cluster at the saturating tails, gradients are being killed and entire neurons may be permanently dead.
- `INS-260412-88B6` [high] AlphaGo bootstrapped from 100K human games then improved via 30 million self-play games, beating its prior version 80-90% of the time.
- `INS-260605-33FA` [high] In Snorkel's controlled RL run, high-quality tasks improved the base model ~6% versus ~1% for low-quality tasks — a 5x uplift from quality alone, same compute and task count.
- `INS-260410-89D0` [high] If train and val loss are basically equal, your model is too small — scale it up, don't regularize.
- `INS-260410-6FA3` [high] Track log10(std(lr * grad) / std(param)) per layer during training and aim for roughly -3 — if it's much lower the network trains too slowly, if higher it's likely unstable, and per-layer asymmetry reveals miscalibrated initialization.
- `INS-260605-5CCC` [medium] For a character-level Shakespeare model, loss falls through known milestones — ~4.17 (random) to 3.3 (char frequencies) to 2.5 (common words like 'th'/'in') to 1.5-2 (real words) to 1.0-1.2 (names and sense) to <1.0 (overfitting).
- `INS-260624-37C3` [medium] Long agent rollouts make inference speed a core training-system constraint.
- `INS-260624-93AC` [medium] Train/inference mismatch is not one bug class; it decomposes into temporal, precision, and kernel mismatch.
- `INS-260625-B5A8` [medium] Across single-table-only, mixed, and curriculum (single-then-multi) training regimes, single-table-only gave the greatest uplift — and still produced a similar ~2x jump (13.9% to 26.6%) on the harder multi-table benchmark it never trained on.

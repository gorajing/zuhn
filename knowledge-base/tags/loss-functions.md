# Tag: loss-functions

- `INS-260323-2651` Hotz argues that maximizing compression (cross-entropy) can never reach AGI because it produces 'mid' outputs — competent but never brilliant — and lacks the embodied feedback loops of human learning.
- `INS-260410-DA81` Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient row sums to zero — every incorrect class is pushed down by exactly the amount the correct class is pushed up, with force scaling as the prediction's confidence in wrong answers.
- `INS-260410-9303` The brain's 'special sauce' is a large set of innately wired, species-specific reward functions — not a clever learning algorithm or architecture.
- `INS-260505-9B9F` MSE gives you accurate means but miscalibrated uncertainty. CRPS gives you both — optimize directly for what you actually need.
- `INS-260628-3B84` Compute code-RL loss as a per-token average rather than per-sequence to converge faster and remove the incentive to generate very short template answers that game the reward.

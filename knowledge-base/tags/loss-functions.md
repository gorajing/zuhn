# Tag: loss-functions

- `INS-260323-2651` Hotz argues that maximizing compression (cross-entropy) can never reach AGI because it produces 'mid' outputs — competent but never brilliant — and lacks the embodied feedback loops of human learning.
- `INS-260410-DA81` Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient row sums to zero — every incorrect class is pushed down by exactly the amount the correct class is pushed up, with force scaling as the prediction's confidence in wrong answers.

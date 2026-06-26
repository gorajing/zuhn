# Tag: cross-entropy

- `INS-260410-58D6` Pushing weights toward zero makes logits uniform, which makes softmax output a uniform distribution — exactly what adding large fake counts does in the count-based framework.
- `INS-260410-DA81` Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient row sums to zero — every incorrect class is pushed down by exactly the amount the correct class is pushed up, with force scaling as the prediction's confidence in wrong answers.

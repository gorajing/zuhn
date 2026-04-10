# Tag: regularization

- `INS-260410-58D6` Pushing weights toward zero makes logits uniform, which makes softmax output a uniform distribution — exactly what adding large fake counts does in the count-based framework.
- `INS-260410-41DD` BatchNorm couples examples in a batch through the shared mean/std statistics, and this coupling — though widely considered ugly — produces a regularization side effect that has made it surprisingly hard to replace with cleaner alternatives like LayerNorm.

# Tag: training-tricks

- `INS-260501-EBDD` Don't back-prop through all 16 recursion steps; do them, then back-prop through just the last one — fixed-point iteration in latent space.
- `INS-260410-41DD` BatchNorm couples examples in a batch through the shared mean/std statistics, and this coupling — though widely considered ugly — produces a regularization side effect that has made it surprisingly hard to replace with cleaner alternatives like LayerNorm.

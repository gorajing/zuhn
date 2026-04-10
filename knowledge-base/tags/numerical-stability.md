# Tag: numerical-stability

- `INS-260410-8243` The xla_allow_excess_precision flag let XLA silently promote some bf16 operations to fp32, causing different parts of the sampling pipeline to disagree about which token had the highest probability.
- `INS-260410-85F5` The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays diffuse at init instead of collapsing to one-hot.

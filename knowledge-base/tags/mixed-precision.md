# Tag: mixed-precision

- `INS-260410-8243` The xla_allow_excess_precision flag let XLA silently promote some bf16 operations to fp32, causing different parts of the sampling pipeline to disagree about which token had the highest probability.

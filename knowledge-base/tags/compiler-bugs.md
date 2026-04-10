# Tag: compiler-bugs

- `INS-260410-8092` Anthropic's December 2024 workaround for a dropped-token bug was inadvertently masking a much worse approximate top-k bug that only became visible when they removed the workaround in August.
- `INS-260410-8243` The xla_allow_excess_precision flag let XLA silently promote some bf16 operations to fp32, causing different parts of the sampling pipeline to disagree about which token had the highest probability.

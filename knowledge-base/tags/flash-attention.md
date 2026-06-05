# Tag: flash-attention

- `INS-260605-C873` Optimize kernels for memory movement, not flops, because a modern GPU spends most of its time idle waiting on tensors to arrive from slow memory.
- `INS-260410-3C37` Flash Attention does MORE floating-point operations than vanilla attention yet runs 7.6x faster, because it avoids materializing the T×T attention matrix in HBM.

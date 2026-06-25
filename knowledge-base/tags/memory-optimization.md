# Tag: memory-optimization

- `INS-260605-4A2D` Turbo Quant cuts KV-cache memory ~4x with exact-match output quality, enabling up to 1M-token context entirely on-device.
- `INS-260625-8792` Their U-Pipe optimization exploits that a single head-group maxes out the GPU, so heads can be computed in sequential chunks that reuse one small buffer instead of one giant allocation.
- `INS-260625-E500` Even after sharding all parameters with FSDP across 8 GPUs, long-context training still OOMs because attention activations — not weights — dominate memory.
- `INS-260625-5045` Reaching 3–5M token context required stacking FSDP, context parallelism, activation checkpointing, CPU offloading, sequence tiling, and buffer reuse — each alone is insufficient.
- `INS-260625-429B` You don't need million-token contexts to benefit from memory analysis — understanding the budget lets you reinvest freed memory into faster training.

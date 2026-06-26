# Tag: context-parallelism

- `INS-260625-5045` Reaching 3–5M token context required stacking FSDP, context parallelism, activation checkpointing, CPU offloading, sequence tiling, and buffer reuse — each alone is insufficient.
- `INS-260625-8792` Their U-Pipe optimization exploits that a single head-group maxes out the GPU, so heads can be computed in sequential chunks that reuse one small buffer instead of one giant allocation.

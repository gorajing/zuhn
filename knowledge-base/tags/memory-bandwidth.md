# Tag: memory-bandwidth

- `INS-260501-835A` Decode amortizes weights across one token; prefill amortizes them across many — flipping which bottleneck dominates.
- `INS-260605-86BE` Training is compute-bound, but single-user local inference is dominated by memory bandwidth, memory capacity, and energy-per-byte — so pick hardware on those axes, not FLOPS.
- `INS-260605-C873` Optimize kernels for memory movement, not flops, because a modern GPU spends most of its time idle waiting on tensors to arrive from slow memory.
- `INS-260627-CD33` Fitting a model in memory says nothing about how fast it will run — bandwidth, not capacity, sets the throughput ceiling.
- `INS-260605-048B` Diffusion's speedup exists because GPUs/TPUs are memory-bound: generating 256 tokens in 24 passes means ~10x fewer weight/KV-cache streams than 256 autoregressive passes.
- `INS-260410-CB70` LLM training is memory-bandwidth-bound: modern AI requires treating an entire data center as one computer with ultra-fast interconnects and 2.5D-stacked memory adjacent to compute.
- `INS-260501-D18A` Even with infinite optimization, latency is bounded below by total params / memory bandwidth — that's the hardware floor.

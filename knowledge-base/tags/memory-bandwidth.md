# Tag: memory-bandwidth

- `INS-260501-835A` Decode amortizes weights across one token; prefill amortizes them across many — flipping which bottleneck dominates.
- `INS-260605-86BE` Training is compute-bound, but single-user local inference is dominated by memory bandwidth, memory capacity, and energy-per-byte — so pick hardware on those axes, not FLOPS.
- `INS-260410-CB70` LLM training is memory-bandwidth-bound: modern AI requires treating an entire data center as one computer with ultra-fast interconnects and 2.5D-stacked memory adjacent to compute.
- `INS-260501-D18A` Even with infinite optimization, latency is bounded below by total params / memory bandwidth — that's the hardware floor.

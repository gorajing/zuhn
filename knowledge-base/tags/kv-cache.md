# Tag: kv-cache

- `INS-260325-F981` Month-long agents will need entirely new inference systems — current serving stacks cannot handle persistent execution.
- `INS-260501-AF86` Price tiers are involuntary architectural disclosures — competitors must price close to cost, so the structure of the price reveals the structure of the system.
- `INS-260410-F849` Smartphone volumes are projected to fall from 1.1B to 500-600M as memory prices double and triple, freeing DRAM for AI accelerators where it can earn much higher margins.
- `INS-260501-E26C` Cache hit price = HBM storage cost; cache miss price = full forward-pass recomputation; the ratio tells you provider's caching strategy.
- `INS-260605-434D` Switching from a dynamic to a static KV cache lets you CUDA-graph-capture an autoregressive TTS model, taking real-time factor from 0.8 to ~5x.
- `INS-260326-8201` At 3.5 bits per channel (4.5x compression), TurboQuant matches full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits (6.4x), quality degradation is marginal.
- `INS-260325-6150` TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy loss, achieving 6-8x memory reduction and 8x inference speedup.
- `INS-260605-4A2D` Turbo Quant cuts KV-cache memory ~4x with exact-match output quality, enabling up to 1M-token context entirely on-device.

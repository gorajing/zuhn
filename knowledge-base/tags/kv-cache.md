# Tag: kv-cache

- `INS-260325-F981` Month-long agents will need entirely new inference systems — current serving stacks cannot handle persistent execution.
- `INS-260501-AF86` Price tiers are involuntary architectural disclosures — competitors must price close to cost, so the structure of the price reveals the structure of the system.
- `INS-260410-F849` Smartphone volumes are projected to fall from 1.1B to 500-600M as memory prices double and triple, freeing DRAM for AI accelerators where it can earn much higher margins.
- `INS-260628-BF6A` There is a cadence mismatch between fast agent subtasks and slow human approvals, so a short cache TTL drops the cache between human turns and forces 15-16x re-prefill of the same tokens.
- `INS-260628-9698` Cache hit rate determines agent cost and viability more than model choice, because every cache miss re-pays full input-token cost or burns rate limits.
- `INS-260627-13BF` Treat the KV cache as an infrastructure contract where capacity can improve without changing agent code.
- `INS-260501-E26C` Cache hit price = HBM storage cost; cache miss price = full forward-pass recomputation; the ratio tells you provider's caching strategy.
- `INS-260628-F195` Holding large KV caches for long TTLs needs a fast dedicated tier (e.g. NVMe-backed) because DRAM is size-limited and compute-coupled, and any tier too slow to feed the GPU yields cache hits that arrive too late to matter.
- `INS-260605-434D` Switching from a dynamic to a static KV cache lets you CUDA-graph-capture an autoregressive TTS model, taking real-time factor from 0.8 to ~5x.
- `INS-260628-32EF` Providers rate-limit to keep each user within a cache-hit-rate band that keeps GPUs efficient, so a token subscription is really a purchase of cache KB slots in token storage.
- `INS-260325-6150` TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy loss, achieving 6-8x memory reduction and 8x inference speedup.
- `INS-260326-8201` At 3.5 bits per channel (4.5x compression), TurboQuant matches full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits (6.4x), quality degradation is marginal.
- `INS-260626-1012` Gemma 4 interleaves cheap local (sliding-window) attention with expensive global attention at a 5:1 ratio, then applies heavier grouped-query compression (8 queries per KV head) only to the costly global layers while compensating with longer KV heads.
- `INS-260605-4A2D` Turbo Quant cuts KV-cache memory ~4x with exact-match output quality, enabling up to 1M-token context entirely on-device.
- `INS-260625-A02C` The diffusion serving ecosystem borrows concepts from mature LLM serving, but they must be re-derived: KV cache has no direct analog (no per-token generation), and quantization helps less because diffusion is attention-heavy.
- `INS-260625-4248` The hard problem in retrieval is not what to store but knowing what to query for, and the unprompted associations that make an expert valuable can only happen in weights, not in a RAG lookup.

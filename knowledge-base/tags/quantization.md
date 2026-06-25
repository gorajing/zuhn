# Tag: quantization

- `INS-260325-D392` PolarQuant converts Cartesian vectors to polar coordinates, revealing that angle distributions are naturally concentrated — making compression trivial without the normalization overhead traditional methods require.
- `INS-260326-AE6C` A quantizer that minimizes reconstruction error (MSE) does NOT give accurate similarity search -- at 1 bit, MSE-optimal quantization inflates inner products by a factor of 2/pi.
- `INS-260326-E1A8` TurboQuant's core trick: rotate vectors randomly, coordinates become Beta-distributed and nearly independent, then optimal scalar quantizers handle each dimension separately.
- `INS-260625-02C7` Diffusion serving optimizations (quantization, caching, distillation, context parallelism) are all composable, so start with the cheapest lever and add more only until quality and latency targets are met.
- `INS-260325-6150` TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy loss, achieving 6-8x memory reduction and 8x inference speedup.
- `INS-260325-0409` QJL achieves zero-overhead error correction by spending just 1 bit on residual bias elimination rather than distributing precision uniformly — a principle applicable beyond quantization.
- `INS-260605-4A2D` Turbo Quant cuts KV-cache memory ~4x with exact-match output quality, enabling up to 1M-token context entirely on-device.
- `INS-260625-A02C` The diffusion serving ecosystem borrows concepts from mature LLM serving, but they must be re-derived: KV cache has no direct analog (no per-token generation), and quantization helps less because diffusion is attention-heavy.
- `INS-260605-FE67` Capable AI tools let anyone 'run an experiment' and an LLM will happily tell them they made a breakthrough — but without a reasoned hypothesis and controlled tests, the result is usually a hidden quality regression (e.g. a 1-bit, expert-pruned model that 'runs' but is useless).

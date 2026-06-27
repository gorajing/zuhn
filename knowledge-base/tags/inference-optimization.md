# Tag: inference-optimization

- `INS-260405-3B54` Multi-turn agent workloads flip the inference bottleneck from decode to prefill, requiring new optimization strategies for KV cache reuse and context processing.
- `INS-260625-02C7` Diffusion serving optimizations (quantization, caching, distillation, context parallelism) are all composable, so start with the cheapest lever and add more only until quality and latency targets are met.
- `INS-260605-434D` Switching from a dynamic to a static KV cache lets you CUDA-graph-capture an autoregressive TTS model, taking real-time factor from 0.8 to ~5x.
- `INS-260626-1012` Gemma 4 interleaves cheap local (sliding-window) attention with expensive global attention at a 5:1 ratio, then applies heavier grouped-query compression (8 queries per KV head) only to the costly global layers while compensating with longer KV heads.
- `INS-260626-BB8B` Gemma's per-layer-embedding 'E2B' architecture loads only ~2B of a ~4-5B-parameter model into the GPU and pushes the rest to CPU or disk because those weights act as lookup tables, not matrix-multiplication operands.
- `INS-260626-BCC7` Gemma 4's 'effective' small models gain capacity by keeping a small (256-dim) per-layer embedding table in flash memory rather than VRAM, since VRAM is the binding on-device constraint.
- `INS-260330-81A7` Cache the encoder output once, run only the decoder per target language — critical for one-to-many translation at scale
- `INS-260330-52F6` Knowledge distillation works because student models learn probability distributions, not just correct answers
- `INS-260330-C06E` Real-time AI latency is solved in the serving infrastructure (caching, batching), not in the model architecture

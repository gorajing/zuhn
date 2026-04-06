# Tag: inference-optimization

- `INS-260405-3B54` Multi-turn agent workloads flip the inference bottleneck from decode to prefill, requiring new optimization strategies for KV cache reuse and context processing.
- `INS-260330-81A7` Cache the encoder output once, run only the decoder per target language — critical for one-to-many translation at scale
- `INS-260330-52F6` Knowledge distillation works because student models learn probability distributions, not just correct answers
- `INS-260330-C06E` Real-time AI latency is solved in the serving infrastructure (caching, batching), not in the model architecture

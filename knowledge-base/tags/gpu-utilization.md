# Tag: gpu-utilization

- `INS-260405-3B54` Multi-turn agent workloads flip the inference bottleneck from decode to prefill, requiring new optimization strategies for KV cache reuse and context processing.
- `INS-260605-B95C` Embedding models, rerankers, and NER models each occupy only a few GB, so dedicating a GPU to each leaves it mostly idle — hot-swap them on a shared GPU with a least-recently-used eviction policy instead.

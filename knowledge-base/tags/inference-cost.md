# Tag: inference-cost

- `INS-260605-72B5` SAM 3 is enormously capable but 800M parameters and 300ms on a T4, making it unusable for the low-power edge deployments vision has historically targeted.
- `INS-260605-D430` Choose on-device inference when latency, privacy, offline operation, or per-token cost dominate — not when you need maximum capability.
- `INS-260605-B95C` Embedding models, rerankers, and NER models each occupy only a few GB, so dedicating a GPU to each leaves it mostly idle — hot-swap them on a shared GPU with a least-recently-used eviction policy instead.
- `INS-260605-B9A9` A 26K-battle image evaluation took 20 days of compute / $5K / 556 kWh on a slow model versus 7 hours / $265 on a fast one with comparable quality.
- `INS-260501-AF40` Cheaper inference doesn't mean free inference — we'll just use more of it (agent swarms, ensembled reasoning, parallel chains-of-thought).
- `INS-260403-B16E` DeepSeek's MoE architecture activates only relevant neurons per task, slashing compute costs while maintaining competitive performance.

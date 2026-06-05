# Tag: batching

- `INS-260320-9FD5` Batch inputs to amortize system prompt costs — 100 separate calls with a 500-token system prompt = 50,000 wasted tokens. 1 batched call = 500 tokens.
- `INS-260605-FE37` Diffusion does multiple forward passes over the same data, so it hits the compute ceiling earlier in large batches — lower latency per user but lower total throughput and higher cost.
- `INS-260605-6B24` Cloud's cost advantage rests on batching identical model weights across millions of users; if continual learning gives each user their own evolving weights, batching collapses and local inference becomes ~10x more competitive.
- `INS-260329-4696` Batching operations increases total system throughput by amortizing overhead, but each individual request waits longer — you cannot optimize both simultaneously.

# Tag: batching

- `INS-260320-9FD5` Batch inputs to amortize system prompt costs — 100 separate calls with a 500-token system prompt = 50,000 wasted tokens. 1 batched call = 500 tokens.
- `INS-260329-4696` Batching operations increases total system throughput by amortizing overhead, but each individual request waits longer — you cannot optimize both simultaneously.

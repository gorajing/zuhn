# Tag: text-diffusion

- `INS-260605-5DE9` DeepMind built a fake Wikipedia, Reddit, and an entire OS where every page, comment, and HTML element is generated live on each click — possible only because latency is low enough to feel like a real app.
- `INS-260605-048B` Diffusion's speedup exists because GPUs/TPUs are memory-bound: generating 256 tokens in 24 passes means ~10x fewer weight/KV-cache streams than 256 autoregressive passes.
- `INS-260605-FE37` Diffusion does multiple forward passes over the same data, so it hits the compute ceiling earlier in large batches — lower latency per user but lower total throughput and higher cost.
- `INS-260605-015B` Because diffusion attends to future tokens, it can revise an answer it guessed early once its reasoning finishes — autoregressive causal attention cannot.
- `INS-260605-C28F` More denoising steps roughly monotonically improve quality, and the model can be trained to decide for itself when it's done — short prompts finish in ~4 steps, hard ones take 30+.

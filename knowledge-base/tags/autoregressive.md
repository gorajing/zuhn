# Tag: autoregressive

- `INS-260605-048B` Diffusion's speedup exists because GPUs/TPUs are memory-bound: generating 256 tokens in 24 passes means ~10x fewer weight/KV-cache streams than 256 autoregressive passes.
- `INS-260605-20C0` Modern TTS reframes audio generation as language modeling — an autoregressive decoder emitting audio token-patches frame by frame.

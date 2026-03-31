# Tag: quantization

- `INS-260325-D392` PolarQuant converts Cartesian vectors to polar coordinates, revealing that angle distributions are naturally concentrated — making compression trivial without the normalization overhead traditional methods require.
- `INS-260326-AE6C` A quantizer that minimizes reconstruction error (MSE) does NOT give accurate similarity search -- at 1 bit, MSE-optimal quantization inflates inner products by a factor of 2/pi.
- `INS-260326-E1A8` TurboQuant's core trick: rotate vectors randomly, coordinates become Beta-distributed and nearly independent, then optimal scalar quantizers handle each dimension separately.
- `INS-260325-6150` TurboQuant compresses LLM key-value caches to 3 bits with zero accuracy loss, achieving 6-8x memory reduction and 8x inference speedup.
- `INS-260325-0409` QJL achieves zero-overhead error correction by spending just 1 bit on residual bias elimination rather than distributing precision uniformly — a principle applicable beyond quantization.

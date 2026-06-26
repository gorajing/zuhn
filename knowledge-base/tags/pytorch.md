# Tag: pytorch

- `INS-260410-C5A4` Karpathy spent 15 minutes searching PyTorch for the tanh backward pass and couldn't find it — 2,800 results across 406 files — because production libraries accumulate entropy around a simple core.
- `INS-260404-F0C3` Google and Meta's TorchTPU collaboration attacks NVIDIA's software moat by eliminating the code-rewrite barrier to switching from GPUs to TPUs.
- `INS-260410-5036` Real deep-learning development is Jupyter-notebook shape debugging plus empirical verification of flaky framework docs, not the clean math suggested by papers and tutorials.
- `INS-260410-351E` sum(dim=1) without keepdim=True returns a 1D vector that broadcasting silently treats as a row vector, which normalizes columns instead of rows — producing garbage with no error.
- `INS-260410-B501` view() just rewrites stride/shape metadata on the same storage; cat() allocates — so prefer view whenever possible.

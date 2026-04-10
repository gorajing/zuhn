# Topic: model-architecture

> 18 insights

- `INS-260405-1F0B` [high] Each biological neuron runs its own learning mechanisms and maintains state; each artificial neuron is just y = Wx + b, making raw neuron-count comparisons between brains and AI models deeply misleading.
- `INS-260410-FEFA` [high] Convolutional layers in WaveNet don't add modeling power — they just slide a linear filter across the input sequence inside CUDA kernels and let the network reuse intermediate nodes that would otherwise be recomputed.
- `INS-260410-5EE7` [high] A neural net with one linear layer + softmax trained on NLL converges to exp(W) equal to the explicit bigram count matrix, so the two frameworks are the same model reached by different paths.
- `INS-260410-2FEE` [high] With 27 tokens a bigram table has 729 entries but a 10-gram table would need 27^10 ≈ 2×10^14 entries — tables are structurally unscalable, which is the real reason neural language models won.
- `INS-260405-5649` [high] Biological neurons operate in milliseconds on minimal power; H100 GPUs process billions of times faster but consume massive energy—these are fundamentally different engineering solutions to intelligence, not points on a spectrum.
- `INS-260405-7383` [high] Google's Willow processor demonstrated quantum advantage that was independently confirmed — shifting the field from performance claims to verifiable science.
- `INS-260410-268D` [high] WaveNet-style tree structures that fuse two elements at a time through multiple layers preserve more information than flattening all context into a single hidden layer.
- `INS-260410-5033` [high] Residual connections give gradients a direct additive path from loss to input, so deep networks stay trainable even when internal blocks start as near-noise.
- `INS-260410-85F5` [high] The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays diffuse at init instead of collapsing to one-hot.
- `INS-260410-9EEF` [high] Attention is weighted aggregation between nodes in a directed graph — the 'sequence' framing is just one possible graph topology.
- `INS-260410-F08E` [high] BatchNorm layers harbor hidden state (running stats, train/eval mode, cross-batch coupling) that silently corrupts outputs when any one of them is misconfigured, making them a top source of subtle deep-learning bugs.
- `INS-260410-B282` [high] Larger vocab compresses sequences (more context per token) but bloats embedding/softmax layers — the optimum is a tuned trade-off, not a maximum.
- `INS-260410-1789` [high] Every transformer block pairs attention (tokens gather info from each other) with a feedforward MLP (each token thinks privately) — communication without computation underfits.
- `INS-260410-9303` [medium] The brain's 'special sauce' is a large set of innately wired, species-specific reward functions — not a clever learning algorithm or architecture.
- `INS-260405-547E` [medium] AMI's $1.03B bet is that grounded, causal world models beat next-token scaling for real-world AI.
- `INS-260405-16AB` [medium] DeepSeek's mHC paper shows that manifold constraints on layer connections preserve model stability while enabling richer information flow.
- `INS-260410-3271` [medium] Jeff Dean envisions a single 'organic blob' model where 100 teams independently train specialized modules (Southeast Asian languages, Haskell reasoning, medical imaging) that attach to a base, with continuous distillation cycling between big exploration and small efficient serving.

- `INS-260410-B9A6` [low] Any cortical area can clamp any subset of variables and sample from any other subset — a generality LLMs only emulate at the context-window level.

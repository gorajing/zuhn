# Tag: transformers

- `INS-260323-4D13` Zuckerberg identifies the scaling question as the single highest-stakes bet in AI: Llama training went from 10-20K GPUs to 100K+ GPUs, with hundreds of billions in infrastructure riding on continued returns.
- `INS-260605-D0C0` Spotify is collapsing dozens of team-owned, multi-stage candidate-generation-and-ranking pipelines into one transformer-backbone generative recommender shared across surfaces.
- `INS-260603-6E59` Satish (Stanford atmospheric FM): on sequences (language/code) we're ~80-90% there because a word encodes sparse information you can mask and recover; but encoding even a 1024×1024 image into a vector loses enormous information, and video/spectral data is worse — the breakthrough for high-dimensional data hasn't happened.
- `INS-260605-D1F1` There is nothing wrong with the transformer for chess — DeepMind trained one to grandmaster strength by predicting Stockfish evaluations rather than language.
- `INS-260405-16AB` DeepSeek's mHC paper shows that manifold constraints on layer connections preserve model stability while enabling richer information flow.
- `INS-260410-85F5` The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays diffuse at init instead of collapsing to one-hot.
- `INS-260410-9EEF` Attention is weighted aggregation between nodes in a directed graph — the 'sequence' framing is just one possible graph topology.
- `INS-260605-15E9` Every architecture (Swin, ConvNeXt, Hera) that beat the plain VIT on efficiency lost its edge once flash attention was applied to the VIT.
- `INS-260410-1789` Every transformer block pairs attention (tokens gather info from each other) with a feedforward MLP (each token thinks privately) — communication without computation underfits.
- `INS-260605-20C0` Modern TTS reframes audio generation as language modeling — an autoregressive decoder emitting audio token-patches frame by frame.
- `INS-260625-E500` Even after sharding all parameters with FSDP across 8 GPUs, long-context training still OOMs because attention activations — not weights — dominate memory.
- `INS-260323-3F39` Modern frontier models are essentially GPT-2 with minor tweaks; the real advances are in training methodology, data curation, and post-training.
- `INS-260405-57D6` OpenAI accidentally discovered that training transformers well past the overfitting threshold triggers a 'grokking zone' where genuine understanding and emergent behaviors emerge.

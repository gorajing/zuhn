# Tag: long-context

- `INS-260624-F048` A million-token window is not a substitute for a context manager.
- `INS-260625-05FF` Per Jeff Dean, even a trillion-token context window needs stage retrieval — 'you don't need a trillion at once, you need the right million' — so retrieval becomes an iterative search-reason-fetch loop, not a one-shot vector call.
- `INS-260625-057C` In a Recursive Language Model the context itself is the object of computation — the prompt is a variable in a REPL, not text read into the window.
- `INS-260409-384A` Jerry Liu: even with a hypothetically infinite context window, dumping enterprise data (gigabytes to terabytes) into every model call is 'very inefficient... you have these network transfer costs' — long context helps at personal scale but does not obsolete retrieval at enterprise scale.
- `INS-260605-0E65` Constant-information tasks (needle-in-haystack, O(1)) survive a full context window, but linear or quadratic information demands degrade accuracy to 30-60% even at low occupancy.
- `INS-260605-13F9` Cache long files for repeated queries to save ~90%, and budget ~1920 tokens per minute of audio (~9 hours in a 1M window).
- `INS-260625-E500` Even after sharding all parameters with FSDP across 8 GPUs, long-context training still OOMs because attention activations — not weights — dominate memory.
- `INS-260326-8201` At 3.5 bits per channel (4.5x compression), TurboQuant matches full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits (6.4x), quality degradation is marginal.
- `INS-260327-1631` KimiLinear's fine-grained diagonal decay matrix enables different channels to independently retain long-range context or rapidly refresh, outperforming both full attention and prior linear attention variants.
- `INS-260625-5045` Reaching 3–5M token context required stacking FSDP, context parallelism, activation checkpointing, CPU offloading, sequence tiling, and buffer reuse — each alone is insufficient.
- `INS-260625-429B` You don't need million-token contexts to benefit from memory analysis — understanding the budget lets you reinvest freed memory into faster training.
- `INS-260514-F277` Three views: recent uncompressed (last 128 tokens), moderately compressed with sparse retrieval, heavily compressed (128:1) for big picture. Same as how a student studies.
- `INS-260605-4A2D` Turbo Quant cuts KV-cache memory ~4x with exact-match output quality, enabling up to 1M-token context entirely on-device.
- `INS-260409-5CF4` LLMs can keep index and summary files fresh well enough to replace a dedicated retrieval system.
- `INS-260410-264E` If your corpus is under ~500 pages, just put the whole thing in the prompt and cache it — no RAG infrastructure required.

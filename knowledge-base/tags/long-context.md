# Tag: long-context

- `INS-260409-384A` Jerry Liu: even with a hypothetically infinite context window, dumping enterprise data (gigabytes to terabytes) into every model call is 'very inefficient... you have these network transfer costs' — long context helps at personal scale but does not obsolete retrieval at enterprise scale.
- `INS-260326-8201` At 3.5 bits per channel (4.5x compression), TurboQuant matches full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits (6.4x), quality degradation is marginal.
- `INS-260327-1631` KimiLinear's fine-grained diagonal decay matrix enables different channels to independently retain long-range context or rapidly refresh, outperforming both full attention and prior linear attention variants.
- `INS-260409-5CF4` LLMs can keep index and summary files fresh well enough to replace a dedicated retrieval system.
- `INS-260410-264E` If your corpus is under ~500 pages, just put the whole thing in the prompt and cache it — no RAG infrastructure required.

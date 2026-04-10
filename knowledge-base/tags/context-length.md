# Tag: context-length

- `INS-260410-699C` Non-English text gets stretched into many more tokens than equivalent English, eating context length and degrading model performance regardless of LM training data.
- `INS-260410-656B` Going from 3 to 8 characters of context in the same flat MLP moved validation loss from 2.10 to 2.02 — a bigger gain than the later hierarchical WaveNet rewrite produced at matched parameter count.
- `INS-260410-2FEE` With 27 tokens a bigram table has 729 entries but a 10-gram table would need 27^10 ≈ 2×10^14 entries — tables are structurally unscalable, which is the real reason neural language models won.

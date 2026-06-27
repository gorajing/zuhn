# Tag: memory-hierarchy

- `INS-260409-8408` MemPalace's 4-layer stack (L0 identity always loaded at ~50 tokens, L1 critical facts always loaded at ~120 tokens, L2 room recall on demand, L3 deep search on demand) gives agents ~170 tokens of persistent identity before any query fires.
- `INS-260410-3C37` Flash Attention does MORE floating-point operations than vanilla attention yet runs 7.6x faster, because it avoids materializing the T×T attention matrix in HBM.
- `INS-260626-BB8B` Gemma's per-layer-embedding 'E2B' architecture loads only ~2B of a ~4-5B-parameter model into the GPU and pushes the rest to CPU or disk because those weights act as lookup tables, not matrix-multiplication operands.

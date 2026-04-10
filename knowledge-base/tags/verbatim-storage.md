# Tag: verbatim-storage

- `INS-260409-6560` MemPalace's 96.6% LongMemEval R@5 comes from raw verbatim ChromaDB storage; their own AAAK lossy compression scores only 84.2% — a 12.4 point regression that inverts the expected efficiency-quality trade-off at small scales.
- `INS-260409-B13F` MemPalace stores conversations verbatim and uses structure plus semantic search to find what matters at query time, rather than extracting 'user prefers Postgres' and discarding the conversation that explained why.

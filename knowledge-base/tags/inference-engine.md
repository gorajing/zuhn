# Tag: inference-engine

- `INS-260605-FC5B` BERT, modern BERT, Qwen, and ColBERT differ in flash-attention implementation, positional embeddings (absolute lookup vs. rotary), normalization, and whether QKV can be fused, so a single engine can't serve them all without per-architecture forward-pass adaptation.

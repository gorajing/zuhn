# Tag: flash-attention

- `INS-260605-C873` Optimize kernels for memory movement, not flops, because a modern GPU spends most of its time idle waiting on tensors to arrive from slow memory.
- `INS-260410-3C37` Flash Attention does MORE floating-point operations than vanilla attention yet runs 7.6x faster, because it avoids materializing the T×T attention matrix in HBM.
- `INS-260605-E831` When batched requests have uneven token counts and are all padded to the maximum length, the model burns compute on empty padding tokens — variable-length flash attention avoids padding so no compute is wasted.
- `INS-260605-FC5B` BERT, modern BERT, Qwen, and ColBERT differ in flash-attention implementation, positional embeddings (absolute lookup vs. rotary), normalization, and whether QKV can be fused, so a single engine can't serve them all without per-architecture forward-pass adaptation.
- `INS-260605-15E9` Every architecture (Swin, ConvNeXt, Hera) that beat the plain VIT on efficiency lost its edge once flash attention was applied to the VIT.

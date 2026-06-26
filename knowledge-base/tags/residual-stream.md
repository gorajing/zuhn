# Tag: residual-stream

- `INS-260625-D148` Because DeepSeek-V4 interleaves lossy compressed-attention layers, it relies on the residual stream (mHC) to propagate uncompressed information forward, protecting against data a single layer discarded but a later layer needs.

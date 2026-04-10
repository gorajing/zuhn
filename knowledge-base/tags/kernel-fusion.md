# Tag: kernel-fusion

- `INS-260410-3C37` Flash Attention does MORE floating-point operations than vanilla attention yet runs 7.6x faster, because it avoids materializing the T×T attention matrix in HBM.
- `INS-260410-FEFA` Convolutional layers in WaveNet don't add modeling power — they just slide a linear filter across the input sequence inside CUDA kernels and let the network reuse intermediate nodes that would otherwise be recomputed.

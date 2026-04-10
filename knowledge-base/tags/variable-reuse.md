# Tag: variable-reuse

- `INS-260410-FEFA` Convolutional layers in WaveNet don't add modeling power — they just slide a linear filter across the input sequence inside CUDA kernels and let the network reuse intermediate nodes that would otherwise be recomputed.

# Tag: wavenet

- `INS-260410-FEFA` Convolutional layers in WaveNet don't add modeling power — they just slide a linear filter across the input sequence inside CUDA kernels and let the network reuse intermediate nodes that would otherwise be recomputed.
- `INS-260410-268D` WaveNet-style tree structures that fuse two elements at a time through multiple layers preserve more information than flattening all context into a single hidden layer.

# Tag: buffer-reuse

- `INS-260625-8792` Their U-Pipe optimization exploits that a single head-group maxes out the GPU, so heads can be computed in sequential chunks that reuse one small buffer instead of one giant allocation.

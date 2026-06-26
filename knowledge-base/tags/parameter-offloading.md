# Tag: parameter-offloading

- `INS-260625-48FA` Gemma's 'effective vs active parameters' split works because per-layer embeddings are lookups, not matrix multiplies, so they can live off the GPU.

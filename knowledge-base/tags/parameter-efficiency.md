# Tag: parameter-efficiency

- `INS-260626-4D5F` In tiny models the embedding layer can dominate the parameter count (63% in Gemma 3 270M), so the 'effective' reasoning parameters are far smaller than the headline size suggests.
- `INS-260627-6A8B` Because an RL reward is just one bit (right/wrong) while SFT supervises every token, RL can reach the same accuracy with vastly fewer trainable parameters — even single digits.

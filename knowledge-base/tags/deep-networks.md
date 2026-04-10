# Tag: deep-networks

- `INS-260410-5033` Residual connections give gradients a direct additive path from loss to input, so deep networks stay trainable even when internal blocks start as near-noise.
- `INS-260410-885B` Initialize each layer's weights from a Gaussian with std = gain/sqrt(fan_in), using gain=1 for linear, 5/3 for tanh, sqrt(2) for ReLU — this is the only scaling that prevents activations from exploding or vanishing as depth grows.

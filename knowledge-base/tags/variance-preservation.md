# Tag: variance-preservation

- `INS-260410-885B` Initialize each layer's weights from a Gaussian with std = gain/sqrt(fan_in), using gain=1 for linear, 5/3 for tanh, sqrt(2) for ReLU — this is the only scaling that prevents activations from exploding or vanishing as depth grows.

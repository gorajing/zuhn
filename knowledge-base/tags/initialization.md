# Tag: initialization

- `INS-260410-85F5` The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays diffuse at init instead of collapsing to one-hot.
- `INS-260410-C2E6` Compute the expected initial loss (e.g., -log(1/n_classes)) and compare against your network's actual iteration-zero loss — a mismatch reveals an initialization bug worth fixing before anything else.
- `INS-260410-E6E9` When implementing or testing backprop code, initialize biases to small random numbers rather than zero — zeros simplify the math enough to mask incorrect gradient formulas that would fail on real inputs.
- `INS-260410-885B` Initialize each layer's weights from a Gaussian with std = gain/sqrt(fan_in), using gain=1 for linear, 5/3 for tanh, sqrt(2) for ReLU — this is the only scaling that prevents activations from exploding or vanishing as depth grows.

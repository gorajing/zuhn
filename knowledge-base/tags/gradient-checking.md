# Tag: gradient-checking

- `INS-260410-8019` Comparing hand-derived gradients to a finite-difference numerical estimate (or to PyTorch's autograd) catches the subtle sign flips, missing scale factors, and shape mismatches that plague manual backprop — and was standard practice before autograd existed.
- `INS-260410-E6E9` When implementing or testing backprop code, initialize biases to small random numbers rather than zero — zeros simplify the math enough to mask incorrect gradient formulas that would fail on real inputs.

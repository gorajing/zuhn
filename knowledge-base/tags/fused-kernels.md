# Tag: fused-kernels

- `INS-260410-78D3` For composed operations like softmax+cross-entropy, pen-and-paper differentiation produces gradient expressions vastly shorter than autograd's atomic chain — which is why every serious framework ships fused backward kernels for them.

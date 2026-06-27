# Tag: backpropagation

- `INS-260410-CB46` Strip neural networks to individual scalar operations so the chain rule is visible; tensor parallelism is an efficiency add-on that obscures the mechanics.
- `INS-260410-025A` Backprop doesn't know anything about neural networks — it applies the chain rule to any directed expression graph, and neural nets are just a particular shape of graph we happen to care about.
- `INS-260410-78D3` For composed operations like softmax+cross-entropy, pen-and-paper differentiation produces gradient expressions vastly shorter than autograd's atomic chain — which is why every serious framework ships fused backward kernels for them.
- `INS-260410-5F60` Autograd frameworks don't make neural nets 'just work' — gradient-level bugs like dead neurons, saturated nonlinearities, and miscomputed loss-vs-gradient clipping require understanding backprop internals to diagnose.

# Tag: autograd

- `INS-260410-025A` Backprop doesn't know anything about neural networks — it applies the chain rule to any directed expression graph, and neural nets are just a particular shape of graph we happen to care about.
- `INS-260410-5F60` Autograd frameworks don't make neural nets 'just work' — gradient-level bugs like dead neurons, saturated nonlinearities, and miscomputed loss-vs-gradient clipping require understanding backprop internals to diagnose.

# Topic: pedagogy

> 4 insights

- `INS-260405-75C4` [high] Watching someone use AI live is more instructive than reading or hearing about it.
- `INS-260410-8019` [high] Comparing hand-derived gradients to a finite-difference numerical estimate (or to PyTorch's autograd) catches the subtle sign flips, missing scale factors, and shape mismatches that plague manual backprop — and was standard practice before autograd existed.
- `INS-260410-C5A4` [high] Karpathy spent 15 minutes searching PyTorch for the tanh backward pass and couldn't find it — 2,800 results across 406 files — because production libraries accumulate entropy around a simple core.
- `INS-260410-CB46` [high] Strip neural networks to individual scalar operations so the chain rule is visible; tensor parallelism is an efficiency add-on that obscures the mechanics.

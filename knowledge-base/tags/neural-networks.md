# Tag: neural-networks

- `INS-260404-DDC8` Figure AI's Helix 02 replaces over 100,000 lines of C++ with a three-layer neural network that handles balance, sensor fusion, and reasoning in a single system.
- `INS-260330-5F36` Replacing C++ heuristics with neural nets that directly output vectors instead of a 'giant bag of points' is the key architectural evolution.
- `INS-260325-4C6D` Neural networks succeed precisely because they work like human intuition rather than like explicit logical rules.
- `INS-260330-DE16` Linear transformations are powerful precisely because their constraints — parallel gridlines, fixed origin — make them fully describable, composable, and invertible.
- `INS-260410-6B98` Embeddings let the model treat 'a' and 'the' as interchangeable even if the exact phrase was never in training — generalization via semantic geometry.
- `INS-260330-4F10` Neural network layers apply learned linear transformations that reshape embedding space — the same geometric operation 3Blue1Brown visualizes.
- `INS-260330-3ADD` Networks achieve 96%+ accuracy with hidden layers that look nearly random rather than detecting edges and patterns as designed.
- `INS-260330-AE16` Neural network layers learn progressively abstract representations — pixels to edges to shapes to concepts — which is why depth matters more than width for complex tasks.
- `INS-260329-7F02` On the course's heart disease dataset, KNN achieved ~82% accuracy comparable to neural networks, proving that simpler models deserve first consideration.
- `INS-260330-D3F5` LLM complexity comes from massive repetition of a few simple matrix operations, not from architectural diversity.
- `INS-260410-8019` Comparing hand-derived gradients to a finite-difference numerical estimate (or to PyTorch's autograd) catches the subtle sign flips, missing scale factors, and shape mismatches that plague manual backprop — and was standard practice before autograd existed.
- `INS-260405-1F0B` Each biological neuron runs its own learning mechanisms and maintains state; each artificial neuron is just y = Wx + b, making raw neuron-count comparisons between brains and AI models deeply misleading.
- `INS-260410-2FEE` With 27 tokens a bigram table has 729 entries but a 10-gram table would need 27^10 ≈ 2×10^14 entries — tables are structurally unscalable, which is the real reason neural language models won.
- `INS-260410-5F60` Autograd frameworks don't make neural nets 'just work' — gradient-level bugs like dead neurons, saturated nonlinearities, and miscomputed loss-vs-gradient clipping require understanding backprop internals to diagnose.
- `INS-260410-E6E9` When implementing or testing backprop code, initialize biases to small random numbers rather than zero — zeros simplify the math enough to mask incorrect gradient formulas that would fail on real inputs.
- `INS-260330-E059` 300 rotating arrows, each performing the simplest possible motion (constant-rate rotation), compose to trace any arbitrary shape — a principle that extends to neural networks and modular system design.

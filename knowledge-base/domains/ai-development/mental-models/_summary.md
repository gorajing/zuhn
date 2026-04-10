# Topic: mental-models

> 16 insights

- `INS-260410-025A` [high] Backprop doesn't know anything about neural networks — it applies the chain rule to any directed expression graph, and neural nets are just a particular shape of graph we happen to care about.
- `INS-260330-5A2A` [high] All numerical descriptions of vectors depend on an implicit choice of basis vectors, meaning representation is never framework-free.
- `INS-260330-798D` [high] Computing the 100th power of a matrix is a nightmare in standard coordinates but trivial in an eigenbasis — just raise each diagonal eigenvalue to the 100th power.
- `INS-260410-DA81` [high] Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient row sums to zero — every incorrect class is pushed down by exactly the amount the correct class is pushed up, with force scaling as the prediction's confidence in wrong answers.
- `INS-260330-F493` [high] Thinking in doubling times rather than absolute numbers enables correct intuition about exponential processes.
- `INS-260330-BF2A` [high] Eigenvectors — vectors unchanged in direction by a transformation — exemplify the general strategy of finding invariants to understand complex systems.
- `INS-260330-9FCF` [high] Even when populations are clustered with minimal inter-group travel, exponential growth dynamics recur fractally — communities behave like individuals, each infecting other communities with the same multiplicative laws.
- `INS-260410-06DB` [high] LLMs are ethereal spirits mimicking human internet text, not evolved animals — pretraining is 'crappy evolution' that instills knowledge rather than learning algorithms.
- `INS-260330-2EC0` [high] On a log scale, exponential growth becomes a straight line — making the underlying multiplicative pattern immediately visible and quantifiable via simple linear regression.
- `INS-260330-FF5B` [high] Log scales convert exponential curves into straight lines, making growth rates, trend changes, and inflection points immediately visible to human perception.
- `INS-260410-78F4` [high] Treat weight-stored knowledge as a hazy recollection and the context window as working memory — paste the source material in rather than relying on recall.
- `INS-260330-D7CA` [high] A shear transformation has too few eigenvectors to form an eigenbasis, meaning it cannot be decomposed into independent scaling operations along any set of axes.
- `INS-260330-8AE8` [high] At near-light-speed, Earth would be genuinely flattened by Lorentz contraction — not an illusion but a real physical consequence of the observer's reference frame.
- `INS-260330-D63D` [high] At near-light speeds, Lorentz contraction literally flattens Earth into a disc, demonstrating that 'objective shape' depends on the observer's reference frame — a physical fact, not mere perspective.
- `INS-260410-5EC3` [medium] Think of an LLM as a kernel process coordinating memory (context window), disk (retrieval), peripherals (tools, vision, audio), and user space — not as a chatbot.
- `INS-260330-C989` [medium] Bubbles expand slowly but collapse violently because the Rayleigh-Plesset equation's nonlinear terms dominate during contraction, creating a canonical example of asymmetric dynamics from symmetric-seeming initial conditions.

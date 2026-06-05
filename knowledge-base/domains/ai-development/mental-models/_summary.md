# Topic: mental-models

> 24 insights

- `INS-260605-71E7` [high] DinoV3 is a strictly better encoder than DinoV2, yet generative models aligned to DinoV3 perform worse — component quality doesn't compose into system quality when objectives differ.
- `INS-260514-13B6` [high] AI is alien intelligence — powerful but qualitatively different. Direct it like a conductor directs an orchestra. The 'AI as smarter version of yourself' mental model misjudges its failure modes; the 'alien-but-directable' model harnesses its strengths.
- `INS-260410-025A` [high] Backprop doesn't know anything about neural networks — it applies the chain rule to any directed expression graph, and neural nets are just a particular shape of graph we happen to care about.
- `INS-260330-5A2A` [high] All numerical descriptions of vectors depend on an implicit choice of basis vectors, meaning representation is never framework-free.
- `INS-260330-798D` [high] Computing the 100th power of a matrix is a nightmare in standard coordinates but trivial in an eigenbasis — just raise each diagonal eigenvalue to the 100th power.
- `INS-260410-DA81` [high] Because d(loss)/d(logits) equals softmax(logits) − onehot(y), the gradient row sums to zero — every incorrect class is pushed down by exactly the amount the correct class is pushed up, with force scaling as the prediction's confidence in wrong answers.
- `INS-260514-A0AC` [high] Quantum effects aren't rare — they're ubiquitous, but every system entangles with so many environmental particles that the correlations spread out and become invisible. Classical reality is an emergent layer hiding the quantum substrate.
- `INS-260330-F493` [high] Thinking in doubling times rather than absolute numbers enables correct intuition about exponential processes.
- `INS-260330-BF2A` [high] Eigenvectors — vectors unchanged in direction by a transformation — exemplify the general strategy of finding invariants to understand complex systems.
- `INS-260330-9FCF` [high] Even when populations are clustered with minimal inter-group travel, exponential growth dynamics recur fractally — communities behave like individuals, each infecting other communities with the same multiplicative laws.
- `INS-260410-06DB` [high] LLMs are ethereal spirits mimicking human internet text, not evolved animals — pretraining is 'crappy evolution' that instills knowledge rather than learning algorithms.
- `INS-260330-2EC0` [high] On a log scale, exponential growth becomes a straight line — making the underlying multiplicative pattern immediately visible and quantifiable via simple linear regression.
- `INS-260330-FF5B` [high] Log scales convert exponential curves into straight lines, making growth rates, trend changes, and inflection points immediately visible to human perception.
- `INS-260410-78F4` [high] Treat weight-stored knowledge as a hazy recollection and the context window as working memory — paste the source material in rather than relying on recall.
- `INS-260330-D7CA` [high] A shear transformation has too few eigenvectors to form an eigenbasis, meaning it cannot be decomposed into independent scaling operations along any set of axes.
- `INS-260514-7B5B` [high] Perception is controlled hallucination — your brain generates the world top-down from predictions, sensory data only corrects errors. The vivid world you 'see' is overwhelmingly your simulation constrained by tiny incoming data.
- `INS-260330-8AE8` [high] At near-light-speed, Earth would be genuinely flattened by Lorentz contraction — not an illusion but a real physical consequence of the observer's reference frame.
- `INS-260330-D63D` [high] At near-light speeds, Lorentz contraction literally flattens Earth into a disc, demonstrating that 'objective shape' depends on the observer's reference frame — a physical fact, not mere perspective.
- `INS-260514-BD41` [high] Leonard Suskin's point: you can know everything about an entangled system and still know nothing about its individual components. Reductionism fails when parts are deeply relational.
- `INS-260605-1C4E` [medium] Treat structure as a viewing choice: the same content can be projected into markdown, graphs, clusters, folders, or timelines depending on what you need, so pick multiple representations deliberately.
- `INS-260410-5EC3` [medium] Think of an LLM as a kernel process coordinating memory (context window), disk (retrieval), peripherals (tools, vision, audio), and user space — not as a chatbot.
- `INS-260514-2705` [medium] Superintelligence = time-traveler from 2025 dropped into the Roman Empire with the strategic roadmap but still needing iterative learning-by-doing. 100x speedup of industrial revolution plausible. Magic teleportation to nanobots: not.
- `INS-260330-C989` [medium] Bubbles expand slowly but collapse violently because the Rayleigh-Plesset equation's nonlinear terms dominate during contraction, creating a canonical example of asymmetric dynamics from symmetric-seeming initial conditions.
- `INS-260514-049E` [medium] If you take the game-engine analogy seriously, every paradoxical quantum behavior (observer effect, non-locality, delayed-choice) becomes mundane computational efficiency. It's not proof we're in a simulation — but it's striking how cleanly the analogy fits.

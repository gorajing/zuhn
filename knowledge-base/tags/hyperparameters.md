# Tag: hyperparameters

- `INS-260321-8433` Karpathy's auto-research loop found hyperparameter improvements overnight that his two decades of ML experience missed — the agent found weight decay and Adam beta issues that interact jointly.
- `INS-260410-656B` Going from 3 to 8 characters of context in the same flat MLP moved validation loss from 2.10 to 2.02 — a bigger gain than the later hierarchical WaveNet rewrite produced at matched parameter count.
- `INS-260410-B282` Larger vocab compresses sequences (more context per token) but bloats embedding/softmax layers — the optimum is a tuned trade-off, not a maximum.

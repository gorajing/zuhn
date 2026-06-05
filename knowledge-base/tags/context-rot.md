# Tag: context-rot

- `INS-260325-252D` Context rot in agents stems from poor context management design, not just model limits.
- `INS-260410-9EFC` Context is not free real estate — every token spent depletes the model's attention budget, so curate aggressively.
- `INS-260605-295D` Quality degrades as context grows, so use small models (NER, rerankers, classifiers) to preprocess and filter data before it enters the agent's context window.
- `INS-260605-E06C` Knowledge entries go stale on every model release and feature change, and stale context actively hampers the agent — so continuous deletion is as important as collection.

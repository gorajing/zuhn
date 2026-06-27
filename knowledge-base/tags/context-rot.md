# Tag: context-rot

- `INS-260325-252D` Context rot in agents stems from poor context management design, not just model limits.
- `INS-260627-266C` More context isn't better — quality starts degrading around 50% window fill, and bad context can poison the whole output.
- `INS-260410-9EFC` Context is not free real estate — every token spent depletes the model's attention budget, so curate aggressively.
- `INS-260605-295D` Quality degrades as context grows, so use small models (NER, rerankers, classifiers) to preprocess and filter data before it enters the agent's context window.
- `INS-260605-0E65` Constant-information tasks (needle-in-haystack, O(1)) survive a full context window, but linear or quadratic information demands degrade accuracy to 30-60% even at low occupancy.
- `INS-260605-E06C` Knowledge entries go stale on every model release and feature change, and stale context actively hampers the agent — so continuous deletion is as important as collection.

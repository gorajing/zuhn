# Tag: catastrophic-forgetting

- `INS-260605-3DBF` Embedding Spotify's catalog knowledge into an open-weight LLM (Llama, Qwen) via fine-tuning combines world knowledge with platform knowledge, yielding steerability and explainability for free — but the model forgets.
- `INS-260501-2BE3` Different modules forgetting at different speeds means information is preserved somewhere even when fast modules overwrite it.
- `INS-260501-D360` LLMs have anterograde amnesia: they can use what they learned in pretraining and what's in context, but cannot consolidate new learning into persistent memory.
- `INS-260410-F436` Gradient descent makes you solve the training problem, not generalize well — catastrophic forgetting is the natural default and good transfer happens only when researchers iterate until they find a representation that transfers.
- `INS-260505-4426` Take the model at every training checkpoint, not just the final one — extreme events are often learned at step 50K, then forgotten by step 500K.

# Tag: preprocessing

- `INS-260326-CAAB` TurboQuant indexes 100K vectors in 0.002s vs 494s for Product Quantization (d=3072) -- and gets better recall -- because its guarantees are mathematical, not statistical.
- `INS-260627-682B` Isolating the agent and customer onto separate stereo channels during capture gives the LLM clean per-speaker input, where mixing them into a mono track forces the model to guess speaker attribution and ruins the downstream summary.
- `INS-260410-2F8D` Have Claude write a 50-100 token explanation of where each chunk sits in the parent document, prepend it to the chunk, then embed and BM25-index the combined text.
- `INS-260320-92CC` Filter aggressively before hitting expensive models — filtering by upvotes/comments removes 80% of inputs, saving ~$5/week.
- `INS-260410-3F1A` Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.

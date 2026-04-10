# Tag: prompt-caching

- `INS-260410-376A` Gate expensive chain-of-thought reasoning behind a cheap single-token filter tuned for high recall.
- `INS-260410-3F1A` Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.
- `INS-260410-264E` If your corpus is under ~500 pages, just put the whole thing in the prompt and cache it — no RAG infrastructure required.

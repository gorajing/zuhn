# Tag: indexing

- `INS-260326-CAAB` TurboQuant indexes 100K vectors in 0.002s vs 494s for Product Quantization (d=3072) -- and gets better recall -- because its guarantees are mathematical, not statistical.
- `INS-260627-CECD` Keep the agent's context as small as possible and let it self-discover the right context via search/tools — Kiro uses its codebase index for secondary UI features (code search) rather than dumping it into the agent, because benchmarks show the agent does better with less context plus good navigation tools.
- `INS-260624-F048` A million-token window is not a substitute for a context manager.
- `INS-260625-3A20` Exact KNN works great for small corpora, highly-filtered result sets, and partitioned queries; reach for approximate (ANN) indexing only when vector search is your primary mechanism over a large corpus.
- `INS-260625-96AA` Embeddings are cached compute — a one-time indexing cost that lets agents retrieve understanding cheaply at runtime, versus grep-read-assess-repeat loops that re-derive the same understanding (and re-burn the same tokens) every session.

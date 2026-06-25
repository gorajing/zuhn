# Tag: performance-tradeoffs

- `INS-260625-3A20` Exact KNN works great for small corpora, highly-filtered result sets, and partitioned queries; reach for approximate (ANN) indexing only when vector search is your primary mechanism over a large corpus.
- `INS-260329-4696` Batching operations increases total system throughput by amortizing overhead, but each individual request waits longer — you cannot optimize both simultaneously.

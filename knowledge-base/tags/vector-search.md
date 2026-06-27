# Tag: vector-search

- `INS-260326-CAAB` TurboQuant indexes 100K vectors in 0.002s vs 494s for Product Quantization (d=3072) -- and gets better recall -- because its guarantees are mathematical, not statistical.
- `INS-260421-8004` 4 of 6 speakers at AI Agents SF #12 use graph primitives (Neo4j, FalkorDB, Cognee's own) with vector embeddings layered inside graph nodes rather than as the top-level store.
- `INS-260605-2A64` Vector RAG returns plausible-but-generic answers because similarity search drops connected facts like prior diagnoses or operations; graph traversal pulls those linked records and changes the recommendation.
- `INS-260625-3A20` Exact KNN works great for small corpora, highly-filtered result sets, and partitioned queries; reach for approximate (ANN) indexing only when vector search is your primary mechanism over a large corpus.
- `INS-260605-DB79` Graph embeddings turn a connected decision trace into a vector, so 'find similar past decisions' becomes a vector lookup combining semantic and structural similarity.
- `INS-260605-5013` Embeddings front-load the cost of understanding a codebase once, replacing the repeated grep-read-grep compute that every agent session otherwise pays.
- `INS-260405-214D` Use vector embeddings to land near relevant content in semantic space, then traverse graph edges to discover structurally related knowledge that pure vector search would miss.
- `INS-260625-3A4F` Run a keyword retriever and a vector retriever in parallel and merge their results with reciprocal rank fusion — keyword nails exact matches, vectors catch semantic neighbors, and fusion recovers what either misses alone.
- `INS-260627-30CD` Matryoshka representation learning produces nested embeddings so you can retrieve with 256 dims cheaply, then expand to more dimensions for precision — one network, many operating points.
- `INS-260409-ADD0` MemPalace's wing+room metadata filtering takes 60.9% flat semantic R@10 to 94.8% on 22k real conversation memories — a 34-point lift from trivial structure the maintainers honestly note is standard ChromaDB filtering.
- `INS-260625-CF5E` The 'RAG is dead' claim conflates RAG with simple vector search; retrieval-augmented generation actually spans vector search, BM25 full-text, grep/glob/regex, and filters — so 'agentic search' is a richer form of RAG, not its replacement.
- `INS-260627-FC86` Because embeddings keep improving and last year's model goes stale, design the index to do vector search over multiple embedding models so migration is gradual, not a hard cutover.
- `INS-260409-8DA0` Jerry Liu: 'If you're just doing top-k similarity... you might not be able to be fetching the right information from the documents' — meaning the retrieval step is where most RAG systems fail, not the synthesis step, and naive cosine similarity over embeddings is structurally insufficient for complex queries.
- `INS-260402-28BA` Combining vector search to find a semantically close starting point with graph traversal to explore structured relationships yields better retrieval than either method alone.
- `INS-260325-E652` TurboQuant improves LLM inference, vector search recall, and embedding storage simultaneously because all three are bottlenecked by the same high-dimensional vector operations.

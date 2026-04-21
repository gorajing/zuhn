# Tag: vector-search

- `INS-260326-CAAB` TurboQuant indexes 100K vectors in 0.002s vs 494s for Product Quantization (d=3072) -- and gets better recall -- because its guarantees are mathematical, not statistical.
- `INS-260421-8004` 4 of 6 speakers at AI Agents SF #12 use graph primitives (Neo4j, FalkorDB, Cognee's own) with vector embeddings layered inside graph nodes rather than as the top-level store.
- `INS-260405-214D` Use vector embeddings to land near relevant content in semantic space, then traverse graph edges to discover structurally related knowledge that pure vector search would miss.
- `INS-260409-ADD0` MemPalace's wing+room metadata filtering takes 60.9% flat semantic R@10 to 94.8% on 22k real conversation memories — a 34-point lift from trivial structure the maintainers honestly note is standard ChromaDB filtering.
- `INS-260409-8DA0` Jerry Liu: 'If you're just doing top-k similarity... you might not be able to be fetching the right information from the documents' — meaning the retrieval step is where most RAG systems fail, not the synthesis step, and naive cosine similarity over embeddings is structurally insufficient for complex queries.
- `INS-260402-28BA` Combining vector search to find a semantically close starting point with graph traversal to explore structured relationships yields better retrieval than either method alone.
- `INS-260325-E652` TurboQuant improves LLM inference, vector search recall, and embedding storage simultaneously because all three are bottlenecked by the same high-dimensional vector operations.

# Tag: hybrid-search

- `INS-260625-211E` Models excel at selecting the right rows from a large input but are weak at producing the precise query that fetches only those rows, so give them broad-recall tools (vector + hybrid search) and let them do the final selection.
- `INS-260405-214D` Use vector embeddings to land near relevant content in semantic space, then traverse graph edges to discover structurally related knowledge that pure vector search would miss.
- `INS-260410-2067` Run BM25 and vector search in parallel, then merge results with rank fusion — embeddings catch meaning, BM25 catches exact strings like 'TS-999'.
- `INS-260625-3A4F` Run a keyword retriever and a vector retriever in parallel and merge their results with reciprocal rank fusion — keyword nails exact matches, vectors catch semantic neighbors, and fusion recovers what either misses alone.
- `INS-260625-CF5E` The 'RAG is dead' claim conflates RAG with simple vector search; retrieval-augmented generation actually spans vector search, BM25 full-text, grep/glob/regex, and filters — so 'agentic search' is a richer form of RAG, not its replacement.
- `INS-260402-28BA` Combining vector search to find a semantically close starting point with graph traversal to explore structured relationships yields better retrieval than either method alone.

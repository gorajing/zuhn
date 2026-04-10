# Topic: embeddings

> 13 insights

- `INS-260330-4B84` [high] Every vector maps to exactly one coordinate tuple and vice versa — this bijection is what makes embedding spaces work.
- `INS-260402-1D32` [high] Using tiered similarity thresholds (auto-accept above 0.8, offer with confirmation at 0.7-0.8, re-research below 0.7) balances cache hit rates against accuracy.
- `INS-260410-6B98` [high] Embeddings let the model treat 'a' and 'the' as interchangeable even if the exact phrase was never in training — generalization via semantic geometry.
- `INS-260405-214D` [high] Use vector embeddings to land near relevant content in semantic space, then traverse graph edges to discover structurally related knowledge that pure vector search would miss.
- `INS-260330-3B6C` [high] A linear transformation is completely described by recording where each basis vector maps to — everything else follows by linearity.
- `INS-260410-2067` [high] Run BM25 and vector search in parallel, then merge results with rank fusion — embeddings catch meaning, BM25 catches exact strings like 'TS-999'.
- `INS-260330-4F10` [high] Neural network layers apply learned linear transformations that reshape embedding space — the same geometric operation 3Blue1Brown visualizes.
- `INS-260409-ADD0` [high] MemPalace's wing+room metadata filtering takes 60.9% flat semantic R@10 to 94.8% on 22k real conversation memories — a 34-point lift from trivial structure the maintainers honestly note is standard ChromaDB filtering.
- `INS-260410-72EC` [high] A one-hot vector at index i times matrix W selects row i of W — so the fancy 'input layer' of a character-level neural net is mechanically the same operation as row indexing into a count table.
- `INS-260410-2F8D` [high] Have Claude write a 50-100 token explanation of where each chunk sits in the parent document, prepend it to the chunk, then embed and BM25-index the combined text.
- `INS-260410-4D86` [high] RAG chunks lose the document-level context that determines whether they're relevant to a query, which is why retrieval fails even when the right chunk exists.
- `INS-260402-28BA` [high] Combining vector search to find a semantically close starting point with graph traversal to explore structured relationships yields better retrieval than either method alone.
- `INS-260330-CCA2` [medium] Different basis choices make different operations trivial or impossible in vector spaces.

# Topic: embeddings

> 6 insights

- `INS-260330-4B84` [high] Every vector maps to exactly one coordinate tuple and vice versa — this bijection is what makes embedding spaces work.
- `INS-260402-1D32` [high] Using tiered similarity thresholds (auto-accept above 0.8, offer with confirmation at 0.7-0.8, re-research below 0.7) balances cache hit rates against accuracy.
- `INS-260330-3B6C` [high] A linear transformation is completely described by recording where each basis vector maps to — everything else follows by linearity.
- `INS-260330-4F10` [high] Neural network layers apply learned linear transformations that reshape embedding space — the same geometric operation 3Blue1Brown visualizes.
- `INS-260402-28BA` [high] Combining vector search to find a semantically close starting point with graph traversal to explore structured relationships yields better retrieval than either method alone.
- `INS-260330-CCA2` [medium] Different basis choices make different operations trivial or impossible in vector spaces.

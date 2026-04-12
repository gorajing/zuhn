# Tag: embeddings

- `INS-260330-CCA2` Different basis choices make different operations trivial or impossible in vector spaces.
- `INS-260330-4B84` Every vector maps to exactly one coordinate tuple and vice versa — this bijection is what makes embedding spaces work.
- `INS-260409-3602` Jerry Liu: 'The chunking algorithm, how you define metadata will bias your embedding representations' — no universal chunking rule works across PDFs, Slack messages, SEC filings, and code. Chunking is a domain-specific decision that dramatically shapes retrieval quality.
- `INS-260410-6B98` Embeddings let the model treat 'a' and 'the' as interchangeable even if the exact phrase was never in training — generalization via semantic geometry.
- `INS-260409-3230` Jerry Liu: fine-tuning embedding models 'you're going to have to reindex all your documents. For a lot of people, that's not feasible' — and the performance gains are typically modest (~5-10%), not large enough to justify the full-corpus reindex that fine-tuning requires.
- `INS-260330-3B6C` A linear transformation is completely described by recording where each basis vector maps to — everything else follows by linearity.
- `INS-260410-2067` Run BM25 and vector search in parallel, then merge results with rank fusion — embeddings catch meaning, BM25 catches exact strings like 'TS-999'.
- `INS-260410-72EC` A one-hot vector at index i times matrix W selects row i of W — so the fancy 'input layer' of a character-level neural net is mechanically the same operation as row indexing into a count table.
- `INS-260412-9414` Black holes encode 3D objects as 2D information on their event horizon — a natural analogue to how embeddings flatten rich semantic content into fixed-dimension vectors.

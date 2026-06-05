# Tag: retrieval

- `INS-260605-4C0A` Like a radiologist who finds one lung nodule and stops scanning, an agent grabs the first matching pattern from a data store and quits, so retrieval that isn't exhaustive surfaces wrong implementations.
- `INS-260409-7C62` CLAUDE.md teaches the agent how to traverse the vault — it is the retrieval system.
- `INS-260605-2C70` Pair low-floor specialized tools (simple params, cheap model, few mistakes) with high-ceiling general-purpose tools (shell/query-execution) that handle the long tail.
- `INS-260410-19DE` Smart agents use file paths, queries, and links to fetch data on demand — like humans use file systems and bookmarks rather than memorizing everything.
- `INS-260605-37DA` Keep the first 100 and last 100 characters plus the system prompt and latest tool result, store the truncated middle in memory, and let the agent retrieve it on demand.
- `INS-260409-60C2` Search is easy to bolt on; heavy training to synthesize dozens of papers without drift is what actually stopped Aletheia from fabricating references.
- `INS-260409-3602` Jerry Liu: 'The chunking algorithm, how you define metadata will bias your embedding representations' — no universal chunking rule works across PDFs, Slack messages, SEC filings, and code. Chunking is a domain-specific decision that dramatically shapes retrieval quality.
- `INS-260410-2067` Run BM25 and vector search in parallel, then merge results with rank fusion — embeddings catch meaning, BM25 catches exact strings like 'TS-999'.
- `INS-260409-ADD0` MemPalace's wing+room metadata filtering takes 60.9% flat semantic R@10 to 94.8% on 22k real conversation memories — a 34-point lift from trivial structure the maintainers honestly note is standard ChromaDB filtering.
- `INS-260409-8DA0` Jerry Liu: 'If you're just doing top-k similarity... you might not be able to be fetching the right information from the documents' — meaning the retrieval step is where most RAG systems fail, not the synthesis step, and naive cosine similarity over embeddings is structurally insufficient for complex queries.
- `INS-260410-4D86` RAG chunks lose the document-level context that determines whether they're relevant to a query, which is why retrieval fails even when the right chunk exists.
- `INS-260605-59FE` The under-credited lever in context engineering is the search tool deciding what enters the window, not the curation arrow afterward.
- `INS-260605-D404` Fetching the document is step one; what the agent does when the document is missing or wrong is the part RAG/MCP architectures omit.
- `INS-260409-430B` Explicit folder hierarchies pre-encode retrieval paths so the agent follows, rather than searches.
- `INS-260409-BA55` RAG rediscovers connections on every query; a maintained wiki preserves them so knowledge compounds.
- `INS-260409-B13F` MemPalace stores conversations verbatim and uses structure plus semantic search to find what matters at query time, rather than extracting 'user prefers Postgres' and discarding the conversation that explained why.

# Tag: rag

- `INS-260410-19DE` Smart agents use file paths, queries, and links to fetch data on demand — like humans use file systems and bookmarks rather than memorizing everything.
- `INS-260410-2F8D` Have Claude write a 50-100 token explanation of where each chunk sits in the parent document, prepend it to the chunk, then embed and BM25-index the combined text.
- `INS-260410-4D86` RAG chunks lose the document-level context that determines whether they're relevant to a query, which is why retrieval fails even when the right chunk exists.
- `INS-260410-3F1A` Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.
- `INS-260403-BE4D` Including relevant background data (bios, papers, past interactions) in the right format and order can make or break prompt performance more than any clever technique.
- `INS-260409-BA55` RAG rediscovers connections on every query; a maintained wiki preserves them so knowledge compounds.
- `INS-260409-0D87` Under ~thousands of documents, a markdown vault plus Claude Code matches vector RAG without embeddings.
- `INS-260410-264E` If your corpus is under ~500 pages, just put the whole thing in the prompt and cache it — no RAG infrastructure required.

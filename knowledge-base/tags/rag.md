# Tag: rag

- `INS-260410-19DE` Smart agents use file paths, queries, and links to fetch data on demand — like humans use file systems and bookmarks rather than memorizing everything.
- `INS-260409-384A` Jerry Liu: even with a hypothetically infinite context window, dumping enterprise data (gigabytes to terabytes) into every model call is 'very inefficient... you have these network transfer costs' — long context helps at personal scale but does not obsolete retrieval at enterprise scale.
- `INS-260410-2F8D` Have Claude write a 50-100 token explanation of where each chunk sits in the parent document, prepend it to the chunk, then embed and BM25-index the combined text.
- `INS-260409-FA5E` Jerry Liu — the builder of LlamaIndex, the most widely used RAG framework — says 'RAG is basically just a hack, but it turns out it's a very good hack' because it keeps models frozen and patches them with external algorithms for retrieval that are guaranteed to be suboptimal relative to an end-to-end trained system.
- `INS-260409-8DA0` Jerry Liu: 'If you're just doing top-k similarity... you might not be able to be fetching the right information from the documents' — meaning the retrieval step is where most RAG systems fail, not the synthesis step, and naive cosine similarity over embeddings is structurally insufficient for complex queries.
- `INS-260410-4D86` RAG chunks lose the document-level context that determines whether they're relevant to a query, which is why retrieval fails even when the right chunk exists.
- `INS-260410-3F1A` Loading a document once into the prompt cache and referencing it across many chunk-context calls drops the cost of LLM-generated chunk annotations to roughly $1 per million document tokens.
- `INS-260403-BE4D` Including relevant background data (bios, papers, past interactions) in the right format and order can make or break prompt performance more than any clever technique.
- `INS-260409-BA55` RAG rediscovers connections on every query; a maintained wiki preserves them so knowledge compounds.
- `INS-260409-0D87` Under ~thousands of documents, a markdown vault plus Claude Code matches vector RAG without embeddings.
- `INS-260410-264E` If your corpus is under ~500 pages, just put the whole thing in the prompt and cache it — no RAG infrastructure required.

# Tag: llm-architecture

- `INS-260323-8D12` Hallucinations stem from how LLMs break information into tokens and reconstruct probable relationships — this is a fundamental design flaw, not a bug to be patched.
- `INS-260409-FA5E` Jerry Liu — the builder of LlamaIndex, the most widely used RAG framework — says 'RAG is basically just a hack, but it turns out it's a very good hack' because it keeps models frozen and patches them with external algorithms for retrieval that are guaranteed to be suboptimal relative to an end-to-end trained system.
- `INS-260330-00D5` LLMs accumulate small errors token-by-token that compound into incoherence, needing gestalt-level self-review like authors revising drafts.

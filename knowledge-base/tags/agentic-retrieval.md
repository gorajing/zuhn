# Tag: agentic-retrieval

- `INS-260627-4946` Instead of one embed-search-top-K pass and hoping the answer is in the chunks, give the agent the query plus search tools and let it run as many searches as it needs.
- `INS-260625-05FF` Per Jeff Dean, even a trillion-token context window needs stage retrieval — 'you don't need a trillion at once, you need the right million' — so retrieval becomes an iterative search-reason-fetch loop, not a one-shot vector call.

# Tag: deepseek-v4

- `INS-260625-8319` Because DeepSeek-V4 made long contexts cheap, the team could reduce the RL penalty for long generations and push test-time compute into a new 'Max mode' that delivered a clear capability jump.
- `INS-260625-A7C5` DeepSeek-V4's two attention mechanisms both compress global context heavily yet always concatenate the raw most-recent tokens, because recent tokens carry the most next-token signal.
- `INS-260514-F277` Three views: recent uncompressed (last 128 tokens), moderately compressed with sparse retrieval, heavily compressed (128:1) for big picture. Same as how a student studies.

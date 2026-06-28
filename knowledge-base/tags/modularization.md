# Tag: modularization

- `INS-260514-A02E` Carve repeated GTM logic into 'function tables' in Clay (f.cleanFullName, f.validateEmail) — callers write a row to the function table, wait for the LLM, then look up the cleaned output, so one prompt update propagates to all callers.
- `INS-260627-30F9` Treat your codebase as infrastructure designed for the agent: modularize, follow known patterns, remove hidden magic, and enforce it all with linting so the agent's strengths compound.
- `INS-260411-A093` Industries start vertically integrated because coordination costs are high for complex new products, then dis-integrate into horizontal layers as modularization reduces coordination needs -- but premature modularization is catastrophic.

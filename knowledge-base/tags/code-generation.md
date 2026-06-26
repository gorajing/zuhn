# Tag: code-generation

- `INS-260625-0492` Studio's agent builds reusable 'widgets' — sandboxed JavaScript with embedded queries — so once created, refreshing the dashboard re-runs deterministic code, not the LLM.
- `INS-260625-2E86` The reason generative UI defaults to generating JSON ('Jason Bender') and rendering it is that most platforms lack a primitive to safely render untrusted code — solve that and you can just generate React.
- `INS-260403-8953` AI that writes code can act on the physical world through software systems, making it far more dangerous than AI that only talks.
- `INS-260409-E44A` Code was the ideal wedge product for Anthropic because it opened enterprise IT budgets and because 'if you can generate code, you can generate anything else by generating the code that creates it.'
- `INS-260605-E174` The dynamic flexibility that makes Python/TS easy for LLMs to write is the same flexibility that makes it easy for them to ship mistakes.
- `INS-260625-E1CB` Don't run 10,000 pages through an LLM to extract fields—have the LLM write a parser once, then execute the script, cutting roughly 99% of tokens while gaining determinism.
- `INS-260626-715B` Generate code once, then run the deterministic artifact on every request instead of regenerating with an LLM each time.

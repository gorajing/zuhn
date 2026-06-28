# Tag: extraction

- `INS-260514-90F1` Companies extracting labor concessions via 'AI will replace you' messaging when the AI can't actually do the work yet.
- `INS-260628-DD24` Use an LLM graph transformer for the first extraction pass, then interview the domain expert to prune spurious relationships, because the taxonomy's correctness caps downstream answer quality.
- `INS-260628-2FE3` Most extraction tools do extraction well but dump a CSV/JSON, forcing operators to manually transform and push downstream—BlackRock's template engine instead encodes interfield dependencies (a callable bond requires call date and call price), QC checks, and a low-code transform/execute workflow so the pipeline runs end-to-end.
- `INS-260626-BD97` The paper's component analysis finds that coverage-preserving extraction can beat more selective extraction for downstream answerability.
- `INS-260628-47B1` A vanilla corporate bond extracts fine with an in-context model on a small document, but 10,000-page prospectuses blow past million-token limits—so BlackRock chooses and mixes strategies (in-context, RAG, chain-of-thought) per instrument rather than standardizing on one.
- `INS-260627-4411` A bare 'summarize this call' prompt yields a messy narrative paragraph, so use few-shot templates to force separate bullet lists, classify against a predefined enum of call reasons, and require the model to output why it chose each classification.
- `INS-260628-62C4` BlackRock cut complex-app build time from 3–8 months to a couple of days by exposing prompt/template/strategy/transform components in a sandbox that domain experts operate themselves, then auto-spinning the result into an app via a cloud-native 'app factory.'
- `INS-260330-5D8A` Supercritical fluids bypass the destructive surface tension of evaporation by eliminating the liquid-gas boundary altogether.

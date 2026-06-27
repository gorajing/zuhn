# Tag: eval-infrastructure

- `INS-260627-8213` For routing evals, store the prompt/features with every model outcome, or you cannot test the actual router.
- `INS-260627-8392` Frontier models will hijack eval infrastructure to pass tests without doing the real work, so pair test-based correctness with a consensus LLM-as-judge that flags reward hacking at runtime.

# Tag: context-caching

- `INS-260605-13F9` Cache long files for repeated queries to save ~90%, and budget ~1920 tokens per minute of audio (~9 hours in a 1M window).
- `INS-260605-9925` Don't let plugins block before an event/LLM call; instead wait a bounded window (~200ms) for optional enrichment and proceed regardless, so a slow plugin degrades quality rather than breaking the system.

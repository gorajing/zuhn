# Tag: caching

- `INS-260330-81A7` Cache the encoder output once, run only the decoder per target language — critical for one-to-many translation at scale
- `INS-260329-C1A4` Four-layer caching (browser, server-side, database, CDN) with appropriate write policies at each level compounds latency reductions far beyond any single cache.
- `INS-260330-F5A1` Store the result of expensive computations and reuse them instead of recomputing from scratch.
- `INS-260329-F0DE` Pull-based CDNs auto-fetch on first request (good for regularly updated sites); push-based CDNs require manual upload (good for large, rarely changed files).
- `INS-260329-4842` Write-back cache gains speed by risking data loss on crash; write-through guarantees consistency but is slower; write-around optimizes reads but has cold-cache penalties — every caching decision is a durability bet.

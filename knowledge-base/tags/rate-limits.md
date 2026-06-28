# Tag: rate-limits

- `INS-260626-354E` Concurrency plans should read live provider limits before fan-out.
- `INS-260628-32EF` Providers rate-limit to keep each user within a cache-hit-rate band that keeps GPUs efficient, so a token subscription is really a purchase of cache KB slots in token storage.
- `INS-260320-D3D5` Process items sequentially in n8n batch loops to respect API rate limits -- pull from a queue (e.g., Google Sheets rows), process one at a time, and skip already-completed items.

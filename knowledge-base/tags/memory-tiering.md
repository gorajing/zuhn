# Tag: memory-tiering

- `INS-260628-F195` Holding large KV caches for long TTLs needs a fast dedicated tier (e.g. NVMe-backed) because DRAM is size-limited and compute-coupled, and any tier too slow to feed the GPU yields cache hits that arrive too late to matter.

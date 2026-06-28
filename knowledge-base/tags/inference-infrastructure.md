# Tag: inference-infrastructure

- `INS-260325-F981` Month-long agents will need entirely new inference systems — current serving stacks cannot handle persistent execution.
- `INS-260628-F195` Holding large KV caches for long TTLs needs a fast dedicated tier (e.g. NVMe-backed) because DRAM is size-limited and compute-coupled, and any tier too slow to feed the GPU yields cache hits that arrive too late to matter.

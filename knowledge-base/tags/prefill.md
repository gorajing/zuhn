# Tag: prefill

- `INS-260325-E62D` Agentic inference shifts compute from decode-heavy to prefill-heavy with larger shared cache needs.
- `INS-260605-A95C` Because prefill is compute-bound and decode is memory-bound, the optimal local setup pairs a compute-dense device (e.g. an Nvidia Spark/RTX) running prefill with a high-bandwidth device (e.g. a Mac) running decode — mirroring data-center co-design.

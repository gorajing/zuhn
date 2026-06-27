# Tag: acceptance-rate

- `INS-260627-8F78` Acceptance of code completions collapses once latency exceeds ~1 second, so any in-the-wild model comparison must balance latency across models or it measures speed, not quality.
- `INS-260605-1B9D` Don't trust offline evals to predict user value — gate model experiments behind production traffic sampling and watch acceptance rate and latency.

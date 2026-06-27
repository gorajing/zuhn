# Tag: timeouts

- `INS-260627-51BE` Because each step runs on its own serverless function, platform timeouts apply per-step — long workflows just split into more steps, and concurrency is bounded only by the provider.

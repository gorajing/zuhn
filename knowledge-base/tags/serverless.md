# Tag: serverless

- `INS-260627-AA19` Persisting each step's output means a workflow can sleep indefinitely and resume by replaying the deterministic loop over cached state — no process stays alive.
- `INS-260625-D73A` Agents run many parallel experiments that mostly fail, so infra must be dirt-cheap to start and able to autoscale to production only for the few that take off.
- `INS-260605-D2C7` STDIO MCP servers require users to edit a config file with a JSON command string to spawn a local process, while HTTP servers install by pasting a name and URL — and fit serverless edge functions cleanly.
- `INS-260627-51BE` Because each step runs on its own serverless function, platform timeouts apply per-step — long workflows just split into more steps, and concurrency is bounded only by the provider.
- `INS-260605-D78B` Serverless GPU containers remove the need to own and isolate a training cluster, letting you fan out, kill unpromising runs, and pay only for what you use.
- `INS-260625-E19F` The first serverless request sat in queue ~41s for cold start while execution took only ~1.5s, so production latency requires configuring always-on 'active' workers.
- `INS-260625-8E1D` Use cheaper reserved pods (or a low serverless worker count) while experimenting; pay the serverless premium only when variable load demands auto-scaling across hundreds of GPUs.
- `INS-260625-1C5E` Serverless GPU endpoints spin workers down when idle and bill per-second only while handling requests, inverting the always-on cost model for spiky workloads.
- `INS-260605-9A01` Deploy agent logic with zero infra by appending a 'dynamic worker configured' event whose payload is the reducer+after-append source, run in a spun-up worker, with API keys substituted into outbound headers so secrets never touch the log.
- `INS-260329-3EB6` AWS Lambda's auto-scaling model means you never under-provision, but the operational discipline shifts from capacity planning to cost monitoring and function optimization.
- `INS-260330-B771` Serverless platforms like Firebase eliminate the need for Docker, Kubernetes, Terraform, and manual server configuration — removing an entire skill domain from early-stage requirements.

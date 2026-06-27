# Tag: containers

- `INS-260627-05AD` If the code needs a file system, processes, or package installs, use a container; otherwise use a lightweight isolate — and most agents will use both at different steps.
- `INS-260605-DF82` For agents running real development tasks, prefer VMs over containers because containers leak across the isolation boundary and create noisy-neighbor compute contention.
- `INS-260605-74CC` Containerizing an AI agent gives reproducibility, secret isolation, infra portability, volume-backed backup, and a natural host sandbox that native installs lack.
- `INS-260410-303B` Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.

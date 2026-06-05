# Tag: containers

- `INS-260605-DF82` For agents running real development tasks, prefer VMs over containers because containers leak across the isolation boundary and create noisy-neighbor compute contention.
- `INS-260410-303B` Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.

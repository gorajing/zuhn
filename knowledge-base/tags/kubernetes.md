# Tag: kubernetes

- `INS-260605-5EE0` Because a containerized agent is just another application, you can prototype it locally and lift the identical artifact to Kubernetes/OpenShift when you need security and scale.
- `INS-260605-9976` One-agent-per-task scaling means provisioning full pods per agent — wasteful, but a full computer makes an agent far more capable than a constrained sandbox.
- `INS-260605-2E60` Mount credentials as secret-refs (Podman/Kubernetes secret pointing to an agent-level secret-ref) so keys never appear as raw env vars in logs or config.
- `INS-260605-74CC` Containerizing an AI agent gives reproducibility, secret isolation, infra portability, volume-backed backup, and a natural host sandbox that native installs lack.
- `INS-260410-303B` Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.

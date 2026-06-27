# Tag: on-policy

- `INS-260627-63F2` CWM's async RL eliminates pipeline stalls by queuing many checkpoints into samplers and many trajectories into trainers, so neither side waits — and it stays near-on-policy because high data volume absorbs the staleness.

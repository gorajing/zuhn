# Tag: policy-staleness

- `INS-260627-D73F` Pipeline RL dedicates separate GPU pools to sampling and training and pushes new weights to samplers mid-sample, so GPUs never wait.
- `INS-260627-DC49` More tolerated staleness means fewer idle GPUs but higher importance-ratio variance, which can make RL learning diverge — so the speed ceiling is set by the algorithm, not the hardware.

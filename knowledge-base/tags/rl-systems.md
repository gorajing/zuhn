# Tag: rl-systems

- `INS-260627-FF6C` In synchronous RL, step time is dictated by the longest sample, so a heavy completion-time tail leaves most GPUs idle.
- `INS-260627-D73F` Pipeline RL dedicates separate GPU pools to sampling and training and pushes new weights to samplers mid-sample, so GPUs never wait.

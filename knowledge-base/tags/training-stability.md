# Tag: training-stability

- `INS-260624-6B2C` Numerical mismatch between serving and training kernels can destabilize large RL loops.
- `INS-260627-FCAE` Small batch sizes let environment randomness and a narrow slice of opponents dominate each weight update, reinforcing suboptimal strategies and causing unstable training or collapse.
- `INS-260627-DC49` More tolerated staleness means fewer idle GPUs but higher importance-ratio variance, which can make RL learning diverge — so the speed ceiling is set by the algorithm, not the hardware.

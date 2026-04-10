# Tag: stateful-layers

- `INS-260410-F08E` BatchNorm layers harbor hidden state (running stats, train/eval mode, cross-batch coupling) that silently corrupts outputs when any one of them is misconfigured, making them a top source of subtle deep-learning bugs.

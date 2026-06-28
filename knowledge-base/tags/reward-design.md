# Tag: reward-design

- `INS-260627-6792` Give credit only when the real goal is met (tests pass), but make the surrounding signal continuous so the model has a gradient to climb.
- `INS-260625-ECB6` Because SWE-RL scores patches against the one merged PR, it may penalize correct fixes that differ from how the human originally solved it.
- `INS-260627-0EEE` RFT works on tiny datasets, so the hard part stops being collecting data and becomes specifying a good, unhackable reward.
- `INS-260410-46CA` Capabilities unlock domain by domain based on how cleanly you can construct a verifiable reward signal, not on general intelligence improvements.
- `INS-260625-8BC8` SWE-RL sidesteps the unverifiability of real-world bug fixes by rewarding patch similarity to the actual merged PR rather than running the code.
- `INS-260627-AFD7` The meta-controller's value depends entirely on training it well under sparse rewards — that training, not the strategies it picks, is where the difficulty moves.
- `INS-260627-F7E7` Expect the model to game your reward — inspect rollouts, enumerate the exploits, and penalize each one before trusting the score.

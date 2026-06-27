# Tag: annotation

- `INS-260627-4D26` Each annotation should state why a trace passed or failed (e.g. 'non-compliant: approved the cancellation without verifying it met the airline's cancellation rules'), because without that reasoning the optimizer would have to rediscover the policy from scratch — usually impossible.
- `INS-260605-1A91` Keep humans in the loop by having them define reward rubrics and judge scenarios once, not by running iterative annotation campaigns that are expensive and that nobody actually wants to do.
- `INS-260627-9981` Treat the judge as a hallucinating component too — label a data set by hand, then run a code/match eval that measures whether the judge's labels agree with the human labels, and improve the judge where they diverge.
- `INS-260626-7EA8` ElevenLabs employs 1000+ voice coaches, musicians, and artists to annotate not just the 'what' of audio but the 'how' — emotion, voice description, music description — a deliberate bet that won't return value for 12-24 months.

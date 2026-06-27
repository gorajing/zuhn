# Tag: on-device-ai

- `INS-260605-0748` On-device inference fits sensitive data, personalization, offline use, and short-context tasks like translation — because prompts never leave the device, work offline, and carry no inference cost.
- `INS-260626-8DD1` Models around 300-350M parameters run fast and efficiently enough to be triggered inside iOS Shortcuts for routine text-processing automation.
- `INS-260605-7B83` A useful on-device model is 3-4GB, so shipping it once at the system level and letting every app share it is the only way the economics work.
- `INS-260605-F064` Because capable on-device models only run on recent flagship devices, ship hybrid inference that runs locally where possible and falls back to the cloud to keep your feature reachable everywhere.
- `INS-260605-6588` 100B+ parameter and omni models now run at usable speeds on consumer Macs and iPhones, turning cloud subscriptions into a choice rather than a necessity.
- `INS-260626-3408` Recent iPhones run quantized small models like Gemma 4 at ~40 tok/s, moving the real constraint from speed to the 1-3 GB model download.
- `INS-260626-9883` For phone-sized models, 4-bit is the practical floor and 8-bit the ceiling; below 4-bit, output quality drops sharply.
- `INS-260605-4375` Like GPS and Wi-Fi before it, on-device inference has real battery cost — so the platform attributes it to the responsible app and lets users choose, rather than blocking the capability.

# Tag: apple-silicon

- `INS-260605-4835` MLX deliberately runs on the GPU rather than the Neural Engine because reaching the Neural Engine requires Core ML, whose private-API friction makes it impractical for developers today.
- `INS-260605-6588` 100B+ parameter and omni models now run at usable speeds on consumer Macs and iPhones, turning cloud subscriptions into a choice rather than a necessity.
- `INS-260626-3408` Recent iPhones run quantized small models like Gemma 4 at ~40 tok/s, moving the real constraint from speed to the 1-3 GB model download.
- `INS-260514-D023` A 128GB M5 Pro Max + 3-model local stack (~71GB RAM) now runs a 9,700-note personal AI wiki without cloud — the hardware floor for serious local knowledge work has dropped to single-laptop.

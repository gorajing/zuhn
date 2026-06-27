# Tag: scientific-ml

- `INS-260505-709C` Terminal-Bench scores went 20%→80% in 18 months once it became standard. Terminal-Bench Science aims to do the same for science.
- `INS-260627-1C9C` DeepMind's weather models beat gold-standard physics simulations — GenCast was more accurate 97% of the time and produced a 15-day forecast in 8 minutes on one chip instead of hours on a supercomputer.
- `INS-260505-050B` One model + interpretation methods = microscope (understand) + design tool (intervene) — two products from one training run.
- `INS-260505-A0F7` Old paradigm: train on simulations. New paradigm: pretrain on raw real data, fine-tune on the few labels you have.
- `INS-260603-6E59` Satish (Stanford atmospheric FM): on sequences (language/code) we're ~80-90% there because a word encodes sparse information you can mask and recover; but encoding even a 1024×1024 image into a vector loses enormous information, and video/spectral data is worse — the breakthrough for high-dimensional data hasn't happened.
- `INS-260505-584B` Tolias's brain models are 6M parameters and outperform big generic models because they have the right priors built in.
- `INS-260505-9723` Train the model, see what it doesn't know, do targeted experiments to fill those holes.
- `INS-260505-5A06` Prediction: AI guesses, formal verification confirms. Inference: AI must be calibrated against simulators because mistakes propagate to wrong scientific conclusions.
- `INS-260505-5510` A model that predicts well but is uninterpretable is also a model that fails unpredictably outside its training distribution.
- `INS-260603-4387` Satish: people create lat/long grids and throw them at a model expecting it to learn — but 1° of latitude is ~111km at the equator and near-0 at the poles, so the representation itself is distorted; his team instead represents Earth as a dense triangular geodesic grid so information density per cell is consistent.

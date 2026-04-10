# Tag: softmax

- `INS-260410-58D6` Pushing weights toward zero makes logits uniform, which makes softmax output a uniform distribution — exactly what adding large fake counts does in the count-based framework.
- `INS-260410-85F5` The sqrt(d_k) divisor in attention keeps variance at 1 so softmax stays diffuse at init instead of collapsing to one-hot.
- `INS-260410-C2E6` Compute the expected initial loss (e.g., -log(1/n_classes)) and compare against your network's actual iteration-zero loss — a mismatch reveals an initialization bug worth fixing before anything else.

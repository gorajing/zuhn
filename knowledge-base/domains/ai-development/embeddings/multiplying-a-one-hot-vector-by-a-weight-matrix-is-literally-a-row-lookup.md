---
id: INS-260410-72EC
domain: ai-development
topic: embeddings
title: Multiplying a one-hot vector by a weight matrix is literally a row lookup
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - one-hot
  - matrix-multiplication
  - implementation
sources:
  - type: youtube
    title: 'The spelled-out intro to language modeling: building makemore'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=PaCmpygFfXo'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A one-hot vector at index i times matrix W selects row i of W — so the fancy
    'input layer' of a character-level neural net is mechanically the same
    operation as row indexing into a count table.
  standard: >-
    When you one-hot encode token i and multiply by weight matrix W, the matrix
    multiplication zeros out every row except row i, and the output is literally
    W[i]. This is not an approximation or an intuition — it is what the math
    exactly reduces to. That means the 'input layer' of a character-level neural
    net and the 'row lookup' of a count-based bigram model are performing the
    same computation; only the values in the table differ (logits vs. counts).


    The practical consequence is that you should never actually implement token
    inputs as one-hot matrices multiplied by a weight matrix. Every modern deep
    learning framework provides an embedding layer (torch.nn.Embedding,
    tf.keras.layers.Embedding) that just does the row lookup directly — saving
    both the memory of materializing the one-hot tensor and the compute of the
    mostly-zero matmul. The pedagogical value of showing one-hot + linear is
    that it reveals embeddings are not a separate concept from fully-connected
    layers; they are the degenerate case where inputs are sparse indicator
    vectors. Every time you hear 'embedding', substitute 'row of a weight matrix
    indexed by token id' and nothing is lost.
stance: >-
  One-hot encoding followed by a linear layer is mathematically identical to
  indexing into a table, which means the first layer of any token-based neural
  net is really an embedding lookup in disguise.
related:
  - INS-260329-7A6A
  - INS-260330-5F36
  - INS-260326-CAAB
  - INS-260410-5EE7
  - INS-260330-6BBD
---
When you one-hot encode token i and multiply by weight matrix W, the matrix multiplication zeros out every row except row i, and the output is literally W[i]. This is not an approximation or an intuition — it is what the math exactly reduces to. That means the 'input layer' of a character-level neural net and the 'row lookup' of a count-based bigram model are performing the same computation; only the values in the table differ (logits vs. counts).

The practical consequence is that you should never actually implement token inputs as one-hot matrices multiplied by a weight matrix. Every modern deep learning framework provides an embedding layer (torch.nn.Embedding, tf.keras.layers.Embedding) that just does the row lookup directly — saving both the memory of materializing the one-hot tensor and the compute of the mostly-zero matmul. The pedagogical value of showing one-hot + linear is that it reveals embeddings are not a separate concept from fully-connected layers; they are the degenerate case where inputs are sparse indicator vectors. Every time you hear 'embedding', substitute 'row of a weight matrix indexed by token id' and nothing is lost.

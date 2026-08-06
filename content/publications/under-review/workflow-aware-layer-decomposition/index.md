---
title: "Workflow-Aware Structured Layer Decomposition for Illustration Production"
authors:
  - me
  - Dongchi Li
  - Keiichi Sawada
  - Haoran Xie
date: 2026-03-16
publication_types: ["manuscript"]

abstract: >-
  Recent generative image editing methods adopt layered representations to mitigate the entangled nature of raster images and improve controllability, typically relying on object-based segmentation. However, such strategies may fail to capture the structural and stylized properties of human-created images, such as anime illustrations. To solve this issue, we propose a workflow-aware structured layer decomposition framework tailored to the illustration production of anime artwork.
  Inspired by the creation pipeline of anime production, our method decomposes the illustration into semantically meaningful production layers, including line art, flat color, shadow, and highlight. To decouple all these layers, we introduce lightweight layer semantic embeddings to provide specific task guidance for each layer. Furthermore, a set of layer-wise losses is incorporated to supervise the training process of individual layers.
  To overcome the lack of ground-truth layered data, we construct a high-quality illustration dataset that simulated the standard anime production workflow. Experiments demonstrate that the accurate and visually coherent layer decompositions were achieved by using our method. We believe that the resulting layered representation further enables downstream tasks such as recoloring and embedding texture, supporting content creation, and illustration editing.

summary: We introduce a workflow-aware framework that decomposes anime illustrations into line art, flat color, shadow, and highlight layers for controllable production and editing.

tags:
  - Image Generation & Editing

featured: true

image:
  placement: 2

hugoblox:
  ids:
    arxiv: 2603.14925
    doi: 10.48550/arXiv.2603.14925

links:
  - type: pdf
    url: https://arxiv.org/pdf/2603.14925
  - type: code
    url: https://github.com/zty0304/Anime-layer-decomposition

build:
  render: always
  list: always
---

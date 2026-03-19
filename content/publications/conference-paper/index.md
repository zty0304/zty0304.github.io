---
title: 'Workflow-Aware Structured Layer Decomposition for Illustration Production'

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Dongchi Li
  - Keiichi Sawada
  - Haoran Xie

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2026-03-16'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: N/A
publication_short: N/A

abstract: Recent generative image editing methods adopt layered representations to mitigate the entangled nature of raster images and improve controllability, typically relying on object-based segmentation. However, such strategies may fail to capture the structural and stylized properties of human-created images, such as anime illustrations. To solve this issue, we propose a workflow-aware structured layer decomposition framework tailored to the illustration production of anime artwork. Inspired by the creation pipeline of anime production, our method decomposes the illustration into semantically meaningful production layers, including line art, flat color, shadow, and highlight. To decouple all these layers, we introduce lightweight layer semantic embeddings to provide specific task guidance for each layer. Furthermore, a set of layer-wise losses is incorporated to supervise the training process of individual layers. To overcome the lack of ground-truth layered data, we construct a high-quality illustration dataset that simulated the standard anime production workflow. Experiments demonstrate that the accurate and visually coherent layer decompositions were achieved by using our method. We believe that the resulting layered representation further enables downstream tasks such as recoloring and embedding texture, supporting content creation, and illustration editing.

# Summary. An optional shortened abstract.
summary: We propose a workflow-aware layer decomposition for anime images to improve controllability and editing.

tags:
  - Anime Layer Decomposition

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    arxiv: 2603.14925

# Custom links
links:
  # - type: pdf
  #   url: ""
  - type: code
    url: https://github.com/zty0304/Anime-layer-decomposition
  - type: dataset
    url: https://github.com/zty0304/Anime-layer-decomposition
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: https://github.com/HugoBlox/kit
  # - type: video
  #   url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ""
---

<!-- > [!NOTE]
> Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the _Slides_ button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->

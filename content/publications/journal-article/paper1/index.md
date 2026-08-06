---
title: "Sketch-Guided Scene Image Generation with Diffusion Model"
authors:
  - me
  - Xiaoxuan Xie
  - Xusheng Du
  - Haoran Xie
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
date: '2025-04-30'

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Computers & Graphics, 129, 104226"
publication_short: ""

abstract: Text-to-image models showcase the impressive ability to generate high-quality and diverse images. However, the transition from freehand sketches to complex scene images with multiple objects remains challenging in computer graphics. In this study, we propose a novel sketch-guided scene image generation framework, decomposing the task of scene image generation from sketch inputs into object-level cross-domain generation and scene-level image construction steps. We first employ a pre-trained diffusion model to convert each single object drawing into a separate image, which can infer additional image details while maintaining the sparse sketch structure. To preserve the conceptual fidelity of the foreground during scene generation, we invert the visual features of object images into identity embeddings for scene generation. For scene-level image construction, we generate the latent representation of the scene image using the separated background prompts. Then, we blend the generated foreground objects with the background image guided by the layout of sketch inputs. We infer the scene image on the blended latent representation using a global prompt with the trained identity tokens to ensure the foreground objects’ details remain unchanged while naturally composing the scene image. Through qualitative and quantitative experiments, we demonstrated that the proposed method’s ability surpasses the state-of-the-art approaches for scene image generation from hand-drawn sketches.

# Summary. An optional shortened abstract.
summary: We propose a sketch-guided framework that generates scene images by combining object-level generation with scene-level composition.

tags:
- Image Generation & Editing
featured: True

image:
  placement: 2

content_meta:
  content_type: "Computers & Graphics"

hugoblox:
  ids:
    arxiv: 2407.06469
    doi: 10.1016/j.cag.2025.104226

links:
  # - type: pdf
  #   url: https://www.sciencedirect.com/science/article/pii/S0097849325000676
  - type: pdf
    url: https://dl.acm.org/doi/10.1016/j.cag.2025.104226
  # - type: dataset
  #   url: ""
  # - type: poster
  #   url: ""
  # - type: project
  #   url: ""
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: ""
  # - type: video
  #   url: ""

---

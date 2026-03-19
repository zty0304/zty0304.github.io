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
publication: "Computer & Graphics"
publication_short: ""

abstract: Text-to-image models showcase the impressive ability to generate high-quality and diverse images. However, the transition from freehand sketches to complex scene images with multiple objects remains challenging in computer graphics. In this study, we propose a novel sketch-guided scene image generation framework, decomposing the task of scene image generation from sketch inputs into object-level cross-domain generation and scene-level image construction steps. We first employ a pre-trained diffusion model to convert each single object drawing into a separate image, which can infer additional image details while maintaining the sparse sketch structure. To preserve the conceptual fidelity of the foreground during scene generation, we invert the visual features of object images into identity embeddings for scene generation. For scene-level image construction, we generate the latent representation of the scene image using the separated background prompts. Then, we blend the generated foreground objects with the background image guided by the layout of sketch inputs. We infer the scene image on the blended latent representation using a global prompt with the trained identity tokens to ensure the foreground objects’ details remain unchanged while naturally composing the scene image. Through qualitative and quantitative experiments, we demonstrated that the proposed method’s ability surpasses the state-of-the-art approaches for scene image generation from hand-drawn sketches.

# Summary. An optional shortened abstract.
summary: We propose a sketch-guided framework that generates scene images by combining object-level generation with scene-level composition.

tags:
- Image Generation
featured: True

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

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#   focal_point: ""
#   preview_only: false


# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ""
---

<!-- > [!NOTE]
> Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
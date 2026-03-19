---
title: "Fine-Grained Anime Hair Synthesis via Flow Line"
authors:
- me
date: "2026-01-30"

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: "N/A"
publication_short: "N/A"

abstract: Anime hairstyles convey the personality and emotion of a character. However, specifying these hairstyles typically requires precise sketches created by professional artists, making the process challenging for amateurs. To address this issue, we propose a sketch-guided anime hair synthesis framework that enables fine-grained control over wisp structure and color using loose flow lines, which are commonly employed in the early stages of anime hairstyle design. Compared with silhouette sketches or text-based inputs adopted in prior works, our flow line sketches explicitly encode anime hair structure and color while remaining sparse and easy to draw. Our approach introduces a flow line representation that specifies both the desired wisp structure and color intent. Our method further introduces a dual-LoRA design with dedicated structure and color branches, combined with region-aware supervision, to prevent interference between geometry and appearance during hairstyle synthesis. User-provided flow lines are used to guide a dual-branch DiT model to synthesize the desired hairstyles. To support training and evaluation, we construct a dataset consisting of paired character images before and after hairstyle synthesis, together with flow line sketches specifying the target hairstyle. We compare our method with existing methods on diverse flow lines and hairstyles, and the results show that our method synthesizes visually natural and high-fidelity anime hair. Further experiments show robustness to sketch quality and good generalization to production-level character hairstyle synthesis. Finally, user preference studies confirm that our results are more natural and better adhere to the synthesis guidance.

# Summary. An optional shortened abstract.
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Anime Hair Editing

featured: false

# hugoblox:
#   ids:
#     arxiv: 1512.04133v1

links:
# - type: preprint
#   provider: arxiv
#   id: 1512.04133v1
# - type: code
#   url: https://github.com/HugoBlox/kit
# - type: slides
#   url: https://www.slideshare.net/
# - type: dataset
#   url: "#"
# - type: poster
#   url: "#"
# - type: source
#   url: "#"
# - type: video
#   url: https://youtube.com
# - type: custom
#   label: Custom Link
#   url: http://example.org

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ""
---

<!-- This work is driven by the results in my [previous paper](/publications/conference-paper/) on LLMs.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->

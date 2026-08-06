---
title: "Structure-Color Disentangled Anime Hair Synthesis via Flow Line"
type: publication-international-conference
authors:
- me
- I-Chao Shen
- Haoran Xie
date: "2026-12-01"

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "SIGGRAPH Asia 2026"
publication_details: "Conditionally accepted"
publication_short: "SIGGRAPH Asia 2026"

abstract: >-
  Anime hairstyles convey the personality and emotion of a character.
  Existing input modalities are not well suited for anime hair editing, as they may fail to capture the fine-grained wisp structure that characterizes anime hairstyles. To solve this issue, we introduce flow line, a sparse representation that directly encodes wisp geometry and color intent. Flow lines align naturally with the loose gestural strokes used in early-stage anime character design.
  We further present a flow line guided hair synthesis framework for anime characters, featuring dual-LoRA design with dedicated structure and color branches, combined with region-aware supervision, to prevent interference between geometry and appearance during hairstyle synthesis.
  To support training and evaluation, we construct a novel dataset consisting of paired character images before and after hairstyle synthesis, together with flow line sketches specifying the desired hairstyle.
  We compare our method with existing methods on diverse flow lines and hairstyles, and the results show that our method synthesizes visually natural and high-fidelity anime hair.
  Finally, we introduce the potential applications of hair transfer and manipulation, in addition to a flow line extraction method that enables these applications with our hair synthesis framework.
  We believe our work establishes a practical and friendly pipeline for controllable anime hair synthesis, with potential to support broader sketch-guided content generation tasks.

# Summary. An optional shortened abstract.
summary: We introduce flow lines and a dual-LoRA framework for fine-grained, controllable anime hair synthesis with disentangled structure and color guidance.

content_meta:
  content_type: "SIGGRAPH Asia 2026"

tags:
- Image Generation & Editing

featured: true

image:
  placement: 2

build:
  render: always
  list: always

# hugoblox:
#   ids:
#     arxiv: 1512.04133v1

links:
---

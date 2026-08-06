---
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: news-timeline
    id: news
    content:
      title: News
    design:
      css_class: homepage-news-section

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 1
      fill_image: false
      css_class: featured-publications

  - block: markdown
    id: awards
    content:
      title: Awards
      text: |-
        - Best Paper Award — IEVC, March 2026
        - Best Paper Award — NICOGRAPH International, June 2025
        - Best Paper Award — NICOGRAPH International, June 2024
        - Best Presentation Award — CGIP, January 2024
    design:
      columns: '1'
      css_class: homepage-awards-section

  - block: collaborators
    id: collaborators
    content:
      title: Collaborators
    design:
      css_class: homepage-collaborators-section
---

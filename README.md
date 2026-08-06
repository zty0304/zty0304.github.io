# Tianyu Zhang — Personal Academic Website

Source code for [zty0304.github.io](https://zty0304.github.io/), built with Hugo and Hugo Blox.

## Local preview

Install the frontend dependencies once:

```powershell
pnpm install
```

Start the local development server:

```powershell
hugo server --disableFastRender
```

Then open <http://localhost:1313/>.

## Main content

- Homepage: `content/_index.md`
- Profile: `data/authors/me.yaml`
- Publications: `content/publications/`
- Blog: `content/blog/`
- Gallery photos: `assets/gallery/`
- Collaborators: `data/collaborators.yaml`
- News: `data/news.yaml`
- Custom styles: `assets/css/custom.css`

## Adding a gallery album

Create a direct subfolder under `assets/gallery/` and place images inside it:

```text
assets/gallery/AlbumName/
├── AlbumName (1).jpg
├── AlbumName (2).jpg
└── AlbumName (3).jpg
```

The folder becomes `/gallery/albumname/` during the next full Hugo build. Restart the local Hugo server after creating a new album folder.

## Production build

```powershell
pnpm run build
```

Pushes to the `main` branch are built and deployed to GitHub Pages by GitHub Actions.

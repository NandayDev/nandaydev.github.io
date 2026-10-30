## nanday.dev

Source of my personal website, [www.nanday.dev](https://www.nanday.dev): a single static `index.html` page plus a Jekyll blog served at `/blog/`.

- `index.html`, `llms.txt`, `robots.txt`, `sitemap.xml` and the other files in the root are published as they are.
- `_jekyll/` holds the blog, built into `/blog/` by GitHub Actions.
- `redirect/`, `youtube/`, `live/`, `donazioni/` are short-link redirects (see `create_redirect.py`).

On every push to `main`, the workflow in `.github/workflows/dart.yml` assembles the site and pushes it to [NandayDev/nandaydev.github.io](https://github.com/NandayDev/nandaydev.github.io).

# Reliquary

A standalone [Dioramas](https://github.com/blendi-remade/dioramas) world. This repository opens **Reliquary** directly at `/`.

```bash
npm ci
npm run dev
```

Open http://127.0.0.1:5190/. The site code is JavaScript in `examples/reliquary/`, with the shared Three.js engine in `src/core/`. Vite builds the site; Tailwind utilities are available without resetting the original CSS. GSAP and Lenis power its motion and scrolling.

Code: MIT. Generated assets: CC BY 4.0. See `LICENSE` and `ASSET-LICENSES.md`.

## Cloudflare Pages

Connect this repository to a Pages project. Use `npm run build` as the build command, `dist` as the output directory, and `/` as the root directory. The Pages configuration is in `wrangler.jsonc`. Use a Node.js version supported by Vite 8 (22.12 or newer).

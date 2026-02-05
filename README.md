# Rio Registry

A custom shadcn registry for reusable components by Rio Edwards.

## Components

- `video-player`
- `image-overlay`
- `lightbox-image` (includes `lightbox-video` support)

## Local development

```bash
npm install
npm run dev
```

Registry JSON endpoints are served at:

- `http://localhost:3000/r/registry.json`
- `http://localhost:3000/r/lightbox-image.json`

## Build registry artifacts

```bash
npm run registry:build
```

This regenerates files in `public/r/` for shadcn CLI consumption.

## Using this registry in another project

Add to `components.json`:

```json
{
  "registries": {
    "rio": {
      "url": "https://your-registry-domain.com/r"
    }
  }
}
```

Then install items:

```bash
npx shadcn@latest add @rio/video-player
npx shadcn@latest add @rio/image-overlay
npx shadcn@latest add @rio/lightbox-image
```

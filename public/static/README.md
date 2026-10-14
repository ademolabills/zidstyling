# Zidstyling media drop folders

Add client-approved website assets under `public/static/`. Keep the original copies elsewhere too.

- `ready-to-wear/images/` — product and lookbook photos
- `ready-to-wear/videos/` — short lookbook clips (MP4 recommended)
- `collections/images/` — bespoke collection photography
- `fabrics/images/` — fabric swatches and textile photography
- `atelier/images/` — studio, process, and behind-the-scenes photography

Use simple lowercase filenames, for example `aso-oke-set-01.jpg` or `lookbook-intro.mp4`. Avoid spaces and special characters. Images can be JPG, PNG, or WebP; videos should be MP4. The browser serves these files from `/static/...` (for example `/static/ready-to-wear/images/aso-oke-set-01.jpg`).

Creating a folder does not automatically place the media on the website. In the next step, we will choose the photos and videos together and add their paths and captions to the Ready-to-Wear page in `src/main.tsx`.

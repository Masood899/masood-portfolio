# Project screenshots

Put your actual project screenshots in this folder. Use descriptive names, for example:

- `zubayda-cover.png` — storefront screenshot used on the homepage and project page
- `zubayda-checkout.png` — checkout screenshot in the project gallery
- `zubayda-admin.png` — admin/product management screenshot in the project gallery
- `metarecom-cover.png` — MetaRecom dashboard or result screen
- `lulc-cover.png` — LULC segmentation/result screen

Then open `src/data/projects.ts` and add `coverImage` and/or `gallery` to the matching project object.
The public URL starts with `/projects/`, not `/public/projects/`.

Example:

```ts
coverImage: "/projects/zubayda-cover.png",
gallery: [
  { src: "/projects/zubayda-checkout.png", alt: "Zubayda checkout page", caption: "Checkout flow" },
  { src: "/projects/zubayda-admin.png", alt: "Zubayda product management screen", caption: "Product management" }
],
```

Use screenshots you own or are authorized to publish. Do not add confidential Unisys material.

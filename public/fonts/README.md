# Kurdish font replacement

The production site currently self-hosts **Noto Sans Arabic Variable** through the `@fontsource-variable/noto-sans-arabic` package. It is open-source, supports Sorani Kurdish characters and does not call an external font service.

To replace it with the final brand typeface:

1. Export the licensed font as `ZaneKurdish.woff2` into this folder.
2. Uncomment the `@font-face` block at the top of `app/globals.css`.
3. Run `npm run build` and review Kurdish headings, form fields, numbers and punctuation on mobile and desktop.

The CSS variable is already ordered as:

`"Zane Kurdish", "Noto Sans Arabic Variable", Tahoma, Arial, sans-serif`

Only use a font whose license permits web embedding.

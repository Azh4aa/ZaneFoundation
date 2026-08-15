# Kurdish font replacement

The site currently uses a safe Kurdish/Arabic fallback stack. For a consistent
brand rendering on every device, add your licensed webfont here as:

`ZaneKurdish.woff2`

Then uncomment the `@font-face` block at the top of `app/globals.css`. A strong
open-source starting point is **Noto Kufi Arabic**; a licensed Rabar family is
also a good Kurdish editorial choice. Use WOFF2 for performance.


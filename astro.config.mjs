// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  i18n: {
    defaultLocale: "en", // Default language
    locales: ["en", "tc", "sc"], // Your 3 languages
    routing: {
      prefixDefaultLocale: true, // Prefix all locales, including default
    },
  },
});

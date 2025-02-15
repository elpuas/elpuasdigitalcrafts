import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://elpuasdigitalcrafts.com',
    i18n: {
        defaultLocale: "en",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: false
        }
    }
});

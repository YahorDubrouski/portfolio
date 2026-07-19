import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    site: process.env.SITE_URL,

    integrations: [
        tailwind(),
        sitemap({
            filter: (page) => !page.includes('/cv/'),
        }),
    ],

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
        routing: {
            prefixDefaultLocale: false,
        },
    },

    adapter: cloudflare()
});
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
                serif: ['"Source Serif 4"', 'Georgia', 'serif'],
            },
            colors: {
                background: 'var(--background)',
                surface: {
                    DEFAULT: 'var(--surface)',
                    muted: 'var(--surface-muted)',
                },
                border: {
                    DEFAULT: 'var(--border)',
                    strong: 'var(--border-strong)',
                },
                body: 'var(--text)',
                muted: 'var(--text-muted)',
                heading: 'var(--heading)',
                accent: {
                    DEFAULT: 'var(--accent)',
                    hover: 'var(--accent-hover)',
                    muted: 'var(--accent-muted)',
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    hover: 'var(--primary-hover)',
                },
                /* Legacy stone-* classes map to tokens — change palette in tokens.css only */
                stone: {
                    50: 'var(--background)',
                    100: 'var(--surface-muted)',
                    200: 'var(--border)',
                    300: 'var(--border-strong)',
                    400: 'var(--text-muted)',
                    500: 'var(--text-muted)',
                    600: 'var(--text)',
                    700: 'var(--primary)',
                    800: 'var(--heading)',
                    900: 'var(--heading)',
                    950: 'var(--primary-hover)',
                },
            },
        },
    },
    plugins: [],
};

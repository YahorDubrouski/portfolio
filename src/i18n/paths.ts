import { defaultLocale, type Locale } from './locales';

export function stripLocalePrefix(pathname: string): string {
    const match = pathname.match(/^\/(ru)(\/|$)/);
    if (!match) {
        return pathname || '/';
    }

    const rest = pathname.slice(match[1].length + 1);
    return rest ? rest : '/';
}

export function getLocaleFromPath(pathname: string): Locale {
    if (pathname.startsWith('/ru')) {
        return 'ru';
    }

    return defaultLocale;
}

export function localizedPath(pathname: string, locale: Locale): string {
    const normalizedPath = stripLocalePrefix(pathname);
    const suffix = normalizedPath === '/' ? '' : normalizedPath;

    if (locale === defaultLocale) {
        return suffix || '/';
    }

    return `/ru${suffix}`;
}

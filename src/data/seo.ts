import { contactLinks } from './contactLinks';
import { localizedPath, stripLocalePrefix } from '../i18n/paths';
import { defaultLocale, locales, type Locale } from '../i18n/locales';

/** Set SITE_URL at build time (e.g. https://example.com). Used by astro.config and absolute SEO URLs. */
export function getSiteOrigin(): string | undefined {
    const site = import.meta.env.SITE as string | undefined;
    return site?.replace(/\/$/, '') || undefined;
}

export function getCanonicalUrl(pathname: string, siteOrigin = getSiteOrigin()): string | undefined {
    if (!siteOrigin) return undefined;
    const path = stripLocalePrefix(pathname);
    return new URL(localizedPath(path, defaultLocale), siteOrigin).href;
}

export function getHreflangAlternates(
    pathname: string,
    siteOrigin = getSiteOrigin(),
): { locale: Locale; href: string }[] {
    if (!siteOrigin) return [];
    const path = stripLocalePrefix(pathname);
    return locales.map((locale) => ({
        locale,
        href: new URL(localizedPath(path, locale), siteOrigin).href,
    }));
}

const personSameAs = contactLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith('http'));

/** Schema.org Person — homepage only; helps name-based discovery. */
export function buildPersonJsonLd(siteOrigin: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Yahor Dubrouski',
        url: siteOrigin,
        image: `${siteOrigin}/images/yahor-dubrouski.png`,
        jobTitle: 'Technical Lead',
        sameAs: personSameAs,
    };
}

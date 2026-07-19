import type { NavItem } from './navigation';
import { proofNavItems } from './navigation';
import { localizedPath } from '../i18n/paths';
import type { Locale } from '../i18n/locales';
import type { HireRole } from '../i18n/translations/site';
import { getRoleCertificatesPath, getRoleOutcomesPath, getRoleProjectsPath, getRoleReviewsPath, getRoleLandingConfig, hasRoleProjectsPage } from './roleLanding';

const hireRoles = new Set<HireRole>(['backend', 'full-stack', 'devops', 'ai-automation']);

export function getHireRoleFromPath(pathname: string): HireRole | null {
    const normalized = pathname.replace(/^\/ru/, '') || '/';
    const match = normalized.match(/^\/hire\/([^/]+)/);
    if (!match) {
        return null;
    }
    const role = match[1] as HireRole;
    return hireRoles.has(role) ? role : null;
}

export function getHireLandingPath(role: HireRole): string {
    return `/hire/${role}`;
}

function stripLocale(path: string): string {
    return path.replace(/^\/ru/, '') || '/';
}

/** Rewrites `/`, `/projects`, `/outcomes`, `/reviews`, and `/certificates` when browsing `/hire/{role}/…`. */
export function resolveHireContextPath(path: string, pathname: string, locale: Locale): string {
    const role = getHireRoleFromPath(pathname);
    if (!role) {
        return localizedPath(path, locale);
    }

    const normalizedPath = stripLocale(path);

    if (normalizedPath === '/') {
        return localizedPath(getHireLandingPath(role), locale);
    }

    if (normalizedPath === '/projects' || normalizedPath.startsWith('/projects?')) {
        const roleProjectsPath = getRoleProjectsPath(role);
        if (roleProjectsPath) {
            const query = normalizedPath.includes('?') ? normalizedPath.slice(normalizedPath.indexOf('?')) : '';
            return localizedPath(`${roleProjectsPath}${query}`, locale);
        }
    }

    if (normalizedPath === '/outcomes' || normalizedPath.startsWith('/outcomes?')) {
        const roleOutcomesPath = getRoleOutcomesPath(role);
        if (roleOutcomesPath) {
            const query = normalizedPath.includes('?') ? normalizedPath.slice(normalizedPath.indexOf('?')) : '';
            return localizedPath(`${roleOutcomesPath}${query}`, locale);
        }
    }

    if (normalizedPath === '/reviews' || normalizedPath.startsWith('/reviews?')) {
        const roleReviewsPath = getRoleReviewsPath(role);
        if (roleReviewsPath) {
            const query = normalizedPath.includes('?') ? normalizedPath.slice(normalizedPath.indexOf('?')) : '';
            return localizedPath(`${roleReviewsPath}${query}`, locale);
        }
    }

    if (normalizedPath === '/certificates' || normalizedPath.startsWith('/certificates?')) {
        const roleCertificatesPath = getRoleCertificatesPath(role);
        if (roleCertificatesPath) {
            const query = normalizedPath.includes('?') ? normalizedPath.slice(normalizedPath.indexOf('?')) : '';
            return localizedPath(`${roleCertificatesPath}${query}`, locale);
        }
    }

    return localizedPath(path, locale);
}

export function resolveBrandHref(pathname: string, locale: Locale): string {
    return resolveHireContextPath('/', pathname, locale);
}

/** Internal hrefs on hire pages — e.g. outcome proof links to `/projects?stack=…`. */
export function resolveContextualInternalHref(href: string, pathname: string, locale: Locale): string {
    if (href.startsWith('http://') || href.startsWith('https://')) {
        return href;
    }

    const normalizedHref = stripLocale(href);
    if (normalizedHref === '/projects' || normalizedHref.startsWith('/projects?')) {
        return resolveHireContextPath(normalizedHref, pathname, locale);
    }

    const projectMatch = normalizedHref.match(/^\/projects\/([^/?#]+)$/);
    if (projectMatch) {
        return getProjectCaseStudyHref(projectMatch[1], pathname, locale);
    }

    if (normalizedHref === '/outcomes' || normalizedHref.startsWith('/outcomes?')) {
        return resolveHireContextPath(normalizedHref, pathname, locale);
    }

    if (normalizedHref === '/reviews' || normalizedHref.startsWith('/reviews?')) {
        return resolveHireContextPath(normalizedHref, pathname, locale);
    }

    if (normalizedHref === '/certificates' || normalizedHref.startsWith('/certificates?')) {
        return resolveHireContextPath(normalizedHref, pathname, locale);
    }

    return href.startsWith('/') ? localizedPath(href, locale) : href;
}

export function isHireContextNavActive(pathname: string, navPath: string): boolean {
    const normalized = stripLocale(pathname);
    const role = getHireRoleFromPath(pathname);

    if (navPath === '/') {
        if (role) {
            return normalized === getHireLandingPath(role);
        }
        return normalized === '/';
    }

    if (navPath === '/projects' && role) {
        const roleProjectsPath = getRoleProjectsPath(role);
        if (roleProjectsPath) {
            return (
                normalized === roleProjectsPath ||
                normalized.startsWith(`${roleProjectsPath}/`) ||
                normalized.startsWith(`${roleProjectsPath}?`)
            );
        }
    }

    if (navPath === '/outcomes' && role) {
        const roleOutcomesPath = getRoleOutcomesPath(role);
        if (roleOutcomesPath) {
            return normalized === roleOutcomesPath || normalized.startsWith(`${roleOutcomesPath}?`);
        }
    }

    if (navPath === '/reviews' && role) {
        const roleReviewsPath = getRoleReviewsPath(role);
        if (roleReviewsPath) {
            return normalized === roleReviewsPath || normalized.startsWith(`${roleReviewsPath}?`);
        }
    }

    if (navPath === '/certificates' && role) {
        const roleCertificatesPath = getRoleCertificatesPath(role);
        if (roleCertificatesPath) {
            return normalized === roleCertificatesPath || normalized.startsWith(`${roleCertificatesPath}?`);
        }
    }

    return normalized === navPath || normalized.startsWith(`${navPath}/`);
}

export function getProofNavItemsForPath(pathname: string): NavItem[] {
    const role = getHireRoleFromPath(pathname);
    if (!role) {
        return proofNavItems;
    }

    const exclude = new Set(getRoleLandingConfig(role)?.footerProofExclude ?? []);
    if (exclude.size === 0) {
        return proofNavItems;
    }

    return proofNavItems.filter((item) => !exclude.has(item.key));
}

export function getProjectCaseStudyHref(projectId: string, pathname: string, locale: Locale): string {
    const role = getHireRoleFromPath(pathname);
    if (role && hasRoleProjectsPage(role)) {
        return localizedPath(`/hire/${role}/projects/${projectId}`, locale);
    }
    return localizedPath(`/projects/${projectId}`, locale);
}

export function resolveCaseStudyBackHref(pathname: string, locale: Locale): string {
    const role = getHireRoleFromPath(pathname);
    const roleProjectsPath = role ? getRoleProjectsPath(role) : null;
    if (roleProjectsPath) {
        return localizedPath(roleProjectsPath, locale);
    }
    return localizedPath('/projects', locale);
}

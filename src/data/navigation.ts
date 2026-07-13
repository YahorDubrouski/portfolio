import type { Locale } from '../i18n/locales';
import { localizedPath } from '../i18n/paths';
import { isHireContextNavActive, resolveBrandHref, resolveHireContextPath, getProofNavItemsForPath } from './hireNavigation';

export interface NavItem {
    key: string;
    path: string;
    labelKey: keyof typeof labelKeys;
}

const labelKeys = {
    home: 'home',
    projects: 'projects',
    experience: 'experience',
    capabilities: 'capabilities',
    about: 'about',
    workWithMe: 'workWithMe',
    certificates: 'certificates',
    reviews: 'reviews',
    outcomes: 'outcomes',
} as const;

export const mainNavItems: NavItem[] = [
    { key: 'home', path: '/', labelKey: 'home' },
    { key: 'projects', path: '/projects', labelKey: 'projects' },
];

export const proofNavItems: NavItem[] = [
    { key: 'outcomes', path: '/outcomes', labelKey: 'outcomes' },
    { key: 'reviews', path: '/reviews', labelKey: 'reviews' },
    { key: 'projects', path: '/projects', labelKey: 'projects' },
    { key: 'experience', path: '/experience', labelKey: 'experience' },
    { key: 'certificates', path: '/certificates', labelKey: 'certificates' },
];

export function navHref(path: string, locale: Locale): string {
    return localizedPath(path, locale);
}

export function isNavActive(pathname: string, path: string): boolean {
    return isHireContextNavActive(pathname, path);
}

export { resolveBrandHref, resolveHireContextPath, getProofNavItemsForPath };

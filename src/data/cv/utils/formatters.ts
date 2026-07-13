import type { CvDocument } from '../types';

export function trackedHeading(text: string): string {
    return text.replace(/\s+/g, ' ').trim().toUpperCase();
}

export function trackedRoleTitle(text: string): string {
    return trackedHeading(text);
}

export function displayName(first: string, last: string): string {
    const capitalize = (part: string) =>
        part
            .trim()
            .toLowerCase()
            .replace(/(^|\s|[-'])\w/g, (match) => match.toUpperCase());

    return `${capitalize(first)} ${capitalize(last)}`;
}

export function buildPhotoAlt(cv: CvDocument): string {
    return `${displayName(cv.name.first, cv.name.last)} profile photo`;
}

export function buildPageTitle(cv: CvDocument): string {
    return `${displayName(cv.name.first, cv.name.last)} — ${cv.roleTitle}`;
}

export function buildPageDescription(cv: CvDocument): string {
    return cv.summary.slice(0, 160);
}

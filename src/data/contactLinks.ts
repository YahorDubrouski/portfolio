import { getVerifiedCvPdf } from './cv/pdf-manifest';
import { getDefaultTemplate } from './cv/registry';

export const contactLinks = [
    {
        id: 'telegram',
        href: 'https://t.me/YahorDubrouski',
        label: 'Telegram',
        inHeader: true,
    },
    {
        id: 'email',
        href: 'mailto:yahordubrouski@gmail.com',
        label: 'Gmail',
        inHeader: true,
    },
    {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/yahor-dubrouski/',
        label: 'LinkedIn',
        inHeader: true,
    },
    {
        id: 'github',
        href: 'https://github.com/YahorDubrouski',
        label: 'GitHub',
        inHeader: false,
    },
] as const;

export const headerContactLinks = contactLinks.filter((link) => link.inHeader);
export const footerContactLinks = contactLinks;

export type CvAudience = 'backend' | 'full-stack' | 'devops' | 'ai-automation' | 'default';

export const cvLinks = [
    {
        id: 'solution-architect',
        label: 'Solution Architect CV',
        href: '/cv/solution-architect',
        audiences: ['default'] as const,
    },
    {
        id: 'devops',
        label: 'DevOps & Cloud CV',
        href: '/cv/devops',
        audiences: ['devops'] as const,
    },
    {
        id: 'backend-devops',
        label: 'Senior Backend & DevOps CV',
        href: '/cv/backend-devops',
        audiences: ['backend', 'ai-automation'] as const,
    },
    {
        id: 'full-stack',
        label: 'Full Stack Developer CV',
        href: '/cv/full-stack',
        audiences: ['full-stack'] as const,
    },
] as const;

export type CvLink = (typeof cvLinks)[number];

export function resolveCvAudience(pathname: string): CvAudience {
    const path = pathname.replace(/^\/ru/, '') || '/';

    if (path.startsWith('/hire/')) {
        const role = path.split('/')[2];
        if (role === 'devops') return 'devops';
        if (role === 'backend') return 'backend';
        if (role === 'full-stack') return 'full-stack';
        if (role === 'ai-automation') return 'ai-automation';
    }

    return 'default';
}

export function getCvForAudience(audience: CvAudience): CvLink {
    const match = cvLinks.find((cv) => (cv.audiences as readonly string[]).includes(audience));
    return match ?? cvLinks[0];
}

/** Prefer verified PDF path for download links; fall back to the web CV page. */
export function resolveCvDownloadHref(cv: CvLink): string {
    const pdf = getVerifiedCvPdf(cv.id, getDefaultTemplate(cv.id));
    return pdf?.publicPath ?? cv.href;
}

import type { CvTemplateId } from './templates';

export interface CvPdfRecord {
    /** Public URL path served from /public */
    publicPath: string;
    /** Set to true only after manual PDF review — controls the download button */
    verified: boolean;
}

export type CvPdfManifest = Record<string, Partial<Record<CvTemplateId, CvPdfRecord>>>;

/**
 * Registry of pre-built PDFs. Run `npm run cv:build-pdfs` to generate files,
 * review output under public/cv/pdf/, then set verified: true before publishing.
 */
export const cvPdfManifest: CvPdfManifest = {
    'backend-devops': {
        classic: {
            publicPath: '/cv/pdf/backend-devops/classic.pdf',
            verified: true,
        },
    },
    devops: {
        classic: {
            publicPath: '/cv/pdf/devops/classic.pdf',
            verified: true,
        },
    },
    'full-stack': {
        classic: {
            publicPath: '/cv/pdf/full-stack/classic.pdf',
            verified: true,
        },
    },
    'solution-architect': {
        classic: {
            publicPath: '/cv/pdf/solution-architect/classic.pdf',
            verified: true,
        },
    },
};

export function getCvPdfRecord(slug: string, templateId: CvTemplateId): CvPdfRecord | undefined {
    return cvPdfManifest[slug]?.[templateId];
}

export function getVerifiedCvPdf(slug: string, templateId: CvTemplateId): CvPdfRecord | undefined {
    const record = getCvPdfRecord(slug, templateId);
    return record?.verified ? record : undefined;
}

export function getCvPdfPublicPath(slug: string, templateId: CvTemplateId): string {
    return `/cv/pdf/${slug}/${templateId}.pdf`;
}

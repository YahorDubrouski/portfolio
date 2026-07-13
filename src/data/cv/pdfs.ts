import { existsSync } from 'node:fs';
import path from 'node:path';

import type { CvDocument } from './types';
import type { CvTemplateId } from './templates';
import { getVerifiedCvPdf } from './pdf-manifest';
import { displayName } from './utils/formatters';

export interface CvPdfDownload {
    href: string;
    filename: string;
}

export function buildPdfDownloadFilename(cv: CvDocument, templateId: CvTemplateId): string {
    const name = displayName(cv.name.first, cv.name.last).replace(/\s+/g, '-');
    const slug = cv.id.replace(/-/g, '_');
    return `${name}-${slug}-${templateId}.pdf`;
}

/** Returns download info when a verified PDF file exists on disk. */
export function getCvPdfDownload(
    slug: string,
    templateId: CvTemplateId,
    cv: CvDocument,
): CvPdfDownload | undefined {
    const record = getVerifiedCvPdf(slug, templateId);
    if (!record) {
        return undefined;
    }

    const filePath = path.join(process.cwd(), 'public', record.publicPath.replace(/^\//, ''));

    if (!existsSync(filePath)) {
        return undefined;
    }

    return {
        href: record.publicPath,
        filename: buildPdfDownloadFilename(cv, templateId),
    };
}

import { chromium } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

import { prepareCvPageForPdf } from './cv-pdf-prepare';
import { getCvPdfPublicPath } from '../src/data/cv/pdf-manifest';
import { getCvSlugs } from '../src/data/cv/registry';
import type { CvTemplateId } from '../src/data/cv/templates';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = process.env.CV_PDF_BASE_URL ?? 'http://127.0.0.1:4321';
const slug = process.env.CV_SLUG ?? 'backend-devops';
const template = (process.env.CV_TEMPLATE ?? 'classic') as CvTemplateId;

async function main() {
    if (!getCvSlugs().includes(slug)) {
        throw new Error(`Unknown CV slug: ${slug}`);
    }

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.emulateMedia({ media: 'print' });
    await page.goto(`${baseUrl}/cv/${slug}/${template}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('#cv-document');
    await page.addStyleTag({
        content:
            'html, body, .cv-preview-frame, .cv-pdf-root, .cv-page { background: #fff !important; box-shadow: none !important; }',
    });
    await prepareCvPageForPdf(page);

    const publicPath = getCvPdfPublicPath(slug, template);
    const out = path.join(root, 'public', publicPath.replace(/^\//, ''));

    await page.pdf({
        path: out,
        format: 'Letter',
        printBackground: true,
        preferCSSPageSize: false,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await browser.close();
    console.log('PDF written:', out);
}

main();

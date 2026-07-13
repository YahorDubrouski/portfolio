/**
 * Renders each CV profile + template pair to a PDF via Playwright.
 *
 * Workflow:
 * 1. npm run cv:build-pdfs
 * 2. Review files under public/cv/pdf/{slug}/{template}.pdf
 * 3. Set verified: true in src/data/cv/pdf-manifest.ts for approved PDFs
 */
import { spawn, type ChildProcess } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from '@playwright/test';

import { getCvTemplatePaths } from '../src/data/cv/registry';
import { getCvPdfPublicPath } from '../src/data/cv/pdf-manifest';
import { prepareCvPageForPdf } from './cv-pdf-prepare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const previewPort = 4322;
const previewUrl = `http://127.0.0.1:${previewPort}`;

async function waitForServer(url: string, timeoutMs = 60_000): Promise<void> {
    const started = Date.now();

    while (Date.now() - started < timeoutMs) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return;
            }
        } catch {
            // Server not ready yet
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    throw new Error(`Preview server did not start within ${timeoutMs}ms`);
}

function startPreview(): ChildProcess {
    return spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(previewPort)], {
        cwd: rootDir,
        stdio: 'pipe',
        shell: true,
    });
}

async function main(): Promise<void> {
    console.log('Building site…');
    await new Promise<void>((resolve, reject) => {
        const build = spawn('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit', shell: true });
        build.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`build failed (${code})`))));
    });

    const preview = startPreview();

    try {
        await waitForServer(previewUrl);
        console.log(`Preview ready at ${previewUrl}`);

        const browser = await chromium.launch();
        const page = await browser.newPage();

        for (const { slug, template } of getCvTemplatePaths()) {
            const pageUrl = `${previewUrl}/cv/${slug}/${template}`;
            const publicPath = getCvPdfPublicPath(slug, template);
            const outputPath = path.join(rootDir, 'public', publicPath.replace(/^\//, ''));

            await mkdir(path.dirname(outputPath), { recursive: true });

            console.log(`Generating ${publicPath} ← ${pageUrl}`);
            await page.emulateMedia({ media: 'print' });
            await page.goto(pageUrl, { waitUntil: 'networkidle' });
            await page.waitForSelector('#cv-document');
            await page.addStyleTag({
                content:
                    'html, body, .cv-preview-frame, .cv-pdf-root, .cv-page { background: #fff !important; box-shadow: none !important; }',
            });
            await prepareCvPageForPdf(page);

            await page.pdf({
                path: outputPath,
                format: 'Letter',
                printBackground: true,
                preferCSSPageSize: false,
                margin: { top: 0, right: 0, bottom: 0, left: 0 },
            });
        }

        await browser.close();
        console.log('\nDone. Review PDFs under public/cv/pdf/, then set verified: true in src/data/cv/pdf-manifest.ts');
    } finally {
        preview.kill('SIGTERM');
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

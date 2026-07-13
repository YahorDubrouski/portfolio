import type { Page } from '@playwright/test';

/** Strip card shadow/chrome so PDF is flat white edge-to-edge within margins. */
export async function prepareCvPageForPdf(page: Page): Promise<void> {
    await page.evaluate(() => {
        const cvPage = document.querySelector('.cv-page') as HTMLElement | null;
        if (cvPage) {
            cvPage.style.boxShadow = 'none';
        }

        for (const selector of ['html', 'body', '.cv-preview-frame', '.cv-pdf-root', '.cv-page']) {
            document.querySelectorAll(selector).forEach((node) => {
                const el = node as HTMLElement;
                el.style.background = '#fff';
                el.style.backgroundColor = '#fff';
            });
        }
    });
}

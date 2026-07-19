import { test, expect } from '@playwright/test';

const pages = [
    '/',
    '/experience',
    '/projects',
    '/projects/ai-planner',
    '/projects/arch-decisions',
    '/projects/arch-decisions-frontend',
    '/projects/arch-decisions-backend',
    '/projects/arch-decisions-backend-python',
    '/capabilities',
    '/certificates',
    '/reviews',
    '/hire/backend',
    '/hire/backend/projects',
    '/hire/backend/projects/arch-decisions-backend',
    '/hire/backend/outcomes',
    '/hire/backend/integrations',
    '/hire/backend/certificates',
    '/hire/devops',
    '/hire/devops/projects',
    '/hire/devops/outcomes',
    '/hire/devops/reviews',
    '/hire/full-stack',
    '/hire/full-stack/projects',
    '/hire/full-stack/outcomes',
    '/hire/full-stack/integrations',
    '/hire/full-stack/certificates',
    '/hire/ai-automation',
    '/ru',
    '/ru/projects',
];

for (const path of pages) {
    test(`page renders without errors: ${path}`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));

        const response = await page.goto(path, { waitUntil: 'networkidle' });
        expect(response?.status()).toBe(200);
        expect(errors).toEqual([]);

        await expect(page.locator('body')).toBeVisible();
        await expect(page.getByRole('banner')).toBeVisible();
        await expect(page.getByRole('contentinfo')).toBeVisible();
        await expect(page.locator('main')).toBeVisible();

        const title = await page.title();
        expect(title.length).toBeGreaterThan(0);
    });
}

test('home looks professional and includes core sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Yahor Dubrouski' })).toBeVisible();
    await expect(page.getByText('Solution Architect')).toBeVisible();
    await expect(page.getByText('Featured projects')).toBeVisible();
    await expect(page.getByText('Client feedback')).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'LinkedIn' })).toBeVisible();
});

test('russian locale route still renders', async ({ page }) => {
    await page.goto('/ru/projects');
    await expect(page).toHaveURL(/\/ru\/projects/);
    await expect(page.getByRole('banner')).toBeVisible();
});

test('project filters work', async ({ page }) => {
    await page.goto('/projects');
    const items = page.locator('.project-item');
    const initialCount = await items.count();
    expect(initialCount).toBeGreaterThan(0);

    const filterButtons = page.locator('.filter-btn');
    const secondFilter = filterButtons.nth(1);
    await secondFilter.click();

    const visibleCount = await items.evaluateAll((nodes) =>
        nodes.filter((node) => !node.classList.contains('hidden')).length,
    );
    expect(visibleCount).toBeGreaterThan(0);
    expect(visibleCount).toBeLessThanOrEqual(initialCount);
});

test('case study pages show project media with lightbox', async ({ page }) => {
    await page.goto('/projects/ai-planner');
    await expect(page.getByRole('heading', { name: 'n8n Automation Collection' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Prompt Hub' })).toBeVisible();
    await page.getByRole('button', { name: /Prompt Hub demo/i }).click();
    await expect(page.getByRole('dialog', { name: 'Full size image preview' })).toBeVisible();
    await page.getByRole('button', { name: 'Close full size image' }).click();
});

test('arch-decisions overview links to package case studies', async ({ page }) => {
    await page.goto('/projects/arch-decisions');
    await expect(page.getByRole('heading', { name: 'Architecture Decisions Platform' })).toBeVisible();
    for (const name of [
        'Tech stack',
        'UI journey',
        'Project structure',
        'Architecture at a glance',
        'Backend and frontend subprojects',
    ]) {
        await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    }

    await page.getByRole('link', { name: /Frontend · React/i }).click();
    await expect(page).toHaveURL(/\/projects\/arch-decisions-frontend/);
    await expect(page.getByRole('heading', { name: 'Architecture Decisions · Frontend' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Architecture decisions', exact: true })).toBeVisible();
});

test('arch-decisions monorepo case study shows diagram and package links', async ({ page }) => {
    await page.goto('/projects/arch-decisions');
    await expect(
        page.getByRole('img', { name: /Architecture Decisions|Express or FastAPI/i }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: /Backend · Express · Node/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Backend · FastAPI · Python/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'architecture.md →' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next photos' })).toBeVisible();
    await expect(page.getByRole('img', { name: /Home screen — start/i })).toBeVisible();
    await page.getByRole('button', { name: /Architecture Decisions|Express or FastAPI/i }).click();
    await expect(page.getByRole('dialog', { name: 'Full size image preview' })).toBeVisible();
});

test('arch-decisions backend case studies render practices', async ({ page }) => {
    await page.goto('/projects/arch-decisions-backend');
    await expect(page.getByRole('heading', { name: 'Architecture Decisions · Express' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Architecture decisions', exact: true })).toBeVisible();
    await expect(page.getByRole('img', { name: /Swagger UI/i })).toBeVisible();

    await page.goto('/projects/arch-decisions-backend-python');
    await expect(page.getByRole('heading', { name: 'Architecture Decisions · FastAPI' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Architecture decisions', exact: true })).toBeVisible();
    await expect(page.getByRole('img', { name: /Swagger UI/i })).toBeVisible();
});

test('arch-decisions express case study shows agreed sections', async ({ page }) => {
    await page.goto('/projects/arch-decisions-backend');
    for (const name of [
        'Tech stack',
        'Project structure',
        'Architecture decisions',
        'Async request flow',
        'OpenAPI / Swagger',
        'Tests',
        'Hardening',
    ]) {
        await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    }
    await expect(page.getByRole('link', { name: 'Read more →' })).toBeVisible();
    await expect(page.getByRole('img', { name: /async jobs|BullMQ|Client posts/i })).toBeVisible();
    await page.getByRole('button', { name: /Swagger UI/i }).click();
    await expect(page.getByRole('dialog', { name: 'Full size image preview' })).toBeVisible();
});

test('arch-decisions frontend case study shows agreed sections', async ({ page }) => {
    await page.goto('/projects/arch-decisions-frontend');
    for (const name of [
        'Tech stack',
        'Project structure',
        'Architecture decisions',
        'User actions flow',
        'UI journey',
        'Documents grid',
        'Tests',
        'Hardening',
    ]) {
        await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    }
    await expect(page.getByRole('link', { name: 'Read more →' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Form (useState) →' })).toBeVisible();
    await expect(page.getByRole('img', { name: /Home to Context|User flow/i })).toBeVisible();
    await expect(page.getByRole('img', { name: /Home screen — start/i })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next photos' })).toBeVisible();
    await expect(page.getByRole('img', { name: /filters and pagination/i })).toBeVisible();
    await page.getByRole('button', { name: /Open .*recommendations/i }).click();
    await expect(page.getByRole('dialog', { name: 'Full size image preview' })).toBeVisible();
});

test('frontend case study from backend keeps hire home and backend CV', async ({ page }) => {
    await page.goto('/hire/backend/projects/arch-decisions-frontend');

    await expect(
        page.getByRole('contentinfo').getByRole('link', { name: /Senior Backend/i }),
    ).toBeVisible();

    await page.getByRole('banner').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/projects\/?$/);
});

test('arch-decisions fastapi case study shows agreed sections', async ({ page }) => {
    await page.goto('/projects/arch-decisions-backend-python');
    for (const name of [
        'Tech stack',
        'Project structure',
        'Architecture decisions',
        'Async request flow',
        'OpenAPI / Swagger',
        'Tests',
        'Hardening',
    ]) {
        await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
    }
    await expect(page.getByRole('link', { name: 'Read more →' })).toBeVisible();
    await expect(page.getByRole('img', { name: /async jobs|Celery|Client posts/i })).toBeVisible();
    await page.getByRole('button', { name: /Swagger UI/i }).click();
    await expect(page.getByRole('dialog', { name: 'Full size image preview' })).toBeVisible();
});

test('fastapi case study from backend keeps hire home and backend CV', async ({ page }) => {
    await page.goto('/hire/backend/projects/arch-decisions-backend-python');

    await expect(
        page.getByRole('contentinfo').getByRole('link', { name: /Senior Backend/i }),
    ).toBeVisible();

    await page.getByRole('banner').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/projects\/?$/);
});

test('certificates page shows credential images', async ({ page }) => {
    await page.goto('/certificates');
    await expect(page.locator('img[alt*="Terraform Associate"]')).toBeVisible();
});

test('capabilities page filters skill proofs in URL', async ({ page }) => {
    await page.goto('/capabilities');
    await expect(page.getByRole('heading', { name: 'Skill proofs' })).toBeVisible();
    await expect(page.locator('.skill-proof-item')).toHaveCount(10);

    await page.locator('#skill-filters').getByRole('button', { name: 'Docker', exact: true }).click();
    await expect(page).toHaveURL(/skills=docker/);
    await expect(page.locator('.skill-proof-item:not(.hidden)')).toHaveCount(1);
    await expect(page.getByRole('heading', { name: 'Docker', exact: true })).toBeVisible();

    await page.locator('#skill-filters').getByRole('button', { name: 'Jenkins', exact: true }).click();
    await expect(page.locator('.skill-proof-item:not(.hidden)')).toHaveCount(2);

    await page.goto('/capabilities');
    await page.locator('#skill-filters').getByRole('button', { name: 'AWS', exact: true }).click();
    await expect(page.locator('.skill-proof-item:not(.hidden)')).toHaveCount(4);
});

test('devops projects page shows role-scoped projects and filters', async ({ page }) => {
    await page.goto('/hire/devops/projects');
    await expect(page.getByRole('heading', { name: 'DevOps projects' })).toBeVisible();

    const items = page.locator('.project-item');
    const initialCount = await items.count();
    expect(initialCount).toBeGreaterThan(0);

    const filterButtons = page.locator('#project-filters .filter-btn');
    expect(await filterButtons.count()).toBeGreaterThan(1);

    const secondFilter = filterButtons.nth(1);
    const filterSlug = await secondFilter.getAttribute('data-filter');
    await secondFilter.click();
    await expect(page).toHaveURL(new RegExp(`/hire/devops/projects\\?stack=${filterSlug}`));

    const visibleCount = await items.evaluateAll((nodes) =>
        nodes.filter((node) => !node.classList.contains('hidden')).length,
    );
    expect(visibleCount).toBeGreaterThan(0);
    expect(visibleCount).toBeLessThanOrEqual(initialCount);
});

test('devops hire context keeps navigation scoped', async ({ page }) => {
    await page.goto('/hire/devops/projects');

    await page.getByRole('banner').getByRole('link', { name: 'Yahor Dubrouski' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/?$/);

    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/projects/);

    await page.goto('/hire/devops');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/projects/);
});

test('backend hire landing and scoped navigation', async ({ page }) => {
    await page.goto('/hire/backend');
    await expect(page.getByRole('heading', { name: /Laravel APIs and microservices/i })).toBeVisible();

    await page.getByRole('contentinfo').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/projects/);
    await expect(page.getByRole('heading', { name: 'Backend projects' })).toBeVisible();

    await page.getByRole('banner').getByRole('link', { name: 'Yahor Dubrouski' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/?$/);

    await page.getByRole('contentinfo').getByRole('link', { name: 'Certificates' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/certificates/);
    await expect(page.getByRole('heading', { name: 'Backend certificates' })).toBeVisible();
});

test('full stack hire landing and scoped navigation', async ({ page }) => {
    await page.goto('/hire/full-stack');
    await expect(page.getByRole('heading', { name: /Laravel, React, and Magento/i })).toBeVisible();

    await page.getByRole('contentinfo').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/full-stack\/projects/);
    await expect(page.getByRole('heading', { name: 'Full stack projects' })).toBeVisible();

    await page.getByRole('banner').getByRole('link', { name: 'Yahor Dubrouski' }).click();
    await expect(page).toHaveURL(/\/hire\/full-stack\/?$/);

    await page.getByRole('contentinfo').getByRole('link', { name: 'Certificates' }).click();
    await expect(page).toHaveURL(/\/hire\/full-stack\/certificates/);
    await expect(page.getByRole('heading', { name: 'Full stack certificates' })).toBeVisible();
});

test('devops hire context scopes outcomes navigation', async ({ page }) => {
    await page.goto('/hire/devops');
    await page.getByRole('contentinfo').getByRole('link', { name: 'Outcomes' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/outcomes/);
    await expect(page.getByRole('heading', { name: 'DevOps outcomes' })).toBeVisible();
});

test('devops hire context scopes reviews navigation', async ({ page }) => {
    await page.goto('/hire/devops');
    await page.getByRole('link', { name: 'All reviews' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/reviews/);
    await expect(page.getByRole('heading', { name: 'DevOps reviews' })).toBeVisible();
    await expect(page.getByRole('main').locator('blockquote')).toHaveCount(3);

    await page.getByRole('banner').getByRole('link', { name: 'Yahor Dubrouski' }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/?$/);
});

test('case study opened from devops projects returns to role projects', async ({ page }) => {
    await page.goto('/hire/devops/projects/arch-decisions');
    await page.getByRole('link', { name: /Back to projects/i }).click();
    await expect(page).toHaveURL(/\/hire\/devops\/projects\/?$/);
});

test('case study from backend keeps hire home and backend CV', async ({ page }) => {
    await page.goto('/hire/backend/projects/arch-decisions-backend');

    await expect(
        page.getByRole('contentinfo').getByRole('link', { name: /Senior Backend/i }),
    ).toBeVisible();

    await page.getByRole('banner').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/projects\/?$/);

    await page.goto('/hire/backend/projects/arch-decisions-backend');
    await page.getByRole('banner').getByRole('link', { name: 'Yahor Dubrouski' }).click();
    await expect(page).toHaveURL(/\/hire\/backend\/?$/);
});

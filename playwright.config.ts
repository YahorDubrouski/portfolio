import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    use: {
        baseURL: 'http://127.0.0.1:4321',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    webServer: {
        command: 'npm run preview -- --host 127.0.0.1 --port 4321',
        port: 4321,
        reuseExistingServer: !process.env.CI,
        timeout: 120000,
    },
});

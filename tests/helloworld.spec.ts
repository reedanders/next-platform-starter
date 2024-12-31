import { test, expect } from '@playwright/test';

const BASE_URL = process.env.DEPLOY_URL || 'https://pedigreesync.netlify.app/';

test('test', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('heading', { name: 'Notes Data' }).click();
});
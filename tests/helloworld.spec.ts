import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pedigreesync.netlify.app/');
  await page.getByRole('heading', { name: 'Notes Data' }).click();
});
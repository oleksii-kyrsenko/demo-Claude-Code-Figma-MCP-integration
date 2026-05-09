import { test, expect } from '@playwright/test';

test('home page loads and displays heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('home page has Deploy Now and Documentation links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /deploy now/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /documentation/i })).toBeVisible();
});

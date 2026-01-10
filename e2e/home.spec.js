import { test, expect } from '@playwright/test';

// Home sahifasi uchun E2E test

test('Home sahifasi yuklanadi va asosiy elementlar ko‘rinadi', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/Azizjon/);
  await expect(page.getByText('Salom, Azizjonman')).toBeVisible();
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toBeVisible();
});

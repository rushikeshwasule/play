// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import { TestConfig } from '../testData/test.config'

test('Login Test using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(TestConfig.appUrl);
  await loginPage.enterUsername(TestConfig.username);
  await loginPage.enterPassword(TestConfig.password);
  await loginPage.clickLogin();

  // Example assertion (update based on your app)
  await expect(page).toHaveURL(/dashboard|home/);
});
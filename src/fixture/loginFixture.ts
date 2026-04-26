// src/fixtures/loginFixture.ts
import { test as base, expect } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import { TestConfig } from '../testData/test.config';

export const test = base.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.enterUsername(TestConfig.username);
    await loginPage.enterPassword(TestConfig.password);
    await loginPage.clickLogin();

    // wait for login success
    await page.waitForURL(/dashboard|home/);

    // provide logged-in page to tests
    await use(page);
  },
});

export { expect };
import { test, expect } from '@playwright/test';
import { AllJobPage } from '../page/AllJobPage';
import { TestConfig } from '../testData/test.config';
import { LoginPage5 } from '../page/LoginPage5';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage5(page);

  await page.goto(TestConfig.appUrl);

  await loginPage.fillUsername5(TestConfig.username);
  await loginPage.fillPassword5(TestConfig.password);

  await Promise.all([
    page.waitForNavigation(), // ✅ wait for redirect after login
    loginPage.clickLoginBtn5()
  ]);

  // ✅ optional: wait for dashboard/home element
  await page.waitForLoadState('networkidle');
});

test('Verify all job', async ({ page }) => {
  const allJobPage = new AllJobPage(page);

  await allJobPage.clickOnAllJobMenu();
  await allJobPage.clickOnCards();
  await page.waitForTimeout(5000);
});
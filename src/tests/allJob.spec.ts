// tests/allJob.spec.ts
import { test, expect } from '../fixture/loginFixture';
import { AllJobPage } from '../page/AllJobPage';

test.describe('All Jobs Feature', () => {

  test('should open All Jobs page', async ({ page }) => {
    const allJobPage = new AllJobPage(page);

    await allJobPage.clickOnAllJobMenu();
    await allJobPage.clickOnCards();

    await expect(page).toHaveURL("https://test2.jeeni.in/proctyx/get-job/237");
  });

});
import { test, expect } from '@playwright/test'
import { LoginPage5 } from '../page/LoginPage5'
import { TestConfig } from '../testData/test.config';
import { TestConfig5 } from '../testData/test.config5';

test('Login with valid inputs', async ({page})=> {
    const loginPage5 = new LoginPage5(page);

    await page.goto(TestConfig5.appURL4);
    await loginPage5.fillUsername5(TestConfig5.username4);
    await loginPage5.fillPassword5(TestConfig5.password4);
    await loginPage5.clickLoginBtn5()

    await expect(page).toHaveURL(/dashboard/);
})
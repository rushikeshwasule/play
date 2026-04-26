import { test, expect } from '@playwright/test';
import  LoginPage2 from '../page/LoginPage2';
import { TestConfig2 } from '../testData/test.config2';


test("Login Test with valid inputs", async ({page})=>{

    const loginPage2 = new LoginPage2(page);

    await page.goto(TestConfig2.appUrl1);
    await loginPage2.fillUserName2(TestConfig2.username1);
    await loginPage2.fillPassword2(TestConfig2.password1);
    await loginPage2.ClickBtn2();

    await expect(page).toHaveURL(/dashboard/);

})
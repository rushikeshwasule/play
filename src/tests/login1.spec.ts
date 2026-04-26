import { test, expect } from '@playwright/test';
import LoginPage1 from '../page/LoginPage1';
import { TestConfig1 } from '../testData/test.config1';

test('Login Test with valid inputs', async ({page})=>{
 const  loginPage1  = new LoginPage1(page);

 await page.goto(TestConfig1.appUrl1);
 await loginPage1.fillUserName1(TestConfig1.username1)
 await loginPage1.fillPassword1(TestConfig1.password1);
 await loginPage1.ClickLoginB();

 await expect(page).toHaveURL(/dashboard|home/);
})
import { test, expect } from '@playwright/test'
import LoginPage4 from '../page/LoginPage4'
import { TestConfig4 } from '../testData/test.config4';



test('Login with valid inputs',async ({page})=>{

 const loginPage4 = new LoginPage4(page);
 await page.goto(TestConfig4.appURL4);
 await loginPage4.fillUsername4(TestConfig4.username4);
 await loginPage4.fillPassword4(TestConfig4.password4);
 await loginPage4.clickLoginBtn4();

 await expect(page).toHaveURL(/dashboard/);
})
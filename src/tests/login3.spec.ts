import { test, expect } from '@playwright/test'
import LoginPage3 from '../page/LoginPage3'
import { TestConfig3 } from '../testData/test.config3';


test('Login Test with valid inputs', async ({page})=>{
 const loginpage3 = new LoginPage3(page);

 await page.goto(TestConfig3.appURL3);
 await loginpage3.fillUsername3(TestConfig3.username3);
 await loginpage3.fillPassword3(TestConfig3.password3);
 await loginpage3.ClickOnLogin();

 await expect(page).toHaveURL(/dashboard/)



})
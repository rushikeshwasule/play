import { test, expect } from "@playwright/test";
import LoginPage6 from "../page/LoginPage6";
import { TestConfig6 } from "../testData/test.config6";


test('Login with valid usernaem and password', async ({page})=>{
const loginPage6 = new LoginPage6(page);
await page.goto(TestConfig6.appURL6);
await loginPage6.fillUsername6(TestConfig6.username6);
await loginPage6.fillPassword6(TestConfig6.password6);
await loginPage6.clickLoginBtn6();

await expect(page).toHaveURL(/dashboard/);

})
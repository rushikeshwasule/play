import {test as base, expect } from '@playwright/test'
import LoginPage from '../page/LoginPage'
import { TestConfig } from '../testData/test.config';


export const test = base.extend({
page: async ({page}, use) =>{

    const loginPage7 = new LoginPage(page);

    await page.goto(TestConfig.appUrl)
    await loginPage7.enterUsername(TestConfig.username);
    await loginPage7.enterPassword(TestConfig.password);
    await loginPage7.clickLogin()

    await page.waitForURL(/dashboard|home/);

    await use(page);

},
})
export {expect};
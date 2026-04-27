import { test, expect } from '../fixture/loginFixtture1'
//import { test, expect } from '../fixture/loginFixture';
import LoginPage from '../page/LoginPage';
import { AllJobPage } from '../page/AllJobPage';


test.describe("All Test caes for login", ()=>{
    test("All jopbs", async({page})=>{
        const allJobPage = new AllJobPage(page);
        
            await allJobPage.clickOnAllJobMenu();
            await allJobPage.clickOnCards();
        
            await expect(page).toHaveURL("https://test2.jeeni.in/proctyx/get-job/237");
    });
});
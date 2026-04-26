import { Page, Locator } from '@playwright/test'

export default class LoginPage2{
// variable
private page: Page;
readonly username2: Locator;
readonly password2: Locator;
readonly loginBtn2: Locator;


//const
constructor(page: Page){
    this.page = page;
    this.username2 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password2 = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn2 = page.getByRole('button', { name: 'Login' });

}

//action
async fillUserName2(username2:string){
    await this.username2.fill(username2);
}

async fillPassword2(password2:string){
    await this.password2.fill(password2);
}

async ClickBtn2(){
    await this.loginBtn2.click();
}

}
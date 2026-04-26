import { Page, Locator } from '@playwright/test'
import LoginPage from './LoginPage'

export default class LoginPage1{
// veriable
private page: Page;
readonly username1: Locator;
readonly password1: Locator;
readonly loginButton1: Locator;

// constructor
constructor(page: Page){
    this.page = page;
    this.username1 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password1 = page.getByRole('textbox', { name: 'Password' });
    this.loginButton1 = page.getByRole('button', { name: 'Login' });


}


// action
async fillUserName1(username1:string){
await this.username1.fill(username1)
}

async fillPassword1(password1:string){
await this.password1.fill(password1)
}

async ClickLoginB(){
await this.loginButton1.click();
}

}
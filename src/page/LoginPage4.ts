import { Page, Locator } from '@playwright/test'

export default class LoginPage4{
// veriable
private page: Page;
readonly username4: Locator;
readonly password4: Locator;
readonly LoginBtn4: Locator;


// const
constructor(page: Page){
    this.page = page;
    this.username4 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password4 = page.getByRole('textbox', { name: 'Password' });
    this.LoginBtn4 = page.getByRole('button', {name: 'Login'});
}
 
// action

async fillUsername4(username4:string){
    await this.username4.fill(username4);
}

async fillPassword4(password4:string){
    await this.password4.fill(password4);
}

async clickLoginBtn4(){
    await this.LoginBtn4.click()
}


}
import { Page, Locator } from "@playwright/test";

export default class LoginPage6{
// veriable
private page:Page;
readonly username6: Locator;
readonly password6: Locator;
readonly loginBtn6: Locator;


// const
constructor(page: Page){
    this.page = page;

    this.username6 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password6 = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn6 = page.getByRole('button', {name: 'Login'});

}

//action
async fillUsername6(username6: string){
    await this.username6.fill(username6)
}

async fillPassword6(password6: string){
    await this.password6.fill(password6)
}

async clickLoginBtn6(){
    await this.loginBtn6.click()
}

}
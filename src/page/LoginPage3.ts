import { Page, Locator } from "@playwright/test";


export default class LoginPage3{
// variable
private page: Page;
readonly username3: Locator;
readonly password3: Locator;
readonly LoginBtn3: Locator;

// constructor
constructor(page: Page){
    this.page = page;
    this.username3 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password3 = page.getByRole('textbox', { name: 'Password' });
    this.LoginBtn3 = page.getByRole('button', {name: 'Login'});
    
}

//action

async fillUsername3(username3: string){
await this.username3.fill(username3)
}
async fillPassword3(password3:string){
await this.password3.fill(password3)
}

async ClickOnLogin(){
await this.LoginBtn3.click()
}


}
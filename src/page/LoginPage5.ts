import { Page, Locator} from '@playwright/test'

export class LoginPage5{
// veri
private page: Page;
readonly username5 : Locator;
readonly password5 : Locator;
readonly LoginBtn5 : Locator;


// cons
constructor(page: Page){
this.page = page;
    this.username5 = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password5 = page.getByRole('textbox', { name: 'Password' });
    this.LoginBtn5 = page.getByRole('button', {name: 'Login'});

}

//action
async fillUsername5(username1: string){
    await this.username5.fill(username1)
}

async fillPassword5(password5: string){
    await this.password5.fill(password5);
}

async clickLoginBtn5(){
    await this.LoginBtn5.click()
}








}
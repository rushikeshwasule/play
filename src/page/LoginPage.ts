// src/pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';
import { TestConfig } from '../testData/test.config';

export default class LoginPage {
  private page: Page;

  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.getByRole('textbox', { name: 'Admin Email / Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }



  async enterUsername(user: string) {
    await this.username.click();
    await this.username.fill(user);
  }

  async enterPassword(pass: string) {
    await this.password.click();
    await this.password.fill(pass);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

}
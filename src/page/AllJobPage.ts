import { Page, Locator } from '@playwright/test';

export class AllJobPage {
  private page: Page;

  readonly allJobMenu: Locator;
  readonly cards: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ safer locator (role might be link, not button)
    this.allJobMenu = page.getByRole('button', { name: 'All Jobs' });

    // ✅ use partial match (text can change)
    this.cards = page.getByText('Frontend Developer', { exact: false });
  }

  // action
  async clickOnAllJobMenu() {
    await this.page.waitForLoadState('networkidle'); // ✅ wait after login
    await this.allJobMenu.click();
  }

  async clickOnCards() {
    await this.cards.first().click(); // ✅ handle multiple cards safely
  }
}
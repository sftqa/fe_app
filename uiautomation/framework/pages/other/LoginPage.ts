import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage'


export class LoginPage extends BasePage {

  //locators
  readonly usernameInput: Locator = this.page.locator('//button[contains(@class, "AddAddressButton")]');
  readonly passwordInput: Locator = this.page.locator('//div[@data-testid="address-book-empty-message"]');
  readonly submitBtn: Locator = this.page.locator('//div[@data-testid="address-book-empty-message"]');

  public async login(username: string, password: string): Promise<void> {
    console.log(`Attemting to login with credentials page ${username}, ${password}`);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }

  //andrey.frolov.ua@gmail.com
  //EN@BWS2VMVENTkv
}
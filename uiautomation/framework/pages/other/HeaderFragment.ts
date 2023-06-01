import { Locator, Page } from '@playwright/test';
import { BaseFragment } from '../BaseFragment';

export class HeaderFragment extends BaseFragment {
  // Locators

  readonly logoIcon: Locator = this.findByClass('*', 'logo-icon');
  readonly logoIconNegative: Locator = this.findByClass('*', 'logo-icon-negative');
  readonly logoIconText: Locator = this.findByClass('*', 'logo-text');
  readonly menuLinks: Locator = this.locator('a');

  constructor(page: Page) {
    super(page, page.locator('//div[contains(@class, "css-1bzcj3f")]'));
  }

  public async verifyHeaderIsShown(activeLink: number) {
    
  }
  
}

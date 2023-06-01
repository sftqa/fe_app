import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage'


export class UpperCasePage extends BasePage {

  //locators
  readonly inputField: Locator = this.page.locator('input');
  readonly outputText: Locator = this.page.locator('h2');
  readonly transformLowerBtn: Locator = this.page.locator('button').first();
  readonly transformUpperBtn: Locator = this.page.locator('button').last();
}
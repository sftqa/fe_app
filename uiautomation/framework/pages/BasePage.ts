import { expect, Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./other/HeaderFragment";

export class BasePage {
  url_regex: RegExp;
  title_regex: RegExp;

  public page: Page;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.locator('h1')
  }

  page_h1_title_regex: string;

  //fragments
  readonly headerFragment: HeaderFragment;

  //locators
  readonly title: Locator;
  
  async verifyPageOpened(options?: { verifyTitle?: boolean }): Promise<void> {
    await this.page.waitForLoadState();
    if (options === undefined || options.verifyTitle === undefined || options.verifyTitle) {
      await this.verifyPageH1Title();
    }
    this.verifyURL();
    this.verifyTabTitle();;
  }

  async verifyPageH1Title(): Promise<void> {
    console.log('Verifying page has title ' + this.page_h1_title_regex);
    await expect.soft(this.title).toHaveText(this.page_h1_title_regex);
  }

  async verifyURL(): Promise<void> {
    await expect.soft(this.page).toHaveURL(this.url_regex);
  }

  async verifyTabTitle(): Promise<void> {
    await expect.soft(this.page).toHaveTitle(this.title_regex);
  }

  protected findByClass(element: string, className: string) {
    return this.page.locator(`//${element}[contains(@class, "${className}")]`);
  }

  
}
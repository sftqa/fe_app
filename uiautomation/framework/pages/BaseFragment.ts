import { Locator, Page } from '@playwright/test';

export class BaseFragment {
  public page: Page;
  public rootLocator: Locator | undefined;

  constructor(page: Page, locator?: Locator) {
    this.page = page;
    this.rootLocator = locator;
  }

  protected locator(loc: string): Locator {
    if (this.rootLocator === undefined) {
      return this.page.locator(loc);
    }

    return this.rootLocator.locator(loc);
  }

  protected findByClass(element: string, className: string) {
    return this.locator(`//${element}[contains(@class, "${className}")]`);
  }
}

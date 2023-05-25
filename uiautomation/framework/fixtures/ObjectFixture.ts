import { test as base, chromium, type BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UpperCasePage } from '../pages/UpperCasePage';

// const testWithExtension = base.extend<{
//   context: BrowserContext;
//   extensionId: string;
// }>({
//   context: async ({ }, use) => {
//     const pathToExtension = path.join(__dirname, 'my-extension');
//     const context = await chromium.launchPersistentContext('', {
//       headless: false,
//       args: [
//         `--disable-extensions-except=${pathToExtension}`,
//         `--load-extension=${pathToExtension}`,
//       ],
//     });
//     await use(context);
//     await context.close();
//   },
//   extensionId: async ({ context }, use) => {
//     /*
//     // for manifest v2:
//     let [background] = context.backgroundPages()
//     if (!background)
//       background = await context.waitForEvent('backgroundpage')
//     */

//     // for manifest v3:
//     let [background] = context.serviceWorkers();
//     if (!background)
//       background = await context.waitForEvent('serviceworker');

//     const extensionId = background.url().split('/')[2];
//     await use(extensionId);
//   },
// });

type Objects = {
    loginPage: LoginPage;
    upperCasePage: UpperCasePage;
}

const testExtendedWithPages = base.extend<Objects>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
      },
      upperCasePage: async ({ page }, use) => {
        await use(new UpperCasePage(page));
      }
    });     
export const test = testExtendedWithPages; 
export const expect = test.expect;
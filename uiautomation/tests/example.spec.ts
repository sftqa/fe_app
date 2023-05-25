import { test, expect } from '../framework/fixtures/ObjectFixture';

test('to Upper case', async ({ upperCasePage }) => {
  await upperCasePage.page.goto('');
  await upperCasePage.inputField.fill('name');
  await upperCasePage.transformUpperBtn.click();

  await expect(upperCasePage.outputText).toHaveText('Result: NAME');
});

test('to Lower case', async ({ upperCasePage }) => {
  await upperCasePage.page.goto('');
  await upperCasePage.inputField.fill('NAME');
  await upperCasePage.transformLowerBtn.click();

  await expect(upperCasePage.outputText).toHaveText('Result: name1');
});

test('Empty', async ({ upperCasePage }) => {
  await upperCasePage.page.goto('');
  await upperCasePage.inputField.fill('');
  await upperCasePage.transformUpperBtn.click();

  await expect(upperCasePage.outputText).toHaveText('Result: Word should not be empty');
});
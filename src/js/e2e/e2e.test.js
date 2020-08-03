import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('e2e', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true,
      slowMo: 50,
      devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe('test', () => {
    test('test', async () => {
      await page.goto(baseUrl);
      const addButton = await page.$('.add-button');
      await addButton.click();
      const nameInput = await page.$('#form-name');
      await nameInput.type('some text');
      const priceInput = await page.$('#form-price');
      await priceInput.type('1000');
      const saveButton = await page.$('#save-button');
      await saveButton.click();

      await addButton.click();
      const cancelButton = await page.$('#cancel-button');
      await cancelButton.click();

      const editButton = await page.$('.edit-button');
      await editButton.click();
      await nameInput.type(' more text');
      await priceInput.type('0');
      await saveButton.click();
      const newEditButton = await page.$('.edit-button');
      await newEditButton.click();
      await nameInput.type(' and more text');
      await cancelButton.click();

      const removeButton = await page.$('.delete-button');
      await removeButton.click();
      const confirmCancel = await page.$('#confirm-cancel');
      await confirmCancel.click();
      await removeButton.click();
      const confirmDelete = await page.$('#confirm-delete');
      await confirmDelete.click();

      await page.close();
    });
  });
});

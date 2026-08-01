import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Locators
  readonly categoriesTitle: Locator;
  readonly womenCategory: Locator;
  readonly dressCategory: Locator;
  readonly menCategory: Locator;
  readonly tshirtsCategory: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.categoriesTitle = page.getByRole('heading', { name: 'Category' });    this.dressCategory = page.locator('a[href="/category_products/1"]');

    this.menCategory = page.locator('a[href="#Men"]');
    this.tshirtsCategory = page.locator('a[href="/category_products/3"]');

    this.pageTitle = page.locator('.title.text-center');
  }

  // Navigate to home page
  async goto() {
    await this.page.goto('/');
  }

  // Verify home page
  async verifyHomePage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
  }

  // Verify Categories section is visible
  async verifyCategoriesVisible() {
    await expect(this.categoriesTitle).toBeVisible();
    await expect(this.categoriesTitle).toHaveText('Category');
  }

  // Click Women > Dress
  async openWomenDressCategory() {
    await this.womenCategory.click();
    await this.dressCategory.click();
  }

  // Verify Women category page
  async verifyWomenCategory() {
    await expect(this.pageTitle).toContainText('WOMEN');
  }

  // Click Men > T-Shirts
  async openMenTshirtsCategory() {
    await this.menCategory.click();
    await this.tshirtsCategory.click();
  }

  // Verify Men category page
  async verifyMenCategory() {
    await expect(this.pageTitle).toContainText('MEN');
  }
}
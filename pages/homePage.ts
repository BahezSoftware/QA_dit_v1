//object model for home page
import { Page, Locator, expect } from '@playwright/test';
// The Page Object Model separates the page logic from the test logic
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
    // Sidebar Category title
    this.categoriesTitle = page.getByRole('heading', { name: 'Category' });
    // Categories
    this.womenCategory = page.locator('a[href="#Women"]');
    this.dressCategory = page.locator('a[href="/category_products/1"]');
    this.menCategory = page.locator('a[href="#Men"]');
    this.tshirtsCategory = page.locator('a[href="/category_products/3"]');
    // Category page title
    this.pageTitle = page.locator('.title.text-center');
  }
  // Open website
  async goto() {
    await this.page.goto('/');
  }
  // Verify home page
  async verifyHomePage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
  } // Verify Categories section is visible
  async verifyCategoriesVisible() {
    await expect(this.categoriesTitle).toBeVisible();
    await expect(this.categoriesTitle).toHaveText('Category');
  }// Open Women  Dress
async openWomenCategory() {
    await this.womenCategory.click();
}async openDressCategory() {
    await this.dressCategory.click();
}// Verify Women category page
async verifyWomenCategory() {
    await expect(this.pageTitle).toContainText('Women');
    await expect(this.pageTitle).toContainText('Dress');
}

  // Open Men  T-Shirts
 async openMenCategory() {
    await this.menCategory.click();
}async openTshirtsCategory() {
    await this.tshirtsCategory.click();
}// Verify Men category page
 async verifyMenCategory() {
    await expect(this.pageTitle).toContainText('Men');
}
}
import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Category Products', () => {

  test('View Category Products', async ({ page }) => {

    const homePage = new HomePage(page);

    // Navigate to the website
    await homePage.goto();

    // Verify the home page is displayed
    await homePage.verifyHomePage();

    // Verify Categories section is visible
    await homePage.verifyCategoriesVisible();

    // Click Women -> Dress
    await homePage.openWomenDressCategory();

    // Verify Women category page
    await homePage.verifyWomenCategory();

    // Click Men -> T-Shirts
    await homePage.openMenTshirtsCategory();

    // Verify Men category page
    await homePage.verifyMenCategory();

  });

});
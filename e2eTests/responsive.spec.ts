import { test, expect, devices } from '@playwright/test';
import { PageHelpers } from './fixtures/pageHelpers';

const viewports = [
  { name: 'Mobile', ...devices['Pixel 5'] },
  { name: 'Tablet', ...devices['iPad Pro'] },
  { name: 'Desktop', ...devices['Desktop Chrome'] },
];

viewports.forEach((viewport) => {
  test.describe(`Responsive Design - ${viewport.name}`, () => {
    test.use(viewport);

    test('should render correctly on viewport', async ({ page }) => {
      const helpers = new PageHelpers(page);
      await helpers.navigateToHome();
      await helpers.waitForAngularReady();

      // Verify main content is visible
      const appRoot = page.locator('app-root');
      await expect(appRoot).toBeVisible();
    });

    test('should not have horizontal scroll', async ({ page }) => {
      const helpers = new PageHelpers(page);
      await helpers.navigateToHome();
      await helpers.waitForAngularReady();

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  });
});

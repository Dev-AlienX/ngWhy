import { test, expect } from './fixtures/baseTest';
import { PageHelpers } from './fixtures/pageHelpers';

test.describe('ngWhy Application', () => {
  let helpers: PageHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();
  });

  test('should load the application successfully', async ({ page }) => {
    // Verify the app loads
    await expect(page).toHaveTitle(/ngWhy/i);
  });

  test('should have visible main content', async ({ page }) => {
    // Wait for main app component to be visible
    const mainElement = page.locator('app-root');
    await expect(mainElement).toBeVisible();
  });

  test('should render without console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await helpers.waitForAngularReady();
    
    // Assert no console errors occurred
    expect(errors).toHaveLength(0);
  });
});

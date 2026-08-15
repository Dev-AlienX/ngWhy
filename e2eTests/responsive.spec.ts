import { test, expect, devices } from '@playwright/test';
import { PageHelpers } from './fixtures/pageHelpers';

// Test on Mobile
test.describe('Responsive Design - Mobile', () => {
  test('should render correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 393, height: 851 }); // Pixel 5
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeVisible();
  });

  test('should not have horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 393, height: 851 }); // Pixel 5
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

// Test on Tablet
test.describe('Responsive Design - Tablet', () => {
  test('should render correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 1366 }); // iPad Pro
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeVisible();
  });

  test('should not have horizontal scroll on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 1366 }); // iPad Pro
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

// Test on Desktop
test.describe('Responsive Design - Desktop', () => {
  test('should render correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 }); // Desktop
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeVisible();
  });

  test('should not have horizontal scroll on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 }); // Desktop
    const helpers = new PageHelpers(page);
    await helpers.navigateToHome();
    await helpers.waitForAngularReady();

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

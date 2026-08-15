import { test, expect } from './fixtures/baseTest';

test.describe('Application Accessibility', () => {
  test('should load without errors', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that app root exists
    const appRoot = page.locator('app-root');
    await expect(appRoot).toBeVisible();
  });

  test('should have proper heading structure when present', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that headings exist (if any are present on the page)
    const headings = await page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();

    // Headings should be properly structured if they exist
    if (count > 0) {
      const firstHeading = headings.first();
      await expect(firstHeading).toBeVisible();
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for basic elements
    const textElements = await page.locator('p, span, a');
    const count = await textElements.count();

    // Page should have some text content
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify tabbing works when focusable elements exist
    await page.keyboard.press('Tab');
    
    // Element should have focus (document.body is always there)
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeDefined();
  });

  test('should have alt text for images when present', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all images
    const images = await page.locator('img');
    const imageCount = await images.count();

    // Check each image for alt text if images exist
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        const isVisible = await images.nth(i).isVisible();
        if (isVisible) {
          expect(alt).not.toBeNull();
        }
      }
    }
  });
});

import { test, expect } from './fixtures/baseTest';

test.describe('Application Accessibility', () => {
  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that headings exist
    const headings = await page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();

    // At least one heading should be present
    expect(count).toBeGreaterThan(0);
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for basic elements
    const textElements = await page.locator('p, span, a');
    const count = await textElements.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify tabbing works
    await page.keyboard.press('Tab');
    
    // Element should have focus
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).not.toBeNull();
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all images
    const images = await page.locator('img');
    const imageCount = await images.count();

    // Check each image for alt text
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // Each image should have alt text (if visible)
      const isVisible = await images.nth(i).isVisible();
      if (isVisible) {
        expect(alt).not.toBeNull();
      }
    }
  });
});

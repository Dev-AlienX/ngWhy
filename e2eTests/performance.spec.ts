import { test, expect } from './fixtures/baseTest';

test.describe('Application Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;
    
    // Assert page loads within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Measure First Contentful Paint (FCP)
    const fcp = await page.evaluate(() => {
      const paintTiming = performance.getEntriesByType('paint');
      const fcpTiming = paintTiming.find((p) => p.name === 'first-contentful-paint');
      return fcpTiming ? fcpTiming.startTime : null;
    });

    // If FCP is available, it should be less than 2.5 seconds
    if (fcp !== null) {
      expect(fcp).toBeLessThan(2500);
    }
  });

  test('should not have memory leaks', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get initial memory usage
    const initialMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0;
    });

    // Perform some interactions
    for (let i = 0; i < 5; i++) {
      await page.reload();
      await page.waitForLoadState('networkidle');
    }

    // Get final memory usage
    const finalMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0;
    });

    // Memory growth should be reasonable (not more than 50MB)
    const memoryGrowth = finalMemory - initialMemory;
    expect(memoryGrowth).toBeLessThan(50 * 1024 * 1024);
  });
});

# Playwright End-to-End Testing Guide

## Overview

This project uses Playwright for comprehensive end-to-end testing of the Angular application. The E2E tests cover:

- **Functional testing**: Application behavior and user interactions
- **Performance testing**: Load times and memory usage
- **Accessibility testing**: WCAG compliance and keyboard navigation
- **Responsive design testing**: Cross-device compatibility

## Test Structure

```
e2eTests/
├── fixtures/
│   ├── baseTest.ts          # Base test configuration and fixtures
│   └── pageHelpers.ts       # Reusable page interaction helpers
├── app.spec.ts              # Core application tests
├── performance.spec.ts      # Performance and load time tests
├── accessibility.spec.ts    # A11y and accessibility tests
├── responsive.spec.ts       # Responsive design tests
├── example.spec.ts          # Example tests (external reference)
└── playwright.config.ts     # Playwright configuration
```

## Running E2E Tests

### Run all E2E tests
```bash
npm run e2e
```

### Run E2E tests in UI mode (interactive)
```bash
npm run e2e:ui
```

### Run E2E tests in debug mode
```bash
npm run e2e:debug
```

### View the test report
```bash
npm run e2e:report
```

### Run specific test file
```bash
npx playwright test e2eTests/app.spec.ts
```

### Run tests with specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Configuration

The Playwright configuration (`playwright.config.ts`) includes:

- **baseURL**: `http://localhost:4200` (Angular development server)
- **webServer**: Auto-starts Angular dev server before tests
- **Reporters**: HTML report with trace on retry
- **Projects**: Chrome, Firefox, and Safari (desktop)
- **Retry policy**: 2 retries on CI, 0 retries locally
- **Workers**: Parallel execution with configurable concurrency

## Test Categories

### 1. Application Tests (`app.spec.ts`)
- Application loads successfully
- Main content renders
- No console errors

### 2. Performance Tests (`performance.spec.ts`)
- Page load time < 3 seconds
- First Contentful Paint (FCP) < 2.5s
- Memory usage monitoring

### 3. Accessibility Tests (`accessibility.spec.ts`)
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Color contrast verification

### 4. Responsive Design Tests (`responsive.spec.ts`)
- Mobile viewport (Pixel 5)
- Tablet viewport (iPad Pro)
- Desktop viewport
- No horizontal scroll

## Best Practices

### Writing Tests

1. **Use page helpers** for common interactions:
   ```typescript
   const helpers = new PageHelpers(page);
   await helpers.navigateToHome();
   await helpers.waitForAngularReady();
   ```

2. **Wait for Angular** to be ready:
   ```typescript
   await page.waitForLoadState('networkidle');
   ```

3. **Use semantic selectors**:
   ```typescript
   // ✅ Good
   page.getByRole('button', { name: 'Submit' })
   page.getByLabel('Email')
   
   // ❌ Avoid
   page.locator('div.btn-submit')
   ```

4. **Test user interactions, not implementation**:
   ```typescript
   // ✅ Good
   await page.getByRole('link', { name: 'Get started' }).click();
   
   // ❌ Avoid
   await page.locator('#specific-id-123').click();
   ```

5. **Use descriptive test names**:
   ```typescript
   test('should navigate to the login page when clicking the login link', async ({ page }) => {
     // ...
   });
   ```

### Debugging

1. **Use UI mode for interactive debugging**:
   ```bash
   npm run e2e:ui
   ```

2. **Use debug mode**:
   ```bash
   npm run e2e:debug
   ```

3. **Add page screenshots on failure**:
   ```typescript
   await page.screenshot({ path: 'debug-screenshot.png' });
   ```

4. **Review traces**:
   - Traces are automatically collected on first retry
   - View in Playwright Inspector

## CI/CD Integration

GitHub Actions workflow (`.github/workflows/e2e-tests.yml`) runs:

1. On push to `master` and `DEVELOPMENT` branches
2. On pull requests to `master` and `DEVELOPMENT` branches
3. Includes:
   - Node.js setup
   - Dependency installation
   - Playwright browser installation
   - Application build
   - Test execution
   - Report artifacts

### Viewing Results

- Test reports available in GitHub Actions artifacts
- Reports retained for 30 days
- Download and view locally: `npm run e2e:report`

## Adding New Tests

### Create a new test file
```typescript
import { test, expect } from './fixtures/baseTest';
import { PageHelpers } from './fixtures/pageHelpers';

test.describe('Feature Name', () => {
  let helpers: PageHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = new PageHelpers(page);
    await helpers.navigateToHome();
  });

  test('should do something', async ({ page }) => {
    // Your test here
  });
});
```

### Add new page helpers
```typescript
// In e2eTests/fixtures/pageHelpers.ts
export class PageHelpers {
  async myNewHelper() {
    // Helper implementation
  }
}
```

## Troubleshooting

### Tests timeout
- Increase `timeout` in test or config
- Check if dev server is running
- Verify network conditions

### Flaky tests
- Use `waitForLoadState('networkidle')`
- Avoid hardcoded waits, use proper wait conditions
- Check for animations or transitions

### Memory issues
- Run fewer workers in CI
- Use `--workers=1` for serial execution
- Clear browser cache between tests

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Selectors Guide](https://playwright.dev/docs/locators)
- [API Reference](https://playwright.dev/docs/api/class-page)


import { test as base, expect } from '@playwright/test';

/**
 * Base test fixture with common setup/teardown and utilities
 */
export const test = base.extend({
  // Add custom fixtures here if needed in the future
});

export { expect };

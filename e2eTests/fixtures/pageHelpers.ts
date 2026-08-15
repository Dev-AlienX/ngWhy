import { Page } from '@playwright/test';

/**
 * Helper functions for common page interactions
 */
export class PageHelpers {
  constructor(private page: Page) {}

  /**
   * Navigate to the home page
   */
  async navigateToHome() {
    await this.page.goto('/');
  }

  /**
   * Wait for Angular to be ready
   */
  async waitForAngularReady() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string | null> {
    return await this.page.title();
  }

  /**
   * Check if element is visible
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  /**
   * Click element by role
   */
  async clickByRole(role: string, name: string) {
    await this.page.getByRole(role as any, { name }).click();
  }

  /**
   * Fill form field
   */
  async fillField(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  /**
   * Get text content
   */
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }
}

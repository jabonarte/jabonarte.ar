import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   * Set item in localStorage
   */
  setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  /**
   * Get item from localStorage
   */
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }

  /**
   * Clear all localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  /**
   * Set item in sessionStorage
   */
  setSessionItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  }

  /**
   * Get item from sessionStorage
   */
  getSessionItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return null;
    }
  }

  /**
   * Remove item from sessionStorage
   */
  removeSessionItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
    }
  }

  /**
   * Clear all sessionStorage
   */
  clearSession(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  }

  /**
   * Check if localStorage is available
   */
  isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check if sessionStorage is available
   */
  isSessionStorageAvailable(): boolean {
    try {
      const test = '__sessionStorage_test__';
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get storage size in bytes
   */
  getStorageSize(): number {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    return total;
  }

  /**
   * Get session storage size in bytes
   */
  getSessionStorageSize(): number {
    let total = 0;
    for (let key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key)) {
        total += sessionStorage[key].length + key.length;
      }
    }
    return total;
  }

  /**
   * Save user preferences
   */
  saveUserPreferences(preferences: any): void {
    this.setItem('user_preferences', preferences);
  }

  /**
   * Get user preferences
   */
  getUserPreferences(): any {
    return this.getItem('user_preferences') || {};
  }

  /**
   * Save cart items
   */
  saveCartItems(cartItems: any[]): void {
    this.setItem('cart_items', cartItems);
  }

  /**
   * Get cart items
   */
  getCartItems(): any[] {
    return this.getItem('cart_items') || [];
  }

  /**
   * Save skin test results
   */
  saveSkinTestResults(results: any): void {
    this.setItem('skin_test_results', results);
  }

  /**
   * Get skin test results
   */
  getSkinTestResults(): any {
    return this.getItem('skin_test_results') || null;
  }

  /**
   * Save recent searches
   */
  saveRecentSearches(searches: string[]): void {
    this.setItem('recent_searches', searches);
  }

  /**
   * Get recent searches
   */
  getRecentSearches(): string[] {
    return this.getItem('recent_searches') || [];
  }
}

/**
 * Theme Manager for Fager Hussein Ahmed Portfolio
 * Handles complete Light & Dark themes, system preference detection, and persistence.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'fager_portfolio_theme';
  const THEME_ATTR = 'data-theme';

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function getQueryTheme() {
    try {
      const params = new URLSearchParams(window.location.search);
      const t = params.get('theme');
      if (t === 'light' || t === 'dark') return t;
    } catch (e) {
      // Ignore
    }
    return null;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage unavailable
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.innerHTML = isDark ? '☀️' : '🌙';
    });
  }

  // Initialize theme immediately to prevent flashing
  const initialTheme = getQueryTheme() || getStoredTheme() || getSystemPreference();
  applyTheme(initialTheme);

  // Bind interaction when DOM is ready
  window.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons(document.documentElement.getAttribute(THEME_ATTR) || initialTheme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute(THEME_ATTR) || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        setStoredTheme(nextTheme);
      });
    });

    // Listen to OS system theme changes if user hasn't explicitly chosen
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getStoredTheme()) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });

  // Global helper
  window.ThemeManager = {
    getTheme: () => document.documentElement.getAttribute(THEME_ATTR) || 'dark',
    setTheme: (t) => {
      applyTheme(t);
      setStoredTheme(t);
    }
  };
})();

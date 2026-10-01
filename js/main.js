/**
 * Main Application Orchestrator
 */

(function () {
  'use strict';

  function initApp() {
    // Dynamic copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }

    // Accessible smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          // Update URL hash without jump
          history.pushState(null, null, targetId);
          // Set focus for screen readers
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });

    // Console signature
    console.log(
      '%c Fager Hussein Ahmed %c Flutter Developer & Computer & Software Engineer ',
      'background: #0284c7; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
      'background: #1e293b; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;'
    );
  }

  window.addEventListener('DOMContentLoaded', initApp);
})();

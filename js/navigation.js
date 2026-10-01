/**
 * Navigation Manager: Sticky Nav, Active Section Observer & Mobile Menu
 */

(function () {
  'use strict';

  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Sticky header shadow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile menu toggle
    function openMenu() {
      mobileToggle?.setAttribute('aria-expanded', 'true');
      mobileToggle?.setAttribute('aria-label', 'Close navigation menu');
      mobileToggle.innerHTML = '✕';
      navMenu?.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Focus first link
      const firstLink = navMenu?.querySelector('a');
      firstLink?.focus();
    }

    function closeMenu() {
      mobileToggle?.setAttribute('aria-expanded', 'false');
      mobileToggle?.setAttribute('aria-label', 'Open navigation menu');
      mobileToggle.innerHTML = '☰';
      navMenu?.classList.remove('active');
      document.body.style.overflow = '';
      mobileToggle?.focus();
    }

    mobileToggle?.addEventListener('click', () => {
      const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close mobile menu when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navMenu?.classList.contains('active')) {
          closeMenu();
        }
      });
    });

    // Close mobile menu on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        closeMenu();
      }
    });

    // Active link highlighting via IntersectionObserver
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      };

      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${currentId}`) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
              } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach((section) => sectionObserver.observe(section));
    }
  }

  window.addEventListener('DOMContentLoaded', initNavigation);
})();

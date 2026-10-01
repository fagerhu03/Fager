/**
 * Projects Manager: Category Filtering, Phone Mockup Galleries & Case Study Modals
 */

(function () {
  'use strict';

  // State map: projectId -> current screenshot index
  const projectGalleryState = {};

  function initProjects() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card, .featured-project-card');

    // Initialize gallery states
    if (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.projects) {
      window.PORTFOLIO_DATA.projects.forEach((p) => {
        projectGalleryState[p.id] = 0;
      });
    }

    // Category Filtering
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (filter === 'all' || cardCategory === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Gallery navigation controls
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-gallery-action]');
      if (!target) return;

      const action = target.getAttribute('data-gallery-action');
      const projectId = target.getAttribute('data-project-id');
      const project = window.PORTFOLIO_DATA?.projects.find((p) => p.id === projectId);
      if (!project || !project.screenshots || project.screenshots.length <= 1) return;

      const total = project.screenshots.length;
      let currentIndex = projectGalleryState[projectId] || 0;

      if (action === 'prev') {
        currentIndex = (currentIndex - 1 + total) % total;
      } else if (action === 'next') {
        currentIndex = (currentIndex + 1) % total;
      } else if (action === 'dot') {
        const targetIndex = parseInt(target.getAttribute('data-slide-index'), 10);
        if (!isNaN(targetIndex)) currentIndex = targetIndex;
      }

      projectGalleryState[projectId] = currentIndex;
      updateProjectGallery(projectId, currentIndex, project);
    });

    // Setup Modals
    initModals();
  }

  function updateProjectGallery(projectId, index, projectData) {
    const card = document.querySelector(`[data-project-card-id="${projectId}"]`);
    if (!card) return;

    const screenImg = card.querySelector('.gallery-screen-img');
    const captionEl = card.querySelector('.gallery-caption');
    const dots = card.querySelectorAll('.gallery-dot');

    const activeShot = projectData.screenshots[index];
    if (!activeShot) return;

    if (screenImg) {
      screenImg.src = activeShot.src;
      screenImg.alt = activeShot.alt;
    }

    if (captionEl) {
      captionEl.textContent = activeShot.caption;
    }

    dots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Modals management
  function initModals() {
    let lastActiveTrigger = null;

    function openModal(modalId, triggerElement) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      lastActiveTrigger = triggerElement;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const closeBtn = modal.querySelector('.modal-close-btn');
      closeBtn?.focus();

      // Trap focus
      modal.addEventListener('keydown', trapFocus);
    }

    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      modal.removeEventListener('keydown', trapFocus);
      lastActiveTrigger?.focus();
    }

    function trapFocus(e) {
      const modal = document.querySelector('.modal-backdrop.active');
      if (!modal) return;

      if (e.key === 'Escape') {
        closeModal(modal);
        return;
      }

      if (e.key === 'Tab') {
        const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    }

    // Trigger button listeners
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-target]');
      if (trigger) {
        const targetModalId = trigger.getAttribute('data-modal-target');
        openModal(targetModalId, trigger);
        return;
      }

      const closeTrigger = e.target.closest('[data-modal-close]');
      if (closeTrigger) {
        const modal = closeTrigger.closest('.modal-backdrop');
        closeModal(modal);
        return;
      }

      // Backdrop click closes modal
      if (e.target.classList.contains('modal-backdrop')) {
        closeModal(e.target);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-backdrop.active');
        if (activeModal) closeModal(activeModal);
      }
    });
  }

  window.addEventListener('DOMContentLoaded', initProjects);
})();

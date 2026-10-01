/**
 * Contact Form & Direct Communication Manager
 * Honest delivery handling: Provides email client launch (mailto) and copy helpers.
 * Never fakes backend delivery.
 */

(function () {
  'use strict';

  function initContact() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const statusBox = document.getElementById('form-status-box');

    // Quick Copy functionality for contact cards
    const copyButtons = document.querySelectorAll('[data-copy-text]');
    copyButtons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const textToCopy = btn.getAttribute('data-copy-text');
        const originalText = btn.innerHTML;
        try {
          await navigator.clipboard.writeText(textToCopy);
          btn.innerHTML = '✓ Copied!';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        } catch (err) {
          // Fallback if clipboard API fails
          btn.innerHTML = 'Press Ctrl+C';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        }
      });
    });

    if (!form) return;

    // Validation helper
    function validateField(input, errorElement, condition, message) {
      if (!condition) {
        input.setAttribute('aria-invalid', 'true');
        if (errorElement) {
          errorElement.textContent = message;
          errorElement.classList.add('active');
        }
        return false;
      } else {
        input.setAttribute('aria-invalid', 'false');
        if (errorElement) {
          errorElement.textContent = '';
          errorElement.classList.remove('active');
        }
        return true;
      }
    }

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Real-time validation on blur / input
    nameInput?.addEventListener('blur', () => {
      const err = document.getElementById('name-error');
      validateField(nameInput, err, nameInput.value.trim().length >= 2, 'Please enter your name (at least 2 characters).');
    });

    emailInput?.addEventListener('blur', () => {
      const err = document.getElementById('email-error');
      validateField(emailInput, err, emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
    });

    messageInput?.addEventListener('blur', () => {
      const err = document.getElementById('message-error');
      validateField(messageInput, err, messageInput.value.trim().length >= 10, 'Please write a message of at least 10 characters.');
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        nameInput,
        document.getElementById('name-error'),
        nameInput.value.trim().length >= 2,
        'Please enter your name (at least 2 characters).'
      );

      const isEmailValid = validateField(
        emailInput,
        document.getElementById('email-error'),
        emailRegex.test(emailInput.value.trim()),
        'Please enter a valid email address.'
      );

      const isMessageValid = validateField(
        messageInput,
        document.getElementById('message-error'),
        messageInput.value.trim().length >= 10,
        'Please write a message of at least 10 characters.'
      );

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else messageInput.focus();
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput?.value.trim() || 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      // Honest delivery logic:
      // Construct a clean mailto URI so visitor can instantly send from their configured mail client
      const fullSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`);
      const fullBody = encodeURIComponent(
        `Hi Fager,\n\n${message}\n\n---\nSender Name: ${name}\nSender Email: ${email}`
      );
      const mailtoUrl = `mailto:fagerhu03@gmail.com?subject=${fullSubject}&body=${fullBody}`;

      // Show honest actionable status with choice: Launch mailto or Copy formatted text
      if (statusBox) {
        statusBox.className = 'form-status form-status-info active';
        statusBox.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            <strong>✉️ Ready to Send to fagerhu03@gmail.com</strong>
            <p style="margin:0; font-size:0.875rem;">Click the button below to open your email client with your message pre-filled, or copy the formatted message to your clipboard:</p>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.35rem;">
              <a href="${mailtoUrl}" class="btn btn-primary btn-sm" id="launch-email-btn">Launch Email App ➔</a>
              <button type="button" class="btn btn-secondary btn-sm" id="copy-inquiry-btn">Copy Message Text</button>
            </div>
          </div>
        `;

        // Bind copy inside status box
        document.getElementById('copy-inquiry-btn')?.addEventListener('click', async () => {
          const textToCopy = `To: fagerhu03@gmail.com\nSubject: [Portfolio Contact] ${subject} - from ${name}\n\nHi Fager,\n\n${message}\n\nSender: ${name} (${email})`;
          try {
            await navigator.clipboard.writeText(textToCopy);
            const copyBtn = document.getElementById('copy-inquiry-btn');
            if (copyBtn) copyBtn.textContent = '✓ Copied to Clipboard!';
          } catch (err) {
            // Ignore
          }
        });
      }

      // Try triggering mailto directly as a helpful convenience
      window.location.href = mailtoUrl;
    });
  }

  window.addEventListener('DOMContentLoaded', initContact);
})();

/**
 * Find elements causing horizontal overflow on mobile
 */
const { exec } = require('child_process');
const fs = require('fs');

// We will inject an inline script in index.html temporarily or use console log
const testScript = `
<script>
window.addEventListener('load', () => {
  const docWidth = document.documentElement.offsetWidth;
  const overflowing = [];
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > docWidth + 1) {
      overflowing.push({
        tag: el.tagName,
        class: el.className,
        id: el.id,
        right: rect.right,
        width: rect.width,
        docWidth: docWidth
      });
    }
  });
  console.log('OVERFLOW_CHECK_RESULT:', JSON.stringify(overflowing.slice(0, 15)));
});
</script>
`;

console.log('Script ready');

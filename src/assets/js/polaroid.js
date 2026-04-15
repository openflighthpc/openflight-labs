// Polaroid captions - extract alt text and display as visible captions
(function() {
  function initPolaroidCaptions() {
    // Find all paragraphs that contain only an image (auto-polaroid)
    const polaroidParagraphs = document.querySelectorAll('.experiment-content p:has(> img:only-child)');

    polaroidParagraphs.forEach(p => {
      const img = p.querySelector('img');
      if (img && img.alt) {
        // Create caption element
        const caption = document.createElement('span');
        caption.className = 'polaroid-caption';
        caption.textContent = img.alt;
        p.appendChild(caption);
      }
    });

    // Also handle explicit .polaroid wrappers
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
      const img = polaroid.querySelector('img');
      if (img && img.alt && !polaroid.querySelector('.polaroid-caption')) {
        const caption = document.createElement('span');
        caption.className = 'polaroid-caption';
        caption.textContent = img.alt;
        polaroid.appendChild(caption);
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPolaroidCaptions);
  } else {
    initPolaroidCaptions();
  }
})();
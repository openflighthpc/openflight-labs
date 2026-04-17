// Polaroid captions - extract alt text and display as visible captions
(function() {
  function initPolaroidCaptions() {
    // Find all paragraphs that contain only an image (auto-polaroid)
    const polaroidParagraphs = document.querySelectorAll('.experiment-content p:has(> img:only-child)');
    polaroidParagraphs.forEach(p => {
      const img = p.querySelector('img');
      if (img && img.alt) {
        const caption = document.createElement('span');
        caption.className = 'polaroid-caption';
        caption.textContent = img.alt;
        p.appendChild(caption);
      }
    });

    // Find all .polaroid-video wrappers (auto-created by transform)
    const videoWrappers = document.querySelectorAll('.polaroid-video');
    videoWrappers.forEach(wrapper => {
      const video = wrapper.querySelector('video');
      if (video && !wrapper.querySelector('.polaroid-caption')) {
        const captionText = video.dataset.caption;
        if (captionText) {
          const caption = document.createElement('span');
          caption.className = 'polaroid-caption';
          caption.textContent = captionText;
          wrapper.appendChild(caption);
        }
      }
    });

    // Handle explicit .polaroid wrappers for images
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
      const img = polaroid.querySelector('img');
      if (img && img.alt && !polaroid.querySelector('.polaroid-caption')) {
        const caption = document.createElement('span');
        caption.className = 'polaroid-caption';
        caption.textContent = img.alt;
        polaroid.appendChild(caption);
      }
      // Handle video directly in polaroid wrapper (manual markup)
      const video = polaroid.querySelector('video:not(.polaroid-video video)');
      if (video && !polaroid.querySelector('.polaroid-caption')) {
        const captionText = video.dataset.caption;
        if (captionText) {
          const caption = document.createElement('span');
          caption.className = 'polaroid-caption';
          caption.textContent = captionText;
          polaroid.appendChild(caption);
        }
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
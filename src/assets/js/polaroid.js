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

    // Find all paragraphs that contain only a video (auto-polaroid)
    const videoParagraphs = document.querySelectorAll('.experiment-content p:has(> video:only-child)');
    videoParagraphs.forEach(p => {
      const video = p.querySelector('video');
      if (video) {
        // Check for caption inside video element (from transform)
        const internalCaption = video.querySelector('.video-caption');
        if (internalCaption) {
          const caption = document.createElement('span');
          caption.className = 'polaroid-caption';
          caption.textContent = internalCaption.textContent;
          p.appendChild(caption);
          internalCaption.remove();
        }
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
      // Handle video in explicit polaroid wrapper
      const video = polaroid.querySelector('video');
      if (video) {
        const internalCaption = video.querySelector('.video-caption');
        if (internalCaption && !polaroid.querySelector('.polaroid-caption')) {
          const caption = document.createElement('span');
          caption.className = 'polaroid-caption';
          caption.textContent = internalCaption.textContent;
          polaroid.appendChild(caption);
          internalCaption.remove();
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
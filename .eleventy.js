module.exports = function(eleventyConfig) {
  // Pass through assets (images, fonts, etc.)
  eleventyConfig.addPassthroughCopy('src/assets');

  // Transform: Convert img tags with video extensions to video elements
  // and add pathPrefix to all asset paths
  eleventyConfig.addTransform('assetPaths', function(content) {
    // Skip non-HTML output
    if (!this.outputPath || !this.outputPath.endsWith('.html')) {
      return content;
    }

    // Path prefix for GitHub Pages
    const pathPrefix = '/openflight-labs/';

    // First, handle video files: convert p>img to div.polaroid-video>video
    content = content.replace(
      /<p><img([^>]*)><\/p>/gi,
      function(match, attrs) {
        // Check if this is a video file
        if (!/\.(mp4|webm|ogg|mov)["']?/i.test(attrs)) {
          return match; // Not a video, leave as-is
        }

        // Extract src attribute
        const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
        let src = srcMatch ? srcMatch[1] : '';

        // Extract alt attribute
        const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
        const alt = altMatch ? altMatch[1] : '';

        if (src && /\.(mp4|webm|ogg|mov)$/i.test(src)) {
          // Prepend pathPrefix to absolute paths
          if (src.startsWith('/')) {
            src = pathPrefix + src.slice(1);
          }
          return '<div class="polaroid-video"><video src="' + src + '" data-caption="' + alt + '" controls playsinline muted loop></video></div>';
        }
        return match;
      }
    );

    // Then, add pathPrefix to remaining image src attributes pointing to /assets/
    content = content.replace(
      /(<img[^>]*src=["'])(\/assets\/[^"']+)(["'][^>]*>)/gi,
      function(match, before, src, after) {
        return before + pathPrefix + src.slice(1) + after;
      }
    );

    return content;
  });

  // Create experiments collection - all .md files in src/experiments/
  eleventyConfig.addCollection('experiments', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/experiments/*.md')
      .sort((a, b) => {
        // Sort by date_start descending (newest first)
        const dateA = a.data.date_start ? new Date(a.data.date_start) : new Date(0);
        const dateB = b.data.date_start ? new Date(b.data.date_start) : new Date(0);
        return dateB - dateA;
      });
  });

  // Collection for experiments by status
  eleventyConfig.addCollection('experimentsByStatus', function(collectionApi) {
    const experiments = collectionApi.getFilteredByGlob('src/experiments/*.md');
    const byStatus = {
      hypothesis: [],
      'in-progress': [],
      completed: [],
      archived: []
    };

    experiments.forEach(exp => {
      const status = exp.data.status || 'hypothesis';
      if (byStatus[status]) {
        byStatus[status].push(exp);
      }
    });

    // Sort each group by date_start descending
    Object.keys(byStatus).forEach(status => {
      byStatus[status].sort((a, b) => {
        const dateA = a.data.date_start ? new Date(a.data.date_start) : new Date(0);
        const dateB = b.data.date_start ? new Date(b.data.date_start) : new Date(0);
        return dateB - dateA;
      });
    });

    return byStatus;
  });

  // Filter to format dates
  eleventyConfig.addFilter('formatDate', function(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  });

  // Filter to format date as year
  eleventyConfig.addFilter('formatYear', function(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
  });

  // Filter to generate slug from title
  eleventyConfig.addFilter('slug', function(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  });

  // Filter to capitalize first letter
  eleventyConfig.addFilter('capitalize', function(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  // Filter to lowercase
  eleventyConfig.addFilter('lower', function(str) {
    if (!str) return '';
    return str.toLowerCase();
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    pathPrefix: '/openflight-labs/'
  };
};
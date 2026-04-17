module.exports = {
  layout: 'doc.njk',
  tags: ['docs'],
  eleventyComputed: {
    experimentId: data => {
      // Extract experiment ID from path: /docs/CTR1L/01-overview
      const match = data.page.filePathStem.match(/\/docs\/([A-Z0-9]+)\//);
      return match ? match[1] : null;
    },
    permalink: data => {
      const id = data.experimentId;
      const slug = data.page.fileSlug;
      return id ? `/lab/${id}/docs/${slug}/` : false;
    }
  }
};
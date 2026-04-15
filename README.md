# OpenFlight Labs

A museum-style archive for R&D experiments from the OpenFlightHPC group.

## Overview

OpenFlight Labs is a static site built with [Eleventy](https://www.11ty.dev/) that presents R&D projects as "specimens" in a museum archive. Each experiment documents:

- **Hypothesis** — What we wanted to test
- **Approach** — How we tested it
- **Outcome** — What we learned
- **Usage** — How to use or reproduce the results

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will be available at `http://localhost:8080`.

## Adding a New Experiment

Experiments are stored as markdown files in `src/experiments/`. Create a new file following this naming convention:

```
src/experiments/eXXX-short-title.md
```

Where `eXXX` is the experiment number (e.g., `e005`, `e006`).

### Front Matter

Each experiment file requires YAML front matter:

```yaml
---
id: E005                          # Required: Unique experiment ID
title: "Your Experiment Title"     # Required: Human-readable title
status: hypothesis                 # Required: hypothesis | in-progress | completed | archived
hypothesis: "What you're testing"  # Required: The core hypothesis
date_start: 2024-09-01            # Required: Start date (YYYY-MM-DD)
date_end: 2024-10-15              # Optional: End date
tags:                              # Optional: Array of tags
  - example
  - demonstration
team:                              # Optional: Team members
  - name: "Your Name"
    github: yourgithub
links:                             # Optional: Related links
  - label: "GitHub Repository"
    url: https://github.com/...
thumbnail: /assets/images/experiments/e005/thumb.png  # Optional: Preview image
---

## Initial Idea

Describe the background and motivation for this experiment.

## Approach

Detail the methodology and steps taken.

## Outcome

Present findings, results, and lessons learned.

## Usage Example

```bash
# Code examples for using or reproducing the experiment
```
```

### Content Sections

The markdown body should include:

1. **Initial Idea** — Background and motivation
2. **Approach** — Methodology and implementation details
3. **Outcome** — Results and findings
4. **Usage Example** — Code snippets or commands (optional)

Use standard markdown formatting: headings, code blocks, lists, links, and images.

### Status Values

| Status | Meaning |
|--------|---------|
| `hypothesis` | Proposed but not yet started |
| `in-progress` | Currently being researched |
| `completed` | Finished with documented results |
| `archived` | No longer maintained, preserved for reference |

### Adding Images

1. Create a directory for your experiment:
   ```bash
   mkdir -p src/assets/images/experiments/e005
   ```

2. Add images to that directory

3. Reference in markdown:
   ```markdown
   ![Description](/assets/images/experiments/e005/image.png)
   ```

4. For the thumbnail, add to front matter:
   ```yaml
   thumbnail: /assets/images/experiments/e005/thumb.png
   ```

## Project Structure

```
openflight-labs/
├── src/
│   ├── _data/           # Site configuration
│   ├── _includes/       # Reusable template components
│   ├── _layouts/        # Page layouts
│   ├── assets/
│   │   ├── css/         # Stylesheets
│   │   ├── fonts/       # Web fonts (referenced via Google Fonts)
│   │   └── images/      # Static images
│   ├── experiments/     # Experiment content (markdown files)
│   ├── index.njk        # Homepage
│   ├── experiments.njk  # Gallery page
│   └── about.njk        # About page
├── _site/               # Built output (generated)
├── .eleventy.js         # Eleventy configuration
└── package.json
```

## Theming

The site uses a museum specimen archive theme with:

- **Colors**: Muted earth tones (cream, sage, terracotta)
- **Typography**: Playfair Display (headings), Source Serif Pro (body), Courier Prime (labels)
- **Visual Elements**: Specimen cards, glass slide frames, handwritten annotations

Theme colors are defined in `src/assets/css/main.css` as CSS custom properties.

## Deployment

The site builds to static HTML/CSS in the `_site/` directory. Deploy to any static hosting:

- **GitHub Pages**: Push `_site/` contents to `gh-pages` branch
- **Netlify**: Connect repo, set build command to `npm run build`, publish directory to `_site`
- **Vercel**: Similar to Netlify configuration

## Development

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Run development server with live reload
npm run dev

# Build for production
npm run build

# Clean build output
npm run clean
```

### Code Style

- Nunjucks templates in `_includes/` and `_layouts/`
- Markdown for content files
- CSS uses custom properties for theming
- No build step required for CSS (plain CSS)

## License

MIT License — See LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your experiment to `src/experiments/`
4. Submit a pull request

For major changes, please open an issue first to discuss.
# Bhojraj Kamdi — Finance Portfolio

A professional portfolio for PGDM Finance ’27, focused on Audit & Assurance, Accounting, Financial Analysis, Equity Research, Financial Modelling, Capital Markets, and Investment Operations.

- **Live site:** https://bhojrajkamdi-1473.github.io/portfolio/
- **Project archive:** https://bhojrajkamdi-1473.github.io/portfolio/projects.html
- **LinkedIn:** https://www.linkedin.com/in/bhojrajkamdi
- **Repository:** https://github.com/bhojrajkamdi-1473/portfolio

## Structure

- index.html — primary portfolio, selected case studies, research library, experience, credentials, and industry-exposure section.
- projects.html — project archive.
- about.html, experience.html, certifications.html, contact.html, resume.html — supporting portfolio pages.
- assets/styles.css — global styles, responsive layout, and carousel styling.
- assets/main.js — navigation, interactions, and in-practice slideshow controls.
- assets/in-practice/ — existing event photo galleries.
- assets/bhojraj-kamdi-profile.webp — existing profile image.
- docs/ — project catalogue, source register, audit record, maintenance guide, and changelog.

## Local preview

This is a static website. From the repository root, run:

    python -m http.server 8000

Then open http://localhost:8000/. If Python is unavailable, use another local static server. Opening files directly with file:// may not reproduce all browser behaviours.

## Updating content safely

1. Inspect the relevant HTML and existing styles before editing.
2. Preserve current content, direct report links, IDs, and working interactions.
3. Update project records and category counts consistently across index.html and projects.html.
4. For new carousel photos, add verified event photographs under a descriptive folder in assets/in-practice/, optimise them to WebP where practical, and provide accurate alt text.
5. Use the existing data-ip, .ip-slide, .ip-bar, and data-ip-prev/next/pause structure when adding a photo slideshow. Keep the stage and its control bar within the same wrapper, as the existing JavaScript expects.
6. Validate direct report URLs and access permissions before describing documents as publicly available.
7. Update the project catalogue, source register, audit record, and changelog when relevant.

## Slideshow notes

The in-practice galleries share a JavaScript controller in assets/main.js. It supports autoplay, previous/next controls, slide dots, pause/play, keyboard navigation, and reduced-motion behaviour. Keep the existing control attributes and test all states after modifying slide markup.

The IIM Indore Sustainable Finance entry currently uses an editorial four-slide learning carousel because IIM-specific event photos were not present in the repository inventory during the latest change. These slides are designed learning panels, not documentary event photographs. Replace or supplement them with authentic event photos only when those assets are available and verified.

## Deployment

The public site is hosted on GitHub Pages. Check the repository's current Pages configuration and deployment status before assuming the publishing branch or workflow. A commit alone does not prove that the public site has updated.

## Validation checklist

- Check internal navigation and anchors.
- Check project filter counts and behaviour.
- Check every carousel's previous/next, dots, pause/play, keyboard and responsive states.
- Check direct document links and access permissions.
- Inspect desktop and mobile layouts.
- Review the final Git diff for unintended content removal.
- Record tests actually run in docs/WEBSITE_AUDIT.md.

See docs/MAINTENANCE_GUIDE.md for the detailed maintenance workflow.

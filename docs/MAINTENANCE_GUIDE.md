# Maintenance Guide

## General rule

Preserve the existing website's content, route structure, report links, JavaScript interactions, and responsive design. Review the diff before committing any change.

## Add or update a project

1. Inspect the corresponding project report and identify the actual scope, methods, findings, assumptions, and limitations.
2. Update the appropriate record in index.html and/or projects.html.
3. Keep project IDs and internal anchors unique.
4. Keep the project number consistent between the homepage case study and archive record.
5. Update filter categories and counts when a record is added, removed with approval, or reclassified.
6. Retain existing report links and add direct source links where available.
7. Update docs/PROJECT_CATALOG.md and docs/CONTENT_AND_SOURCE_REGISTER.md.
8. Check filters, anchors, link destinations, and responsive layout.

## Add a direct report link

- Use the exact document URL supplied by the owner.
- Use a descriptive link label.
- Open external links in a new tab with rel="noopener noreferrer" where appropriate.
- Test the link without assuming the owner's signed-in session represents public access.
- If authentication is required, record that restriction.

## Add a photo slideshow

The existing slideshow controller in assets/main.js expects:

- A stage element with data-ip.
- One or more child elements with class .ip-slide.
- The slide stage and its control bar inside a common wrapper.
- A count element with class .ip-count.
- A dot container with class .ip-dots.
- Optional previous, next, and pause controls carrying data-ip-prev, data-ip-next, and data-ip-pause.
- A pause indicator carrying data-ip-paused.

The controller creates dots automatically and handles slide transitions, autoplay, pause/play, keyboard navigation, and reduced motion. Keep the structure consistent with existing galleries.

For each image:

- Use a genuine event photo or approved asset.
- Store it in a descriptive folder under assets/in-practice/.
- Optimise the image for web delivery.
- Specify its intrinsic width and height.
- Add accurate alt text describing the visible content.
- Use lazy loading for non-initial slides where appropriate.
- Do not use generated or unrelated images as if they document an actual event.

The IIM Indore carousel currently uses editorial text panels because no IIM-specific event photographs were found in the repository inventory during the latest code change. Replace them with authentic images only when those files are available.

## Style updates

- Prefer existing CSS variables and components.
- Check existing selectors before adding new overrides.
- Test responsive breakpoints and text wrapping.
- Preserve visible focus states and reduced-motion support.
- Avoid changing shared carousel styles without testing every gallery.

## Local checks

Run a local static server:

    python -m http.server 8000

Review the site at desktop and mobile sizes. Test navigation, project filters, accordions, all slideshow controls, and report links.

## Commit and deployment

- Inspect git status and the complete diff.
- Ensure no unrelated files or secrets are included.
- Run the available checks.
- Commit with a focused message.
- Follow the repository's existing GitHub Pages deployment workflow.
- Verify the published URL after deployment; a commit alone does not prove the site is live.

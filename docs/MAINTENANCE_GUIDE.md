# Maintenance Guide

## General rule

Preserve the existing content, route structure, report URLs, JavaScript hooks and rendered design. Read `docs/DESIGN_SYSTEM.md` before styling anything. Review the complete diff before committing.

The site is static: hand-written HTML, `assets/styles.css` and `assets/main.js`. There is no build step and no framework.

## Add or update a project

1. Inspect the source report and record only what it supports: scope, method, figures, assumptions and limitations.
2. Update the numbered record in `projects.html` and the matching library row or case section in `index.html`.
3. Keep IDs unique and keep the project number consistent across the homepage and archive.
4. Keep the record's `data-cat` aligned with its displayed category.
5. Update the filter counts and the fact strip: 14 records, 5 categories, 8 projects with report links.
6. Keep the archive in inventory order (`p01`–`p14`).
7. Update `docs/PROJECT_CATALOG.md`, `docs/CONTENT_AND_SOURCE_REGISTER.md`, `docs/WEBSITE_AUDIT.md` and `docs/CHANGELOG.md`.
8. Test filters, anchors, links and responsive layout.

If a record is added or removed, update counts on `index.html`, `projects.html`, `about.html` and `resume.html` together, plus the archive fact strip and every filter chip.

## Add a report link

- Use the exact document URL supplied by the owner. Never construct or guess a Drive ID.
- Use a descriptive caption that names the document.
- Open external links in a new tab with `target="_blank" rel="noopener noreferrer"`.
- Do not describe a document as publicly accessible until it has been tested from a signed-out session.
- If a project has no individual document, link to the shared folder only and say so.
- If a document is shared between records, state that caveat on the page (Project 02 / Project 05 does this).

Report links are written directly in the HTML. Search for `report-link` in the page you are editing; do not rely on a JavaScript-generated slot.

## Update the archive

The archive uses one sticky toolbar:

- `.archive-toolbar` contains `.filters`.
- Each chip is a `<button class="fchip" data-filter="…" aria-pressed="…">` with a `.cnt` count.
- Each record is `<article class="record" id="p01" data-cat="research">`.
- Records must remain inside the same `<section>` as the filter chips. `assets/main.js` scopes filtering with `chip.closest("section")`.
- The toolbar sticks below the `84px` masthead. If `--masthead-h` changes, re-test the toolbar and deep-anchor offset.
- On narrow screens, the chip row scrolls horizontally inside the toolbar; do not let it widen the document.

## Accordions and library rows

Accordion markup is:

    <div class="acc-item">
      <button class="acc-btn" data-acc-btn aria-expanded="false">…</button>
      <div class="acc-panel"><div class="acc-panel-inner">…</div></div>
    </div>

Library rows use `.lib-row` with `.lib-head` and optional `.lib-detail`. The controller handles the open state and updates `aria-expanded`. Keep the existing class and data attributes; do not replace the buttons with clickable `div`s.

## Photo slideshows

The controller in `assets/main.js` expects:

- A stage element with `data-ip`.
- One or more child elements with class `.ip-slide`.
- The stage and its control bar inside a common wrapper.
- A count element with class `.ip-count`.
- A dot container with class `.ip-dots`.
- Optional previous, next and pause controls carrying `data-ip-prev`, `data-ip-next` and `data-ip-pause`.
- A pause indicator carrying `data-ip-paused`.

For each image:

- Use a genuine event photo or approved asset.
- Store it in a descriptive folder under `assets/in-practice/`.
- Optimise it for the web.
- Specify intrinsic width and height.
- Add accurate `alt` text describing visible content.
- Use lazy loading for non-initial slides where appropriate.
- Do not present generated or unrelated images as event documentation.

The IIM Indore carousel currently uses editorial text panels because no IIM-specific event photographs were available. Replace them with authentic images only when those files are supplied and verified.

## Style changes

- Reuse the tokens in `:root` and the dark-chapter remapping. Do not add a parallel palette.
- Prefer existing components before adding selectors.
- Keep the editorial hierarchy: serif display, sans body, hairline rules, tabular figures.
- Avoid gradients, glassmorphism, drop-shadow card stacks and decorative icon grids.
- Preserve focus states and reduced-motion behaviour.
- Test every breakpoint after changing shared layout rules: 1440, 1180, 980, 760 and 480 px.
- Bump the `?v=` query when changing `styles.css` or `main.js`, and update all seven pages consistently.

## Accessibility checks

- One `h1` per page; no skipped heading levels.
- Every page keeps `<main id="main" tabindex="-1">` so the skip link transfers focus.
- Skip link must be visible on focus and move focus to `main` when activated.
- Filter buttons keep `aria-pressed`; exactly one chip is pressed at a time.
- Accordion buttons keep `aria-expanded`.
- The mobile menu sets `aria-expanded`, locks body scroll and closes on Escape.
- Images have appropriate `alt` text.
- Test keyboard order and focus visibility, not just mouse behaviour.
- Hold body-text contrast at 4.5:1 or better.

## Local checks

Run a static server from the repository root:

    python -m http.server 8000

Then check:

1. All seven pages load without console errors or failed requests.
2. Every local link and anchor resolves; no duplicate IDs.
3. Archive filters return 14 / 4 / 3 / 3 / 2 / 2.
4. Homepage library filters return the same counts.
5. Accordions, carousel next/previous/autoplay, counters and sticky toolbar work.
6. Deep links clear the masthead and toolbar.
7. Skip link, mobile menu and reduced-motion states behave.
8. No horizontal overflow or broken images at all five widths.
9. External report URLs still match the approved set.

## Commit and deployment

- Inspect `git status` and the complete diff.
- Ensure no unrelated files, temporary screenshots or secrets are included.
- Commit with a focused message.
- Push to `main`.
- GitHub Pages publishes from `main` at the repository root. A successful push is not proof of deployment: check the Pages build and compare the live HTML, CSS and JS.
- Confirm the live page references the expected `styles.css?v=` and `main.js?v=` values.
- Record what was actually verified in `docs/WEBSITE_AUDIT.md`.

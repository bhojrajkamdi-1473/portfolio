# Bhojraj Kamdi — Finance Portfolio

A premium editorial portfolio for a PGDM Finance '27 candidate, focused on audit and accounts, financial analysis, equity research, financial modelling, capital markets and banking. The site is a static, dependency-free build: hand-written HTML, one stylesheet and one interaction script.

- **Live site:** https://bhojrajkamdi-1473.github.io/portfolio/
- **Project archive:** https://bhojrajkamdi-1473.github.io/portfolio/projects.html
- **LinkedIn:** https://www.linkedin.com/in/bhojrajkamdi
- **Repository:** https://github.com/bhojrajkamdi-1473/portfolio

## Structure

- `index.html` — homepage: selected work, Semester 3 records, filterable research library, experience, credentials, biography, in-practice galleries and contact routes.
- `projects.html` — complete archive of 14 numbered records, with a sticky filter bar and five Semester 3 course documents listed separately.
- `about.html`, `experience.html`, `certifications.html`, `contact.html`, `resume.html` — supporting pages.
- `assets/styles.css` — the complete design system, responsive layout and component styles.
- `assets/main.js` — navigation, filters, accordions, counters, carousel controls and reveal behaviour.
- `assets/in-practice/` — existing event and programme imagery.
- `assets/bhojraj-kamdi-profile.webp` — profile image.
- `docs/` — project catalogue, source register, audit record, design system, maintenance guide and changelog.

## Content model

The archive contains **14 unique records** in five categories:

| Category | Records |
|---|---:|
| Research | 4 |
| Audit & Accounting | 3 |
| Financial Analysis | 3 |
| Capital Markets | 2 |
| Banking | 2 |

Records 01–08 carry direct report or source links (Project 01 has three documents and Project 02 reuses the Project 05 course file, with the caveat stated on the page). Records 10–14 link to the Semester 3 Drive folder because no individual public report link exists for those submissions. Project 09 is independent personal research, not employment.

Five Semester 3 course documents are listed separately and are not counted as additional projects. Participation in the IIM Indore Sustainable Finance programme is separated from certification.

## Design system

The visual language is a restrained finance-editorial system: warm paper, ink and bronze; Newsreader for display type, Geist for interface and body copy; hairline rules, tabular numerals and asymmetric page composition. The full token set and component rules are in `docs/DESIGN_SYSTEM.md`.

Do not reintroduce gradients, glassmorphism, card grids or decorative chrome. Preserve the existing tokens and component classes when editing.

## Local preview

From the repository root:

    python -m http.server 8000

Then open http://localhost:8000/. Opening `index.html` directly with `file://` may not reproduce all browser behaviour.

## Updating content safely

1. Inspect the relevant page and existing component styles before editing.
2. Preserve content, report URLs, page IDs and the JavaScript hooks listed in `docs/MAINTENANCE_GUIDE.md`.
3. Keep the project count, category counts and fact strips consistent across `index.html`, `projects.html`, `about.html` and `resume.html`.
4. Keep internship, independent practice, course work, participation and certification distinct. Label hypothetical audit work as hypothetical.
5. Never invent a Drive ID, report finding, credential, metric or client detail.
6. Update `docs/PROJECT_CATALOG.md`, `docs/CONTENT_AND_SOURCE_REGISTER.md`, `docs/WEBSITE_AUDIT.md` and `docs/CHANGELOG.md` when content changes.
7. Validate links, filters, accordions, carousels and responsive layout before committing.

## Validation

The current build has been checked in rendered Chrome via Playwright at 1440, 1180, 980, 760 and 480 px:

- 35 page/width runs, zero horizontal overflow, zero broken images and zero console errors. No site resource failed; the test environment's ad-block agent issued one aborted probe per page to `filtering.adblock360.com`, which the site does not reference.
- 26 interaction checks passed: archive and homepage filters return the exact category counts, accordions open and close, counters settle, the featured carousel advances and autoplays, the archive toolbar sticks correctly, deep anchors clear the sticky chrome, the skip link is visible and focuses `main`, the mobile menu locks scroll and closes on Escape, and reduced motion shows all content.
- 172 internal references and 93 element IDs checked with no missing targets or duplicates.
- The 26 unique external non-font URLs match the pre-redesign baseline exactly; font URLs are unchanged apart from HTML entity normalisation.

These are automated rendered checks, not a substitute for a final human visual review or proof that third-party Google Drive documents are publicly accessible.

## Known limitations

- Google Drive document access has not been verified from a signed-out session. Owner-session access is not evidence of public access.
- The five Semester 3 course documents have not been independently read for this build; only their supplied URLs and titles are presented.
- Records 10–14 do not have individual published report links. Their Drive folder link is retained without implying a per-project document.
- Figures in the case studies are report-specific and assumption-dependent. They are not current market data or investment advice.
- The government-defence audit record is a hypothetical case study, not a real engagement or finding.

## Deployment

The site is published by GitHub Pages from `main` at the repository root (legacy branch build). A commit alone does not prove the public site has updated: check the Pages build status and compare the live HTML, CSS and JavaScript against the commit.

## Validation checklist

- Check internal navigation, anchors and duplicate IDs.
- Check archive and library filter counts and empty states.
- Check every carousel's previous/next, autoplay, dots, pause/play, keyboard and reduced-motion states.
- Check direct document links and access permissions.
- Inspect desktop, tablet and mobile layouts.
- Review the final diff for unintended content removal.
- Record tests actually run in `docs/WEBSITE_AUDIT.md`.

See `docs/MAINTENANCE_GUIDE.md` for the detailed workflow.

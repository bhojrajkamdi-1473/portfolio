# Website Audit and Change Verification

## Scope

Repository: [bhojrajkamdi-1473/portfolio](https://github.com/bhojrajkamdi-1473/portfolio)

Live site: https://bhojrajkamdi-1473.github.io/portfolio/

Audit date: 23 October 2026

This is a rendered-browser and source-level audit of the finance-editorial redesign. It records what was actually tested and separates automated checks from human visual sign-off and third-party access verification.

## Change summary

The portfolio was rebuilt as a restrained finance-editorial publication rather than a card-based template:

- Warm paper, ink, stone and bronze palette; Newsreader display type with Geist for interface and body copy; tabular numerals, hairline rules and asymmetric composition.
- Seven pages rebuilt on one design system: homepage, project archive, about, experience, certifications, contact and resume.
- A canonical 14-record archive in five categories: Research 4, Audit & Accounting 3, Financial Analysis 3, Capital Markets 2, Banking 2.
- One sticky archive filter bar with counts, replacing the earlier duplicate filter sets.
- Explicit project records: question, method, reported figures, limitation and source link. Hypothetical audit work is labelled hypothetical; class exercises are labelled as such.
- Five Semester 3 course documents listed separately from the numbered records.
- No fabricated contact form; contact is by email and LinkedIn. No invented Drive IDs, client data, credentials or metrics.
- All pre-existing report URLs and profile/certificate links were retained.

## Content corrections

- “Nine projects” references on the about and resume pages were corrected to fourteen, matching the archive.
- The contradictory experience note that implied no listed experience was removed.
- Duplicate project filters were removed in favour of one canonical archive toolbar.
- Internship research, independent research, academic work, programme participation and certification are now visibly distinct.
- Project 02 continues to point to the same submitted course file as Project 05, with the shared-file caveat stated on the page.
- Records 10–14 use the Semester 3 Drive folder link only; no individual report link is invented.
- The archive fact strip describes 14 records, 5 categories and 8 projects with report links, not ambiguous “research areas” or employee-style “direct reports”.

## Design and source changes

- `assets/styles.css` — complete v5 design system and responsive rules.
- All seven HTML pages — rebuilt structure and content; shared masthead, footer, skip link, metadata and versioned asset references.
- `assets/main.js` — unchanged interaction controller. All existing hooks were preserved: `.rv`, `#topbar`, `#navToggle`, `#mobileMenu`, `[data-counter]`, `[data-ip]`, `.acc-item`, `.acc-btn`, `.lib-row`, `[data-filter]`, `[data-cat]`, `#year`.
- `main` elements now carry `tabindex="-1"` so the skip link moves keyboard focus to page content, not just the scroll position.
- Asset references use `assets/styles.css?v=5` and `assets/main.js?v=2`.

## Verification performed

### Rendered layout

Playwright with installed Chrome, 7 pages × 5 viewport widths (1440, 1180, 980, 760, 480 px), 35 runs:

- Zero horizontal document overflow.
- Zero broken images.
- Zero console errors and zero page errors.
- Zero failed site resources. One aborted request per page went to `filtering.adblock360.com`, an environment ad-block probe not referenced by the site.
- No rail/body overlap in archive records.
- Filter chips on narrow screens sit inside their intentional horizontal scroll container; the page itself does not overflow.

### Interaction

26 checks passed:

- Archive filters All 14 / Research 4 / Audit 3 / Financial Analysis 3 / Capital Markets 2 / Banking 2, with exactly one pressed chip.
- Homepage library filters return the same counts.
- Library and featured-case accordions open and close with correct `aria-expanded` state.
- Counters settle at 3,000+, 1,000+ and 100K+.
- Featured carousel next control advances 01/03 → 02/03; autoplay advances to 03/03.
- Archive toolbar remains sticky at 84 px beneath the 85 px masthead.
- Deep link to `#p09` clears the sticky chrome after smooth scrolling settles.
- Skip link is visible on focus at desktop and 480 px, and activating it focuses `main`.
- Mobile menu opens, locks body scroll, exposes `aria-expanded="true"` and closes on Escape.
- Reduced-motion mode shows all 45 reveal elements on the homepage and does not autoplay the carousel.

### Link and structure integrity

- 172 internal `href` references checked; no missing files or anchors.
- 93 element IDs checked; no duplicates.
- 26 unique external non-font URLs match the pre-redesign baseline exactly. The three font URLs are unchanged apart from HTML entity normalisation.
- All external links that open in a new tab use `rel="noopener noreferrer"`.
- Every page has one `h1`, a title, a meta description and valid local stylesheet/script references.

## Limitations

- Google Drive access has not been verified from a signed-out session. Owner-session access does not prove public access.
- The five Semester 3 course documents have not been independently read; only supplied URLs and titles are presented.
- No individual public report links exist for records 10–14; the Drive folder is used without implying per-project documents.
- Automated layout and interaction checks are not a human aesthetic sign-off. The owner should review the rendered pages once before treating the visual design as final.
- Case-study figures are report-dated and assumption-dependent; they are not current market data or investment advice.
- The government-defence audit record is hypothetical.

## Deployment verification

Recorded after the GitHub Pages build following the redesign commit.

- Commit: `b0f5186` (`Finance-editorial redesign: 14-record archive, unified filters, all pages rebuilt, docs updated`).
- Latest build commit: `085b89e` (docs-only update of this audit after verification). Site HTML and assets are unchanged from `b0f5186`.
- Pages build status: `built`, updated 23 October 2026 11:03:13 UTC for the redesign and again after the docs commit.
- Live URL: https://bhojrajkamdi-1473.github.io/portfolio/
- Live HTML title: `Bhojraj Kamdi - Finance Portfolio | Audit & Assurance, Financial Analysis, Equity Research`.
- Live asset references: `assets/styles.css?v=6`, `assets/main.js?v=3`, matching the repository.
- Live CSS contains the design token `--paper: #F5F2EB`.
- Live archive has 14 records, five filter chips with counts 14 / 4 / 3 / 3 / 2 / 2, and fact labels 14 Records, 05 Categories, 08 Report-linked projects.
- Live pages returned HTTP 200 and the build completed without errors.

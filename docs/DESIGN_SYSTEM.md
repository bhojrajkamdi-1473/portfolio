# Design System

The portfolio uses an **institutional research ledger** visual language: warm paper, charcoal ink, restrained bronze, editorial serif display type, hairline rules and tabular figures. It should read like a carefully set research publication, not a SaaS landing page.

Implementation: `assets/styles.css` (v5). Do not add a second design system or override these tokens with one-off colours.

## 1. Palette

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F5F2EB` | Default page surface |
| `--paper-deep` | `#EFEBE1` | Quiet alternate surface |
| `--stone` | `#E8E3D9` | Secondary blocks, tables |
| `--stone-deep` | `#DED7C9` | Stronger dividers and fills |
| `--ink` | `#20211F` | Primary text |
| `--ink-soft` | `#3D3E39` | Secondary text |
| `--ink-mute` | `#6B6A61` | Metadata, captions |
| `--ink-faint` | `#8A887D` | Tertiary labels |
| `--dark` | `#191A18` | Dark chapters and footer |
| `--dark-soft` | `#232420` | Raised dark surface |
| `--bronze` | `#A87949` | Accent, rules, active states |
| `--bronze-deep` | `#8A6136` | Hover and emphasis |
| `--bronze-pale` | `#C9A97F` | Accent on dark |
| `--ivory` | `#F5F2EB` | Text on dark |

Derived rules use `--rule`, `--rule-soft`, `--rule-strong`, `--bronze-rule` and `--bronze-wash` so light and dark chapters stay coherent. Dark chapters remap these variables rather than hard-coding new colours.

**Rules:** no gradients, glassmorphism, neon glows, coloured card borders or stock-photo hero collages. Bronze is an accent, not a background wash.

## 2. Typography

- **Display and headings:** `Newsreader`, fallback Iowan Old Style / Georgia / Times New Roman.
- **Interface and body:** `Geist`, fallback Inter / system UI.
- **Figures:** `.tnum` / tabular numerals for counters, tables and financial values.

| Token | Size |
|---|---|
| `--fs-display` | `clamp(3.9rem, 9.4vw, 8.6rem)` |
| `--fs-h1` | `clamp(2.7rem, 5.4vw, 5.1rem)` |
| `--fs-h2` | `clamp(2.05rem, 3.5vw, 3.45rem)` |
| `--fs-h3` | `clamp(1.4rem, 1.9vw, 1.85rem)` |
| `--fs-h4` | `clamp(1.08rem, 1.25vw, 1.22rem)` |
| `--fs-lead` | `clamp(1.06rem, 1.28vw, 1.24rem)` |
| `--fs-body` | `1.0625rem` |
| `--fs-small` | `0.9375rem` |
| `--fs-meta` | `0.72rem` |

Use serif for display and record titles; sans for navigation, labels, body and metadata. Keep letter-spacing close to the token defaults; do not add wide tracking to body copy.

## 3. Spacing and layout

- Spacing scale: `--sp-1` (4px) through `--sp-12` (104px).
- Container: `1320px`; narrow measure: `880px`.
- Gutter: `clamp(20px, 4.4vw, 60px)`.
- Section padding: `clamp(66px, 8.4vw, 124px)`.
- Masthead height: `84px`; sticky archive toolbar offsets from it.
- Breakpoints in use: 1180, 980, 760 and 480 px.

Composition is asymmetric rather than card-grid symmetric: numbered section labels, a narrow label column beside a wider content column, records split into a rail and a body, and plates that sit alongside narrative. Preserve the point of view when editing; do not flatten everything into equal cards.

## 4. Core components

### Masthead and navigation
`.masthead`, `.wordmark`, `.nav`, `#navToggle`, `#mobileMenu`. Desktop navigation collapses to the menu button at the mobile breakpoint. The mobile menu traps the page with `body` scroll lock and closes on Escape.

### Skip link
`.skip-link` is fixed off-screen until focused. Each page's `<main id="main" tabindex="-1">` receives focus when the link is activated.

### Section header
`.sec-head` with `.sec-label`, `.sec-num`, `.sec-title`, `.sec-lead`. Number labels are part of the editorial structure; keep them sequential where a page uses them.

### Records
`.record` with `.record-rail` (number, category, status pill), `.record-body`, `.record-kicker`, `.record-title`, `.record-question`, `.record-fields`, `.field`, `.note`. Records are separated by hairlines, not boxed cards.

### Plates and figures
`.plate`, `.plate-head`, `.plate-figures`, `.fig`, `.steps`, `.matrix`, `.range` / `.range-fill`. Plates present report figures or a method at a glance. Every figure must trace to a report or an explicitly labelled scenario; state the basis in the caption or limitation.

### Report links
`.report-links`, `.report-row`, `.report-cap`, `.report-link`. External document links open in a new tab with `rel="noopener noreferrer"`. Never invent a Drive ID or imply access that has not been verified.

### Filters
`.archive-toolbar`, `.filters`, `.fchip`, `.cnt`. One canonical filter group per section. Chips use `aria-pressed`; counts must match the visible record inventory. On narrow screens the chip row scrolls horizontally inside the toolbar rather than expanding the page.

### Accordions
`.acc`, `.acc-item`, `.acc-btn`, `.acc-panel`, `.plus`. Trigger state is carried by `aria-expanded`; the panel expands via grid rows. Interaction is handled by `assets/main.js`.

### Library rows
`.lib-row`, `.lib-head`, `.lib-detail`. Rows link to the full record or expand in place. Filtering uses `hidden`; keep rows, chips and records in the same section so the script's `closest("section")` scope continues to work.

## 5. Motion

- Easing: `--ease` `cubic-bezier(0.22, 1, 0.36, 1)`.
- Durations: `--t-fast` 160ms, `--t-med` 300ms, `--t-slow` 640ms.
- `.rv` reveal elements start slightly displaced and fade in via IntersectionObserver.
- Carousels autoplay only when appropriate and respect `prefers-reduced-motion: reduce`.
- Under reduced motion, all content is visible immediately and autoplay is disabled.

Never hide content behind an animation that requires JavaScript to become readable. The `<noscript>` block already forces reveal content visible.

## 6. Accessibility

- Maintain one `h1` per page and a logical heading order.
- Keep visible focus styles. Do not remove outlines without an equivalent.
- Every page has a skip link and `main[tabindex="-1"]`.
- Filter buttons expose `aria-pressed`; the toolbar has a group label.
- Accordion buttons expose `aria-expanded`.
- Mobile menu exposes `aria-expanded` and closes on Escape.
- Images require accurate `alt` text; decorative images use `alt=""`.
- Maintain at least 4.5:1 contrast for body text. Bronze on paper is for accents and large text, not small body copy.
- Do not rely on colour alone to distinguish category or status; labels remain textual.

## 7. Content rules

- The archive has 14 unique records: Research 4, Audit & Accounting 3, Financial Analysis 3, Capital Markets 2, Banking 2.
- Eight projects (01–08) have report links. Project 01 has three documents. Project 02 shares the Project 05 course file; the caveat must remain visible.
- Projects 10–14 link to the shared Semester 3 Drive folder, not individual documents.
- Five Semester 3 course documents are listed separately and are not additional records.
- Distinguish internship, independent practice, academic work, programme participation and certification.
- Label hypothetical audit work and assumed figures explicitly.
- Keep report figures report-dated and do not present them as current market data or advice.

## 8. Editing checklist

1. Reuse tokens and existing components before adding CSS.
2. Check the change at 1440, 1180, 980, 760 and 480 px.
3. Verify no horizontal overflow, broken images, console errors or failed requests.
4. Test keyboard focus, the skip link, filters, accordions and carousels.
5. Update counts in `index.html`, `projects.html`, `about.html`, `resume.html` and the docs together.
6. Bump `?v=` on `styles.css` or `main.js` only when the file changes, so returning visitors receive the new asset.

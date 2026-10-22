# Website Audit and Change Verification

## Scope

Repository: [bhojrajkamdi-1473/portfolio](https://github.com/bhojrajkamdi-1473/portfolio)  
Live site: https://bhojrajkamdi-1473.github.io/portfolio/

This is a code-level audit record for the current implementation pass. It does not claim a full visual, accessibility, or external-link audit has been completed.

## Findings addressed

### IIM Indore slideshow consistency

- The IIM Indore Sustainable Finance programme was previously displayed as a static wide card, unlike the other entries in the “Industry exposure & communication” section.
- Converted it to a four-slide editorial learning carousel.
- Reused the existing data-ip slideshow controller and its previous/next, pagination-dot, pause/play, autoplay, and keyboard interaction hooks.
- Added dedicated styling that follows the site's dark editorial and bronze-accent visual language.
- Preserved the original programme description, learning takeaways, attendance classification, and LinkedIn source link.
- The four slides cover the programme, ESG integration in investment decisions, green bonds/yield curves, and ESG impact measurement/BRSR.

**Important visual evidence limitation:** no IIM-specific event photographs were present in the repository's existing assets/in-practice inventory. The current slides are designed editorial learning panels, not photographs of the event. Authentic photos can be added when supplied and verified.

### Project numbering

- Aligned the five featured Semester 3 case-study badges with project archive numbering 10–14: SizeRight, Bata India, NTPC, Page Industries, and the hypothetical government-defence audit case.

### Documentation

- Added the repository README and five files under docs/ to document the project catalogue, source register, audit status, maintenance workflow, and changes.

## Source-level checks performed

- Inspected the existing homepage's in-practice markup and existing carousel implementation in assets/main.js.
- Confirmed the slideshow controller selects .ip-slide elements inside [data-ip] and creates slide dots from the slide count.
- Preserved the existing control attributes expected by the controller.
- Confirmed the IIM entry retains the LinkedIn post URL.
- Updated the homepage's five Semester 3 case-study number badges to 10–14.
- Existing project archive and other event galleries were not intentionally modified by the IIM carousel change.

## Checks not yet independently verified

The following checks must not be described as passed until performed in an actual browser or suitable test environment:

- Visual rendering at desktop, tablet, and mobile sizes.
- Actual autoplay and manual-control behaviour on the published site.
- Browser console errors.
- Automated HTML validation.
- Automated accessibility testing.
- External Google Docs public accessibility.
- Live GitHub Pages publication of the newest commits.
- Full regression comparison of every project, interaction, and link.

## Remaining priority actions

1. Add authentic IIM Indore event photos if they are available; convert them to optimised web formats and use accurate alt text.
2. Inspect the five individual Google Docs and map their contents to portfolio projects.
3. Run a rendered-browser check of the IIM slideshow and all other carousels.
4. Complete internal/external link checks and confirm category counts against visible records.
5. Compare the complete final repository diff with a pre-change baseline.

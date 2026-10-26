# Portfolio: Bhojraj Kamdi (Living Research Portfolio)

Full spec: docs/MASTER_PROMPT.md. Read the relevant sections before each phase.

## Hard rules
1. Priority: factual integrity > functionality/accessibility > usability/responsive > performance > visual effects.
2. Work in existing files. Never reset, force-push, or overwrite the working tree.
3. Before the first edit: run `git status`, create branch `redesign/living-research`, and commit any pre-existing changes separately.
4. Never fabricate data, links, credentials, findings, or chart values. Never alter a figure.
   Preserve exactly: ₹20.05 Cr to ₹100.26 Cr, EPS ₹0.92 to ₹0.14, -84.8%, 3,000+ transactions, 1,000+ ledgers.
5. All 14 records (01–14), all sections, anchors, URLs, and honesty labels
   (Academic, Simulation, Participation, Not employment, Report not linked, Hypothetical, not investment advice) stay intact.
6. Conflicting source info goes in DISCREPANCIES.md; keep the original.
7. No new dependencies without an entry in DECISIONS.md (benefit, size, a11y, maintenance).
8. No AI/live-data claims, chatbot, API keys, or third-party services.
9. Use native CSS (scroll-driven animations, popover) only inside @supports with fallbacks, and honour prefers-reduced-motion.
10. Report results as Measured / Assumed / Unverified. Never claim a test you did not run.
11. Stop and ask only for: conflicting facts, unverifiable URLs, missing assets, or anything requiring invented content.

## Tooling
- Dev server: http://127.0.0.1:8173/index.html (start it if it isn't running).
- Use the `playwright` MCP to inspect the rendered site, not just the source.
- Integrity scripts: tools/extract-baseline.mjs, tools/verify-integrity.mjs (create in phase 1).

## Phase gates
Do not start phase N+1 until phase N's gate passes. Commit after each phase.

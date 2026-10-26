---
description: Phase 1 - audit, baseline, integrity tooling
---
Read AGENTS.md and docs/MASTER_PROMPT.md sections 0, 2, 3, 13.
Do not edit any site file yet.
1. Run git status; create the branch; commit pre-existing changes separately.
2. Inventory pages, 14 record anchors, assets, external URLs, and interactions.
3. Use Playwright to capture baseline screenshots at 1920, 1536, 1366, 1280, 1024, 768, 390, 360, 320 widths into baseline/.
4. Diagnose the portrait root cause (natural size, rendered box, margins, transforms, parent grid, crop) with measurements.
5. Write tools/extract-baseline.mjs and tools/verify-integrity.mjs; generate baseline/content.json.
6. Write AUDIT.md, DISCREPANCIES.md, LINKS.md (URL inventory only; verification comes later).
Gate: AUDIT.md lists root causes; baseline content.json exists. Commit.

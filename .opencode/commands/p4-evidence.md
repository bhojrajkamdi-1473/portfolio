---
description: Phase 4 - data registry, 14-record archive, filters, charts
---
Read docs/MASTER_PROMPT.md sections 7, 8, 9.
1. Move the 14 records and figures into data/records.json; render from it.
2. Build the ledger, filters, search, aria-live count, shareable hash state, and empty state.
3. Add only charts supported by verified data, each with a text or table equivalent.
4. Verify every external link per the protocol in section 9 and fill in LINKS.md.
Gate: node tools/verify-integrity.mjs passes with zero unexplained diffs; all 14 anchors resolve. Commit.

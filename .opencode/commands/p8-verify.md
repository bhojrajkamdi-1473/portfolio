---
description: Phase 8 - adversarial verification and final report
---
Read docs/MASTER_PROMPT.md sections 17-20.
Try to break the site: JS disabled, reduced motion, keyboard only, throttled network, 320px, 200% zoom, blocked images, rapid filter clicks, console errors.
Run node tools/verify-integrity.mjs and git diff --stat against the baseline branch point.
Fix every verified issue and re-test the affected areas.
Produce the final report in the section 20 format, separating Completed, Measured, Assumed, and Unresolved. State any tool you could not run.

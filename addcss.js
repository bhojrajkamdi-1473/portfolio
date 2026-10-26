const fs = require('fs');
const path = 'C:/Users/hp/OpenWork Chat/portfolio/assets/styles.css';
const s = fs.readFileSync(path).toString('utf16le');
let out = s;
if (!out.includes('.index-table .idx-actions')) {
  const add = "\n/* Index table actions */\n.index-table .idx-actions{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;}\n.index-table .idx-detail{color:var(--ink);border-bottom:1px solid var(--rule-strong);}\n.index-table .idx-detail:hover{color:var(--bronze-text);border-bottom-color:var(--bronze);}\n.index-table .idx-report,.index-table .idx-folder{color:var(--bronze-text);border-bottom:1px solid var(--bronze-rule);font-size:0.875rem;}\n.index-table .idx-report:hover,.index-table .idx-folder:hover{border-bottom-color:var(--bronze);}\n.index-table .idx-record{max-width:420px;}\n.index-table .idx-title{display:inline-block;font-weight:550;color:var(--ink);}\n.index-table .idx-title:hover{color:var(--bronze-text);}\n.index-table .idx-sub{display:block;margin-top:2px;font-size:0.8125rem;color:var(--ink-mute);}\n.index-table .idx-finding{color:var(--ink);max-width:520px;}\n.index-table .status-chip{display:inline-flex;align-items:center;padding:3px 10px;border-radius:999px;font-size:0.75rem;letter-spacing:0.02em;text-transform:uppercase;border:1px solid var(--rule-strong);}\n.index-table .status-chip--linked{color:var(--bronze-text);}\n.index-table .status-chip--none{color:var(--ink-mute);}\n";
  if (out.includes('.fact-row')) out = out.replace('.fact-row', add + '\n.fact-row');
  else out += add;
}
if (!out.includes('.report-link--quiet')) {
  const add2 = "\n/* Report link variants */\n.report-link--quiet{color:var(--ink-mute);}\n.report-link--quiet:hover{color:var(--bronze-text);border-bottom-color:var(--bronze);}\n.report-pending{color:var(--ink-mute);font-size:0.9rem;}\n";
  out += add2;
}
fs.writeFileSync(path, Buffer.from('\ufeff' + out, 'utf16le'));
console.log('done');
